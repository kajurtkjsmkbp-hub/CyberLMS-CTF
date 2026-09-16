import React, { useState, useEffect } from 'react';
import { getCurrentUser, getBattleConfig, getStudentBattleProgress, updateBattleProgress } from '../utils/db';
import { challenges as allChallenges } from '../data/challenges';
import { Swords, Clock, AlertTriangle, CheckCircle2, ShieldAlert } from 'lucide-react';
import TerminalLab from '../components/TerminalLab';

const BattleArena = () => {
  const user = getCurrentUser();
  const [config, setConfig] = useState(getBattleConfig());
  const [timeLeft, setTimeLeft] = useState(0);
  const [progress, setProgress] = useState(getStudentBattleProgress(user.id));
  
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [flagInput, setFlagInput] = useState('');
  const [status, setStatus] = useState('idle');

  // Timer logic
  useEffect(() => {
    let interval;
    if (config.isActive) {
      const updateTimer = () => {
        const now = Date.now();
        const remaining = Math.max(0, Math.floor((config.endTime - now) / 1000));
        setTimeLeft(remaining);
        
        if (remaining === 0) {
          setConfig(prev => ({ ...prev, isActive: false }));
          clearInterval(interval);
        }
      };
      
      updateTimer(); // Initial call
      interval = setInterval(updateTimer, 1000);
    }
    return () => clearInterval(interval);
  }, [config.isActive, config.endTime]);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    if (h > 0) return `${h}h ${m}m ${s}s`;
    return `${m}m ${s}s`;
  };

  if (!config.isActive && timeLeft === 0) {
    return (
      <div className="container mx-auto p-8 flex flex-col items-center justify-center min-h-[60vh] text-center">
        <Swords size={80} className="text-gray-700 mb-6" />
        <h1 className="text-4xl font-black text-gray-400 mb-2">BATTLE ARENA OFFLINE</h1>
        <p className="text-gray-500">Saat ini tidak ada kompetisi aktif. Harap tunggu instruksi dari Guru/Instruktur.</p>
      </div>
    );
  }

  // Retrieve the 50 challenges for this battle
  const battleChallenges = config.challenges.map(id => allChallenges.find(c => c.id === id)).filter(Boolean);

  const handleSolve = (e) => {
    e.preventDefault();
    if (timeLeft === 0) {
      setStatus('error');
      alert("Waktu sudah habis!");
      return;
    }

    if (flagInput.trim() === selectedChallenge.flag) {
      setStatus('success');
      updateBattleProgress(user.id, selectedChallenge.id, selectedChallenge.points);
      setProgress(getStudentBattleProgress(user.id));
      setTimeout(() => {
        setSelectedChallenge(null);
        setFlagInput('');
        setStatus('idle');
      }, 1500);
    } else {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 2000);
    }
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row gap-8">
      {/* Sidebar: Challenge List */}
      <div className="w-full lg:w-1/3 bg-cyber-dark/80 backdrop-blur-sm border border-red-900/50 rounded-2xl flex flex-col h-[80vh] overflow-hidden shadow-[0_0_30px_rgba(220,38,38,0.1)]">
        <div className="p-5 border-b border-red-900/50 bg-red-900/20 text-center">
          <h2 className="text-2xl font-black text-red-500 flex items-center justify-center uppercase tracking-widest">
            <Swords className="mr-3" size={24} /> BATTLE ARENA
          </h2>
          <div className="mt-3 inline-flex items-center bg-gray-900 px-4 py-2 rounded-full border border-gray-700">
            <Clock className={`mr-2 ${timeLeft < 300 ? 'text-red-500 animate-pulse' : 'text-cyber-neon'}`} size={20} />
            <span className={`font-mono text-xl font-bold ${timeLeft < 300 ? 'text-red-500' : 'text-white'}`}>
              {formatTime(timeLeft)}
            </span>
          </div>
          <div className="mt-2 text-sm text-gray-400 font-bold">
            Poin Battle: <span className="text-cyber-warning">{progress.points}</span>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-2 space-y-2 custom-scrollbar">
          {battleChallenges.map(c => {
            const isSolved = progress.solved.includes(c.id);
            const isSelected = selectedChallenge?.id === c.id;
            
            return (
              <button
                key={c.id}
                onClick={() => setSelectedChallenge(c)}
                className={`w-full text-left p-4 rounded-xl border transition-all flex justify-between items-center ${
                  isSolved ? 'bg-green-900/20 border-green-900/50 text-gray-400 opacity-60' :
                  isSelected ? 'bg-red-900/20 border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.2)] text-white' :
                  'bg-gray-900/50 border-gray-800 hover:border-gray-600 text-gray-300'
                }`}
              >
                <div>
                  <h3 className="font-bold truncate max-w-[200px]">{c.title}</h3>
                  <div className="flex gap-2 mt-1 text-xs">
                    <span className="text-cyber-warning font-mono">{c.points} pts</span>
                    <span className="text-gray-500">{c.difficulty}</span>
                  </div>
                </div>
                {isSolved ? <CheckCircle2 className="text-green-500" size={20} /> : <ChevronRight className="text-gray-600" size={16} />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content: Challenge Details */}
      <div className="w-full lg:w-2/3">
        {selectedChallenge ? (
          <div className="bg-cyber-dark/90 border border-gray-800 rounded-2xl p-6 lg:p-10 shadow-2xl animate-fade-in">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="px-3 py-1 text-xs font-black uppercase tracking-wider rounded-md bg-gray-800 text-gray-300 border border-gray-700">
                  {selectedChallenge.category}
                </span>
                <h2 className="text-3xl font-extrabold text-white mt-4">{selectedChallenge.title}</h2>
              </div>
              <div className="text-right">
                <span className="text-3xl font-black text-cyber-warning font-mono">{selectedChallenge.points}</span>
                <p className="text-gray-500 text-sm uppercase tracking-widest">Points</p>
              </div>
            </div>

            <div className="bg-gray-900/80 border border-gray-800 p-6 rounded-xl mb-8">
              <h3 className="text-lg font-bold text-gray-200 mb-3 border-b border-gray-800 pb-2">Deskripsi Misi</h3>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">{selectedChallenge.description}</p>
            </div>

            {selectedChallenge.requiresLab && (
              <div className="mb-8">
                <h3 className="text-lg font-bold text-cyber-neon mb-3 flex items-center">
                  <ShieldAlert size={20} className="mr-2" /> Virtual Lab Terminal
                </h3>
                <TerminalLab env={selectedChallenge.labEnvironment} />
              </div>
            )}

            {!progress.solved.includes(selectedChallenge.id) ? (
              <form onSubmit={handleSolve} className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
                <label className="block text-sm font-bold text-gray-400 mb-3 uppercase tracking-wider">Kirim Flag</label>
                <div className="flex gap-4">
                  <input
                    type="text"
                    value={flagInput}
                    onChange={(e) => setFlagInput(e.target.value)}
                    placeholder="CTF{...}"
                    className={`flex-1 bg-cyber-dark border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors ${
                      status === 'error' ? 'border-red-500 bg-red-900/10' :
                      status === 'success' ? 'border-green-500 bg-green-900/10' :
                      'border-gray-700'
                    }`}
                  />
                  <button type="submit" disabled={timeLeft === 0} className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-lg transition-colors shadow-[0_0_15px_rgba(220,38,38,0.4)]">
                    SUBMIT
                  </button>
                </div>
                {status === 'error' && <p className="text-red-400 mt-2 text-sm font-bold animate-pulse">Flag salah atau tidak valid!</p>}
                {status === 'success' && <p className="text-green-400 mt-2 text-sm font-bold animate-pulse">Flag Benar! Poin ditambahkan.</p>}
              </form>
            ) : (
              <div className="bg-green-900/20 border border-green-900/50 p-6 rounded-xl flex items-center">
                <CheckCircle2 className="text-green-500 mr-4" size={32} />
                <div>
                  <h3 className="text-xl font-bold text-green-400">Tantangan Diselesaikan</h3>
                  <p className="text-green-500/70 text-sm">Anda telah mendapatkan poin dari misi ini.</p>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full bg-cyber-dark/30 border border-gray-800/50 border-dashed rounded-2xl text-gray-500">
            <Swords size={64} className="mb-4 opacity-50" />
            <h3 className="text-xl font-bold">Pilih Misi di Sebelah Kiri</h3>
            <p>Pilih salah satu dari 50 misi untuk ditaklukkan.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BattleArena;
