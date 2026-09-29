import React from 'react';

const Background = () => {
  return (
    <div className="ambient-background" aria-hidden="true">
      {/* Subtle Dot Matrix Grid */}
      <div className="bg-grid-pattern" />

      {/* Soft Ambient Glow Orbs - Pure CSS, zero JS overhead */}
      <div className="ambient-orb orb-cyan" />
      <div className="ambient-orb orb-purple" />
      <div className="ambient-orb orb-indigo" />
    </div>
  );
};

export default Background;
