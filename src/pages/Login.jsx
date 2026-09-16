import React, { useState } from 'react';
import { Terminal, Shield, UserPlus } from 'lucide-react';
import { login, registerStudent } from '../utils/db';

const Login = ({ onLogin }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (isRegister) {
      const success = registerStudent(username, password, name);
      if (success) {
        setIsRegister(false);
        setUsername('');
        setPassword('');
        alert('Registrasi siswa berhasil! Silakan login.');
      } else {
        setError('Username sudah digunakan!');
      }
    } else {
      try {
        const user = login(username, password);
        if (user) {
          onLogin(user);
        } else {
          setError('Username atau password salah!');
        }
      } catch (err) {
        setError(err.message);
      }
    }
  };

  return (
    <div className="min-h-screen bg-cyber-darker flex items-center justify-center p-4">
      <div className="bg-cyber-dark border border-gray-800 p-8 rounded-lg w-full max-w-md shadow-2xl relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-neon to-transparent opacity-50"></div>
        <div className="flex flex-col items-center mb-8">
          <Terminal size={48} className="text-cyber-neon mb-2" />
          <h1 className="text-2xl font-bold text-gray-100">CyberLMS CTF</h1>
          <p className="text-gray-500 text-sm">{isRegister ? 'Pendaftaran Siswa Baru' : 'Secure Login Portal'}</p>
        </div>

        {error && <div className="bg-red-500/10 border border-red-500 text-red-400 p-3 rounded mb-4 text-sm text-center">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {isRegister && (
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Nama Lengkap</label>
              <input 
                type="text" 
                required 
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-2 text-gray-100 focus:outline-none focus:border-cyber-primary"
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Username</label>
            <input 
              type="text" 
              required 
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-2 text-gray-100 focus:outline-none focus:border-cyber-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Password</label>
            <input 
              type="password" 
              required 
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-2 text-gray-100 focus:outline-none focus:border-cyber-primary"
            />
          </div>
          <button type="submit" className="w-full bg-cyber-primary hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors flex justify-center items-center">
            {isRegister ? <UserPlus size={18} className="mr-2"/> : <Shield size={18} className="mr-2"/>}
            {isRegister ? 'Daftar Siswa' : 'Akses Sistem'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          {isRegister ? (
            <p>Sudah punya akun? <span className="text-cyber-neon cursor-pointer hover:underline" onClick={() => setIsRegister(false)}>Login di sini</span></p>
          ) : (
            <p>Belum punya akun siswa? <span className="text-cyber-neon cursor-pointer hover:underline" onClick={() => setIsRegister(true)}>Daftar di sini</span></p>
          )}
          {!isRegister && <p className="mt-4 text-xs text-gray-600 border-t border-gray-800 pt-4">Guru masuk melalui portal ini juga (default: guru / password).</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
