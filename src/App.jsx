import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Challenges from './pages/Challenges';
import TeacherDashboard from './pages/TeacherDashboard';
import TeacherChallenges from './pages/TeacherChallenges';
import Login from './pages/Login';
import { getCurrentUser, initDB } from './utils/db';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initDB();
    setUser(getCurrentUser());
    setLoading(false);
  }, []);

  if (loading) return null;

  if (!user) {
    return <Login onLogin={(u) => setUser(u)} />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-cyber-darker text-gray-200">
        <Navbar user={user} onLogout={() => setUser(null)} />
        <main className="pb-12">
          <Routes>
            {user.role === 'teacher' ? (
              <>
                <Route path="/" element={<TeacherDashboard />} />
                <Route path="/teacher-challenges" element={<TeacherChallenges />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </>
            ) : (
              <>
                <Route path="/" element={<Dashboard user={user} />} />
                <Route path="/challenges" element={<Challenges user={user} />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </>
            )}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
