import { challenges as allChallenges } from '../data/challenges';

export const initDB = () => {
  if (!localStorage.getItem('users')) localStorage.setItem('users', JSON.stringify([]));
  if (!localStorage.getItem('teams')) localStorage.setItem('teams', JSON.stringify([]));
  if (!localStorage.getItem('progress')) localStorage.setItem('progress', JSON.stringify({}));
  if (!localStorage.getItem('challengeStats')) localStorage.setItem('challengeStats', JSON.stringify({}));
};

// --- USERS & TEAMS ---
export const registerStudent = (username, password, name) => {
  const users = JSON.parse(localStorage.getItem('users'));
  if (users.find(u => u.username === username)) return false;
  users.push({ id: 's_' + Date.now(), username, password, name, role: 'student', teamId: null, badges: [] });
  localStorage.setItem('users', JSON.stringify(users));
  return true;
};

export const registerTeacher = (username, password, name) => {
  const users = JSON.parse(localStorage.getItem('users'));
  if (users.find(u => u.username === username)) return false;
  users.push({ id: 't_' + Date.now(), username, password, name, role: 'teacher', isActive: true });
  localStorage.setItem('users', JSON.stringify(users));
  return true;
};

export const login = (username, password) => {
  const users = JSON.parse(localStorage.getItem('users'));
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    if (user.isActive === false) throw new Error('Akun dinonaktifkan sementara');
    localStorage.setItem('currentUser', JSON.stringify(user));
    return user;
  }
  return null;
};
export const logout = () => localStorage.removeItem('currentUser');
export const getCurrentUser = () => JSON.parse(localStorage.getItem('currentUser'));

// Teams CRUD
export const getTeams = () => JSON.parse(localStorage.getItem('teams'));
export const createTeam = (name) => {
  const teams = getTeams();
  const id = 'team_' + Date.now();
  teams.push({ id, name, members: [] });
  localStorage.setItem('teams', JSON.stringify(teams));
  return id;
};
export const assignStudentToTeam = (studentId, teamId) => {
  let users = JSON.parse(localStorage.getItem('users'));
  const userIdx = users.findIndex(u => u.id === studentId);
  if (userIdx !== -1) {
    users[userIdx].teamId = teamId;
    localStorage.setItem('users', JSON.stringify(users));
  }
};

export const updateStudent = (studentId, updates) => {
  let users = JSON.parse(localStorage.getItem('users'));
  let index = users.findIndex(u => u.id === studentId);
  if (index !== -1) {
    users[index] = { ...users[index], ...updates };
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  }
  return false;
};

export const deleteStudent = (studentId) => {
  let users = JSON.parse(localStorage.getItem('users'));
  users = users.filter(u => u.id !== studentId);
  localStorage.setItem('users', JSON.stringify(users));
};

// --- DYNAMIC SCORING & PROGRESS ---
export const getBasePoints = (id) => allChallenges.find(c => c.id === id)?.points || 10;
export const getChallengeCategory = (id) => allChallenges.find(c => c.id === id)?.category || '';

export const getDynamicPoints = (challengeId) => {
  const stats = JSON.parse(localStorage.getItem('challengeStats')) || {};
  const solveCount = stats[challengeId]?.solves?.length || 0;
  const base = getBasePoints(challengeId);
  // Decay by 2% per solve, minimum 50%
  const decay = Math.floor(base * (solveCount * 0.02));
  return Math.max(Math.floor(base * 0.5), base - decay);
};

export const getStudentStats = (studentId) => {
  const progress = JSON.parse(localStorage.getItem('progress')) || {};
  const stats = JSON.parse(localStorage.getItem('challengeStats')) || {};
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(u => u.id === studentId);
  const p = progress[studentId] || { solved: [] };
  
  let totalPoints = 0;
  let firstBloodCount = 0;
  
  p.solved.forEach(s => {
    const chalId = typeof s === 'object' ? s.id : s;
    const pts = getDynamicPoints(chalId);
    if (!isNaN(pts)) totalPoints += pts;
    
    if (stats[chalId]?.firstBlood === studentId) {
      const bonus = Math.floor(getBasePoints(chalId) * 0.1);
      if (!isNaN(bonus)) totalPoints += bonus;
      firstBloodCount++;
    }
  });
  
  return { totalPoints, solveCount: p.solved.length, firstBloodCount, badges: user?.badges || [] };
};

export const getTeamStats = () => {
  const users = JSON.parse(localStorage.getItem('users')).filter(u => u.role === 'student');
  const teams = getTeams();
  
  return teams.map(t => {
    const members = users.filter(u => u.teamId === t.id);
    const score = members.reduce((sum, u) => sum + getStudentStats(u.id).totalPoints, 0);
    return { ...t, score, members: members.map(m => m.name) };
  });
};

export const getAllStudentsProgress = () => {
  const users = JSON.parse(localStorage.getItem('users')).filter(u => u.role === 'student');
  return users.map(u => ({
    ...u,
    stats: getStudentStats(u.id)
  }));
};

