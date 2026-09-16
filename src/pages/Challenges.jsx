import React, { useState, useEffect } from 'react';
import { challenges } from '../data/challenges';
import { Flag, TerminalSquare, AlertTriangle, CheckCircle, Server, BookOpen, Skull } from 'lucide-react';
import TerminalLab from '../components/TerminalLab';
import { updateStudentProgress, updateCurrentActivity, getRevealedGuides, getDynamicPoints, getChallengeStats } from '../utils/db';

const Challenges = ({ user }) => {
  const [filter, setFilter] = useState('All');
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [flagInput, setFlagInput] = useState('');
  const [status, setStatus] = useState(null);
  const [revealedGuides, setRevealedGuides] = useState([]);
  const [showSolution, setShowSolution] = useState(false);

  const [solvedIds, setSolvedIds] = useState([]);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  useEffect(() => {
    const progressData = JSON.parse(localStorage.getItem('progress'))?.[user.id] || { solved: [] };
    const ids = progressData.solved.map(s => typeof s === 'object' ? s.id : s);
    setSolvedIds(ids);
  }, [refreshTrigger, user.id]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRevealedGuides(getRevealedGuides());
      setRefreshTrigger(prev => prev + 1); // trigger re-render for dynamic points
    }, 5000);
    setRevealedGuides(getRevealedGuides());
    return () => clearInterval(interval);
  }, []);

  const filteredChallenges = filter === 'All' 
    ? challenges 
    : challenges.filter(c => c.difficulty === filter);

  const handleSelect = (c) => {
    setSelectedChallenge(c);
    setStatus(null);
    setFlagInput('');
    setShowSolution(false);
    updateCurrentActivity(user.id, c.title);
  };

  const handleSolve = (e) => {
    e.preventDefault();
    if (flagInput.trim() === selectedChallenge.flag) {
      setStatus('success');
      updateStudentProgress(user.id, selectedChallenge.id, selectedChallenge.points);
      setRefreshTrigger(prev => prev + 1);
    } else {
      setStatus('error');
    }
  };

  const hasGuideRevealed = selectedChallenge && revealedGuides.includes(selectedChallenge.id);

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row gap-8">
      <div className="flex-1 space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-cyber-dark/50 p-4 sm:p-6 rounded-xl border border-gray-800">
          <div>
            <h1 className="text-3xl font-black text-white">Training Grounds</h1>
            <p className="text-sm text-gray-400 mt-1">Pilih misi untuk memulai simulasi peretasan.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {['All', 'Easy', 'Medium', 'Hard', 'Very Hard'].map(lvl => (
              <button 
                key={lvl}
                onClick={() => setFilter(lvl)}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                  filter === lvl ? 'bg-cyber-primary text-white shadow-[0_0_10px_rgba(6,182,212,0.4)]' : 'bg-gray-900 border border-gray-700 text-gray-400 hover:text-white hover:border-gray-500'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredChallenges.map(c => {
            const isSolved = solvedIds.includes(c.id);
            const isRevealed = revealedGuides.includes(c.id);
            const isSelected = selectedChallenge?.id === c.id;
            const currentPts = getDynamicPoints(c.id);
            const stats = getChallengeStats(c.id);
            
            return (
              <div 
                key={c.id} 
                onClick={() => handleSelect(c)}
                className={`group border p-5 rounded-xl cursor-pointer transition-all flex flex-col justify-between min-h-[140px] ${
                  isSelected 
                    ? 'bg-cyber-dark border-cyber-neon shadow-[0_0_15px_rgba(34,211,238,0.2)]' 
                    : isSolved 
                      ? 'bg-green-900/10 border-green-900/30 opacity-75 hover:opacity-100' 
                      : 'bg-gray-900/40 border-gray-800 hover:bg-gray-800/60 hover:border-gray-600'
                }`}
              >
                <div>
                  <div className="flex justify-between items-start gap-3 mb-3">
                    <h3 className={`text-lg font-bold leading-tight ${isSolved ? 'text-green-500' : 'text-gray-100'} line-clamp-2`}>
                      {isSolved && <CheckCircle size={18} className="inline mr-2 -mt-1" />}
                      {c.title}
                    </h3>
                    <div className="bg-gray-950 border border-gray-800 px-3 py-1 rounded-md shadow-inner flex-shrink-0 flex flex-col items-center">
                      <span className="text-cyber-warning font-mono font-black text-sm whitespace-nowrap">{currentPts} pts</span>
                      {stats.solves.length > 0 && <span className="text-[9px] text-gray-500">Solved: {stats.solves.length}</span>}
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-2 mt-auto pt-2 border-t border-gray-800/50 group-hover:border-gray-700/50 transition-colors">
                  <span className={`px-2.5 py-1 rounded-md text-xs font-black uppercase tracking-wider ${
                    c.difficulty === 'Easy' ? 'text-green-400 bg-green-400/10 border border-green-400/20' :
                    c.difficulty === 'Medium' ? 'text-yellow-400 bg-yellow-400/10 border border-yellow-400/20' :
                    c.difficulty === 'Hard' ? 'text-orange-400 bg-orange-400/10 border border-orange-400/20' :
                    'text-red-400 bg-red-400/10 border border-red-400/20'
                  }`}>
                    {c.difficulty}
                  </span>
                  <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">{c.category}</span>
                  
                  <div className="ml-auto flex items-center gap-2">
                    {stats.firstBlood && (
                      <span className="flex items-center text-red-500 bg-red-900/20 px-2 py-1 rounded border border-red-900/50 text-xs font-bold" title="Telah dipecahkan pertama kali (First Blood)">
                        <Skull size={12} className="mr-1" /> FB
                      </span>
                    )}
                    {c.requiresLab && (
                      <span className="flex items-center text-cyber-neon bg-cyan-900/20 px-2 py-1 rounded border border-cyan-900/50 text-xs font-bold" title="Requires Virtual Lab">
                        <Server size={12} className="mr-1" /> Lab
                      </span>
                    )}
                    {isRevealed && (
                      <span className="flex items-center text-blue-400 bg-blue-900/20 px-2 py-1 rounded border border-blue-900/50 text-xs font-bold" title="Panduan Tersedia">
                        <BookOpen size={12} className="mr-1" /> Hint
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Sidebar Detail */}
      <div className="w-full lg:w-1/2 bg-cyber-dark border border-gray-800 rounded-lg p-6 h-fit lg:sticky top-24 max-h-[85vh] overflow-y-auto custom-scrollbar">
        {selectedChallenge ? (
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2 text-cyber-neon">
                <TerminalSquare size={24} />
                <h2 className="text-xl font-bold">Challenge Briefing</h2>
              </div>
              {hasGuideRevealed && (
                <button 
                  onClick={() => setShowSolution(!showSolution)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded flex items-center text-sm font-bold shadow-[0_0_10px_rgba(37,99,235,0.3)] transition-colors"
                >
                  <BookOpen size={16} className="mr-2" />
                  {showSolution ? 'Sembunyikan Panduan' : 'Lihat Panduan Guru'}
                </button>
              )}
            </div>
            
            <h3 className="text-2xl font-bold text-gray-100 mb-2">{selectedChallenge.title}</h3>
            
            <div className="flex items-center space-x-3 mb-6 border-b border-gray-800 pb-4">
              <span className="text-sm font-mono text-gray-400">{getDynamicPoints(selectedChallenge.id)} Points</span>
              <span className="text-gray-600">•</span>
              <span className="text-sm text-gray-400">{selectedChallenge.category}</span>
            </div>

            <div className="prose prose-invert max-w-none mb-8">
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">{selectedChallenge.description}</p>
              
              <div className="mt-4 p-4 bg-gray-900 rounded border border-gray-800 border-l-4 border-l-cyber-warning">
                <p className="text-sm text-gray-400 font-semibold mb-1 flex items-center"><AlertTriangle size={16} className="mr-2" /> Hint</p>
                <p className="text-gray-300 text-sm">{selectedChallenge.hint}</p>
              </div>

              {hasGuideRevealed && showSolution && (
                <div className="mt-4 p-5 bg-blue-900/20 rounded border border-blue-800 border-l-4 border-l-blue-500 animate-fade-in">
                  <p className="text-sm text-blue-400 font-bold mb-3 flex items-center border-b border-blue-900/50 pb-2">
                    <BookOpen size={16} className="mr-2" /> Panduan Langkah demi Langkah dari Guru
                  </p>
                  <p className="text-gray-300 text-sm whitespace-pre-line leading-relaxed">{selectedChallenge.solution}</p>
                </div>
              )}
            </div>

            {selectedChallenge.requiresLab && selectedChallenge.labEnvironment && (
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-gray-400 mb-2 flex items-center">
                  <Server size={16} className="mr-2" /> Virtual Lab Environment
                </h4>
                <TerminalLab env={selectedChallenge.labEnvironment} />
              </div>
            )}

            {solvedIds.includes(selectedChallenge.id) ? (
              <div className="p-4 bg-green-500/10 border border-green-500 text-green-400 rounded text-center">
                <CheckCircle size={32} className="mx-auto mb-2" />
                <p className="font-bold">Challenge Completed!</p>
                <p className="text-sm">You have already secured the flag.</p>
              </div>
            ) : (
              <form onSubmit={handleSolve} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Submit Flag</label>
                  <div className="flex">
                    <div className="bg-gray-900 border border-gray-700 border-r-0 rounded-l px-3 py-2 flex items-center">
                      <Flag size={18} className="text-gray-500" />
                    </div>
                    <input 
                      type="text" 
                      value={flagInput}
                      onChange={(e) => setFlagInput(e.target.value)}
                      placeholder="CTF{...}"
                      className="flex-1 bg-gray-900 border border-gray-700 rounded-r px-4 py-2 text-gray-100 focus:outline-none focus:border-cyber-primary"
                    />
                  </div>
                </div>
                <button type="submit" className="w-full bg-cyber-primary hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors">
                  Submit Flag
                </button>

                {status === 'success' && (
                  <div className="mt-4 p-3 bg-green-500/20 border border-green-500 text-green-400 rounded flex items-center space-x-2">
                    <CheckCircle size={18} />
                    <span>Correct flag! Points awarded.</span>
                  </div>
                )}
                {status === 'error' && (
                  <div className="mt-4 p-3 bg-red-500/20 border border-red-500 text-red-400 rounded flex items-center space-x-2">
                    <AlertTriangle size={18} />
                    <span>Incorrect flag. Try again.</span>
                  </div>
                )}
              </form>
            )}
          </div>
        ) : (
          <div className="text-center text-gray-500 py-12">
            <TerminalSquare size={48} className="mx-auto mb-4 opacity-50" />
            <p>Select a challenge from the list to view details and submit flags.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Challenges;
