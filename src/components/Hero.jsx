import React, { useState, useEffect } from 'react';
import { ArrowRight, FileText, Sparkles, Code2, MapPin, GraduationCap } from 'lucide-react';
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

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
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
            I’m a Computer Science Engineering student passionate about learning by building. 
            Currently sharpening my foundation in <strong>Python, Java, C, JavaScript, HTML, CSS</strong>, 
            and core software engineering principles. Aiming to grow as a dependable Software Developer.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary" id="hero-contact-me">
              Get in Touch <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </a>
            <a href="#about" className="btn btn-outline" id="hero-read-more">
              <FileText size={16} style={{ marginRight: '6px' }} /> About Me
            </a>
            <a href="#education" className="btn btn-ghost" id="hero-view-education">
              <GraduationCap size={16} style={{ marginRight: '6px' }} /> Education
            </a>
          </div>

          <div className="hero-meta">
            <span className="meta-item">
              <span className="pulse-beacon"></span> Available for projects & internships
            </span>
            <span className="meta-divider">•</span>
            <span className="meta-item">
              <MapPin size={14} /> Karnataka, India
            </span>
            <span className="meta-divider">•</span>
            <span className="meta-item">
              <GraduationCap size={14} /> B.E. CSE (2023 - 2027)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
