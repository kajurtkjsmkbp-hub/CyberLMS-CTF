import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Challenges from './pages/Challenges';
import Login from './pages/Login';
import TeacherDashboard from './pages/TeacherDashboard';
import TeacherChallenges from './pages/TeacherChallenges';
import BattleArena from './pages/BattleArena';
import { initDB, getCurrentUser } from './utils/db';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initDB();
    const storedUser = getCurrentUser();
    if (storedUser) setUser(storedUser);
    setLoading(false);
  }, []);

  if (loading) return <div className="min-h-screen bg-cyber-darker text-white flex justify-center items-center">Memuat Sistem...</div>;

  return (
    <Router>
      <div className="min-h-screen bg-cyber-darker text-gray-200 font-sans flex flex-col">
        <Navbar user={user} onLogout={() => setUser(null)} />
        <main className="flex-1 pb-10">
          <Routes>
            <Route 
              path="/login" 
              element={!user ? <Login onLogin={setUser} /> : <Navigate to="/" />} 
            />
            
            <Route 
              path="/" 
              element={
                !user ? <Navigate to="/login" /> : 
                user.role === 'teacher' ? <TeacherDashboard /> : 
                <Dashboard user={user} />
              } 
            />
            
            <Route 
              path="/challenges" 
              element={
                !user ? <Navigate to="/login" /> : 
                user.role === 'student' ? <Challenges user={user} /> : 
                <Navigate to="/" />
              } 
            />

            <Route 
              path="/battle" 
              element={
                !user ? <Navigate to="/login" /> : 
                user.role === 'student' ? <BattleArena /> : 
                <Navigate to="/" />
              } 
            />

            <Route 
              path="/answer-key" 
              element={
                !user ? <Navigate to="/login" /> : 
                user.role === 'teacher' ? <TeacherChallenges /> : 
                <Navigate to="/" />
              } 
            />
          </Routes>
        </main>

        <footer className="w-full border-t border-gray-800/60 bg-cyber-dark/30 py-6 mt-auto backdrop-blur-sm">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-500 text-sm font-medium tracking-wide">
              &copy; {new Date().getFullYear()} <span className="text-cyber-neon font-bold">CyberLMS CTF Platform</span>. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs mt-2 uppercase tracking-widest">
              Designed & Engineered by <span className="text-gray-400 font-bold">Adiningtyas Yuli Purwanto, S.Kom</span>
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
