import React, { useState, useEffect } from 'react';
import { Compass, ChevronDown, CheckCircle2, ChevronRight } from 'lucide-react';
import './SectionNavigator.css';

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' }
];

const SectionNavigator = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(SECTIONS[i].id);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(SECTIONS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentIndex = SECTIONS.findIndex((s) => s.id === activeSection);
  const nextSection = currentIndex < SECTIONS.length - 1 ? SECTIONS[currentIndex + 1] : null;

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`section-hud-container ${isExpanded ? 'expanded' : ''}`}>
      <div className="section-hud-pill">
        {/* Active Section Info */}
        <button 
          className="hud-toggle-btn"
          onClick={() => setIsExpanded(!isExpanded)}
          title="Toggle Section Navigator"
          aria-label="Toggle Section Navigator"
        >
          <span className="hud-indicator-dot"></span>
          <span className="hud-label">
            <span className="hud-index">0{currentIndex + 1}/0{SECTIONS.length}</span>
            <span className="hud-title">{SECTIONS[currentIndex]?.label || 'Home'}</span>
          </span>
          <ChevronDown size={14} className={`hud-chevron ${isExpanded ? 'rotated' : ''}`} />
        </button>

        {/* Quick Next Section Action */}
        {nextSection && (
          <button 
            className="hud-next-btn"
            onClick={() => scrollToSection(nextSection.id)}
            title={`Jump to next section: ${nextSection.label}`}
          >
            <span>Next: {nextSection.label}</span>
            <ChevronRight size={14} />
          </button>
        )}
      </div>

      {/* Expanded Quick-Jump Drawer */}
      {isExpanded && (
        <div className="hud-dropdown-menu glass-panel">
          <div className="hud-dropdown-header">
            <Compass size={14} className="hud-dropdown-icon" />
            <span>Navigate Portfolio Pages</span>
          </div>
          <div className="hud-dropdown-list">
            {SECTIONS.map((sec, index) => {
              const isActive = sec.id === activeSection;
              return (
                <button
                  key={sec.id}
                  className={`hud-dropdown-item ${isActive ? 'active' : ''}`}
                  onClick={() => {
                    scrollToSection(sec.id);
                    setIsExpanded(false);
                  }}
                >
                  <span className="hud-item-number">0{index + 1}</span>
                  <span className="hud-item-name">{sec.label}</span>
                  {isActive && <CheckCircle2 size={13} className="hud-item-check" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionNavigator;