const evaluateBadges = (studentId) => {
  let users = JSON.parse(localStorage.getItem('users'));
  const userIdx = users.findIndex(u => u.id === studentId);
  if (userIdx === -1) return;
  const user = users[userIdx];
  let badges = user.badges || [];
  
  const progress = JSON.parse(localStorage.getItem('progress')) || {};
  const p = progress[studentId] || { solved: [] };
  
  const solvedCategories = p.solved.map(s => {
    const chalId = typeof s === 'object' ? s.id : s;
    return getChallengeCategory(chalId);
  });
  const stats = getStudentStats(studentId);

  // Gamification Rules
  if (!badges.includes('First Blood 🩸') && stats.firstBloodCount >= 1) badges.push('First Blood 🩸');
  if (!badges.includes('Web Master 🕸️') && solvedCategories.filter(c => c.includes('Web')).length >= 5) badges.push('Web Master 🕸️');
  if (!badges.includes('Crypto Guru 🔐') && solvedCategories.filter(c => c.includes('Crypto')).length >= 5) badges.push('Crypto Guru 🔐');
  if (!badges.includes('Pwn God 💀') && solvedCategories.filter(c => c.includes('Binary') || c.includes('Pwn')).length >= 5) badges.push('Pwn God 💀');
  if (!badges.includes('Centurion 💯') && p.solved.length >= 100) badges.push('Centurion 💯');

  users[userIdx].badges = badges;
  localStorage.setItem('users', JSON.stringify(users));
  // if currently logged in user, update session
  const cu = getCurrentUser();
  if (cu && cu.id === studentId) localStorage.setItem('currentUser', JSON.stringify(users[userIdx]));
};

export const updateStudentProgress = (studentId, challengeId, basePointsIgnored) => {
  let progress = JSON.parse(localStorage.getItem('progress'));
  let stats = JSON.parse(localStorage.getItem('challengeStats'));
  if (!progress[studentId]) progress[studentId] = { solved: [], current: null };
  if (!stats[challengeId]) stats[challengeId] = { solves: [], firstBlood: null };
  
  const hasSolved = progress[studentId].solved.find(s => (typeof s === 'object' ? s.id : s) === challengeId);
  if (!hasSolved) {
    const timestamp = Date.now();
    // Record solve
    progress[studentId].solved.push({ id: challengeId, timestamp });
    stats[challengeId].solves.push({ studentId, timestamp });
    
    // Check First Blood
    if (!stats[challengeId].firstBlood) {
      stats[challengeId].firstBlood = studentId;
    }
    
    localStorage.setItem('progress', JSON.stringify(progress));
    localStorage.setItem('challengeStats', JSON.stringify(stats));
    
    // Evaluate Badges
    evaluateBadges(studentId);
  }
};

export const updateCurrentActivity = (studentId, challengeTitle) => {
  let progress = JSON.parse(localStorage.getItem('progress'));
  if (!progress[studentId]) progress[studentId] = { solved: [], current: null };
  progress[studentId].current = challengeTitle;
  localStorage.setItem('progress', JSON.stringify(progress));
};

export const getChallengeStats = (challengeId) => {
  const stats = JSON.parse(localStorage.getItem('challengeStats')) || {};
  return stats[challengeId] || { solves: [], firstBlood: null };
};

// Teacher management
export const getAllTeachers = () => JSON.parse(localStorage.getItem('users')).filter(u => u.role === 'teacher');
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
  return bp[studentId] || { points: 0, solved: [], firstBloods: 0 };
};
export const updateBattleProgress = (studentId, challengeId, basePointsIgnored) => {
  // Battle arena has separate dynamic scoring mechanics, simplified
  let bp = getBattleProgress();
  if (!bp[studentId]) bp[studentId] = { points: 0, solved: [], firstBloods: 0 };
  
  if (!bp[studentId].solved.includes(challengeId)) {
    // Determine dynamic points in battle
    const allPlayers = Object.values(bp);
    const solveCount = allPlayers.filter(p => p.solved.includes(challengeId)).length;
    const base = getBasePoints(challengeId);
    
    let earned = Math.max(Math.floor(base * 0.5), base - Math.floor(base * (solveCount * 0.05))); // Faster decay in battle (5%)
    
    // First Blood in Battle
    if (solveCount === 0) {
      earned += Math.floor(base * 0.2); // 20% bonus in battle
      bp[studentId].firstBloods += 1;
    }

    bp[studentId].solved.push(challengeId);
    bp[studentId].points += earned;
    localStorage.setItem('battleProgress', JSON.stringify(bp));
    return { success: true, earned, isFirstBlood: solveCount === 0 };
  }
  return { success: false };
};
export const clearBattleProgress = () => localStorage.setItem('battleProgress', JSON.stringify({}));

// --- GUIDE / HINT REVEAL CONFIGURATION ---
export const getRevealedGuides = () => JSON.parse(localStorage.getItem('revealedGuides') || '[]');
export const toggleRevealedGuide = (challengeId) => {
  let guides = getRevealedGuides();
  if (guides.includes(challengeId)) guides = guides.filter(id => id !== challengeId);
  else guides.push(challengeId);
  localStorage.setItem('revealedGuides', JSON.stringify(guides));
  return guides;
};
