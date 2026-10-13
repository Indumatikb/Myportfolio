import React from 'react';

/**
 * Clean, modern ambient light background.
 * Soft luminous gradients without busy lines or waves.
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
      background: 'linear-gradient(180deg, #f8faff 0%, #fafbfe 50%, #f4f6fc 100%)'
    }}>
      {/* Soft Top-Left Indigo Glow */}
      <div style={{
        position: 'absolute',
        top: '-15%',
        left: '-10%',
        width: '55vw',
        height: '55vw',
        maxWidth: '750px',
        maxHeight: '750px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, rgba(124, 58, 237, 0.03) 50%, transparent 70%)',
        filter: 'blur(90px)',
      }} />

      {/* Soft Top-Right Coral/Rose Warmth */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-10%',
        width: '50vw',
        height: '50vw',
        maxWidth: '700px',
        maxHeight: '700px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(236, 72, 153, 0.05) 0%, rgba(244, 63, 94, 0.02) 50%, transparent 70%)',
        filter: 'blur(100px)',
      }} />

      {/* Subtle Center Sky Blue Glow */}
      <div style={{
        position: 'absolute',
        top: '40%',
        left: '30%',
        width: '45vw',
        height: '45vw',
        maxWidth: '650px',
        maxHeight: '650px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(14, 165, 233, 0.05) 0%, rgba(99, 102, 241, 0.02) 50%, transparent 70%)',
        filter: 'blur(110px)',
      }} />

      {/* Subtle Bottom Violet Accent */}
      <div style={{
        position: 'absolute',
        bottom: '-15%',
        right: '10%',
        width: '50vw',
        height: '50vw',
        maxWidth: '700px',
        maxHeight: '700px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.06) 0%, transparent 70%)',
        filter: 'blur(100px)',
      }} />

      {/* Ultra-subtle architectural grid dot pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(rgba(100, 116, 139, 0.12) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, #000 40%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, #000 40%, transparent 100%)',
        opacity: 0.6,
      }} />
    </div>
  );
};

export default Background;
