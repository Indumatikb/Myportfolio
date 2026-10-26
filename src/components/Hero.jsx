import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Code2, 
  MapPin, 
  Terminal, 
  Rocket, 
  Check, 
  Copy, 
  ExternalLink, 
  Mail, 
  Clock, 
  Laptop,
  CheckCircle2
} from 'lucide-react';
import { Github, Linkedin, PythonIcon, JavaIcon, JavaScriptIcon } from './Icons';
import './Hero.css';

const ROLES = [
  "Computer Science Engineering Student",
  "Aspiring Software Developer",
  "Full-Stack Web Enthusiast",
  "Algorithmic Problem Solver",
  "Creator of EventLedger.me"
];

const CODE_TABS = {
  config: {
    id: 'config',
    title: 'Indumati.config.ts',
    content: `const engineer = {
  name: "Indumati Kallanagoud Biradar",
  degree: "B.E. Computer Science & Engineering",
  batch: "2023 - 2027 (VTU Affiliated)",
  location: "Karnataka, India 📍",
  status: "Open for Internships & Projects 🚀",
  coreStack: ["Python", "Java", "C", "JavaScript", "React", "SQL"],
  featuredPlatform: "EventLedger.me",
  mantra: "Learn. Build. Break. Fix. Repeat."
};`
  },
  startup: {
    id: 'startup',
    title: 'EventLedger.me',
    content: `// Flagship Startup Build: EventLedger
export const EventLedger = {
  domain: "eventledger.me",
  status: "LIVE_IN_PRODUCTION ⚡",
  category: "Campus Events & Financial Ledger",
  stack: ["React", "JavaScript", "Cloudflare Edge", "CSS3 Grid"],
  impact: "Transparent ticketing & budgets for colleges",
  liveUrl: "https://eventledger.me/"
};`
  },
  stack: {
    id: 'stack',
    title: 'CoreStack.sh',
    content: `#!/bin/bash
# Indumati's Core Engineering Arsenal
languages=("Python" "Java" "C" "JavaScript")
webFrontend=("React" "HTML5" "CSS3" "Vite")
devWorkflow=("Git & GitHub" "VS Code" "Linux CLI")

echo "Ready to build scalable, resilient software."`
  }
};

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(85);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeTab, setActiveTab] = useState('config');
  const [currentTime, setCurrentTime] = useState('');

  const emailAddress = "indumatikbiradar@gmail.com";

  // Real-time IST Clock for Karnataka, India
  useEffect(() => {
    const updateIST = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateIST();
    const interval = setInterval(updateIST, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  // Role Typewriter Effect
  useEffect(() => {
    const handleTyping = () => {
      const fullText = ROLES[currentRoleIndex];

      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        setTypingSpeed(75);

        if (displayText === fullText) {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setTypingSpeed(30);

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
            
            {/* Live Status & Clock Pill */}
            <div className="hero-badge-wrap">
              <div className="hero-badge">
                <span className="pulse-beacon"></span>
                <span className="badge-text">Available for Internships & Projects</span>
                <span className="badge-divider">•</span>
                <span className="badge-location">
                  <MapPin size={13} /> Karnataka, IN
                </span>
                {currentTime && (
                  <>
                    <span className="badge-divider">•</span>
                    <span className="badge-clock">
                      <Clock size={12} /> {currentTime} IST
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Main Catchy Title */}
            <div className="hero-header-group">
              <span className="hero-greeting-sub">Hi, I'm</span>
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
              <Code2 size={15} className="tagline-icon" />
              <span>"Learn. Build. Break. Fix. Repeat."</span>
            </div>

            {/* Value Proposition Description */}
            <p className="hero-description">
              Computer Science Engineering student crafting dependable, high-performance web platforms and algorithmic software.
              Rooted in core CS fundamentals in <strong>Python, Java, C, and Full-Stack Web</strong>, and creator of <strong>EventLedger.me</strong>, an active live startup platform.
            </p>

            {/* Action Buttons */}
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary" id="hero-view-project">
                <span>Featured: EventLedger</span>
                <Rocket size={16} />
              </a>
              <a href="#terminal" className="btn btn-outline" id="hero-open-cli">
                <Terminal size={16} />
                <span>DevShell CLI</span>
              </a>
              <a href="#contact" className="btn btn-ghost" id="hero-contact-me">
                <Mail size={16} />
                <span>Let's Connect</span>
              </a>
            </div>

            {/* Quick Social & Connect Bar */}
            <div className="hero-social-bar">
              <span className="social-bar-label">Quick Connect:</span>
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
                  <Mail size={15} />
                  <span className="email-text">{copiedEmail ? 'Copied to Clipboard!' : emailAddress}</span>
                  {copiedEmail ? <Check size={14} className="copied-icon" /> : <Copy size={13} className="copy-icon" />}
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Developer Spotlight Window */}
          <div className="hero-visual-col">
            <div className="developer-card-container">
              
              {/* Floating Tech Badges (Desktop) */}
              <div className="floating-badge badge-python">
                <PythonIcon size={22} />
                <div className="fb-text">
                  <span className="fb-name">Python & DSA</span>
                  <span className="fb-sub">Algorithmic Problem Solving</span>
                </div>
              </div>

              <div className="floating-badge badge-java">
                <JavaIcon size={22} />
                <div className="fb-text">
                  <span className="fb-name">Java & OOP</span>
                  <span className="fb-sub">Object-Oriented Design</span>
                </div>
              </div>

              <div className="floating-badge badge-web">
                <JavaScriptIcon size={22} />
                <div className="fb-text">
                  <span className="fb-name">JavaScript & React</span>
                  <span className="fb-sub">Responsive Web Platforms</span>
                </div>
              </div>

              {/* Central Code Window */}
              <div className="developer-window glass-panel">
                
                {/* Window Header with Tabs */}
                <div className="dev-window-header">
                  <div className="window-dots">
                    <span className="dot dot-red"></span>
                    <span className="dot dot-yellow"></span>
                    <span className="dot dot-green"></span>
                  </div>
                  
                  <div className="window-tabs-list">
                    {Object.values(CODE_TABS).map((tab) => (
                      <button
                        key={tab.id}
                        className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab.id)}
                      >
                        <Code2 size={12} className="tab-icon" />
                        <span>{tab.title}</span>
                      </button>
                    ))}
                  </div>

                  <div className="window-live-pill">
                    <span className="live-dot"></span>
                    <span>ONLINE</span>
                  </div>
                </div>

                {/* Code Body */}
                <div className="dev-code-body">
                  <pre className="code-block">
                    <code>{CODE_TABS[activeTab].content}</code>
                  </pre>
                </div>

                {/* Window Footer */}
                <div className="dev-window-footer">
                  <div className="footer-status-item">
                    <Sparkles size={14} className="status-sparkle" />
                    <span>Focus: Scalable & Reliable Engineering</span>
                  </div>
                  <a href="#projects" className="footer-view-link">
                    <span>Explore EventLedger</span>
                    <ExternalLink size={12} />
                  </a>
                </div>

              </div>

              {/* Mobile Tech Badge Row (Visible on smaller screens) */}
              <div className="mobile-tech-pills-row">
                <div className="mobile-tech-pill">
                  <PythonIcon size={16} />
                  <span>Python</span>
                </div>
                <div className="mobile-tech-pill">
                  <JavaIcon size={16} />
                  <span>Java OOP</span>
                </div>
                <div className="mobile-tech-pill">
                  <JavaScriptIcon size={16} />
                  <span>React & JS</span>
                </div>
                <div className="mobile-tech-pill active-prod">
                  <Rocket size={14} />
                  <span>EventLedger.me</span>
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
