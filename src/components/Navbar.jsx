import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { TerminalSquare, Target, Shield, LogOut, LayoutDashboard, Database, Swords } from 'lucide-react';
import { logout } from '../utils/db';

const Navbar = ({ user, onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    onLogout();
    navigate('/login');
  };

  return (
    <nav className="bg-cyber-dark border-b border-gray-800 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="bg-cyber-primary/10 p-2 rounded-lg group-hover:bg-cyber-primary/20 transition-colors border border-cyber-primary/30">
            <TerminalSquare className="text-cyber-neon" size={28} />
          </div>
          <div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              CyberLMS <span className="text-cyber-primary">CTF</span>
            </span>
          </div>
        </Link>
        
        <div className="flex items-center space-x-6">
          {user && user.role === 'student' && (
            <>
              <Link to="/" className={`flex items-center text-sm font-semibold transition-colors ${location.pathname === '/' ? 'text-cyber-neon' : 'text-gray-400 hover:text-white'}`}>
                <LayoutDashboard size={18} className="mr-2" />
                Dashboard
              </Link>
              <Link to="/challenges" className={`flex items-center text-sm font-semibold transition-colors ${location.pathname === '/challenges' ? 'text-cyber-neon' : 'text-gray-400 hover:text-white'}`}>
                <Target size={18} className="mr-2" />
                Training Grounds
              </Link>
              <Link to="/battle" className={`flex items-center text-sm font-bold transition-colors ${location.pathname === '/battle' ? 'text-red-500' : 'text-red-500/60 hover:text-red-400'}`}>
                <Swords size={18} className="mr-2" />
                Battle Arena
              </Link>
            </>
          )}

          {user && user.role === 'teacher' && (
            <>
              <Link to="/" className={`flex items-center text-sm font-semibold transition-colors ${location.pathname === '/' ? 'text-cyber-neon' : 'text-gray-400 hover:text-white'}`}>
                <LayoutDashboard size={18} className="mr-2" />
                Teacher Dashboard
              </Link>
              <Link to="/answer-key" className={`flex items-center text-sm font-semibold transition-colors ${location.pathname === '/answer-key' ? 'text-cyber-neon' : 'text-gray-400 hover:text-white'}`}>
                <Database size={18} className="mr-2" />
                Database Soal
              </Link>
            </>
          )}

          {user ? (
            <div className="flex items-center space-x-4 border-l border-gray-700 pl-6 ml-2">
              <div className="flex flex-col items-end">
                <span className="text-sm font-bold text-gray-200">{user.name}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${user.role === 'teacher' ? 'bg-cyber-warning/20 text-cyber-warning border border-cyber-warning/30' : 'bg-gray-800 text-gray-400 border border-gray-700'}`}>
                  {user.role === 'teacher' ? 'Instructor' : 'Recruit'}
                </span>
              </div>
              <button 
                onClick={handleLogout}
                className="text-gray-400 hover:text-cyber-danger transition-colors p-2 hover:bg-red-500/10 rounded-lg"
                title="Log Out"
              >
                <LogOut size={20} />
              </button>
            </div>
          ) : (
            <Link to="/login" className="flex items-center text-gray-300 hover:text-white font-semibold">
              <Shield size={18} className="mr-2" />
              Agent Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
