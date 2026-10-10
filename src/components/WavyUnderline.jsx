import React from 'react';

/**
 * Animated SVG sinusoidal squiggly wave underline.
 */
const WavyUnderline = ({ color = '#38bdf8', height = 10, width = '100%' }) => {
  return (
    <span className="wavy-underline-container" style={{ width, height: `${height}px` }} aria-hidden="true">
      <svg
        className="wavy-underline-svg"
        viewBox="0 0 300 20"
        preserveAspectRatio="none"
      >
        <path
          className="wavy-underline-path"
          d="M0,10 Q25,2 50,10 T100,10 T150,10 T200,10 T250,10 T300,10"
          fill="none"
          stroke={color}
          strokeWidth="3.2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
};

export default WavyUnderline;
