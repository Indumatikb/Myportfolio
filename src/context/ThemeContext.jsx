import React, { createContext, useContext, useState, useEffect } from 'react';

export const THEMES = {
  'cyber-neon': {
    id: 'cyber-neon',
    name: 'Cyber Neon',
    tagline: 'Electric Cyan & Neon Violet',
    accentPrimary: '#00f0ff',
    accentSecondary: '#8b5cf6',
    accentTertiary: '#ec4899',
    glowRgb: '0, 240, 255',
    bgPrimary: '#050714',
    bgSecondary: '#090d22',
    bgTertiary: '#101736',
    glassBg: 'rgba(9, 13, 34, 0.75)',
    glassBorder: 'rgba(0, 240, 255, 0.12)',
    glassBorderHover: 'rgba(0, 240, 255, 0.5)',
    swatch: ['#00f0ff', '#8b5cf6', '#ec4899'],
    ribbonPalette: [
      { start: 'rgba(0, 240, 255, 0.8)', end: 'rgba(99, 102, 241, 0.5)', fill: 'rgba(0, 240, 255, 0.05)' },
      { start: 'rgba(99, 102, 241, 0.85)', end: 'rgba(139, 92, 246, 0.55)', fill: 'rgba(99, 102, 241, 0.045)' },
      { start: 'rgba(139, 92, 246, 0.8)', end: 'rgba(236, 72, 153, 0.6)', fill: 'rgba(139, 92, 246, 0.04)' },
      { start: 'rgba(56, 189, 248, 0.75)', end: 'rgba(168, 85, 247, 0.5)', fill: 'rgba(56, 189, 248, 0.035)' },
      { start: 'rgba(99, 102, 241, 0.7)', end: 'rgba(244, 63, 94, 0.45)', fill: 'rgba(99, 102, 241, 0.03)' },
      { start: 'rgba(0, 240, 255, 0.65)', end: 'rgba(139, 92, 246, 0.4)', fill: 'rgba(0, 240, 255, 0.025)' }
    ],
    heroWaveColors: [
      { color: 'rgba(0, 240, 255, 0.95)', glow: 'rgba(0, 240, 255, 0.65)' },
      { color: 'rgba(139, 92, 246, 0.9)', glow: 'rgba(139, 92, 246, 0.55)' },
      { color: 'rgba(236, 72, 153, 0.85)', glow: 'rgba(236, 72, 153, 0.5)' },
      { color: 'rgba(56, 189, 248, 0.8)', glow: 'rgba(56, 189, 248, 0.45)' }
    ]
  },
  'cosmic-aurora': {
    id: 'cosmic-aurora',
    name: 'Cosmic Aurora',
    tagline: 'Ethereal Emerald & Aqua Teal',
    accentPrimary: '#10b981',
    accentSecondary: '#06b6d4',
    accentTertiary: '#34d399',
    glowRgb: '16, 185, 129',
    bgPrimary: '#03130e',
    bgSecondary: '#061c16',
    bgTertiary: '#0b2921',
    glassBg: 'rgba(6, 26, 20, 0.75)',
    glassBorder: 'rgba(16, 185, 129, 0.15)',
    glassBorderHover: 'rgba(16, 185, 129, 0.55)',
    swatch: ['#10b981', '#06b6d4', '#34d399'],
    ribbonPalette: [
      { start: 'rgba(16, 185, 129, 0.85)', end: 'rgba(6, 182, 212, 0.55)', fill: 'rgba(16, 185, 129, 0.05)' },
      { start: 'rgba(6, 182, 212, 0.8)', end: 'rgba(52, 211, 153, 0.5)', fill: 'rgba(6, 182, 212, 0.045)' },
      { start: 'rgba(52, 211, 153, 0.85)', end: 'rgba(16, 185, 129, 0.6)', fill: 'rgba(52, 211, 153, 0.04)' },
      { start: 'rgba(16, 185, 129, 0.75)', end: 'rgba(99, 102, 241, 0.45)', fill: 'rgba(16, 185, 129, 0.035)' },
      { start: 'rgba(6, 182, 212, 0.7)', end: 'rgba(16, 185, 129, 0.45)', fill: 'rgba(6, 182, 212, 0.03)' },
      { start: 'rgba(52, 211, 153, 0.65)', end: 'rgba(6, 182, 212, 0.4)', fill: 'rgba(52, 211, 153, 0.025)' }
    ],
    heroWaveColors: [
      { color: 'rgba(16, 185, 129, 0.95)', glow: 'rgba(16, 185, 129, 0.65)' },
      { color: 'rgba(6, 182, 212, 0.9)', glow: 'rgba(6, 182, 212, 0.55)' },
      { color: 'rgba(52, 211, 153, 0.85)', glow: 'rgba(52, 211, 153, 0.5)' },
      { color: 'rgba(16, 185, 129, 0.8)', glow: 'rgba(16, 185, 129, 0.45)' }
    ]
  },
  'midnight-rose': {
    id: 'midnight-rose',
    name: 'Midnight Rose',
    tagline: 'Cyber Rose & Fuchsia Violet',
    accentPrimary: '#f43f5e',
    accentSecondary: '#d946ef',
    accentTertiary: '#8b5cf6',
    glowRgb: '244, 63, 94',
    bgPrimary: '#100511',
    bgSecondary: '#190a1b',
    bgTertiary: '#270e2a',
    glassBg: 'rgba(28, 10, 30, 0.75)',
    glassBorder: 'rgba(244, 63, 94, 0.15)',
    glassBorderHover: 'rgba(244, 63, 94, 0.55)',
    swatch: ['#f43f5e', '#d946ef', '#8b5cf6'],
    ribbonPalette: [
      { start: 'rgba(244, 63, 94, 0.85)', end: 'rgba(217, 70, 239, 0.55)', fill: 'rgba(244, 63, 94, 0.05)' },
      { start: 'rgba(217, 70, 239, 0.8)', end: 'rgba(139, 92, 246, 0.55)', fill: 'rgba(217, 70, 239, 0.045)' },
      { start: 'rgba(139, 92, 246, 0.8)', end: 'rgba(244, 63, 94, 0.6)', fill: 'rgba(139, 92, 246, 0.04)' },
      { start: 'rgba(251, 113, 133, 0.75)', end: 'rgba(217, 70, 239, 0.45)', fill: 'rgba(251, 113, 133, 0.035)' },
      { start: 'rgba(244, 63, 94, 0.7)', end: 'rgba(139, 92, 246, 0.45)', fill: 'rgba(244, 63, 94, 0.03)' },
      { start: 'rgba(217, 70, 239, 0.65)', end: 'rgba(244, 63, 94, 0.4)', fill: 'rgba(217, 70, 239, 0.025)' }
    ],
    heroWaveColors: [
      { color: 'rgba(244, 63, 94, 0.95)', glow: 'rgba(244, 63, 94, 0.65)' },
      { color: 'rgba(217, 70, 239, 0.9)', glow: 'rgba(217, 70, 239, 0.55)' },
      { color: 'rgba(139, 92, 246, 0.85)', glow: 'rgba(139, 92, 246, 0.5)' },
      { color: 'rgba(251, 113, 133, 0.8)', glow: 'rgba(251, 113, 133, 0.45)' }
    ]
  },
  'obsidian-gold': {
    id: 'obsidian-gold',
    name: 'Obsidian Gold',
    tagline: 'Solar Gold & Amber Sunset',
    accentPrimary: '#f59e0b',
    accentSecondary: '#fb923c',
    accentTertiary: '#facc15',
    glowRgb: '245, 158, 11',
    bgPrimary: '#0d0905',
    bgSecondary: '#171109',
    bgTertiary: '#241a0d',
    glassBg: 'rgba(25, 18, 9, 0.75)',
    glassBorder: 'rgba(245, 158, 11, 0.15)',
    glassBorderHover: 'rgba(245, 158, 11, 0.55)',
    swatch: ['#f59e0b', '#fb923c', '#facc15'],
    ribbonPalette: [
      { start: 'rgba(245, 158, 11, 0.85)', end: 'rgba(251, 146, 60, 0.55)', fill: 'rgba(245, 158, 11, 0.05)' },
      { start: 'rgba(251, 146, 60, 0.8)', end: 'rgba(250, 204, 21, 0.55)', fill: 'rgba(251, 146, 60, 0.045)' },
      { start: 'rgba(250, 204, 21, 0.8)', end: 'rgba(245, 158, 11, 0.6)', fill: 'rgba(250, 204, 21, 0.04)' },
      { start: 'rgba(251, 191, 36, 0.75)', end: 'rgba(249, 115, 22, 0.45)', fill: 'rgba(251, 191, 36, 0.035)' },
      { start: 'rgba(245, 158, 11, 0.7)', end: 'rgba(251, 146, 60, 0.45)', fill: 'rgba(245, 158, 11, 0.03)' },
      { start: 'rgba(250, 204, 21, 0.65)', end: 'rgba(245, 158, 11, 0.4)', fill: 'rgba(250, 204, 21, 0.025)' }
    ],
    heroWaveColors: [
      { color: 'rgba(245, 158, 11, 0.95)', glow: 'rgba(245, 158, 11, 0.65)' },
      { color: 'rgba(251, 146, 60, 0.9)', glow: 'rgba(251, 146, 60, 0.55)' },
      { color: 'rgba(250, 204, 21, 0.85)', glow: 'rgba(250, 204, 21, 0.5)' },
      { color: 'rgba(251, 191, 36, 0.8)', glow: 'rgba(251, 191, 36, 0.45)' }
    ]
  }
};

const ThemeContext = createContext({
  theme: 'cyber-neon',
  themeConfig: THEMES['cyber-neon'],
  setTheme: () => {},
  cycleTheme: () => {},
  allThemes: THEMES
});

export const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState(() => {
    try {
      const saved = localStorage.getItem('indumati-portfolio-theme');
      if (saved && THEMES[saved]) return saved;
    } catch {
      // fallback
    }
    return 'cyber-neon';
  });

  const setTheme = (themeId) => {
    if (THEMES[themeId]) {
      setThemeState(themeId);
      try {
        localStorage.setItem('indumati-portfolio-theme', themeId);
      } catch {
        // ignore
      }
    }
  };

  const cycleTheme = () => {
    const themeKeys = Object.keys(THEMES);
    const currentIndex = themeKeys.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themeKeys.length;
    setTheme(themeKeys[nextIndex]);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const themeConfig = THEMES[theme] || THEMES['cyber-neon'];

  return (
    <ThemeContext.Provider value={{ theme, themeConfig, setTheme, cycleTheme, allThemes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
