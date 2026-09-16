import React, { useState, useEffect } from 'react';
import { getAllStudentsProgress, registerTeacher, getAllTeachers, updateTeacher, deleteTeacher, getCurrentUser } from '../utils/db';
import { challenges } from '../data/challenges';
import { Users, UserPlus, BookOpen, Key, Edit, Trash2, PowerOff, Power, CheckCircle2, Trophy, Medal } from 'lucide-react';

const TeacherDashboard = () => {
  const [activeTab, setActiveTab] = useState('siswa');
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  
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
  };

  useEffect(() => {
    loadData();
  }, []);

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
    const challenge = challenges.find(c => c.id === id);
    return challenge ? challenge.title : 'Unknown Challenge';
  };

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-100 flex items-center">
            <Users className="mr-3 text-cyber-warning" size={32} />
            Teacher Dashboard
          </h1>
          <p className="text-gray-400 mt-2">Kelola siswa, pantau peringkat, dan akses antar pengajar.</p>
        </div>
      </div>

      <div className="flex space-x-4 border-b border-gray-800 pb-2">
        <button 
          onClick={() => setActiveTab('siswa')} 
          className={`pb-2 px-2 font-bold text-lg transition-colors ${activeTab === 'siswa' ? 'text-cyber-neon border-b-2 border-cyber-neon' : 'text-gray-500 hover:text-gray-300'}`}
        >
          Progres & Peringkat Siswa
        </button>
        <button 
          onClick={() => setActiveTab('guru')} 
          className={`pb-2 px-2 font-bold text-lg transition-colors ${activeTab === 'guru' ? 'text-cyber-neon border-b-2 border-cyber-neon' : 'text-gray-500 hover:text-gray-300'}`}
        >
          Manajemen Guru
        </button>
      </div>

      {activeTab === 'siswa' && (
        <div>
          <div className="bg-cyber-dark rounded-lg border border-gray-800 overflow-x-auto">
            <table className="w-full text-left whitespace-nowrap">
              <thead className="bg-gray-900 text-gray-400">
                <tr>
                  <th className="px-6 py-4 font-medium min-w-[200px]">Peringkat</th>
                  <th className="px-6 py-4 font-medium">Nama Siswa</th>
                  <th className="px-6 py-4 font-medium">Poin Terkumpul</th>
                  <th className="px-6 py-4 font-medium">Sedang Mengerjakan</th>
                  <th className="px-6 py-4 font-medium min-w-[300px]">Detail Soal Selesai</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {students.length === 0 ? (
                  <tr><td colSpan="5" className="px-6 py-8 text-center text-gray-500">Belum ada siswa yang terdaftar.</td></tr>
                ) : (
                  students.map((s, index) => {
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
                          {s.progress.current ? (
                            <span className="text-cyber-warning flex items-center text-sm">
                              <BookOpen size={14} className="mr-2" /> {s.progress.current}
                            </span>
                          ) : (
                            <span className="text-gray-500 text-sm">Sedang offline / idle</span>
                          )}
                        </td>
                        <td className="px-6 py-4">
                          {s.progress.solved.length === 0 ? (
                            <span className="text-gray-600 text-sm italic">Belum ada soal diselesaikan</span>
                          ) : (
                            <div className="flex flex-wrap gap-2 max-w-md">
                              {s.progress.solved.map(id => (
                                <div key={id} className="flex items-center bg-green-500/10 border border-green-500/30 text-green-400 px-2 py-1 rounded text-xs">
                                  <CheckCircle2 size={12} className="mr-1 flex-shrink-0" />
                                  <span className="truncate max-w-[150px]" title={getChallengeTitle(id)}>
                                    {getChallengeTitle(id)}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'guru' && (
        <div>
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
                  <th className="px-6 py-4 font-medium">Online/Offline</th>
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
                    <td className="px-6 py-4">
                      {t.id === currentUser.id ? (
                        <span className="flex items-center text-cyber-neon text-sm"><div className="w-2 h-2 rounded-full bg-cyber-neon mr-2 animate-pulse"></div> Online</span>
                      ) : (
                        <span className="flex items-center text-gray-500 text-sm"><div className="w-2 h-2 rounded-full bg-gray-500 mr-2"></div> Offline</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right space-x-3">
                      <button onClick={() => handleEditTeacher(t)} className="text-gray-400 hover:text-cyber-primary" title="Edit Nama">
                        <Edit size={18} />
                      </button>
                      <button 
                        onClick={() => handleToggleStatus(t.id, t.isActive)} 
                        className={t.isActive ? "text-gray-400 hover:text-cyber-warning" : "text-gray-400 hover:text-cyber-success"} 
                        title={t.isActive ? "Nonaktifkan Sementara" : "Aktifkan Kembali"}
                      >
                        {t.isActive ? <PowerOff size={18} /> : <Power size={18} />}
                      </button>
                      <button onClick={() => handleDeleteTeacher(t.id)} className="text-gray-400 hover:text-red-500" title="Hapus Permanen">
                        <Trash2 size={18} />
                      </button>
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
