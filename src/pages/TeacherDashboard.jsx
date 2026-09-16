import React, { useState, useEffect } from 'react';
import { getAllStudentsProgress, registerTeacher, getAllTeachers, updateTeacher, deleteTeacher, getCurrentUser, getBattleConfig, setBattleConfig, getBattleProgress, clearBattleProgress } from '../utils/db';
import { challenges as allChallenges } from '../data/challenges';
import { Users, UserPlus, BookOpen, Key, Edit, Trash2, PowerOff, Power, CheckCircle2, Trophy, Medal, Swords, Clock, Play, Square } from 'lucide-react';

const TeacherDashboard = () => {
  const [activeTab, setActiveTab] = useState('siswa'); // 'siswa' | 'guru' | 'battle'
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  
  // Battle states
  const [battleConfig, setBattleConfigState] = useState(getBattleConfig());
  const [battleDuration, setBattleDuration] = useState(60); // minutes
  const [battleLeaderboard, setBattleLeaderboard] = useState([]);
  const [timeLeft, setTimeLeft] = useState(0);

  const [showAddTeacher, setShowAddTeacher] = useState(false);
  const [newTUsername, setNewTUsername] = useState('');
  const [newTPassword, setNewTPassword] = useState('');
  const [newTName, setNewTName] = useState('');

  const currentUser = getCurrentUser();

  const loadData = () => {
    let studentData = getAllStudentsProgress();
    studentData.sort((a, b) => b.progress.points - a.progress.points);
    setStudents(studentData);
    setTeachers(getAllTeachers());

    // Load battle leaderboard
    const bProgress = getBattleProgress();
    let bLeaderboard = studentData.map(s => ({
      ...s,
      battlePoints: bProgress[s.id] ? bProgress[s.id].points : 0,
      battleSolved: bProgress[s.id] ? bProgress[s.id].solved.length : 0
    }));
    bLeaderboard.sort((a, b) => b.battlePoints - a.battlePoints);
    setBattleLeaderboard(bLeaderboard);
  };

  useEffect(() => {
    loadData();
    const interval = setInterval(loadData, 5000); // refresh data every 5s for realtime updates
    return () => clearInterval(interval);
  }, []);

  // Battle Timer Effect
  useEffect(() => {
    let interval;
    if (battleConfig.isActive) {
      const updateTimer = () => {
        const remaining = Math.max(0, Math.floor((battleConfig.endTime - Date.now()) / 1000));
        setTimeLeft(remaining);
        if (remaining === 0) {
          handleStopBattle();
        }
      };
      updateTimer();
      interval = setInterval(updateTimer, 1000);
    }
    return () => clearInterval(interval);
  }, [battleConfig]);

  const handleStartBattle = () => {
    if (!window.confirm(`Mulai pertarungan selama ${battleDuration} menit? Ini akan me-reset skor battle sebelumnya.`)) return;

    // Pick 50 random challenges (20 E, 15 M, 10 H, 5 VH)
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
    const success = registerTeacher(newTUsername, newTPassword, newTName);
    if (success) {
      alert('Akun Guru berhasil ditambahkan!');
      setShowAddTeacher(false);
      setNewTUsername(''); setNewTPassword(''); setNewTName('');
      loadData();
    } else {
      alert('Username sudah digunakan!');
    }
  };

  const handleToggleStatus = (id, currentStatus) => {
    if (id === currentUser.id) {
      alert("Anda tidak bisa menonaktifkan akun Anda sendiri yang sedang dipakai!");
      return;
    }
    updateTeacher(id, { isActive: !currentStatus });
    loadData();
  };

  const handleDeleteTeacher = (id) => {
    if (id === currentUser.id) {
      alert("Anda tidak bisa menghapus akun Anda sendiri!");
      return;
    }
    if (window.confirm("Apakah Anda yakin ingin menghapus akun guru ini?")) {
      deleteTeacher(id);
      loadData();
    }
  };

  const handleEditTeacher = (teacher) => {
    const newName = window.prompt("Masukkan nama baru untuk guru ini:", teacher.name);
    if (newName && newName.trim() !== '') {
      updateTeacher(teacher.id, { name: newName });
      loadData();
    }
  };

  const getChallengeTitle = (id) => {
    const challenge = allChallenges.find(c => c.id === id);
    return challenge ? challenge.title : 'Unknown Challenge';
  };

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h > 0 ? h+'h ' : ''}${m}m ${s}s`;
  };

  // The 50 specific battle challenges mapped for teacher to see
  const battleChallenges = battleConfig.challenges.map(id => allChallenges.find(c => c.id === id)).filter(Boolean);

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
        <button 
          onClick={() => setActiveTab('siswa')} 
          className={`pb-2 px-4 font-bold text-sm sm:text-base transition-colors ${activeTab === 'siswa' ? 'text-cyber-neon border-b-2 border-cyber-neon' : 'text-gray-500 hover:text-gray-300'}`}
        >
          Progres Siswa (Latihan)
        </button>
        <button 
          onClick={() => setActiveTab('battle')} 
          className={`pb-2 px-4 font-bold text-sm sm:text-base transition-colors flex items-center ${activeTab === 'battle' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-500 hover:text-red-400'}`}
        >
          <Swords size={18} className="mr-2" /> Battle Arena
        </button>
        <button 
          onClick={() => setActiveTab('guru')} 
          className={`pb-2 px-4 font-bold text-sm sm:text-base transition-colors ${activeTab === 'guru' ? 'text-cyber-neon border-b-2 border-cyber-neon' : 'text-gray-500 hover:text-gray-300'}`}
        >
          Manajemen Guru
        </button>
      </div>

      {activeTab === 'siswa' && (
        <div>
          {/* Siswa code from previous iteration remains the same */}
          <div className="bg-cyber-dark rounded-lg border border-gray-800 overflow-x-auto">
            <table className="w-full text-left whitespace-nowrap">
              <thead className="bg-gray-900 text-gray-400">
                <tr>
                  <th className="px-6 py-4 font-medium min-w-[200px]">Peringkat</th>
                  <th className="px-6 py-4 font-medium">Nama Siswa</th>
                  <th className="px-6 py-4 font-medium">Poin Terkumpul</th>
                  <th className="px-6 py-4 font-medium min-w-[300px]">Detail Soal Selesai</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {students.map((s, index) => {
                  const rank = index + 1;
                  return (
                    <tr key={s.id} className="hover:bg-gray-800/50 transition-colors">
                      <td className="px-6 py-4">
                        {rank === 1 ? (
                          <div className="flex items-center text-yellow-500 font-bold bg-yellow-500/10 px-3 py-1.5 rounded-full border border-yellow-500/30 w-fit">
                            <Trophy size={18} className="mr-2" /> Emas (Peringkat 1)
                          </div>
                        ) : rank === 2 ? (
                          <div className="flex items-center text-gray-300 font-bold bg-gray-300/10 px-3 py-1.5 rounded-full border border-gray-300/30 w-fit">
                            <Medal size={18} className="mr-2" /> Perak (Peringkat 2)
                          </div>
                        ) : rank === 3 ? (
                          <div className="flex items-center text-amber-600 font-bold bg-amber-600/10 px-3 py-1.5 rounded-full border border-amber-600/30 w-fit">
                            <Medal size={18} className="mr-2" /> Perunggu (Peringkat 3)
                          </div>
                        ) : (
                          <div className="flex items-center text-gray-400 font-bold px-3 py-1.5 w-fit">
                            <span className="bg-gray-800 text-gray-400 w-6 h-6 flex items-center justify-center rounded-full mr-2 text-xs">#{rank}</span>
                            Peringkat {rank}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-semibold text-gray-200">{s.name}</div>
                        <div className="text-xs text-gray-500">@{s.username}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-cyber-neon font-mono font-bold text-lg">{s.progress.points}</span> pts
                      </td>
                      <td className="px-6 py-4">
                        {s.progress.solved.length === 0 ? (
                          <span className="text-gray-600 text-sm italic">Belum ada soal diselesaikan</span>
                        ) : (
                          <div className="flex flex-wrap gap-2 max-w-md">
                            {s.progress.solved.slice(0,5).map(id => (
                              <div key={id} className="flex items-center bg-green-500/10 border border-green-500/30 text-green-400 px-2 py-1 rounded text-xs">
                                <CheckCircle2 size={12} className="mr-1 flex-shrink-0" />
                                <span className="truncate max-w-[100px]" title={getChallengeTitle(id)}>{getChallengeTitle(id)}</span>
                              </div>
                            ))}
                            {s.progress.solved.length > 5 && <span className="text-gray-500 text-xs">+{s.progress.solved.length - 5} lainnya</span>}
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
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
              <p className="text-gray-400 text-sm max-w-lg">
                Aktifkan mode ini untuk memulai perlombaan. Sistem akan mengacak 50 soal (Easy-Very Hard) untuk dipecahkan siswa dengan batasan waktu yang sama secara real-time.
              </p>
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
                      className="bg-cyber-dark border border-gray-700 rounded-lg px-4 py-2 text-white w-32 focus:outline-none focus:border-red-500 text-xl font-mono text-center"
                    />
                  </div>
                  <button onClick={handleStartBattle} className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-lg flex flex-col items-center justify-center font-bold transition-colors shadow-[0_0_15px_rgba(22,163,74,0.4)]">
                    <Play size={20} className="mb-1" /> Mulai Battle
                  </button>
                </>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Live Battle Leaderboard */}
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
                      <th className="px-4 py-3 text-xs text-gray-500 text-center">Solved</th>
                      <th className="px-4 py-3 text-xs text-gray-500 text-right">Points</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800/50">
                    {battleLeaderboard.map((s, idx) => (
                      <tr key={s.id} className="hover:bg-gray-800/30">
                        <td className="px-4 py-3 font-bold text-gray-400">#{idx + 1}</td>
                        <td className="px-4 py-3 font-bold text-gray-200">{s.name}</td>
                        <td className="px-4 py-3 text-center text-gray-400">{s.battleSolved}/50</td>
                        <td className="px-4 py-3 text-right font-mono text-cyber-warning font-bold">{s.battlePoints}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* List of 50 Selected Challenges & Solutions */}
            <div className="bg-cyber-dark/80 border border-gray-800 rounded-2xl overflow-hidden flex flex-col h-[600px]">
              <div className="p-4 border-b border-gray-800 bg-gray-900/50 flex justify-between items-center">
                <h3 className="text-lg font-bold text-cyber-neon uppercase tracking-widest">📝 50 Soal Terpilih & Kunci</h3>
                <span className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded">Aktif Saat Ini</span>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                {battleChallenges.length === 0 ? (
                  <p className="text-center text-gray-500 mt-10">Mulai Battle untuk mengacak soal.</p>
                ) : (
                  battleChallenges.map((c, i) => (
                    <div key={c.id} className="bg-gray-900 border border-gray-800 p-4 rounded-xl">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-bold text-gray-400">Soal #{i + 1}</span>
                        <span className={`px-2 py-0.5 text-[10px] font-bold uppercase rounded ${
                          c.difficulty === 'Easy' ? 'bg-green-900/50 text-green-400' :
                          c.difficulty === 'Medium' ? 'bg-yellow-900/50 text-yellow-400' :
                          c.difficulty === 'Hard' ? 'bg-orange-900/50 text-orange-400' :
                          'bg-red-900/50 text-red-400'
                        }`}>{c.difficulty} - {c.points} pts</span>
                      </div>
                      <h4 className="text-white font-bold mb-2">{c.title}</h4>
                      <div className="mb-2">
                        <span className="text-xs font-bold text-gray-500 block mb-1">Kunci (Flag):</span>
                        <code className="bg-gray-800 text-cyber-neon px-2 py-1 rounded text-xs select-all break-all">{c.flag}</code>
                      </div>
                      <div>
                        <span className="text-xs font-bold text-gray-500 block mb-1">Penjelasan (Solusi):</span>
                        <p className="text-xs text-gray-400 whitespace-pre-line leading-relaxed border-l-2 border-gray-700 pl-2">{c.solution}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'guru' && (
        <div>
          {/* Guru code from previous iteration remains the same */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-100">Daftar Pengajar Aktif</h2>
            <button 
              onClick={() => setShowAddTeacher(!showAddTeacher)}
              className="bg-cyber-warning hover:bg-yellow-600 text-black px-4 py-2 rounded font-bold flex items-center transition-colors text-sm"
            >
              <UserPlus size={16} className="mr-2" />
              Tambah Akun Guru
            </button>
          </div>

          {showAddTeacher && (
            <div className="bg-cyber-dark border border-gray-800 p-6 rounded-lg mb-8 max-w-xl">
              <h2 className="text-lg font-bold text-gray-200 mb-4 flex items-center">
                <Key size={18} className="mr-2 text-cyber-neon" />
                Registrasi Guru Baru
              </h2>
              <form onSubmit={handleAddTeacher} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Nama Lengkap</label>
                    <input required type="text" value={newTName} onChange={e=>setNewTName(e.target.value)} className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-1.5 text-gray-100" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1">Username</label>
                    <input required type="text" value={newTUsername} onChange={e=>setNewTUsername(e.target.value)} className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-1.5 text-gray-100" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">Password</label>
                  <input required type="password" value={newTPassword} onChange={e=>setNewTPassword(e.target.value)} className="w-full bg-gray-900 border border-gray-700 rounded px-3 py-1.5 text-gray-100" />
                </div>
                <button type="submit" className="bg-cyber-neon hover:bg-cyan-400 text-black font-bold py-1.5 px-4 rounded text-sm">Daftarkan Guru</button>
              </form>
            </div>
          )}

          <div className="bg-cyber-dark rounded-lg border border-gray-800 overflow-x-auto">
            <table className="w-full text-left whitespace-nowrap">
              <thead className="bg-gray-900 text-gray-400">
                <tr>
                  <th className="px-6 py-4 font-medium">Nama Guru</th>
                  <th className="px-6 py-4 font-medium">Username</th>
                  <th className="px-6 py-4 font-medium">Status Akun</th>
                  <th className="px-6 py-4 font-medium text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {teachers.map(t => (
                  <tr key={t.id} className="hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-200">
                      {t.name} {t.id === currentUser.id && <span className="text-xs ml-2 text-cyber-neon">(Anda)</span>}
                    </td>
                    <td className="px-6 py-4 text-gray-400">@{t.username}</td>
                    <td className="px-6 py-4">
                      {t.isActive ? (
                        <span className="px-2 py-1 bg-green-500/10 text-green-400 rounded text-xs font-bold">Aktif</span>
                      ) : (
                        <span className="px-2 py-1 bg-red-500/10 text-red-400 rounded text-xs font-bold">Nonaktif</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right space-x-3">
                      <button onClick={() => handleEditTeacher(t)} className="text-gray-400 hover:text-cyber-primary" title="Edit Nama"><Edit size={18} /></button>
                      <button onClick={() => handleToggleStatus(t.id, t.isActive)} className={t.isActive ? "text-gray-400 hover:text-cyber-warning" : "text-gray-400 hover:text-cyber-success"} title={t.isActive ? "Nonaktifkan Sementara" : "Aktifkan Kembali"}>
                        {t.isActive ? <PowerOff size={18} /> : <Power size={18} />}
                      </button>
                      <button onClick={() => handleDeleteTeacher(t.id)} className="text-gray-400 hover:text-red-500" title="Hapus Permanen"><Trash2 size={18} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherDashboard;
