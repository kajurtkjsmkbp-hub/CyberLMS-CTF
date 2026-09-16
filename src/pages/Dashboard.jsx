import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Zap, ShieldAlert, Award, Trophy, Medal, Users, ChevronRight, Activity } from 'lucide-react';
import { challenges } from '../data/challenges';
import { getAllStudentsProgress } from '../utils/db';

const Dashboard = ({ user }) => {
  const progressData = JSON.parse(localStorage.getItem('progress') || '{}')[user.id] || { points: 0, solved: [] };

  // Calculate rank dynamically
  const allStudents = getAllStudentsProgress();
  allStudents.sort((a, b) => b.progress.points - a.progress.points);
  const myRankIndex = allStudents.findIndex(s => s.id === user.id);
  const myRank = myRankIndex !== -1 ? myRankIndex + 1 : '-';

  // Determine Rank Text - Shortened for the stats box
  let rankText = `#${myRank}`;
  let rankSubText = '';
  if (myRank === 1) { rankText = "1"; rankSubText = "Emas"; }
  else if (myRank === 2) { rankText = "2"; rankSubText = "Perak"; }
  else if (myRank === 3) { rankText = "3"; rankSubText = "Perunggu"; }

  const stats = [
    { label: 'Misi Selesai', value: progressData.solved.length.toString(), icon: <Target className="text-cyber-success" size={28} /> },
    { label: 'Peringkat', value: rankText, sub: rankSubText, icon: <Award className="text-cyber-warning" size={28} /> },
    { label: 'Login Harian', value: '1 Hari', icon: <Zap className="text-cyber-neon" size={28} /> },
    { label: 'Total Poin', value: progressData.points.toString(), icon: <ShieldAlert className="text-cyber-danger" size={28} /> },
  ];

  const recentChallenges = challenges.filter(c => !progressData.solved.includes(c.id)).slice(0, 4);

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 space-y-8 sm:space-y-10">
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 to-cyber-darker border border-gray-800 rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl overflow-hidden mt-4">
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyber-primary/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="relative z-10 flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          <div>
            <div className="flex items-center text-cyber-neon mb-2 text-sm font-bold tracking-widest uppercase">
              <Activity size={16} className="mr-2" /> 
              Agent Identity Confirmed
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-100 flex items-center flex-wrap gap-3">
              Welcome back, {user.name}
              {myRank === 1 && <Trophy className="text-yellow-400 animate-pulse drop-shadow-md" size={36} title="Emas (Peringkat 1)!" />}
              {myRank === 2 && <Medal className="text-gray-300 drop-shadow-md" size={36} title="Perak (Peringkat 2)!" />}
              {myRank === 3 && <Medal className="text-amber-600 drop-shadow-md" size={36} title="Perunggu (Peringkat 3)!" />}
            </h1>
            <p className="text-gray-400 mt-3 text-sm sm:text-base max-w-xl leading-relaxed">
              Sistem keamanan siber menantang Anda. Persiapkan alat Anda, pertajam logika, dan taklukkan kerentanan yang ada di dalam *Training Grounds*.
            </p>
          </div>
          <Link to="/challenges" className="inline-flex items-center justify-center bg-cyber-primary hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-bold transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:-translate-y-1 w-full md:w-auto text-center">
            Mulai Misi <ChevronRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-cyber-dark/80 backdrop-blur-sm p-4 sm:p-5 lg:p-6 rounded-xl border border-gray-800/80 hover:border-gray-600 transition-colors flex items-center gap-4 shadow-lg group">
            <div className="p-3 lg:p-4 bg-gray-900/80 rounded-xl border border-gray-800 group-hover:border-gray-700 transition-colors flex-shrink-0">
              {stat.icon}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-gray-400 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-1 leading-tight">{stat.label}</p>
              <div className="flex items-baseline gap-2 flex-wrap">
                <p className={`text-2xl sm:text-3xl font-black tracking-tight leading-none ${
                  stat.label === 'Peringkat' && myRank === 1 ? 'text-yellow-400' :
                  stat.label === 'Peringkat' && myRank === 2 ? 'text-gray-300' :
                  stat.label === 'Peringkat' && myRank === 3 ? 'text-amber-600' :
                  'text-gray-100'
                }`}>
                  {stat.label === 'Peringkat' && myRank !== '-' && myRank > 3 ? `#${stat.value}` : stat.value}
                </p>
                {stat.sub && (
                  <span className={`text-sm font-bold uppercase tracking-wider ${
                    myRank === 1 ? 'text-yellow-500/80' :
                    myRank === 2 ? 'text-gray-400' :
                    'text-amber-700'
                  }`}>
                    {stat.sub}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: Recommendations */}
        <div className="lg:col-span-7 xl:col-span-8 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-100 tracking-tight">Misi Direkomendasikan</h2>
            <Link to="/challenges" className="text-sm font-bold text-cyber-neon hover:text-cyan-300 flex items-center">
              Lihat Semua <ChevronRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {recentChallenges.map(c => (
              <div key={c.id} className="bg-cyber-dark/90 border border-gray-800 p-5 rounded-xl hover:border-cyber-primary/50 transition-all shadow-md hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] flex flex-col justify-between group">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className={`px-2.5 py-1 text-xs font-black uppercase tracking-wider rounded-md ${
                      c.difficulty === 'Easy' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
                      c.difficulty === 'Medium' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' :
                      c.difficulty === 'Hard' ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20' :
                      'bg-red-500/10 text-red-400 border border-red-500/20'
                    }`}>
                      {c.difficulty}
                    </span>
                    <span className="text-gray-400 font-mono font-bold text-sm bg-gray-900 px-2 py-1 rounded border border-gray-800">{c.points} pts</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-200 mb-1 group-hover:text-cyber-neon transition-colors">{c.title}</h3>
                  <p className="text-gray-500 text-sm mb-5 font-medium">{c.category}</p>
                </div>
                <Link to="/challenges" className="w-full text-center bg-gray-900 hover:bg-gray-800 text-gray-300 font-bold py-2 rounded-lg border border-gray-700 transition-colors text-sm">
                  Eksekusi Misi
                </Link>
              </div>
            ))}
            {recentChallenges.length === 0 && (
              <div className="col-span-1 md:col-span-2 text-center text-gray-500 py-12 border border-gray-800 border-dashed rounded-xl bg-cyber-dark/30">
                <Target size={48} className="mx-auto mb-4 text-cyber-success opacity-50" />
                <p className="font-bold text-lg text-gray-400">Wow! Anda telah menyelesaikan semua soal.</p>
                <p className="text-sm mt-2">Tunggu instruktur untuk menambahkan misi baru.</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Global Leaderboard */}
        <div className="lg:col-span-5 xl:col-span-4 flex flex-col h-full">
          <div className="bg-cyber-dark border border-gray-800 rounded-2xl flex flex-col h-[500px] lg:h-full shadow-2xl overflow-hidden">
            <div className="p-4 sm:p-5 border-b border-gray-800 bg-gray-900/50 flex items-center justify-between">
              <div className="flex items-center">
                <Users className="text-cyber-warning mr-3" size={24} />
                <h2 className="text-lg font-extrabold text-gray-100 uppercase tracking-wider">Leaderboard</h2>
              </div>
              <span className="text-xs font-bold bg-cyber-primary/20 text-cyber-primary px-2 py-1 rounded border border-cyber-primary/30">
                Top Agents
              </span>
            </div>
            
            <div className="flex-1 overflow-y-auto custom-scrollbar">
              
              {/* Leaderboard Header */}
              <div className="flex items-center justify-between bg-gray-900/80 sticky top-0 backdrop-blur-md z-10 border-b border-gray-800 px-4 py-2.5">
                <div className="w-12 text-center text-xs font-bold text-gray-500 uppercase tracking-wider">Rank</div>
                <div className="flex-1 px-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Agent</div>
                <div className="w-20 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">Points</div>
              </div>

              {/* Leaderboard List */}
              <div className="divide-y divide-gray-800/50">
                {allStudents.map((s, idx) => {
                  const r = idx + 1;
                  const isMe = s.id === user.id;
                  return (
                    <div key={s.id} className={`flex items-center justify-between px-4 py-3 group transition-colors ${isMe ? 'bg-cyber-primary/10 relative' : 'hover:bg-gray-800/40'}`}>
                      {/* Blue indicator line for current user */}
                      {isMe && <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyber-primary"></div>}
                      
                      {/* Rank Icon */}
                      <div className="w-12 flex justify-center items-center flex-shrink-0">
                        {r === 1 ? <div className="w-8 h-8 flex items-center justify-center bg-yellow-500/20 text-yellow-500 rounded-full border border-yellow-500/40 shadow-[0_0_10px_rgba(234,179,8,0.2)]"><Trophy size={16} /></div> :
                         r === 2 ? <div className="w-8 h-8 flex items-center justify-center bg-gray-300/20 text-gray-300 rounded-full border border-gray-300/40"><Medal size={16} /></div> :
                         r === 3 ? <div className="w-8 h-8 flex items-center justify-center bg-amber-600/20 text-amber-500 rounded-full border border-amber-600/40"><Medal size={16} /></div> :
                         <span className="text-gray-500 text-sm font-bold bg-gray-900 w-8 h-8 flex items-center justify-center rounded-full border border-gray-800">#{r}</span>}
                      </div>
                      
                      {/* Agent Info */}
                      <div className="flex-1 px-3 min-w-0">
                        <div className={`text-sm sm:text-base font-bold truncate transition-colors flex items-center gap-2 ${isMe ? 'text-cyber-neon' : 'text-gray-200 group-hover:text-white'}`}>
                          <span className="truncate">{s.name}</span>
                          {isMe && <span className="text-[10px] uppercase tracking-wider bg-cyber-primary text-white px-1.5 py-0.5 rounded flex-shrink-0">Anda</span>}
                        </div>
                        <div className="text-xs text-gray-500 mt-0.5 font-mono truncate">@{s.username}</div>
                      </div>
                      
                      {/* Points */}
                      <div className="w-20 text-right flex-shrink-0">
                        <span className="font-mono text-sm sm:text-base text-cyber-success font-black tracking-tight bg-green-500/10 px-2 py-1 rounded border border-green-500/20 shadow-[0_0_10px_rgba(34,197,94,0.1)] inline-block">
                          {s.progress.points}
                        </span>
                      </div>
                    </div>
                  );
                })}
                {allStudents.length === 0 && (
                  <div className="text-center py-10 text-gray-500 text-sm italic">
                    Belum ada agen yang terdaftar di sistem.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
