import React, { useEffect, useState } from 'react';

const Background = () => {
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Background Cyber Grid */}
      <div className="bg-grid-pattern" aria-hidden="true" />

      {/* Floating Aurora Orbs */}
      <div className="aurora-orb orb-1" aria-hidden="true" />
      <div className="aurora-orb orb-2" aria-hidden="true" />
      <div className="aurora-orb orb-3" aria-hidden="true" />

      {/* Interactive Subtle Mouse Spotlight */}
      <div 
        className="mouse-glow"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`
        }}
        aria-hidden="true"
      />
    </>
  );
};

export default Background;
