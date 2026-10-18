import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Code2, MapPin, Terminal, Rocket, Check, Copy, ExternalLink, Mail } from 'lucide-react';
import { Github, Linkedin, PythonIcon, JavaIcon, JavaScriptIcon } from './Icons';
import './Hero.css';

const ROLES = [
  "Computer Science Engineering Student",
  "Aspiring Software Developer",
  "Full-Stack Web Enthusiast",
  "Algorithmic Problem Solver"
];

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(90);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const emailAddress = "indumatikbiradar@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  useEffect(() => {
    const handleTyping = () => {
      const fullText = ROLES[currentRoleIndex];

      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        setTypingSpeed(80);

        if (displayText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setTypingSpeed(35);

        if (displayText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, typingSpeed]);

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-split-grid">
          
          {/* Left Column: Narrative, Typography & CTAs */}
          <div className="hero-content-col">
            
            {/* Live Status Pill */}
            <div className="hero-badge-wrap">
              <div className="hero-badge">
                <span className="pulse-beacon"></span>
                <span className="badge-text">Available for Internships & Projects</span>
                <span className="badge-divider">•</span>
                <span className="badge-location"><MapPin size={13} /> Karnataka, India</span>
              </div>
            </div>

            {/* Main Catchy Title */}
            <div className="hero-header-group">
              <span className="hero-greeting-sub">Hello, I'm</span>
              <h1 className="hero-title">
                <span className="name-highlight">Indumati Kallanagoud Biradar</span>
              </h1>
              <div className="hero-role-wrapper">
                <span className="role-prefix">const role =</span>
                <span className="role-typing-text">"{displayText}"</span>
                <span className="typing-cursor-accent"></span>
              </div>
            </div>

            {/* Motto Badge */}
            <div className="tagline-pill">
              <Code2 size={16} className="tagline-icon" />
              <span>"Learn. Build. Break. Fix. Repeat."</span>
            </div>

            {/* Value Proposition Description */}
            <p className="hero-description">
              Computer Science Engineering student passionate about crafting dependable, high-performance software.
              Grounded in core engineering foundations in <strong>Python, Java, C, and Full-Stack Web</strong>, 
              actively building real-world platforms like <strong>EventLedger</strong> with modern architecture and clean design.
            </p>

            {/* Action Buttons */}
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary" id="hero-contact-me">
                <span>Let's Connect</span>
                <ArrowRight size={17} />
              </a>
              <a href="#projects" className="btn btn-outline" id="hero-view-project">
                <Rocket size={17} />
                <span>Featured: EventLedger</span>
              </a>
              <a href="#terminal" className="btn btn-ghost" id="hero-open-cli">
                <Terminal size={17} />
                <span>DevShell CLI</span>
              </a>
            </div>

            {/* Quick Social & Connect Bar */}
            <div className="hero-social-bar">
              <span className="social-bar-label">Quick Links:</span>
              <div className="hero-social-links">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hero-social-pill" 
                  aria-label="GitHub Profile"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hero-social-pill" 
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                </a>
                <button 
                  onClick={handleCopyEmail} 
                  className="hero-social-pill email-pill" 
                  title="Click to copy email address"
                  aria-label="Copy Email"
                >
                  <Mail size={16} />
                  <span>{copiedEmail ? 'Copied!' : emailAddress}</span>
                  {copiedEmail ? <Check size={14} className="copied-icon" /> : <Copy size={13} className="copy-icon" />}
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Developer Workspace Showcase */}
          <div className="hero-visual-col">
            <div className="developer-card-container">
              
              {/* Floating Tech Badge 1: Python */}
              <div className="floating-badge badge-python" style={{ animation: 'subtleFloat 6s ease-in-out infinite' }}>
                <PythonIcon size={24} />
                <div className="fb-text">
                  <span className="fb-name">Python & DSA</span>
                  <span className="fb-sub">Algorithmic Problem Solving</span>
                </div>
              </div>

              {/* Floating Tech Badge 2: Java */}
              <div className="floating-badge badge-java" style={{ animation: 'subtleFloat 7s ease-in-out infinite 1s' }}>
                <JavaIcon size={24} />
                <div className="fb-text">
                  <span className="fb-name">Java & OOP</span>
                  <span className="fb-sub">Object-Oriented Design</span>
                </div>
              </div>

              {/* Floating Tech Badge 3: Web Stack */}
              <div className="floating-badge badge-web" style={{ animation: 'subtleFloat 6.5s ease-in-out infinite 2s' }}>
                <JavaScriptIcon size={24} />
                <div className="fb-text">
                  <span className="fb-name">JavaScript & Web</span>
                  <span className="fb-sub">Interactive Interfaces</span>
                </div>
              </div>

              {/* Central Code Window */}
              <div className="developer-window glass-panel">
                
                {/* Window Title Bar */}
                <div className="dev-window-header">
                  <div className="window-dots">
                    <span className="dot dot-red"></span>
                    <span className="dot dot-yellow"></span>
                    <span className="dot dot-green"></span>
                  </div>
                  <div className="window-tab">
                    <Code2 size={13} className="tab-icon" />
                    <span>Indumati.config.ts</span>
                  </div>
                  <div className="window-live-pill">
                    <span className="live-dot"></span>
                    <span>ACTIVE</span>
                  </div>
                </div>

                {/* Code Body */}
                <div className="dev-code-body">
                  <pre className="code-block">
                    <code>
                      <span className="code-keyword">const</span> <span className="code-def">engineer</span> = &#123;{'\n'}
                      {'  '}<span className="code-prop">name</span>: <span className="code-str">"Indumati Kallanagoud Biradar"</span>,{'\n'}
                      {'  '}<span className="code-prop">degree</span>: <span className="code-str">"B.E. Computer Science (2027)"</span>,{'\n'}
                      {'  '}<span className="code-prop">location</span>: <span className="code-str">"Karnataka, India 📍"</span>,{'\n'}
                      {'  '}<span className="code-prop">coreStack</span>: [{'\n'}
                      {'    '}<span className="code-str">"Python"</span>, <span className="code-str">"Java"</span>, <span className="code-str">"C"</span>,{'\n'}
                      {'    '}<span className="code-str">"JavaScript"</span>, <span className="code-str">"HTML5"</span>, <span className="code-str">"CSS3"</span>{'\n'}
                      {'  '}],{'\n'}
                      {'  '}<span className="code-prop">featuredBuild</span>: <span className="code-str">"EventLedger.me"</span>,{'\n'}
                      {'  '}<span className="code-prop">mindset</span>: <span className="code-str">"Learn. Build. Break. Fix."</span>,{'\n'}
                      {'  '}<span className="code-prop">openForWork</span>: <span className="code-bool">true</span> <span className="code-comment">// Ready to contribute 🚀</span>{'\n'}
                      &#125;;
                    </code>
                  </pre>
                </div>

                {/* Window Bottom Strip */}
                <div className="dev-window-footer">
                  <div className="footer-status-item">
                    <Sparkles size={14} className="status-sparkle" />
                    <span>Focus: Scalable & Impactful Software</span>
                  </div>
                  <a href="#projects" className="footer-view-link">
                    <span>View Project</span>
                    <ExternalLink size={12} />
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
