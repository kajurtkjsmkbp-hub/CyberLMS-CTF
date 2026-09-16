import React, { useState, useEffect } from 'react';
import { challenges } from '../data/challenges';
import { Flag, TerminalSquare, AlertTriangle, CheckCircle, Server } from 'lucide-react';
import TerminalLab from '../components/TerminalLab';
import { updateStudentProgress, setCurrentWorkingChallenge } from '../utils/db';

const Challenges = ({ user }) => {
  const [filter, setFilter] = useState('All');
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [flagInput, setFlagInput] = useState('');
  const [status, setStatus] = useState(null);
  
  // Track locally solved to disable inputs if already solved
  const progressData = JSON.parse(localStorage.getItem('progress') || '{}')[user.id] || { solved: [] };
  const [solvedIds, setSolvedIds] = useState(progressData.solved);

  const filteredChallenges = filter === 'All' 
    ? challenges 
    : challenges.filter(c => c.difficulty === filter);

  const handleSelect = (c) => {
    setSelectedChallenge(c);
    setStatus(null);
    setFlagInput('');
    setCurrentWorkingChallenge(user.id, c.title);
  };

  const handleSolve = (e) => {
    e.preventDefault();
    if (flagInput.trim() === selectedChallenge.flag) {
      setStatus('success');
      updateStudentProgress(user.id, selectedChallenge.id, selectedChallenge.points);
      if (!solvedIds.includes(selectedChallenge.id)) {
        setSolvedIds([...solvedIds, selectedChallenge.id]);
      }
    } else {
      setStatus('error');
    }
  };

  return (
    <div className="container mx-auto p-6 flex gap-6">
      <div className="flex-1 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-100">Training Grounds</h1>
          <div className="flex space-x-2">
            {['All', 'Easy', 'Medium', 'Hard', 'Very Hard'].map(lvl => (
              <button 
                key={lvl}
                onClick={() => setFilter(lvl)}
                className={`px-4 py-2 rounded text-sm font-semibold transition-colors ${
                  filter === lvl ? 'bg-cyber-primary text-white' : 'bg-cyber-dark text-gray-400 hover:bg-gray-800'
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
            return (
              <div 
                key={c.id} 
                onClick={() => handleSelect(c)}
                className={`bg-cyber-dark border p-5 rounded-lg cursor-pointer transition-all ${
                  selectedChallenge?.id === c.id ? 'border-cyber-neon shadow-[0_0_10px_rgba(34,211,238,0.2)]' : 'border-gray-800 hover:border-gray-600'
                } ${isSolved ? 'opacity-70' : ''}`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className={`text-lg font-bold ${isSolved ? 'text-green-500' : 'text-gray-200'}`}>
                    {isSolved && <CheckCircle size={16} className="inline mr-2" />}
                    {c.title}
                  </h3>
                  <span className="text-gray-400 font-mono text-sm">{c.points} pts</span>
                </div>
                <div className="flex items-center space-x-3 text-sm mt-2">
                  <span className={`px-2 py-0.5 rounded font-bold ${
                    c.difficulty === 'Easy' ? 'text-green-400 bg-green-400/10' :
                    c.difficulty === 'Medium' ? 'text-yellow-400 bg-yellow-400/10' :
                    c.difficulty === 'Hard' ? 'text-orange-400 bg-orange-400/10' :
                    'text-red-400 bg-red-400/10'
                  }`}>
                    {c.difficulty}
                  </span>
                  <span className="text-gray-500">{c.category}</span>
                  {c.requiresLab && (
                    <span className="flex items-center text-cyber-neon ml-auto" title="Requires Virtual Lab">
                      <Server size={14} className="mr-1" /> Lab
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Sidebar Detail */}
      <div className="w-1/2 bg-cyber-dark border border-gray-800 rounded-lg p-6 h-fit sticky top-24 max-h-[85vh] overflow-y-auto">
        {selectedChallenge ? (
          <div>
            <div className="flex items-center space-x-2 text-cyber-neon mb-4">
              <TerminalSquare size={24} />
              <h2 className="text-xl font-bold">Challenge Briefing</h2>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-100 mb-2">{selectedChallenge.title}</h3>
            
            <div className="flex items-center space-x-3 mb-6 border-b border-gray-800 pb-4">
              <span className="text-sm font-mono text-gray-400">{selectedChallenge.points} Points</span>
              <span className="text-gray-600">•</span>
              <span className="text-sm text-gray-400">{selectedChallenge.category}</span>
            </div>

            <div className="prose prose-invert max-w-none mb-8">
              <p className="text-gray-300 leading-relaxed">{selectedChallenge.description}</p>
              
              <div className="mt-4 p-4 bg-gray-900 rounded border border-gray-800 border-l-4 border-l-cyber-warning">
                <p className="text-sm text-gray-400 font-semibold mb-1 flex items-center"><AlertTriangle size={16} className="mr-2" /> Hint</p>
                <p className="text-gray-300 text-sm">{selectedChallenge.hint}</p>
              </div>
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
