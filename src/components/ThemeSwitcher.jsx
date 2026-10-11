import React, { useState } from 'react';
import { Palette, Sparkles, Check, ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import './ThemeSwitcher.css';

const ThemeSwitcher = ({ variant = 'floating' }) => {
  const { theme, themeConfig, setTheme, allThemes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themeList = Object.values(allThemes);

  return (
    <div className={`theme-switcher-wrapper ${variant}`}>
      <button 
        className="theme-switcher-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change Portfolio Visual Theme"
        title="Change Visual Theme"
      >
        <span className="theme-toggle-sparkle">
          <Palette size={16} />
        </span>
        <span className="theme-toggle-label">{themeConfig.name}</span>
        <span className="theme-color-preview-dots">
          {themeConfig.swatch.map((c, i) => (
            <span key={i} className="mini-swatch-dot" style={{ backgroundColor: c }}></span>
          ))}
        </span>
        <ChevronDown size={13} className={`theme-arrow ${isOpen ? 'open' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div className="theme-backdrop" onClick={() => setIsOpen(false)}></div>
          <div className="theme-menu glass-panel">
            <div className="theme-menu-header">
              <Sparkles size={14} className="theme-header-icon" />
              <span>Select Visual Experience</span>
            </div>

            <div className="theme-options-grid">
              {themeList.map((t) => {
                const isActive = t.id === theme;
                return (
                  <button
                    key={t.id}
                    className={`theme-option-card ${isActive ? 'active' : ''}`}
                    onClick={() => {
                      setTheme(t.id);
                      setIsOpen(false);
                    }}
                  >
                    <div className="theme-card-top">
                      <span className="theme-card-name">{t.name}</span>
                      {isActive && <Check size={14} className="theme-check-icon" />}
                    </div>
                    <span className="theme-card-tagline">{t.tagline}</span>
                    <div className="theme-swatch-bar">
                      {t.swatch.map((color, idx) => (
                        <span 
                          key={idx} 
                          className="swatch-segment" 
                          style={{ backgroundColor: color }}
                        ></span>
                      ))}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ThemeSwitcher;
