import { challenges } from '../data/challenges';

export const initDB = () => {
  if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify([]));
  }
  if (!localStorage.getItem('progress')) {
    localStorage.setItem('progress', JSON.stringify({}));
  }
};

export const registerStudent = (username, password, name) => {
  const users = JSON.parse(localStorage.getItem('users'));
  if (users.find(u => u.username === username)) return false;
  
  const newUser = { id: 's_' + Date.now(), username, password, name, role: 'student' };
  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));
  return true;
};

export const registerTeacher = (username, password, name) => {
  const users = JSON.parse(localStorage.getItem('users'));
  if (users.find(u => u.username === username)) return false;
  
  const newUser = { id: 't_' + Date.now(), username, password, name, role: 'teacher', isActive: true };
  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));
  return true;
};

export const login = (username, password) => {
  const users = JSON.parse(localStorage.getItem('users'));
  const user = users.find(u => u.username === username && u.password === password);
  
  if (user) {
    if (user.role === 'teacher' && user.isActive === false) {
      throw new Error('Akun dinonaktifkan sementara');
    }
    localStorage.setItem('currentUser', JSON.stringify(user));
    return user;
  }
  return null;
};

export const logout = () => {
  localStorage.removeItem('currentUser');
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('currentUser'));
};

export const getAllStudentsProgress = () => {
  const users = JSON.parse(localStorage.getItem('users')).filter(u => u.role === 'student');
  const progress = JSON.parse(localStorage.getItem('progress'));
  
  return users.map(u => ({
    ...u,
    progress: progress[u.id] || { points: 0, solved: [], current: null }
  }));
};

export const updateStudentProgress = (studentId, challengeId, points) => {
  const progress = JSON.parse(localStorage.getItem('progress'));
  if (!progress[studentId]) progress[studentId] = { points: 0, solved: [], current: null };
  
  if (!progress[studentId].solved.includes(challengeId)) {
    progress[studentId].solved.push(challengeId);
    progress[studentId].points += points;
    localStorage.setItem('progress', JSON.stringify(progress));
  }
};

export const updateCurrentActivity = (studentId, challengeTitle) => {
  const progress = JSON.parse(localStorage.getItem('progress'));
  if (!progress[studentId]) progress[studentId] = { points: 0, solved: [], current: null };
  
  progress[studentId].current = challengeTitle;
  localStorage.setItem('progress', JSON.stringify(progress));
};

export const getAllTeachers = () => {
  return JSON.parse(localStorage.getItem('users')).filter(u => u.role === 'teacher');
};

export const updateTeacher = (teacherId, updates) => {
  let users = JSON.parse(localStorage.getItem('users'));
  let index = users.findIndex(u => u.id === teacherId);
  if (index !== -1) {
    users[index] = { ...users[index], ...updates };
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  }
  return false;
};

export const deleteTeacher = (teacherId) => {
  let users = JSON.parse(localStorage.getItem('users'));
  users = users.filter(u => u.id !== teacherId);
  localStorage.setItem('users', JSON.stringify(users));
};

// --- BATTLE ARENA CONFIGURATION ---
export const getBattleConfig = () => JSON.parse(localStorage.getItem('battleConfig') || '{"isActive":false,"endTime":0,"durationMinutes":0,"challenges":[]}');
export const setBattleConfig = (config) => localStorage.setItem('battleConfig', JSON.stringify(config));

export const getBattleProgress = () => JSON.parse(localStorage.getItem('battleProgress') || '{}');
export const getStudentBattleProgress = (studentId) => {
  const bp = getBattleProgress();
  return bp[studentId] || { points: 0, solved: [] };
};
export const updateBattleProgress = (studentId, challengeId, points) => {
  let bp = getBattleProgress();
  if (!bp[studentId]) bp[studentId] = { points: 0, solved: [] };
  if (!bp[studentId].solved.includes(challengeId)) {
    bp[studentId].solved.push(challengeId);
    bp[studentId].points += points;
    localStorage.setItem('battleProgress', JSON.stringify(bp));
    return true;
  }
  return false;
};
export const clearBattleProgress = () => localStorage.setItem('battleProgress', JSON.stringify({}));

// --- GUIDE / HINT REVEAL CONFIGURATION ---
export const getRevealedGuides = () => JSON.parse(localStorage.getItem('revealedGuides') || '[]');
export const toggleRevealedGuide = (challengeId) => {
  let guides = getRevealedGuides();
  if (guides.includes(challengeId)) {
    guides = guides.filter(id => id !== challengeId);
  } else {
    guides.push(challengeId);
  }
  localStorage.setItem('revealedGuides', JSON.stringify(guides));
  return guides;
};
