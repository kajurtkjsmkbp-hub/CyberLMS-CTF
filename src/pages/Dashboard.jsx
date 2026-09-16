import React, { useState, useEffect } from 'react';
import { ShieldAlert, TerminalSquare, Activity, Target, ShieldCheck, Trophy, Crown, Medal, User, Award, Users } from 'lucide-react';
import { getAllStudentsProgress, getStudentStats, getTeams, getTeamStats, assignStudentToTeam, createTeam } from '../utils/db';

const Dashboard = ({ user }) => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [stats, setStats] = useState({ totalPoints: 0, solveCount: 0, firstBloodCount: 0, badges: [] });
  const [teams, setTeams] = useState([]);
  const [teamStats, setTeamStats] = useState([]);

  const [newTeamName, setNewTeamName] = useState('');

  useEffect(() => {
    const loadData = () => {
      const students = getAllStudentsProgress();
      students.sort((a, b) => b.stats.totalPoints - a.stats.totalPoints);
      setLeaderboard(students);
      
      const myStats = getStudentStats(user.id);
      setStats(myStats);

      setTeams(getTeams());
      const tStats = getTeamStats();
      tStats.sort((a, b) => b.score - a.score);
      setTeamStats(tStats);
    };

    loadData();
    const interval = setInterval(loadData, 5000);
    return () => clearInterval(interval);
  }, [user.id]);

  const myRank = leaderboard.findIndex(s => s.id === user.id) + 1;
  const myTeam = teamStats.find(t => t.id === user.teamId);

  const handleCreateTeam = (e) => {
    e.preventDefault();
    if (newTeamName.trim() === '') return;
    createTeam(newTeamName);
    setNewTeamName('');
    const latestTeams = getTeams();
    setTeams(latestTeams);
  };

  const handleJoinTeam = (teamId) => {
    assignStudentToTeam(user.id, teamId);
    window.location.reload(); // Quick refresh to update session
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      
      {/* HERO BANNER */}
      <div className="bg-gradient-to-r from-cyber-primary/20 via-cyber-dark to-gray-900 border border-cyber-primary/30 rounded-2xl p-6 sm:p-8 mb-8 flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 opacity-10">
          <TerminalSquare size={200} className="text-cyber-primary animate-pulse" />
        </div>
        
        <div className="relative z-10 flex items-center mb-6 md:mb-0">
          <div className="bg-cyber-dark border-2 border-cyber-primary p-4 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.5)]">
            <User size={48} className="text-cyber-neon" />
          </div>
          <div className="ml-6">
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-wide">WELCOME, <span className="text-cyber-neon uppercase">{user.name}</span></h1>
            <p className="text-gray-400 mt-1 font-mono">ID: {user.username} | Role: Security Analyst</p>
            
            {myTeam && (
              <div className="mt-2 inline-flex items-center px-3 py-1 bg-purple-900/40 border border-purple-500/50 rounded-md">
                <Users size={16} className="text-purple-400 mr-2" />
                <span className="text-purple-300 font-bold text-sm">Tim: {myTeam.name}</span>
              </div>
            )}
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center bg-gray-900/80 border border-gray-700 p-4 sm:p-6 rounded-xl min-w-[200px]">
          <span className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-1">Rank Global</span>
          <div className="flex items-center justify-center">
            {myRank === 1 ? <Trophy size={36} className="text-yellow-500 mr-3 animate-bounce" /> :
             myRank === 2 ? <Medal size={36} className="text-gray-300 mr-3" /> :
             myRank === 3 ? <Medal size={36} className="text-amber-600 mr-3" /> :
             <Crown size={32} className="text-cyber-primary mr-3 opacity-50" />}
            <span className="text-4xl sm:text-5xl font-black text-white">{myRank > 0 ? `#${myRank}` : '-'}</span>
          </div>
        </div>
      </div>

      {/* BADGES & ACHIEVEMENTS */}
      {stats.badges.length > 0 && (
        <div className="mb-8 bg-cyber-dark/50 border border-gray-800 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-gray-200 mb-4 flex items-center">
            <Award className="text-yellow-500 mr-2" size={24} /> Pencapaian (Badges)
          </h2>
          <div className="flex flex-wrap gap-4">
            {stats.badges.map(b => (
              <div key={b} className="bg-gradient-to-br from-yellow-900/40 to-yellow-600/10 border border-yellow-600/30 px-4 py-2 rounded-xl shadow-[0_0_10px_rgba(202,138,4,0.15)] flex items-center">
                <span className="font-black text-yellow-500 tracking-wide">{b}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* KIRI: STATS & TEAMS */}
        <div className="lg:col-span-2 space-y-8">
          {/* STATS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-cyber-dark border border-gray-800 p-6 rounded-2xl shadow-lg hover:border-cyber-primary transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-400 font-bold text-sm tracking-wider uppercase">Misi Selesai</h3>
                <Target className="text-cyber-neon" size={24} />
              </div>
              <p className="text-4xl font-black text-white">{stats.solveCount}</p>
            </div>
            
            <div className="bg-cyber-dark border border-gray-800 p-6 rounded-2xl shadow-lg hover:border-cyber-success transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-400 font-bold text-sm tracking-wider uppercase">First Blood 🩸</h3>
                <ShieldCheck className="text-cyber-success" size={24} />
              </div>
              <p className="text-4xl font-black text-white">{stats.firstBloodCount}</p>
            </div>

            <div className="bg-cyber-dark border border-gray-800 p-6 rounded-2xl shadow-lg hover:border-cyber-warning transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-400 font-bold text-sm tracking-wider uppercase">Total Poin</h3>
                <Activity className="text-cyber-warning" size={24} />
              </div>
              <p className="text-4xl font-black text-white font-mono">{stats.totalPoints}</p>
              <p className="text-xs text-gray-500 mt-2">Dihitung otomatis (Dynamic Scoring)</p>
            </div>
          </div>

          {/* TEAM MANAGEMENT */}
          <div className="bg-cyber-dark border border-gray-800 rounded-2xl overflow-hidden shadow-lg">
            <div className="bg-gray-900/50 p-6 border-b border-gray-800 flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-200 flex items-center">
                <Users className="text-purple-500 mr-3" size={24} /> Squad / Tim
              </h2>
            </div>
            <div className="p-6">
              {!myTeam ? (
                <div className="space-y-6">
                  <p className="text-gray-400">Anda belum bergabung dengan tim manapun. Buat tim baru atau gabung ke tim yang sudah ada.</p>
                  
                  <form onSubmit={handleCreateTeam} className="flex gap-4">
                    <input 
                      type="text" 
                      value={newTeamName}
                      onChange={e => setNewTeamName(e.target.value)}
                      placeholder="Nama Tim Baru..." 
                      className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 flex-1 text-white focus:outline-none focus:border-purple-500"
                    />
                    <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-6 py-2 rounded-lg transition-colors">Buat Tim</button>
                  </form>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    {teams.map(t => (
                      <div key={t.id} className="border border-gray-800 p-4 rounded-xl flex justify-between items-center bg-gray-900/30">
                        <span className="font-bold text-gray-300">{t.name}</span>
                        <button onClick={() => handleJoinTeam(t.id)} className="text-sm bg-gray-800 hover:bg-gray-700 px-3 py-1.5 rounded font-bold transition-colors">Gabung</button>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <h3 className="text-2xl font-black text-purple-400 mb-2">{myTeam.name}</h3>
                  <div className="mb-4">
                    <p className="text-gray-400 text-sm mb-2">Anggota Tim ({myTeam.members?.length || 0}):</p>
                    <div className="flex flex-wrap gap-2">
                      {myTeam.members?.map(m => (
                        <span key={m} className="bg-purple-900/40 border border-purple-500/50 text-purple-300 px-3 py-1 rounded-full text-sm font-bold flex items-center">
                          <User size={14} className="mr-1" /> {m}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-800">
                    <h4 className="font-bold text-gray-300 mb-2">Team Leaderboard</h4>
                    {teamStats.map((ts, i) => (
                      <div key={ts.id} className={`flex justify-between items-center py-2 border-b border-gray-800/50 last:border-0 ${ts.id === myTeam.id ? 'bg-purple-900/20 px-2 rounded -mx-2' : ''}`}>
                        <span className="text-gray-400 font-bold">#{i+1} {ts.name}</span>
                        <span className="text-cyber-neon font-mono font-bold">{ts.score} pts</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* KANAN: GLOBAL LEADERBOARD */}
        <div className="bg-cyber-dark/80 border border-gray-800 rounded-2xl flex flex-col h-[700px] shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          <div className="p-6 border-b border-gray-800 bg-gray-900/50">
            <h2 className="text-xl font-bold text-gray-200 flex items-center uppercase tracking-widest">
              <Trophy className="text-yellow-500 mr-3" size={24} />
              Global Top Hackers
            </h2>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 custom-scrollbar space-y-3">
            {leaderboard.map((student, index) => (
              <div 
                key={student.id} 
                className={`flex items-center justify-between p-4 rounded-xl border transition-all ${
                  student.id === user.id 
                    ? 'bg-cyber-primary/10 border-cyber-primary shadow-[0_0_15px_rgba(6,182,212,0.2)]' 
                    : 'bg-gray-900/60 border-gray-800'
                }`}
              >
                <div className="flex items-center space-x-4 min-w-0">
                  <div className="flex-shrink-0 w-8 font-black text-gray-500">
                    #{index + 1}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className={`font-bold truncate ${student.id === user.id ? 'text-cyber-neon' : 'text-gray-200'}`}>
                      {student.name}
                    </h3>
                    <div className="text-xs text-gray-500 truncate mt-0.5">
                      @{student.username} {student.badges?.includes('First Blood 🩸') && '🩸'}
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0 ml-4 text-right">
                  <div className="font-mono font-black text-cyber-warning text-lg">
                    {student.stats.totalPoints}
                  </div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">
                    Points
                  </div>
                </div>
              </div>
            ))}
            
            {leaderboard.length === 0 && (
              <div className="text-center text-gray-500 mt-10">
                <ShieldAlert size={48} className="mx-auto mb-3 opacity-50" />
                <p>Belum ada agen yang mencetak skor.</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
