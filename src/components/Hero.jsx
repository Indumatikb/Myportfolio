import React, { useState, useEffect } from 'react';
import { ArrowRight, FileText, Terminal, Sparkles, Code2, MapPin, Play, CornerDownLeft } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  // Rotating animated roles
  const roles = [
    "Computer Science Student",
    "Future Software Developer",
    "Full-Stack Web Enthusiast",
    "Problem Solver & Builder"
  ];
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Terminal interactive state
  const [terminalHistory, setTerminalHistory] = useState([
    { type: 'cmd', text: 'cat profile.json' },
    { 
      type: 'output', 
      text: JSON.stringify({
        name: "Indumati Kallanagoud Biradar",
        role: "CSE Student",
        goal: "Future Software Developer",
        motto: "Learn. Build. Break. Fix. Repeat.",
        skills: ["JavaScript", "Java", "Python", "React", "CS Core"]
      }, null, 2)
    }
  ]);
  const [inputVal, setInputVal] = useState('');

  // Typing effect loop
  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[currentRoleIndex];

      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        setTypingSpeed(90);

        if (displayText === fullText) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setTypingSpeed(45);

        if (displayText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, typingSpeed]);

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    let response = '';

    if (trimmed === 'clear') {
      setTerminalHistory([]);
      setInputVal('');
      return;
    } else if (trimmed === 'help') {
      response = 'Available commands: profile, skills, projects, contact, clear, motto';
    } else if (trimmed === 'profile') {
      response = 'Indumati Kallanagoud Biradar | B.E. in Computer Science & Engineering | Aspiring Software Developer';
    } else if (trimmed === 'skills') {
      response = 'Languages: JavaScript, Java, Python, C/C++\nWeb: React, HTML5, CSS3, REST APIs\nCore: Data Structures, OOP, DBMS';
    } else if (trimmed === 'projects') {
      response = '1. EventLedger (Django REST + React)\n2. Interactive Portfolio (Vite + React)\n3. Algorithm Visualizer (JS + Canvas)';
    } else if (trimmed === 'contact') {
      response = 'Email: indumatibiradar.dev@gmail.com | Location: Karnataka, India';
    } else if (trimmed === 'motto') {
      response = '"Learn. Build. Break. Fix. Repeat."';
    } else if (trimmed === '') {
      return;
    } else {
      response = `command not found: ${trimmed}. Type 'help' for commands.`;
    }

    setTerminalHistory(prev => [
      ...prev,
      { type: 'cmd', text: cmd },
      { type: 'output', text: response }
    ]);
    setInputVal('');
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge animate-fade-in">
            <Sparkles size={14} className="badge-icon" />
            <span>Open to Internships & Opportunities</span>
          </div>
          
          <p className="hero-subtitle">HELLO, I'M INDU 👋</p>
          
          <h1 className="hero-title">
            <span className="name-highlight">Indumati Kallanagoud Biradar</span>
            <span className="role-subtext-container">
              <span className="role-typing-text">{displayText}</span>
              <span className="typing-cursor-accent"></span>
            </span>
          </h1>

          <div className="tagline-pill">
            <Code2 size={16} className="tagline-icon" />
            <span>"Learn. Build. Break. Fix. Repeat."</span>
          </div>
          
          <p className="hero-description">
            I’m a Computer Science Engineering student who enjoys learning by building. 
            Currently strengthening my skills in JavaScript, Java, Python, web development, 
            and core computer science concepts. Aiming to grow as a <strong>Future Software Developer</strong>.
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary" id="hero-view-work">
              Explore Projects <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </a>
            <a href="#contact" className="btn btn-outline" id="hero-contact-me">
              Get in Touch
            </a>
            <a href="#about" className="btn btn-ghost" id="hero-read-more">
              <FileText size={16} style={{ marginRight: '6px' }} /> About Me
            </a>
          </div>

          <div className="hero-meta">
            <span className="meta-item">
              <span className="pulse-beacon"></span> Available for projects
            </span>
            <span className="meta-divider">•</span>
            <span className="meta-item">
              <MapPin size={14} /> Karnataka, India
            </span>
          </div>
        </div>

        {/* Interactive Developer Terminal Mockup */}
        <div className="hero-visual">
          <div className="terminal-window glass-panel">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="terminal-title">
                <Terminal size={14} /> indumati@portfolio:~ (Interactive)
              </div>
            </div>

            {/* Quick Action Chips for Terminal */}
            <div className="terminal-quick-cmds">
              <span className="quick-label">Try:</span>
              {['skills', 'projects', 'contact', 'motto', 'clear'].map(cmd => (
                <button 
                  key={cmd}
                  onClick={() => handleCommand(cmd)}
                  className="quick-cmd-btn"
                  title={`Run '${cmd}' command`}
                >
                  {cmd}
                </button>
              ))}
            </div>

            <div className="terminal-body" id="hero-terminal-scroll">
              {terminalHistory.map((item, index) => (
                <div key={index} className="terminal-entry">
                  {item.type === 'cmd' ? (
                    <div className="code-line">
                      <span className="cmd-prompt">indumati@portfolio:~$</span>
                      <span className="cmd-text">{item.text}</span>
                    </div>
                  ) : (
                    <pre className="code-content">{item.text}</pre>
                  )}
                </div>
              ))}

              <div className="code-line terminal-input-line">
                <span className="cmd-prompt">indumati@portfolio:~$</span>
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={onKeyDown}
                  placeholder="type 'help' or click above..."
                  className="terminal-inline-input"
                  aria-label="Terminal command input"
                />
                <button 
                  onClick={() => handleCommand(inputVal)}
                  className="terminal-send-btn"
                  title="Run command"
                  aria-label="Execute command"
                >
                  <CornerDownLeft size={12} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
