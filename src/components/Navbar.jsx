import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Terminal, Shield, Trophy, LogOut } from 'lucide-react';
import { logout } from '../utils/db';

const Navbar = ({ user, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    onLogout();
    navigate('/');
  };

  return (
    <nav className="bg-cyber-dark border-b border-gray-800 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2 text-cyber-neon font-bold text-xl">
          <Terminal size={24} />
          <span>CyberLMS CTF</span>
        </div>
        
        {user && (
          <div className="space-x-6 flex items-center">
            {user.role === 'student' ? (
              <>
                <Link to="/" className="text-gray-300 hover:text-cyber-neon transition-colors">Dashboard</Link>
                <Link to="/challenges" className="text-gray-300 hover:text-cyber-neon transition-colors">Challenges</Link>
              </>
            ) : (
              <>
                <Link to="/" className="text-gray-300 hover:text-cyber-neon transition-colors">Dashboard Guru</Link>
                <Link to="/teacher-challenges" className="text-gray-300 hover:text-cyber-neon transition-colors">Bank Soal & Kunci</Link>
              </>
            )}

            <div className={`flex items-center space-x-2 text-sm px-3 py-1 rounded border ${
              user.role === 'teacher' 
                ? 'bg-cyber-warning/10 text-cyber-warning border-cyber-warning/30' 
                : 'bg-cyber-primary/10 text-cyber-primary border-cyber-primary/30'
            }`}>
              <Shield size={16} />
              <span>{user.name} ({user.role})</span>
            </div>

            <button onClick={handleLogout} className="text-gray-400 hover:text-red-400 transition-colors" title="Logout">
              <LogOut size={20} />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
