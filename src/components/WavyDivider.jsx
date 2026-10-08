import React from 'react';
import './WavyDivider.css';

/**
 * Multi-layer animated fluid SVG wavy divider between portfolio sections.
 * Features 3 phase-shifted overlapping sine waves with independent speeds & gradients.
 */
const WavyDivider = ({ 
  variant = 'cyan-indigo', 
  flip = false,
  height = 70,
  opacity = 1
}) => {
  return (
    <div 
      className={`wavy-divider-wrapper ${flip ? 'flipped' : ''} variant-${variant}`} 
      style={{ height: `${height}px`, opacity }}
      aria-hidden="true"
    >
      <svg
        className="wavy-divider-svg"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={`waveGrad1-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.18" />
            <stop offset="50%" stopColor="#6366f1" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.15" />
          </linearGradient>

          <linearGradient id={`waveGrad2-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.2" />
          </linearGradient>

          <linearGradient id={`waveGrad3-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#818cf8" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#34d399" stopOpacity="0.35" />
          </linearGradient>

          <linearGradient id={`waveStroke-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#c084fc" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.7" />
          </linearGradient>
        </defs>

        {/* Layer 1: Deep Slow Background Wave */}
        <path
          className="wave-layer wave-layer-1"
          fill={`url(#waveGrad1-${variant})`}
          d="M0,32 C240,75 480,10 720,45 C960,80 1200,20 1440,50 L1440,120 L0,120 Z"
        />

        {/* Layer 2: Mid Harmonic Undulating Wave */}
        <path
          className="wave-layer wave-layer-2"
          fill={`url(#waveGrad2-${variant})`}
          d="M0,60 C320,15 640,85 960,35 C1200,75 1360,25 1440,65 L1440,120 L0,120 Z"
        />

        {/* Layer 3: Foreground Crest Wave with Luminous Edge */}
        <path
          className="wave-layer wave-layer-3"
          fill={`url(#waveGrad3-${variant})`}
          d="M0,80 C200,40 460,95 720,55 C980,15 1240,70 1440,40 L1440,120 L0,120 Z"
        />

        {/* Glowing Crest Wireframe Line */}
        <path
          className="wave-crest-line"
          stroke={`url(#waveStroke-${variant})`}
          strokeWidth="1.5"
          fill="none"
          d="M0,80 C200,40 460,95 720,55 C980,15 1240,70 1440,40"
        />
      </svg>
    </div>
  );
};

export default WavyDivider;
