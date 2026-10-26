import React from 'react';
import { useTheme } from '../context/ThemeContext';

/**
 * Luminous atmospheric ambient background.
 * Dynamic glows and subtle blueprint grid tailored for both Dark & Light themes.
 */
const Background = () => {
  const { isDark } = useTheme();

  return (
    <div 
      className="ambient-background-layer" 
      aria-hidden="true" 
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
        background: isDark 
          ? 'radial-gradient(ellipse 80% 60% at 50% 0%, #0d121f 0%, #07090e 100%)' 
          : 'radial-gradient(ellipse 80% 60% at 50% 0%, #f1f5f9 0%, #f8fafc 100%)',
        transition: 'background 0.4s ease'
      }}
    >
      {/* Top Center-Left Royal Indigo Aura */}
      <div 
        style={{
          position: 'absolute',
          top: '-15%',
          left: '12%',
          width: '55vw',
          height: '55vw',
          maxWidth: '720px',
          maxHeight: '720px',
          borderRadius: '50%',
          background: isDark 
            ? 'radial-gradient(circle, rgba(99, 102, 241, 0.22) 0%, rgba(124, 58, 237, 0.12) 45%, transparent 70%)'
            : 'radial-gradient(circle, rgba(99, 102, 241, 0.14) 0%, rgba(124, 58, 237, 0.06) 45%, transparent 70%)',
          filter: 'blur(110px)',
          animation: 'floatA 16s ease-in-out infinite alternate',
        }} 
      />

      {/* Top Right Cyan / Sky Glow */}
      <div 
        style={{
          position: 'absolute',
          top: '-10%',
          right: '5%',
          width: '50vw',
          height: '50vw',
          maxWidth: '680px',
          maxHeight: '680px',
          borderRadius: '50%',
          background: isDark 
            ? 'radial-gradient(circle, rgba(6, 182, 212, 0.18) 0%, rgba(59, 130, 246, 0.08) 50%, transparent 70%)'
            : 'radial-gradient(circle, rgba(14, 165, 233, 0.12) 0%, rgba(99, 102, 241, 0.05) 50%, transparent 70%)',
          filter: 'blur(120px)',
          animation: 'floatB 18s ease-in-out infinite alternate',
        }} 
      />

      {/* Center Left Subtle Fuchsia Accent */}
      <div 
        style={{
          position: 'absolute',
          top: '42%',
          left: '-8%',
          width: '45vw',
          height: '45vw',
          maxWidth: '580px',
          maxHeight: '580px',
          borderRadius: '50%',
          background: isDark 
            ? 'radial-gradient(circle, rgba(236, 72, 153, 0.12) 0%, transparent 65%)'
            : 'radial-gradient(circle, rgba(244, 114, 182, 0.08) 0%, transparent 65%)',
          filter: 'blur(130px)',
        }} 
      />

      {/* Bottom Center Violet Aura */}
      <div 
        style={{
          position: 'absolute',
          bottom: '-15%',
          right: '18%',
          width: '55vw',
          height: '55vw',
          maxWidth: '700px',
          maxHeight: '700px',
          borderRadius: '50%',
          background: isDark 
            ? 'radial-gradient(circle, rgba(139, 92, 246, 0.18) 0%, rgba(99, 102, 241, 0.08) 50%, transparent 70%)'
            : 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, rgba(99, 102, 241, 0.04) 50%, transparent 70%)',
          filter: 'blur(120px)',
          animation: 'floatA 20s ease-in-out infinite alternate-reverse',
        }} 
      />

      {/* Architectural Engineering Grid Pattern */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: isDark
            ? 'radial-gradient(rgba(255, 255, 255, 0.12) 1.2px, transparent 1.2px)'
            : 'radial-gradient(rgba(15, 23, 42, 0.09) 1.2px, transparent 1.2px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 90% 85% at 50% 50%, #000 60%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 85% at 50% 50%, #000 60%, transparent 100%)',
          opacity: 0.65,
        }} 
      />
    </div>
  );
};

export default Background;
