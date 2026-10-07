import React, { useEffect, useRef } from 'react';

const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Device Pixel Ratio capped at 2 for razor-sharp rendering & smooth 60fps
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
    const totalEllipses = 42;
    const mouseDelta = 0.5;

    const hasPointer = window.matchMedia('(hover: hover)').matches;

    // Ambient twinkling cosmic dust particles
    const particles = Array.from({ length: 35 }, () => ({
      x: Math.random(),
      y: Math.random(),
      size: Math.random() * 1.6 + 0.6,
      speedX: (Math.random() - 0.5) * 0.00015,
      speedY: (Math.random() - 0.5) * 0.00015,
      baseOpacity: Math.random() * 0.45 + 0.15,
      phase: Math.random() * Math.PI * 2
    }));

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

    // Mouse move tracking with dampening factor
    const handleMouseMove = (e) => {
      if (!hasPointer || size.width === 0 || size.height === 0) return;

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

      const timeInSec = performance.now() * 0.001;
      const t = timeInSec * 0.15 + tOffset;
      const maxDim = Math.max(canvasWidth, canvasHeight);

      // Render cosmic background particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x = (p.x + p.speedX + 1) % 1;
        p.y = (p.y + p.speedY + 1) % 1;

        const px = p.x * canvasWidth + mousePosition.x * 20 * DPR;
        const py = p.y * canvasHeight + mousePosition.y * 20 * DPR;
        const flicker = Math.sin(timeInSec * 1.5 + p.phase) * 0.2 + 0.8;
        const currentOpacity = Math.max(0.05, p.baseOpacity * flicker);

        ctx.beginPath();
        ctx.arc(px, py, p.size * DPR, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(148, 163, 184, ${currentOpacity})`;
        ctx.fill();
      }

      // Render interactive luminous cursor spotlight
      if (hasPointer && (mousePosition.x !== 0 || mousePosition.y !== 0)) {
        const spotX = 0.5 * canvasWidth + mousePosition.x * 0.45 * canvasWidth;
        const spotY = 0.5 * canvasHeight + mousePosition.y * 0.45 * canvasHeight;
        const spotGrad = ctx.createRadialGradient(spotX, spotY, 20, spotX, spotY, 360 * DPR);
        spotGrad.addColorStop(0, 'rgba(56, 189, 248, 0.065)');
        spotGrad.addColorStop(0.5, 'rgba(99, 102, 241, 0.025)');
        spotGrad.addColorStop(1, 'rgba(6, 8, 19, 0)');
        ctx.fillStyle = spotGrad;
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
      }

      ctx.lineWidth = Math.max(1, 1.2 * DPR);

      // Render rotating helical wireframe tunnel with chromatic depth
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

        // Chromatic multi-stop gradient for the wireframe strokes
        const opacity = 0.2 + r * 0.5;
        const grad = ctx.createLinearGradient(
          centerX - radiusX, centerY - radiusY,
          centerX + radiusX, centerY + radiusY
        );

        grad.addColorStop(0, `rgba(56, 189, 248, ${opacity})`);       // Electric Cyan
        grad.addColorStop(0.5, `rgba(99, 102, 241, ${opacity * 0.85})`); // Indigo
        grad.addColorStop(1, `rgba(192, 132, 252, ${opacity * 0.75})`); // Lavender/Violet

        ctx.strokeStyle = grad;
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
      {/* Ambient Vignette & Bloom Overlays */}
      <div className="canvas-vignette-overlay" />
      <div className="ambient-glow-top" />
    </div>
  );
};

export default Background;
