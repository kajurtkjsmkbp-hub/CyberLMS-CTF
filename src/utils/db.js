export const initDB = () => {
  if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify([
      { id: 't1', username: 'guru', password: 'password', role: 'teacher', name: 'Master Teacher', isActive: true }
    ]));
  }
  if (!localStorage.getItem('progress')) {
    localStorage.setItem('progress', JSON.stringify({}));
  }
};

export const login = (username, password) => {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    if (user.isActive === false) {
      throw new Error('Akun dinonaktifkan sementara.');
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

export const registerStudent = (username, password, name) => {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  if (users.find(u => u.username === username)) return false; // Username taken
  
  const newUser = { id: 's_' + Date.now(), username, password, name, role: 'student', isActive: true };
  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));
  
  // Init progress
  const progress = JSON.parse(localStorage.getItem('progress') || '{}');
  progress[newUser.id] = { points: 0, solved: [], current: null };
  localStorage.setItem('progress', JSON.stringify(progress));
  
  return true;
};

export const registerTeacher = (username, password, name) => {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  if (users.find(u => u.username === username)) return false;
  
  users.push({ id: 't_' + Date.now(), username, password, name, role: 'teacher', isActive: true });
  localStorage.setItem('users', JSON.stringify(users));
  return true;
};

export const getAllTeachers = () => {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  return users.filter(u => u.role === 'teacher');
};

export const updateTeacher = (id, updates) => {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const index = users.findIndex(u => u.id === id);
  if (index > -1) {
    users[index] = { ...users[index], ...updates };
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  }
  return false;
};

export const deleteTeacher = (id) => {
  let users = JSON.parse(localStorage.getItem('users') || '[]');
  users = users.filter(u => u.id !== id);
  localStorage.setItem('users', JSON.stringify(users));
};

export const getAllStudentsProgress = () => {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const progress = JSON.parse(localStorage.getItem('progress') || '{}');
  
  return users.filter(u => u.role === 'student').map(student => {
    return {
      ...student,
      progress: progress[student.id] || { points: 0, solved: [], current: null }
    };
  });
};

export const updateStudentProgress = (studentId, challengeId, points) => {
  const progress = JSON.parse(localStorage.getItem('progress') || '{}');
  if (!progress[studentId]) progress[studentId] = { points: 0, solved: [], current: null };
  
  if (!progress[studentId].solved.includes(challengeId)) {
    progress[studentId].solved.push(challengeId);
    progress[studentId].points += points;
  }
  localStorage.setItem('progress', JSON.stringify(progress));
};

export const setCurrentWorkingChallenge = (studentId, challengeTitle) => {
  const progress = JSON.parse(localStorage.getItem('progress') || '{}');
  if (!progress[studentId]) progress[studentId] = { points: 0, solved: [], current: null };
  
  progress[studentId].current = challengeTitle;
  localStorage.setItem('progress', JSON.stringify(progress));
};
