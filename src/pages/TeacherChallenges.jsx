import React, { useState, useEffect } from 'react';
import { challenges } from '../data/challenges';
import { Key, ShieldCheck, HelpCircle, Eye, EyeOff } from 'lucide-react';
import { getRevealedGuides, toggleRevealedGuide } from '../utils/db';

const TeacherChallenges = () => {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [revealedGuides, setRevealedGuides] = useState([]);

  useEffect(() => {
    setRevealedGuides(getRevealedGuides());
  }, []);

  const handleToggleGuide = (id) => {
    const updatedGuides = toggleRevealedGuide(id);
    setRevealedGuides(updatedGuides);
  };

  let filtered = filter === 'All' ? challenges : challenges.filter(c => c.difficulty === filter);
  if (searchTerm) {
    filtered = filtered.filter(c => c.title.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-100 flex items-center">
            <ShieldCheck className="mr-3 text-cyber-success" size={32} />
            Bank Soal & Kunci Jawaban
          </h1>
          <p className="text-gray-400 mt-2">Hanya dapat diakses oleh akun Guru. Kelola visibilitas panduan solusi ke siswa secara selektif.</p>
        </div>
      </div>

      <div className="flex space-x-4 mb-6">
        <input 
          type="text" 
          placeholder="Cari judul soal..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-gray-900 border border-gray-700 rounded px-4 py-2 text-gray-100 flex-1 focus:outline-none focus:border-cyber-primary"
        />
        <select 
          value={filter} 
          onChange={(e) => setFilter(e.target.value)}
          className="bg-gray-900 border border-gray-700 rounded px-4 py-2 text-gray-100 focus:outline-none"
        >
          <option value="All">Semua Tingkat</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
          <option value="Very Hard">Very Hard</option>
        </select>
      </div>

      <div className="space-y-4">
        {filtered.map(c => {
          const isRevealed = revealedGuides.includes(c.id);
          return (
            <div key={c.id} className="bg-cyber-dark border border-gray-800 rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-200">{c.title}</h3>
                  <div className="flex items-center space-x-3 mt-1 text-sm">
                    <span className={`px-2 py-0.5 rounded font-bold ${
                      c.difficulty === 'Easy' ? 'text-green-400 bg-green-400/10' :
                      c.difficulty === 'Medium' ? 'text-yellow-400 bg-yellow-400/10' :
                      c.difficulty === 'Hard' ? 'text-orange-400 bg-orange-400/10' :
                      'text-red-400 bg-red-400/10'
                    }`}>
                      {c.difficulty}
                    </span>
                    <span className="text-gray-500">{c.category}</span>
                    <span className="text-gray-400 font-mono">{c.points} pts</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-3">
                  <div className="bg-gray-900 px-4 py-2 rounded border border-gray-700 text-right">
                    <p className="text-xs text-gray-500 mb-1">Kunci Jawaban (Flag):</p>
                    <code className="text-cyber-neon font-bold select-all">{c.flag}</code>
                  </div>
                  
                  <button 
                    onClick={() => handleToggleGuide(c.id)}
                    className={`flex items-center px-4 py-2 rounded text-sm font-bold transition-all ${
                      isRevealed 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-[0_0_10px_rgba(37,99,235,0.4)]' 
                      : 'bg-gray-800 hover:bg-gray-700 text-gray-400 border border-gray-700'
                    }`}
                  >
                    {isRevealed ? (
                      <><Eye size={16} className="mr-2" /> Panduan Terlihat oleh Siswa</>
                    ) : (
                      <><EyeOff size={16} className="mr-2" /> Panduan Disembunyikan</>
                    )}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-1">Deskripsi Soal:</h4>
                  <p className="text-gray-300 text-sm">{c.description}</p>
                  
                  <h4 className="text-sm font-semibold text-gray-400 mt-3 mb-1">Hint / Petunjuk:</h4>
                  <p className="text-gray-400 text-sm italic">{c.hint}</p>
                </div>
                <div className="bg-gray-900/50 p-4 rounded border border-gray-800 border-l-4 border-l-cyber-success">
                  <h4 className="text-sm font-bold text-cyber-success mb-2 flex items-center">
                    <HelpCircle size={16} className="mr-2" />
                    Penjelasan & Solusi Detail
                  </h4>
                  <div className="text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">
                    {c.solution}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeacherChallenges;
