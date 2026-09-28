import React from 'react';
import { ArrowRight, FileText, Terminal, Sparkles, Code2, MapPin } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <div className="hero-badge">
            <Sparkles size={14} className="badge-icon" />
            <span>Open to Internships & Opportunities</span>
          </div>
          
          <p className="hero-subtitle">HELLO, I'M INDU 👋</p>
          
          <h1 className="hero-title">
            <span className="name-highlight">Indumati Kallanagoud Biradar</span>
            <span className="role-subtext">Computer Science Engineering Student</span>
          </h1>

          <div className="tagline-pill">
            <Code2 size={16} />
            <span>"Learn. Build. Break. Fix. Repeat."</span>
          </div>
          
          <p className="hero-description">
            I’m a Computer Science Engineering student who enjoys learning by building. 
            Currently strengthening my skills in JavaScript, Java, Python, web development, 
            and core computer science concepts. Aiming to grow as a <strong>Future Software Developer</strong>.
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary" id="hero-view-work">
              Explore Projects <ArrowRight size={18} style={{ marginLeft: '6px' }} />
            </a>
            <a href="#contact" className="btn btn-outline" id="hero-contact-me">
              Get in Touch
            </a>
            <a 
              href="#about" 
              className="btn btn-ghost" 
              id="hero-read-more"
            >
              <FileText size={16} style={{ marginRight: '6px' }} /> Learn More
            </a>
          </div>

          <div className="hero-meta">
            <span className="meta-item">
              <span className="status-dot"></span> Available for projects
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
                <Terminal size={14} /> indumati@portfolio:~
              </div>
            </div>
            <div className="terminal-body">
              <div className="code-line">
                <span className="cmd-prompt">$</span> <span className="cmd-text">cat profile.json</span>
              </div>
              <pre className="code-content">
{`{
  `}<span className="json-key">"name"</span>{`: `}<span className="json-str">"Indumati Kallanagoud Biradar"</span>{`,
  `}<span className="json-key">"role"</span>{`: `}<span className="json-str">"CSE Student"</span>{`,
  `}<span className="json-key">"goal"</span>{`: `}<span className="json-str">"Future Software Developer"</span>{`,
  `}<span className="json-key">"motto"</span>{`: `}<span className="json-str">"Learn. Build. Break. Fix. Repeat."</span>{`,
  `}<span className="json-key">"skills"</span>{`: [
    `}<span className="json-str">"JavaScript"</span>{`, `}<span className="json-str">"Java"</span>{`, `}<span className="json-str">"Python"</span>{`,
    `}<span className="json-str">"React"</span>{`, `}<span className="json-str">"HTML/CSS"</span>{`, `}<span className="json-str">"Core CS"</span>{`
  ],
  `}<span className="json-key">"passion"</span>{`: `}<span className="json-str">"Turning ideas into practical software"</span>{`
}`}
              </pre>
              <div className="code-line cursor-line">
                <span className="cmd-prompt">$</span> <span className="typing-cursor"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
