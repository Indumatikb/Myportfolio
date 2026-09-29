import React, { useState, useEffect } from 'react';
import { ArrowRight, FileText, Sparkles, Code2, MapPin, Copy, Check, GraduationCap } from 'lucide-react';
import './Hero.css';

// Rotating animated roles for title
const ROLES = [
  "Computer Science Engineering Student",
  "Aspiring Software Developer",
  "Full-Stack Web Enthusiast",
  "Passionate Problem Solver"
];

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [isCopied, setIsCopied] = useState(false);

  // Typewriter effect loop
  useEffect(() => {
    const handleTyping = () => {
      const fullText = ROLES[currentRoleIndex];

      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        setTypingSpeed(85);

        if (displayText === fullText) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setTypingSpeed(40);

        if (displayText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, typingSpeed]);

  const handleCopyProfile = () => {
    const profileSummary = `Indumati Kallanagoud Biradar | CSE Student & Software Developer | indumatibiradar.dev@gmail.com`;
    navigator.clipboard.writeText(profileSummary);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2200);
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Hero Content */}
        <div className="hero-content">
          <div className="hero-badge">
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
            I’m a Computer Science Engineering student who thrives on learning by building. 
            Currently sharpening my skills across <strong>JavaScript, React, Java, Python</strong>, 
            and foundational computer science principles. Aiming to build impactful, dependable software.
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
            <span className="meta-divider">•</span>
            <span className="meta-item">
              <GraduationCap size={14} /> CSE Class of 2027
            </span>
          </div>
        </div>

        {/* Right Column: Sleek Modern Developer Code Showcase */}
        <div className="hero-visual">
          <div className="code-window glass-panel">
            {/* Window Top Bar */}
            <div className="code-header">
              <div className="window-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="editor-tab">
                <Code2 size={13} className="tab-icon" />
                <span className="tab-filename">developer.js</span>
              </div>
              <button 
                onClick={handleCopyProfile} 
                className="copy-code-btn"
                title="Copy developer details"
                aria-label="Copy developer summary"
              >
                {isCopied ? (
                  <>
                    <Check size={13} className="text-emerald" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Code Editor Body */}
            <div className="code-editor-body">
              <div className="code-lines">
                <div className="code-line-row">
                  <span className="line-num">1</span>
                  <span className="code-token token-keyword">const</span>
                  <span className="code-token token-var"> developer</span>
                  <span className="code-token token-op"> =</span>
                  <span className="code-token token-bracket"> &#123;</span>
                </div>
                <div className="code-line-row">
                  <span className="line-num">2</span>
                  <span className="code-indent">  </span>
                  <span className="code-token token-key">name</span>
                  <span className="code-token token-op">:</span>
                  <span className="code-token token-str"> "Indumati Kallanagoud Biradar"</span>
                  <span className="code-token token-comma">,</span>
                </div>
                <div className="code-line-row">
                  <span className="line-num">3</span>
                  <span className="code-indent">  </span>
                  <span className="code-token token-key">education</span>
                  <span className="code-token token-op">:</span>
                  <span className="code-token token-str"> "B.E. in Computer Science"</span>
                  <span className="code-token token-comma">,</span>
                </div>
                <div className="code-line-row">
                  <span className="line-num">4</span>
                  <span className="code-indent">  </span>
                  <span className="code-token token-key">expectedGraduation</span>
                  <span className="code-token token-op">:</span>
                  <span className="code-token token-num"> 2027</span>
                  <span className="code-token token-comma">,</span>
                </div>
                <div className="code-line-row">
                  <span className="line-num">5</span>
                  <span className="code-indent">  </span>
                  <span className="code-token token-key">location</span>
                  <span className="code-token token-op">:</span>
                  <span className="code-token token-str"> "Karnataka, India"</span>
                  <span className="code-token token-comma">,</span>
                </div>
                <div className="code-line-row">
                  <span className="line-num">6</span>
                  <span className="code-indent">  </span>
                  <span className="code-token token-key">languages</span>
                  <span className="code-token token-op">:</span>
                  <span className="code-token token-bracket"> [</span>
                  <span className="code-token token-str">"JavaScript"</span>
                  <span className="code-token token-comma">, </span>
                  <span className="code-token token-str">"Java"</span>
                  <span className="code-token token-comma">, </span>
                  <span className="code-token token-str">"Python"</span>
                  <span className="code-token token-bracket">]</span>
                  <span className="code-token token-comma">,</span>
                </div>
                <div className="code-line-row">
                  <span className="line-num">7</span>
                  <span className="code-indent">  </span>
                  <span className="code-token token-key">webFrameworks</span>
                  <span className="code-token token-op">:</span>
                  <span className="code-token token-bracket"> [</span>
                  <span className="code-token token-str">"React"</span>
                  <span className="code-token token-comma">, </span>
                  <span className="code-token token-str">"REST APIs"</span>
                  <span className="code-token token-comma">, </span>
                  <span className="code-token token-str">"Vite"</span>
                  <span className="code-token token-bracket">]</span>
                  <span className="code-token token-comma">,</span>
                </div>
                <div className="code-line-row">
                  <span className="line-num">8</span>
                  <span className="code-indent">  </span>
                  <span className="code-token token-key">coreCS</span>
                  <span className="code-token token-op">:</span>
                  <span className="code-token token-bracket"> [</span>
                  <span className="code-token token-str">"Data Structures"</span>
                  <span className="code-token token-comma">, </span>
                  <span className="code-token token-str">"OOP"</span>
                  <span className="code-token token-comma">, </span>
                  <span className="code-token token-str">"DBMS"</span>
                  <span className="code-token token-bracket">]</span>
                  <span className="code-token token-comma">,</span>
                </div>
                <div className="code-line-row">
                  <span className="line-num">9</span>
                  <span className="code-indent">  </span>
                  <span className="code-token token-key">openForOpportunities</span>
                  <span className="code-token token-op">:</span>
                  <span className="code-token token-bool"> true</span>
                  <span className="code-token token-comma">,</span>
                </div>
                <div className="code-line-row">
                  <span className="line-num">10</span>
                  <span className="code-indent">  </span>
                  <span className="code-token token-key">motto</span>
                  <span className="code-token token-op">:</span>
                  <span className="code-token token-str"> "Learn. Build. Break. Fix. Repeat."</span>
                </div>
                <div className="code-line-row">
                  <span className="line-num">11</span>
                  <span className="code-token token-bracket">&#125;</span>
                  <span className="code-token token-op">;</span>
                </div>
              </div>
            </div>

            {/* Window Status Bar */}
            <div className="code-status-bar">
              <div className="status-left">
                <span className="status-badge-dot"></span>
                <span>UTF-8</span>
                <span className="status-sep">•</span>
                <span>JavaScript</span>
              </div>
              <div className="status-right">
                <span className="text-emerald">● Ready to Build</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
