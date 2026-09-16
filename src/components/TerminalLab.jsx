import React, { useState, useRef, useEffect } from 'react';

const TerminalLab = ({ env }) => {
  const [history, setHistory] = useState([
    { type: 'system', text: `Welcome to ${env.hostname} Virtual Lab environment.` },
    { type: 'system', text: 'Type "help" to see available commands.' }
  ]);
  const [input, setInput] = useState('');
  const [currentPath, setCurrentPath] = useState(['home', env.user]);
  const [isRoot, setIsRoot] = useState(false);
  const bottomRef = useRef(null);

  const currentUser = isRoot ? 'root' : env.user;
  const prompt = `${currentUser}@${env.hostname}:${'/' + currentPath.join('/')}# `;

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const resolvePath = (pathStr) => {
    if (pathStr === '/') return [];
    if (pathStr.startsWith('/')) {
      return pathStr.split('/').filter(p => p !== '');
    }
    const newPath = [...currentPath];
    const parts = pathStr.split('/');
    for (const part of parts) {
      if (part === '..') newPath.pop();
      else if (part !== '.' && part !== '') newPath.push(part);
    }
    return newPath;
  };

  const getNode = (pathArray) => {
    let node = env.fileSystem;
    for (const part of pathArray) {
      if (node[part] === undefined) return null;
      node = node[part];
    }
    return node;
  };

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.trim();
    if (!cmd) return;

    const newHistory = [...history, { type: 'input', text: prompt + cmd }];
    const args = cmd.split(' ').filter(Boolean);
    const baseCmd = args[0];

    let output = '';

    try {
      switch (baseCmd) {
        case 'help':
          output = 'Available commands: ls, cat, cd, pwd, whoami, clear, sudo su';
          break;
        case 'pwd':
          output = '/' + currentPath.join('/');
          break;
        case 'whoami':
          output = currentUser;
          break;
        case 'clear':
          setHistory([]);
          setInput('');
          return;
        case 'sudo':
          if (args[1] === 'su') {
            setIsRoot(true);
            setCurrentPath(['root']);
            output = 'Changed privileges to root.';
          } else {
            output = 'sudo: command requires arguments (e.g. sudo su)';
          }
          break;
        case 'ls':
          const lsNode = getNode(currentPath);
          if (typeof lsNode === 'object') {
            const keys = Object.keys(lsNode);
            const showHidden = args.includes('-a') || args.includes('-la') || args.includes('-al');
            const files = keys.filter(k => showHidden ? true : !k.startsWith('.'));
            output = files.length > 0 ? files.join('  ') : '';
          } else {
            output = `ls: cannot access: Not a directory`;
          }
          break;
        case 'cd':
          const target = args[1] || `/home/${env.user}`;
          const newP = resolvePath(target);
          const cdNode = getNode(newP);
          if (cdNode && typeof cdNode === 'object') {
            setCurrentPath(newP);
          } else {
            output = `cd: ${target}: No such file or directory`;
          }
          break;
        case 'cat':
          const fileTarget = args[1];
          if (!fileTarget) {
            output = 'cat: missing operand';
            break;
          }
          let filePath = resolvePath(fileTarget);
          if (!fileTarget.startsWith('/') && !fileTarget.startsWith('..')) {
             filePath = [...currentPath, fileTarget];
          }
          const catNode = getNode(filePath);
          if (catNode === null) {
            output = `cat: ${fileTarget}: No such file or directory`;
          } else if (typeof catNode === 'object') {
            output = `cat: ${fileTarget}: Is a directory`;
          } else if (filePath[0] === 'root' && !isRoot) {
            output = `cat: ${fileTarget}: Permission denied`;
          } else {
            output = catNode;
          }
          break;
        default:
          output = `${baseCmd}: command not found`;
      }
    } catch (err) {
      output = `Error executing command: ${err.message}`;
    }

    if (output) {
      newHistory.push({ type: 'output', text: output });
    }
    
    setHistory(newHistory);
    setInput('');
  };

  return (
    <div className="bg-black text-green-400 font-mono p-4 rounded-lg h-64 overflow-y-auto border border-gray-700 shadow-inner flex flex-col">
      <div className="flex-1">
        {history.map((h, i) => (
          <div key={i} className={`whitespace-pre-wrap ${h.type === 'system' ? 'text-gray-400' : ''}`}>
            {h.text}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      <form onSubmit={handleCommand} className="flex mt-2">
        <span className="mr-2">{prompt}</span>
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent outline-none text-green-400"
          autoFocus
        />
      </form>
    </div>
  );
};

export default TerminalLab;
