import React from 'react';

/**
 * Modern, clean gradient accent underline (replaces wavy squiggly lines).
 */
const WavyUnderline = ({ color = '#4f46e5', height = 3, width = '80px' }) => {
  return (
    <span
      className="accent-underline-bar"
      style={{
        display: 'block',
        width,
        height: `${height}px`,
        margin: '6px auto 0',
        borderRadius: '9999px',
        background: `linear-gradient(90deg, ${color}, #8b5cf6, transparent)`,
      }}
      aria-hidden="true"
    />
  );
};

export default WavyUnderline;
