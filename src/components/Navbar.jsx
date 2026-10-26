import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Sun, Moon, ArrowUpRight, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isDark, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'DevShell', href: '#terminal' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  // Scroll detection & active section spy
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      const sections = ['home', 'about', 'skills', 'projects', 'terminal', 'education', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && scrollPos >= el.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-outer">
        <div className="nav-pill-bar glass-panel">
          
          {/* Brand Logo */}
          <a href="#home" className="nav-brand" id="nav-brand-logo" onClick={() => setMobileMenuOpen(false)}>
            <div className="brand-icon-box">
              <Code2 size={19} className="brand-icon" />
            </div>
            <div className="brand-text">
              <span className="brand-name">
                Indumati<span className="brand-dot">.</span>
              </span>
              <span className="brand-badge">CSE '27</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav">
            <ul className="nav-link-list">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className={`nav-link-item ${isActive ? 'active' : ''}`}
                    >
                      {link.name}
                      {isActive && <span className="active-pill-dot" />}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right Action Group: Theme Toggle & Connect CTA */}
          <div className="nav-actions">
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              id="navbar-theme-toggle"
            >
              {isDark ? <Sun size={18} className="theme-icon sun" /> : <Moon size={18} className="theme-icon moon" />}
            </button>

            {/* Let's Connect Button */}
            <a href="#contact" className="btn btn-primary nav-cta-btn" id="nav-cta-connect">
              <span>Let's Connect</span>
              <ArrowUpRight size={15} />
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              id="mobile-menu-btn"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer-overlay ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-backdrop" onClick={() => setMobileMenuOpen(false)} />
        <div className="mobile-drawer-content glass-panel">
          
          <div className="mobile-drawer-header">
            <div className="brand-text">
              <span className="brand-name">Indumati Kallanagoud Biradar</span>
              <span className="brand-sub">Computer Science & Engineering</span>
            </div>
            <button
              className="drawer-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <ul className="mobile-nav-list">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{link.name}</span>
                    {isActive ? (
                      <span className="mobile-active-badge">Active</span>
                    ) : (
                      <ArrowUpRight size={16} className="mobile-arrow" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mobile-drawer-footer">
            <div className="mobile-theme-row">
              <span className="mobile-theme-label">Visual Theme</span>
              <button 
                onClick={toggleTheme} 
                className="btn btn-outline mobile-theme-switch-btn"
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
                <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
            </div>

            <a
              href="#contact"
              className="btn btn-primary mobile-cta-btn"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Get in Touch</span>
              <Sparkles size={16} />
            </a>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
