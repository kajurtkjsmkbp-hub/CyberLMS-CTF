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
      <div className="min-h-screen bg-cyber-darker text-gray-200 font-sans">
        <Navbar user={user} onLogout={() => setUser(null)} />
        <main>
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
      </div>
    </Router>
  );
}

export default App;
