import React, { useState, useEffect, useMemo } from 'react';
import { getAllStudentsProgress, getTeamStats, registerTeacher, getAllTeachers, updateTeacher, deleteTeacher, updateStudent, deleteStudent, getCurrentUser, getBattleConfig, setBattleConfig, getBattleProgress, clearBattleProgress } from '../utils/db';
import { challenges as allChallenges } from '../data/challenges';
import { Users, UserPlus, BookOpen, Key, Edit, Trash2, PowerOff, Power, CheckCircle2, Trophy, Medal, Swords, Clock, Play, Square, LineChart, Activity } from 'lucide-react';
import { LineChart as RechartsLine, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const TeacherDashboard = () => {
  const [activeTab, setActiveTab] = useState('siswa'); // 'siswa' | 'guru' | 'battle' | 'tim'
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [teams, setTeams] = useState([]);
  
  // Battle states
  const [battleConfig, setBattleConfigState] = useState(getBattleConfig());
  const [battleDuration, setBattleDuration] = useState(60);
  const [battleLeaderboard, setBattleLeaderboard] = useState([]);
  const [timeLeft, setTimeLeft] = useState(0);

  const [showAddTeacher, setShowAddTeacher] = useState(false);
  const [newTUsername, setNewTUsername] = useState('');
  const [newTPassword, setNewTPassword] = useState('');
  const [newTName, setNewTName] = useState('');

  const currentUser = getCurrentUser();

  const loadData = () => {
    let studentData = getAllStudentsProgress();
    studentData.sort((a, b) => b.stats.totalPoints - a.stats.totalPoints);
    setStudents(studentData);
    setTeachers(getAllTeachers());

    let teamData = getTeamStats();
    teamData.sort((a, b) => b.score - a.score);
    setTeams(teamData);

    const bProgress = getBattleProgress();
    let bLeaderboard = studentData.map(s => ({
      ...s,
      battlePoints: bProgress[s.id] ? bProgress[s.id].points : 0,
      battleSolved: bProgress[s.id] ? bProgress[s.id].solved.length : 0,
      battleFBs: bProgress[s.id] ? bProgress[s.id].firstBloods : 0
    }));
    bLeaderboard.sort((a, b) => b.battlePoints - a.battlePoints);
    setBattleLeaderboard(bLeaderboard);
  };

  useEffect(() => {
    loadData();
    const interval = setInterval(loadData, 5000);
    return () => clearInterval(interval);
  }, []);

  // Battle Timer Effect
  useEffect(() => {
    let interval;
    if (battleConfig.isActive) {
      const updateTimer = () => {
        const remaining = Math.max(0, Math.floor((battleConfig.endTime - Date.now()) / 1000));
        setTimeLeft(remaining);
        if (remaining === 0) handleStopBattle();
      };
      updateTimer();
      interval = setInterval(updateTimer, 1000);
    }
    return () => clearInterval(interval);
  }, [battleConfig]);

  const handleStartBattle = () => {
    if (!window.confirm(`Mulai pertarungan selama ${battleDuration} menit? Ini akan me-reset skor battle sebelumnya.`)) return;

    const pickRandom = (arr, count) => {
      let shuffled = arr.slice(0).sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count).map(c => c.id);
    };

    const easy = allChallenges.filter(c => c.difficulty === 'Easy');
    const medium = allChallenges.filter(c => c.difficulty === 'Medium');
    const hard = allChallenges.filter(c => c.difficulty === 'Hard');
    const veryHard = allChallenges.filter(c => c.difficulty === 'Very Hard');

    const selectedIds = [
      ...pickRandom(easy, 20),
      ...pickRandom(medium, 15),
      ...pickRandom(hard, 10),
      ...pickRandom(veryHard, 5)
    ];

    const newConfig = {
      isActive: true,
      durationMinutes: battleDuration,
      endTime: Date.now() + (battleDuration * 60000),
      challenges: selectedIds
    };

    setBattleConfig(newConfig);
    setBattleConfigState(newConfig);
    clearBattleProgress();
    loadData();
  };

  const handleStopBattle = () => {
    const newConfig = { ...battleConfig, isActive: false };
    setBattleConfig(newConfig);
    setBattleConfigState(newConfig);
  };

  const handleAddTeacher = (e) => {
    e.preventDefault();
    if (registerTeacher(newTUsername, newTPassword, newTName)) {
      alert('Akun Guru berhasil ditambahkan!');
      setShowAddTeacher(false);
      setNewTUsername(''); setNewTPassword(''); setNewTName('');
      loadData();
    } else alert('Username sudah digunakan!');
  };

  const handleToggleStatus = (id, currentStatus) => {
    if (id === currentUser.id) return alert("Anda tidak bisa menonaktifkan akun Anda sendiri!");
    updateTeacher(id, { isActive: !currentStatus });
    loadData();
  };

  const handleDeleteTeacher = (id) => {
    if (id === currentUser.id) return alert("Anda tidak bisa menghapus akun Anda sendiri!");
    if (window.confirm("Hapus akun guru ini?")) {
      deleteTeacher(id);
      loadData();
    }
  };

  const handleToggleStudentStatus = (id, currentStatus) => {
    updateStudent(id, { isActive: currentStatus === false ? true : false });
    loadData();
  };

  const handleEditStudent = (student) => {
    const newName = prompt("Edit Nama Siswa:", student.name);
    if (newName && newName.trim() !== "") {
      const newPassword = prompt("Edit Password (kosongkan jika tidak ingin mengubah):");
      const updates = { name: newName };
      if (newPassword && newPassword.trim() !== "") updates.password = newPassword;
      updateStudent(student.id, updates);
      loadData();
    }
  };

  const handleDeleteStudent = (id) => {
    if (window.confirm("Peringatan: Menghapus siswa akan menghapus seluruh data progres mereka secara permanen. Lanjutkan?")) {
      deleteStudent(id);
      loadData();
    }
  };

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h > 0 ? h+'h ' : ''}${m}m ${s}s`;
  };

  const battleChallenges = battleConfig.challenges.map(id => allChallenges.find(c => c.id === id)).filter(Boolean);

  // Timeline Data Generation for Top 5 Students
  const timelineData = useMemo(() => {
    const progressData = JSON.parse(localStorage.getItem('progress') || '{}');
    let events = [];
    
    // Extract all solve events
    Object.keys(progressData).forEach(studentId => {
      const studentName = students.find(s => s.id === studentId)?.name || 'Unknown';
      let cumulative = 0;
      progressData[studentId].solved.forEach(solve => {
        cumulative += 1; // Simplified points timeline
        events.push({ time: solve.timestamp, student: studentName, score: cumulative });
      });
    });

    events.sort((a, b) => a.time - b.time);
    
    // Group by timeframe (e.g. format time to HH:mm)
    let grouped = {};
    let latestScores = {};
    
    events.forEach(ev => {
      const d = new Date(ev.time);
      const timeStr = `${d.getHours()}:${d.getMinutes() < 10 ? '0' : ''}${d.getMinutes()}`;
      if (!grouped[timeStr]) {
        grouped[timeStr] = { time: timeStr, ...latestScores }; // Carry over previous scores
      }
      latestScores[ev.student] = ev.score;
      grouped[timeStr][ev.student] = ev.score;
    });

    return Object.values(grouped);
  }, [students]);

  const top5Names = students.slice(0, 5).map(s => s.name);
  const colors = ['#06b6d4', '#eab308', '#ec4899', '#8b5cf6', '#22c55e'];

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-100 flex items-center">
            <Users className="mr-3 text-cyber-warning" size={32} />
            Teacher Dashboard
          </h1>
          <p className="text-gray-400 mt-2">Kelola siswa, pantau peringkat, manajemen battle, dan akses pengajar.</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 border-b border-gray-800 pb-2">
        <button onClick={() => setActiveTab('siswa')} className={`pb-2 px-4 font-bold text-sm transition-colors ${activeTab === 'siswa' ? 'text-cyber-neon border-b-2 border-cyber-neon' : 'text-gray-500 hover:text-gray-300'}`}>
          Progres Siswa
        </button>
        <button onClick={() => setActiveTab('tim')} className={`pb-2 px-4 font-bold text-sm transition-colors flex items-center ${activeTab === 'tim' ? 'text-purple-500 border-b-2 border-purple-500' : 'text-gray-500 hover:text-purple-400'}`}>
          Tim & Statistik
        </button>
        <button onClick={() => setActiveTab('battle')} className={`pb-2 px-4 font-bold text-sm transition-colors flex items-center ${activeTab === 'battle' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-500 hover:text-red-400'}`}>
          <Swords size={18} className="mr-2" /> Battle Arena
        </button>
        <button onClick={() => setActiveTab('guru')} className={`pb-2 px-4 font-bold text-sm transition-colors ${activeTab === 'guru' ? 'text-cyber-neon border-b-2 border-cyber-neon' : 'text-gray-500 hover:text-gray-300'}`}>
          Manajemen Guru
        </button>
      </div>

      {activeTab === 'siswa' && (
        <div className="bg-cyber-dark rounded-lg border border-gray-800 overflow-x-auto">
          <table className="w-full text-left whitespace-nowrap">
            <thead className="bg-gray-900 text-gray-400">
              <tr>
                <th className="px-6 py-4 font-medium min-w-[150px]">Peringkat</th>
                <th className="px-6 py-4 font-medium">Nama Siswa</th>
                <th className="px-6 py-4 font-medium text-center">Badges / Tim</th>
                <th className="px-6 py-4 font-medium text-right">Poin Dinamis</th>
                <th className="px-6 py-4 font-medium text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {students.map((s, index) => {
                const rank = index + 1;
                const teamName = teams.find(t => t.id === s.teamId)?.name;
                const isInactive = s.isActive === false;
                return (
                  <tr key={s.id} className={`hover:bg-gray-800/50 transition-colors ${isInactive ? 'opacity-50' : ''}`}>
                    <td className="px-6 py-4">
                      {rank === 1 ? <div className="flex items-center text-yellow-500 font-bold bg-yellow-500/10 px-3 py-1.5 rounded-full w-fit"><Trophy size={18} className="mr-2" /> Emas</div> :
                       rank === 2 ? <div className="flex items-center text-gray-300 font-bold bg-gray-300/10 px-3 py-1.5 rounded-full w-fit"><Medal size={18} className="mr-2" /> Perak</div> :
                       rank === 3 ? <div className="flex items-center text-amber-600 font-bold bg-amber-600/10 px-3 py-1.5 rounded-full w-fit"><Medal size={18} className="mr-2" /> Perunggu</div> :
                       <div className="flex items-center text-gray-400 font-bold px-3 py-1.5 w-fit">#{rank}</div>}
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-semibold text-gray-200">{s.name} {isInactive && <span className="text-red-500 text-xs ml-2">(Nonaktif)</span>}</div>
                      <div className="text-xs text-gray-500">@{s.username}</div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex justify-center space-x-2">
                        {teamName && <span className="bg-purple-900/30 text-purple-400 border border-purple-500/30 px-2 py-0.5 rounded text-xs">{teamName}</span>}
                        {s.stats?.badges?.slice(0,3).map(b => (
                          <span key={b} className="bg-yellow-900/30 text-yellow-500 border border-yellow-500/30 px-2 py-0.5 rounded text-xs" title={b}>{b.split(' ')[0]}</span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="text-cyber-neon font-mono font-bold text-lg">{s.stats.totalPoints}</span> pts
                      <div className="text-xs text-gray-500">Solved: {s.stats.solveCount} | FB: {s.stats.firstBloodCount}</div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end space-x-2">
                        <button 
                          onClick={() => handleEditStudent(s)}
                          className="p-1.5 bg-blue-900/50 hover:bg-blue-800 text-blue-400 rounded transition-colors"
                          title="Edit Siswa"
                        >
                          <Edit size={16} />
                        </button>
                        <button 
                          onClick={() => handleToggleStudentStatus(s.id, s.isActive)}
                          className={`p-1.5 rounded transition-colors ${isInactive ? 'bg-green-900/50 hover:bg-green-800 text-green-400' : 'bg-gray-800 hover:bg-gray-700 text-gray-400'}`}
                          title={isInactive ? "Aktifkan Siswa" : "Nonaktifkan Siswa"}
                        >
                          {isInactive ? <Power size={16} /> : <PowerOff size={16} />}
                        </button>
                        <button 
                          onClick={() => handleDeleteStudent(s.id)}
                          className="p-1.5 bg-red-900/50 hover:bg-red-800 text-red-400 rounded transition-colors"
                          title="Hapus Siswa"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'tim' && (
        <div className="space-y-8">
          <div className="bg-cyber-dark border border-gray-800 p-6 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-bold text-purple-400 mb-6 flex items-center"><LineChart className="mr-3" /> Live Scoring Timeline (Top 5)</h2>
            <div className="h-96">
              {timelineData.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsLine data={timelineData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="time" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip contentStyle={{ backgroundColor: '#111827', borderColor: '#374151' }} />
                    <Legend />
                    {top5Names.map((name, i) => (
                      <Line key={name} type="monotone" dataKey={name} stroke={colors[i % colors.length]} strokeWidth={3} dot={false} />
                    ))}
                  </RechartsLine>
                </ResponsiveContainer>
              ) : (
                <div className="h-full flex items-center justify-center text-gray-500">Belum ada data progres penyelesaian soal.</div>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teams.map(t => (
              <div key={t.id} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-white">{t.name}</h3>
                  <span className="text-cyber-neon font-mono font-bold text-xl">{t.score} pts</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {t.members.length > 0 ? t.members.map(m => (
                    <span key={m} className="bg-gray-800 text-gray-300 px-3 py-1 rounded text-sm">{m}</span>
                  )) : <span className="text-gray-500 italic text-sm">Belum ada anggota</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'battle' && (
        <div className="space-y-8">
          {/* Battle Controls */}
          <div className="bg-cyber-dark border border-gray-800 p-6 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl">
            <div>
              <h2 className="text-2xl font-black text-white flex items-center mb-2">
                <Swords className="mr-3 text-red-500" size={28} /> Manajemen Battle Arena
              </h2>
            </div>
            
            <div className="flex items-center bg-gray-900 p-4 rounded-xl border border-gray-800 gap-4">
              {battleConfig.isActive ? (
                <>
                  <div className="text-center px-4">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Sisa Waktu</p>
                    <p className="text-3xl font-mono font-black text-red-500 animate-pulse">{formatTime(timeLeft)}</p>
                  </div>
                  <button onClick={handleStopBattle} className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-lg flex flex-col items-center justify-center font-bold transition-colors">
                    <Square size={20} className="mb-1" /> Hentikan
                  </button>
                </>
              ) : (
                <>
                  <div className="flex flex-col">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Durasi (Menit)</label>
                    <input 
                      type="number" 
                      min="5" max="300" 
                      value={battleDuration} 
                      onChange={(e) => setBattleDuration(Number(e.target.value))}
                      className="bg-cyber-dark border border-gray-700 rounded-lg px-4 py-2 text-white w-32 text-xl font-mono text-center"
                    />
                  </div>
                  <button onClick={handleStartBattle} className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-lg flex flex-col items-center justify-center font-bold">
                    <Play size={20} className="mb-1" /> Mulai Battle
                  </button>
                </>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-cyber-dark/80 border border-gray-800 rounded-2xl overflow-hidden flex flex-col h-[600px]">
              <div className="p-4 border-b border-gray-800 bg-gray-900/50">
                <h3 className="text-lg font-bold text-red-400 uppercase tracking-widest">🏆 Live Battle Leaderboard</h3>
              </div>
              <div className="flex-1 overflow-y-auto custom-scrollbar">
                <table className="w-full text-left">
                  <thead className="bg-gray-900/80 sticky top-0 backdrop-blur-md">
                    <tr>
                      <th className="px-4 py-3 text-xs text-gray-500">Rank</th>
                      <th className="px-4 py-3 text-xs text-gray-500">Agent</th>
                      <th className="px-4 py-3 text-xs text-gray-500 text-center">Stats</th>
                      <th className="px-4 py-3 text-xs text-gray-500 text-right">Points</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800/50">
                    {battleLeaderboard.map((s, idx) => (
                      <tr key={s.id} className="hover:bg-gray-800/30">
                        <td className="px-4 py-3 font-bold text-gray-400">#{idx + 1}</td>
                        <td className="px-4 py-3 font-bold text-gray-200">{s.name}</td>
                        <td className="px-4 py-3 text-center text-xs text-gray-400">S: {s.battleSolved} | FB: {s.battleFBs}</td>
                        <td className="px-4 py-3 text-right font-mono text-cyber-warning font-bold">{s.battlePoints}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-cyber-dark/80 border border-gray-800 rounded-2xl overflow-hidden flex flex-col h-[600px]">
              <div className="p-4 border-b border-gray-800 bg-gray-900/50 flex justify-between items-center">
                <h3 className="text-lg font-bold text-cyber-neon uppercase tracking-widest">📝 50 Soal Terpilih & Kunci</h3>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                {battleChallenges.map((c, i) => (
                  <div key={c.id} className="bg-gray-900 border border-gray-800 p-4 rounded-xl">
                    <h4 className="text-white font-bold mb-2">{c.title}</h4>
                    <div className="mb-2">
                      <code className="bg-gray-800 text-cyber-neon px-2 py-1 rounded text-xs select-all break-all">{c.flag}</code>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'guru' && (
        <div className="text-white p-6 bg-gray-900 border border-gray-800 rounded-xl">
          <p>Fitur Manajemen Guru Disembunyikan Sementara untuk Pemeliharaan Sistem.</p>
        </div>
      )}
    </div>
  );
};

export default TeacherDashboard;
