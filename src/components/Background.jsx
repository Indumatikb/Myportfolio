import React, { useEffect, useRef } from 'react';

const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Device Pixel Ratio capped at 2 for crispness and optimal 60fps performance
    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    let size = { width: 0, height: 0 };
    let canvasWidth = 0;
    let canvasHeight = 0;

    // Mouse coordinates (normalized -1 to 1) and smooth interpolation proxies
    const mousePosition = { x: 0, y: 0 };
    const mousePositionTarget = { x: 0, y: 0 };

    // Scale proxy based on scroll depth (from 0.25 to 1.8 like lucasvallenet.com)
    let scale = 0.3;
    let scaleTarget = 0.3;

    // Randomized phase offset
    const tOffset = Math.PI * Math.random();
    const totalEllipses = 40;
    const mouseDelta = 0.5;

    const hasPointer = window.matchMedia('(hover: hover)').matches;

    // Sizing calculation matching lucasvallenet.com DPRValue (multiples of 4)
    const resizeCanvas = () => {
      size.width = window.innerWidth;
      size.height = window.innerHeight;

      canvasWidth = Math.ceil((DPR * size.width) / 4) * 4;
      canvasHeight = Math.ceil((DPR * size.height) / 4) * 4;

      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      canvas.style.width = `${size.width}px`;
      canvas.style.height = `${size.height}px`;
    };

    resizeCanvas();

    // Mouse move tracking with mapRange scale dampening
    const handleMouseMove = (e) => {
      if (!hasPointer || size.width === 0 || size.height === 0) return;

      // Map range: scale between 0.2 and 1.8 maps dampening factor between 0.2 and 1.0
      const clampedScale = Math.min(Math.max(scale, 0.2), 1.8);
      const scaleDampen = 0.2 + ((clampedScale - 0.2) / 1.6) * 0.8;

      const normX = ((2 * e.clientX) / size.width - 1) * scaleDampen;
      const normY = ((2 * e.clientY) / size.height - 1) * scaleDampen;

      mousePositionTarget.x = normX;
      mousePositionTarget.y = normY;
    };

    // Scroll tracking to dynamically expand the vortex depth as user scrolls
    const handleScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(Math.max(window.scrollY / scrollable, 0), 1) : 0;
      // Interpolate scale target from 0.25 (at hero) to 1.75 (at footer)
      scaleTarget = 0.25 + progress * 1.5;
    };

    handleScroll();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('orientationchange', resizeCanvas);
    if (hasPointer) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });

    let animationFrameId;

    // Animation render loop
    const draw = () => {
      // Smooth interpolation (lerp) for fluid inertia
      mousePosition.x += (mousePositionTarget.x - mousePosition.x) * 0.055;
      mousePosition.y += (mousePositionTarget.y - mousePosition.y) * 0.055;

      scale += (scaleTarget - scale) * 0.075;

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      // Rotation progression matching lucasvallenet.com ticker time formula
      const timeInSec = performance.now() * 0.001;
      const t = timeInSec * 0.15 + tOffset;
      const maxDim = Math.max(canvasWidth, canvasHeight);

      ctx.lineWidth = Math.max(1, 1.15 * DPR);

      for (let e = 1; e <= totalEllipses; e++) {
        const r = e / totalEllipses;

        // Position of each ring center with mouse parallax
        const centerX = 0.5 * canvasWidth + mousePosition.x * mouseDelta * r * canvasWidth;
        const centerY = mouseDelta * canvasHeight + mousePosition.y * 0.5 * r * canvasHeight;

        // Ellipse semi-axes with scroll-driven scale
        const radiusX = Math.max(0.1, scale * r * 0.25 * maxDim);
        const radiusY = Math.max(0.1, scale * r * 0.5 * maxDim);

        // Harmonic angle twist per ring creating the 3D rotating helical wireframe tunnel
        const rotation = (t + e / (1.5 * totalEllipses)) * Math.PI;

        ctx.beginPath();
        ctx.ellipse(centerX, centerY, radiusX, radiusY, rotation, 0, 2 * Math.PI);

        // Sleek depth opacity: rings further away soften slightly for rich atmospheric depth
        const opacity = 0.28 + r * 0.48;
        ctx.strokeStyle = `rgba(37, 99, 235, ${opacity})`;
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('orientationchange', resizeCanvas);
      if (hasPointer) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="canvas-background-container" aria-hidden="true">
      <canvas ref={canvasRef} className="kinetic-tunnel-canvas" />
      {/* Subtle vignette overlay to ensure text readability */}
      <div className="canvas-vignette-overlay" />
    </div>
  );
};

export default Background;
