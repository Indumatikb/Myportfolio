import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Compass, 
  Target, 
  Laptop, 
  Sparkles, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  GraduationCap,
  Layers,
  Cpu,
  Terminal,
  Zap
} from 'lucide-react';
import WavyUnderline from './WavyUnderline';
import './About.css';

const About = () => {
  const [istTime, setIstTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setIstTime(new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      }).format(now));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-pill">About Me</span>
          <h2 className="section-title">
            Passionate About <span className="gradient-text">Engineering & Software</span>
          </h2>
          <WavyUnderline color="#6366f1" height={4} width="90px" />
          <p className="section-subtitle">
            A developer who builds fearlessly, grounded in computer science fundamentals and driven by practical execution.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="about-bento-grid">
          
          {/* Bento Card 1: Main Story & Philosophy */}
          <div className="bento-card bento-card-large glass-panel">
            <div className="bento-badge">
              <Sparkles size={14} className="bento-icon-accent" />
              <span>Engineering Journey</span>
            </div>
            
            <h3 className="bento-card-title">
              Indumati Kallanagoud Biradar
            </h3>
            <p className="bento-role-sub">
              Computer Science Engineering Student • Aspiring Software Developer
            </p>

            <div className="bento-bio-text">
              <p>
                Hello! I am a passionate engineering student who thrives in turning abstract logic into impactful digital products. 
                My development journey is defined by curiosity, grit, and building real-world platforms like <strong>EventLedger.me</strong> from scratch.
              </p>
              <p>
                Whether it's dissecting algorithmic edge cases in <strong>Python & Java</strong>, understanding low-level memory in <strong>C</strong>, 
                or crafting lightning-fast responsive interfaces in <strong>React & JavaScript</strong>, I believe the best way to master software is to build, break, and fix it.
              </p>
            </div>

            {/* Quote Banner */}
            <div className="bento-quote-pill">
              <Zap size={16} className="quote-zap" />
              <span className="quote-phrase">"Learn. Build. Break. Fix. Repeat."</span>
            </div>
          </div>

          {/* Bento Card 2: Location & Live Clock */}
          <div className="bento-card bento-card-location glass-panel">
            <div className="bento-badge">
              <MapPin size={14} className="bento-icon-accent" />
              <span>Location & Timezone</span>
            </div>

            <div className="bento-location-content">
              <div className="loc-city-group">
                <span className="loc-country">Karnataka, India</span>
                <span className="loc-tag">📍 South Asia</span>
              </div>

              <div className="loc-clock-box">
                <Clock size={18} className="loc-clock-icon" />
                <div className="clock-digits-group">
                  <span className="clock-digits">{istTime || '08:30 PM'}</span>
                  <span className="clock-tz">IST (UTC+5:30)</span>
                </div>
              </div>

              <div className="loc-availability-banner">
                <span className="pulse-beacon"></span>
                <span>Open to Relocate & Remote Roles</span>
              </div>
            </div>
          </div>

          {/* Bento Card 3: Core CS Engineering DNA */}
          <div className="bento-card bento-card-fundamentals glass-panel">
            <div className="bento-badge">
              <Cpu size={14} className="bento-icon-accent" />
              <span>Computer Science DNA</span>
            </div>

            <h4 className="bento-subheading">Core Foundations</h4>
            <p className="bento-desc">
              Strong theoretical grounding paired with hands-on implementation across core curricula:
            </p>

            <div className="bento-dna-pills">
              <span className="dna-pill">Data Structures & Algorithms</span>
              <span className="dna-pill">Object-Oriented Programming (OOP)</span>
              <span className="dna-pill">Database Management (SQL)</span>
              <span className="dna-pill">Operating Systems</span>
              <span className="dna-pill">Computer Networks</span>
              <span className="dna-pill">Full-Stack Architecture</span>
            </div>
          </div>

          {/* Bento Card 4: Current Focus & Learning Vector */}
          <div className="bento-card bento-card-focus glass-panel">
            <div className="bento-badge">
              <Target size={14} className="bento-icon-accent" />
              <span>Current Focus</span>
            </div>

            <h4 className="bento-subheading">Active Engineering Goals</h4>
            
            <ul className="focus-list">
              <li className="focus-item">
                <CheckCircle2 size={16} className="focus-check" />
                <span>Scaling <strong>EventLedger.me</strong> with real user feedback & workflows</span>
              </li>
              <li className="focus-item">
                <CheckCircle2 size={16} className="focus-check" />
                <span>Deepening DSA mastery in Python for competitive algorithmic problem solving</span>
              </li>
              <li className="focus-item">
                <CheckCircle2 size={16} className="focus-check" />
                <span>Exploring global edge deployments and reactive state design</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
