import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Send, Play, Sparkles, Check, Copy } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import './InteractiveTerminal.css';

const COMMANDS = {
  help: {
    description: 'List all available terminal commands',
    action: () => [
      'Available Commands:',
      '  • bio        - Who is Indumati Kallanagoud Biradar?',
      '  • skills     - Core programming languages & web technologies',
      '  • project    - Deep dive into featured project (EventLedger)',
      '  • education  - Academic degrees & coursework',
      '  • motto      - Engineering philosophy & mindset',
      '  • contact    - Get email, location, and social links',
      '  • hire       - Reasons to bring Indumati on your engineering team',
      '  • clear      - Clear terminal screen'
    ]
  },
  bio: {
    description: 'Quick bio about Indumati',
    action: () => [
      '┌─ INDUMATI KALLANAGOUD BIRADAR ─────────────────────────────┐',
      '│ Role: Computer Science Engineering Student & Aspiring Dev  │',
      '│ Degree: B.E. in Computer Science & Engineering (2023–2027) │',
      '│ Location: Karnataka, India                                 │',
      '│ Focus: Full-Stack Web, Algorithmic Thinking, Dependable Dev│',
      '└────────────────────────────────────────────────────────────┘',
      'Driven by curiosity, structured logic, and turning code into impactful products.'
    ]
  },
  skills: {
    description: 'List technical skills & stack',
    action: () => [
      'CORE PROGRAMMING LANGUAGES:',
      '  ► Python    : [||||||||||] Data structures, scripting, logic',
      '  ► Java      : [||||||||||] OOP, classes, collections, backend',
      '  ► C         : [||||||||  ] Pointers, memory concepts, algorithms',
      '  ► JavaScript: [||||||||||] Modern ES6+, DOM, async workflows',
      '',
      'WEB & TOOLS:',
      '  ► HTML5 & CSS3 : Flexbox, Grid, Glassmorphism, Responsive UI',
      '  ► Frameworks   : React, Vite, Component Design',
      '  ► Dev Workflow : Git, GitHub, VS Code, Linux terminal'
    ]
  },
  project: {
    description: 'Featured project info',
    action: () => [
      '★ FEATURED PROJECT: EventLedger (eventledger.me)',
      '  Status  : Live in Production',
      '  Type    : Full-Stack Event Management & Tracking Platform',
      '  Stack   : React, Modern JavaScript, CSS3, REST APIs',
      '  Impact  : Engineered for real student-focused event logistics.',
      '  URL     : https://eventledger.me/  (Click to open in browser)'
    ]
  },
  education: {
    description: 'Academic background',
    action: () => [
      '1. Bachelor of Engineering (B.E.) in CSE',
      '   Visvesvaraya Technological University (VTU) affiliated | 2023 – 2027',
      '   Status: Currently Pursuing with focus on Core CS & Software Dev',
      '',
      '2. Pre-University Course (PUC 12th) - Science Stream',
      '   Vision Girls PU College, Bangalore | Completed',
      '',
      '3. Secondary Schooling (SSLC 10th)',
      '   Sanganbasava International Residential School, Vijayapura | Completed'
    ]
  },
  motto: {
    description: 'Engineering mindset',
    action: () => [
      'ENGINEERING MOTTO:',
      '  "Learn. Build. Break. Fix. Repeat."',
      'Every error is a lesson. Every project is an opportunity to level up.'
    ]
  },
  contact: {
    description: 'Contact coordinates',
    action: () => [
      'REACH OUT TO INDUMATI:',
      '  • Email: indumatibiradar.dev@gmail.com',
      '  • Location: Karnataka, India',
      '  • Open to: Summer Internships, Software Engineering Roles, Tech Projects'
    ]
  },
  hire: {
    description: 'Why hire Indumati?',
    action: () => [
      '🚀 WHY HIRE INDUMATI KALLANAGOUD BIRADAR:',
      '  ✔ Strong grasp of fundamentals (Python, Java, C, Web)',
      '  ✔ Proven execution: Built and shipped live startup platform (EventLedger)',
      '  ✔ Fast learner with high grit and engineering discipline',
      '  ✔ Collaborative, communicative, and passionate about clean code'
    ]
  }
};

const InteractiveTerminal = () => {
  const { themeConfig } = useTheme();
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: [
        'Welcome to Indumati DevShell v2.4 (x86_64-portfolio)',
        'Type "help" or click quick chips below to explore interactively.'
      ]
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const terminalEndRef = useRef(null);

  const executeCommand = (rawCmd) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === 'clear') {
      setHistory([]);
      return;
    }

    const commandObj = COMMANDS[cmd];
    let outputLines = [];

    if (commandObj) {
      outputLines = commandObj.action();
    } else {
      outputLines = [
        `Command not recognized: "${cmd}".`,
        'Type "help" to view all supported commands or click quick action buttons.'
      ];
    }

    setHistory((prev) => [
      ...prev,
      { type: 'input', text: rawCmd },
      { type: 'output', text: outputLines }
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    executeCommand(inputVal);
    setInputVal('');
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const quickChips = [
    { label: 'bio', cmd: 'bio' },
    { label: 'skills', cmd: 'skills' },
    { label: 'project', cmd: 'project' },
    { label: 'education', cmd: 'education' },
    { label: 'hire me', cmd: 'hire' },
    { label: 'contact', cmd: 'contact' },
    { label: 'clear', cmd: 'clear' }
  ];

  return (
    <div className="terminal-widget glass-panel">
      {/* Terminal Title Bar */}
      <div className="terminal-topbar">
        <div className="terminal-dots">
          <span className="term-dot close"></span>
          <span className="term-dot min"></span>
          <span className="term-dot max"></span>
        </div>
        <div className="terminal-title">
          <Terminal size={14} className="terminal-icon" />
          <span>indumati@portfolio: ~ (interactive shell)</span>
        </div>
        <div className="terminal-badge">
          <span className="terminal-live-beacon"></span>
          <span>ONLINE</span>
        </div>
      </div>

      {/* Quick Action Chips */}
      <div className="terminal-chips-bar">
        <span className="chips-label">Quick Commands:</span>
        <div className="chips-scroll">
          {quickChips.map((chip) => (
            <button
              key={chip.cmd}
              className="term-chip"
              onClick={() => executeCommand(chip.cmd)}
            >
              <span>${chip.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Terminal Output Area */}
      <div className="terminal-screen">
        {history.map((entry, idx) => (
          <div key={idx} className={`term-entry term-${entry.type}`}>
            {entry.type === 'input' && (
              <div className="term-prompt-line">
                <span className="term-prompt">indumati@portfolio:~$</span>
                <span className="term-cmd-text">{entry.text}</span>
              </div>
            )}
            {entry.type === 'system' && (
              <div className="term-sys-msg">
                {entry.text.map((line, lIdx) => (
                  <p key={lIdx} className="term-sys-line">{line}</p>
                ))}
              </div>
            )}
            {entry.type === 'output' && (
              <div className="term-output-block">
                {entry.text.map((line, lIdx) => (
                  <p key={lIdx} className="term-out-line">{line}</p>
                ))}
              </div>
            )}
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Input Prompt Form */}
      <form onSubmit={handleSubmit} className="terminal-input-form">
        <span className="term-prompt">indumati@portfolio:~$</span>
        <input
          type="text"
          className="term-input"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Type 'help' or click quick chips..."
          aria-label="Terminal command input"
        />
        <button type="submit" className="term-send-btn" title="Run command">
          <Send size={14} />
        </button>
      </form>
    </div>
  );
};

export default InteractiveTerminal;
