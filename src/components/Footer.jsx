import React from 'react';
import { ArrowUp, Code2 } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <Code2 size={20} className="footer-icon" />
              <span>Indumati<span className="dot-accent">.</span></span>
            </div>
            <p className="footer-full-name">Indumati Kallanagoud Biradar</p>
            <p className="footer-role">Computer Science Engineering Student • Future Software Developer</p>
            <p className="footer-tagline">"Learn. Build. Break. Fix. Repeat."</p>
          </div>

          <div className="footer-nav">
            <h4 className="footer-nav-title">Quick Links</h4>
            <div className="footer-nav-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#education">Education</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div className="footer-action">
            <button 
              onClick={scrollToTop} 
              className="back-to-top-btn" 
              aria-label="Back to top of page"
              id="footer-back-to-top"
            >
              <ArrowUp size={18} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright-text">
            © {new Date().getFullYear()} Indumati Kallanagoud Biradar. All rights reserved.
          </p>
          <p className="tech-credit">
            Engineered with React, Vite & Vanilla CSS. Designed for high performance and elegance.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
