import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Code2, MapPin, GraduationCap, Terminal, Rocket, CheckCircle2 } from 'lucide-react';
import HeroWaveform from './HeroWaveform';
import WavyUnderline from './WavyUnderline';
import './Hero.css';

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
  const [typingSpeed, setTypingSpeed] = useState(90);

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
        
        {/* Availability Badge */}
        <div className="hero-badge-wrap">
          <div className="hero-badge">
            <span className="pulse-beacon"></span>
            <span className="badge-text">Available for Internships & Projects</span>
            <span className="badge-divider">•</span>
            <span className="badge-location"><MapPin size={12} /> Karnataka, India</span>
          </div>
        </div>

        {/* Greeting Subtitle */}
        <div className="hero-greeting">
          <Terminal size={14} className="terminal-icon" />
          <span className="code-font">const developer = "Indumati Kallanagoud Biradar";</span>
        </div>

        {/* Main Title & Typewriter */}
        <h1 className="hero-title">
          <span className="name-highlight-wrapper">
            <span className="name-highlight">Indumati Kallanagoud Biradar</span>
            <WavyUnderline color="#38bdf8" height={10} />
          </span>
          <span className="role-subtext-container">
            <span className="role-typing-text">{displayText}</span>
            <span className="typing-cursor-accent"></span>
          </span>
        </h1>

        {/* Motto Pill */}
        <div className="tagline-pill">
          <Code2 size={16} className="tagline-icon" />
          <span>"Learn. Build. Break. Fix. Repeat."</span>
        </div>

        {/* Bio Description */}
        <p className="hero-description">
          Computer Science Engineering student passionate about engineering dependable digital products.
          Focused on core software foundations in <strong>Python, Java, C, JavaScript, HTML, CSS</strong>, 
          and building real-world applications with modern design and scalability.
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
          <a href="#education" className="btn btn-ghost" id="hero-view-education">
            <GraduationCap size={17} />
            <span>Academic Background</span>
          </a>
        </div>

        {/* Quick Highlights Trio */}
        <div className="hero-stats-grid">
          <div className="hero-stat-card glass-panel">
            <div className="stat-icon-box cyan">
              <GraduationCap size={18} />
            </div>
            <div className="stat-info">
              <span className="stat-label">Academics</span>
              <span className="stat-value">B.E. Computer Science</span>
            </div>
          </div>

          <div className="hero-stat-card glass-panel">
            <div className="stat-icon-box violet">
              <Code2 size={18} />
            </div>
            <div className="stat-info">
              <span className="stat-label">Core Foundation</span>
              <span className="stat-value">8 Essential Technologies</span>
            </div>
          </div>

          <div className="hero-stat-card glass-panel">
            <div className="stat-icon-box emerald">
              <Sparkles size={18} />
            </div>
            <div className="stat-info">
              <span className="stat-label">Active Build</span>
              <span className="stat-value">EventLedger (Live)</span>
            </div>
          </div>
        </div>

        {/* Interactive Kinetic Waveform Visualizer */}
        <HeroWaveform />

      </div>
    </section>
  );
};

export default Hero;
