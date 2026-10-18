import React from 'react';

/**
 * Luminous, modern atmospheric ambient background.
 * Soft radiant glows without busy lines or waves.
 */
const Background = () => {
  return (
    <div className="ambient-background-layer" aria-hidden="true" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      pointerEvents: 'none',
      zIndex: 0,
      overflow: 'hidden',
      background: 'linear-gradient(180deg, #f8fafc 0%, #fafbfe 45%, #f1f5f9 100%)'
    }}>
      {/* Top Center-Left Royal Indigo Aura */}
      <div style={{
        position: 'absolute',
        top: '-15%',
        left: '10%',
        width: '55vw',
        height: '55vw',
        maxWidth: '720px',
        maxHeight: '720px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.16) 0%, rgba(124, 58, 237, 0.08) 45%, transparent 70%)',
        filter: 'blur(100px)',
        animation: 'floatGlowA 14s ease-in-out infinite alternate',
      }} />

      {/* Top Right Warm Rose / Sunset Peach Glow */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '50vw',
        height: '50vw',
        maxWidth: '680px',
        maxHeight: '680px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(244, 114, 182, 0.14) 0%, rgba(251, 146, 60, 0.06) 50%, transparent 70%)',
        filter: 'blur(110px)',
        animation: 'floatGlowB 16s ease-in-out infinite alternate',
      }} />

      {/* Center Left Crisp Azure / Sky Accent */}
      <div style={{
        position: 'absolute',
        top: '38%',
        left: '-10%',
        width: '45vw',
        height: '45vw',
        maxWidth: '600px',
        maxHeight: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, rgba(99, 102, 241, 0.05) 50%, transparent 70%)',
        filter: 'blur(110px)',
      }} />

      {/* Bottom Center Violet / Fuchsia Aura */}
      <div style={{
        position: 'absolute',
        bottom: '-12%',
        right: '15%',
        width: '52vw',
        height: '52vw',
        maxWidth: '700px',
        maxHeight: '700px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.14) 0%, rgba(236, 72, 153, 0.06) 50%, transparent 70%)',
        filter: 'blur(120px)',
        animation: 'floatGlowA 18s ease-in-out infinite alternate-reverse',
      }} />

      {/* Crisp Architectural Grid Dots */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(rgba(100, 116, 139, 0.15) 1.2px, transparent 1.2px)',
        backgroundSize: '28px 28px',
        maskImage: 'radial-gradient(ellipse 90% 85% at 50% 50%, #000 50%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 90% 85% at 50% 50%, #000 50%, transparent 100%)',
        opacity: 0.65,
      }} />
    </div>
  );
};

export default Background;
