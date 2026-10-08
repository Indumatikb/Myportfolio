import React, { useEffect, useRef, useState } from 'react';
import { Waves, Sparkles, Activity } from 'lucide-react';

const MODES = [
  { id: 'harmonic', label: 'Harmonic Ribbons', icon: Waves },
  { id: 'mesh', label: 'Cyber Wave Mesh', icon: Activity },
  { id: 'aurora', label: 'Liquid Aurora', icon: Sparkles }
];

const Background = () => {
  const canvasRef = useRef(null);
  const [currentMode, setCurrentMode] = useState('harmonic');
  const modeRef = useRef('harmonic');

  useEffect(() => {
    modeRef.current = currentMode;
  }, [currentMode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Device Pixel Ratio capped at 2 for razor-sharp rendering & smooth 60fps
    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    let width = 0;
    let height = 0;
    let canvasWidth = 0;
    let canvasHeight = 0;

    // Mouse coordinates in pixels and smooth interpolation targets
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      speed: 0,
      active: false
    };

    let scrollProgress = 0;
    let scrollTarget = 0;

    const hasPointer = window.matchMedia('(hover: hover)').matches;

    // Sizing canvas to window with DPR scaling
    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      canvasWidth = Math.ceil((DPR * width) / 4) * 4;
      canvasHeight = Math.ceil((DPR * height) / 4) * 4;

      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };

    resizeCanvas();

    // Mouse movement handler with smooth interpolation
    const handleMouseMove = (e) => {
      if (!hasPointer) return;
      mouse.targetX = e.clientX * DPR;
      mouse.targetY = e.clientY * DPR;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    // Scroll tracker
    const handleScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      scrollTarget = scrollable > 0 ? Math.min(Math.max(window.scrollY / scrollable, 0), 1) : 0;
    };

    handleScroll();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('orientationchange', resizeCanvas);
    if (hasPointer) {
      window.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseleave', handleMouseLeave);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Wave Ribbons Configuration
    const ribbonCount = 6;
    const ribbons = [
      {
        baseYRatio: 0.38,
        amplitude: 55,
        wavelength: 0.0028,
        speed: 1.15,
        harmonicRatio: 2.2,
        harmonicAmp: 22,
        phase: 0,
        colorStart: 'rgba(56, 189, 248, 0.75)',   // Electric Cyan
        colorEnd: 'rgba(99, 102, 241, 0.45)',     // Indigo
        fillColor: 'rgba(56, 189, 248, 0.05)',
        lineWidth: 2.2
      },
      {
        baseYRatio: 0.46,
        amplitude: 65,
        wavelength: 0.0022,
        speed: 0.88,
        harmonicRatio: 1.8,
        harmonicAmp: 28,
        phase: Math.PI * 0.35,
        colorStart: 'rgba(99, 102, 241, 0.8)',    // Indigo
        colorEnd: 'rgba(168, 85, 247, 0.55)',    // Violet
        fillColor: 'rgba(99, 102, 241, 0.045)',
        lineWidth: 2.4
      },
      {
        baseYRatio: 0.55,
        amplitude: 75,
        wavelength: 0.0019,
        speed: 1.05,
        harmonicRatio: 2.5,
        harmonicAmp: 32,
        phase: Math.PI * 0.7,
        colorStart: 'rgba(168, 85, 247, 0.75)',   // Violet
        colorEnd: 'rgba(56, 189, 248, 0.6)',      // Cyan
        fillColor: 'rgba(168, 85, 247, 0.04)',
        lineWidth: 2.0
      },
      {
        baseYRatio: 0.65,
        amplitude: 60,
        wavelength: 0.0025,
        speed: 0.75,
        harmonicRatio: 1.6,
        harmonicAmp: 25,
        phase: Math.PI * 1.1,
        colorStart: 'rgba(52, 211, 153, 0.7)',    // Emerald
        colorEnd: 'rgba(56, 189, 248, 0.5)',      // Cyan
        fillColor: 'rgba(52, 211, 153, 0.035)',
        lineWidth: 1.8
      },
      {
        baseYRatio: 0.75,
        amplitude: 70,
        wavelength: 0.0017,
        speed: 0.95,
        harmonicRatio: 2.1,
        harmonicAmp: 30,
        phase: Math.PI * 1.5,
        colorStart: 'rgba(99, 102, 241, 0.65)',   // Indigo
        colorEnd: 'rgba(244, 63, 94, 0.45)',      // Rose
        fillColor: 'rgba(99, 102, 241, 0.03)',
        lineWidth: 2.0
      },
      {
        baseYRatio: 0.84,
        amplitude: 50,
        wavelength: 0.0031,
        speed: 1.3,
        harmonicRatio: 1.9,
        harmonicAmp: 18,
        phase: Math.PI * 1.9,
        colorStart: 'rgba(56, 189, 248, 0.55)',   // Cyan
        colorEnd: 'rgba(168, 85, 247, 0.4)',      // Violet
        fillColor: 'rgba(56, 189, 248, 0.025)',
        lineWidth: 1.6
      }
    ];

    // Surfing Crest Particles
    const particleCount = 45;
    const particles = Array.from({ length: particleCount }, (_, idx) => ({
      xRatio: Math.random(),
      ribbonIndex: idx % ribbonCount,
      yOffset: (Math.random() - 0.5) * 20,
      size: Math.random() * 2.0 + 1.0,
      speedX: (Math.random() * 0.0003 + 0.0001) * (Math.random() > 0.5 ? 1 : -1),
      baseOpacity: Math.random() * 0.6 + 0.25,
      pulsePhase: Math.random() * Math.PI * 2
    }));

    // Ambient floating orbs in background
    const ambientOrbs = [
      { x: 0.2, y: 0.35, radius: 280, color: 'rgba(56, 189, 248, 0.07)' },
      { x: 0.8, y: 0.55, radius: 340, color: 'rgba(99, 102, 241, 0.06)' },
      { x: 0.5, y: 0.8, radius: 300, color: 'rgba(168, 85, 247, 0.05)' }
    ];

    let animationFrameId;

    // Helper: calculate wave height at a specific x coordinate
    const calculateWaveY = (ribbon, x, time, scrollVal, mouseObj) => {
      const mode = modeRef.current;
      const baseAmp = ribbon.amplitude * DPR;
      const harmAmp = ribbon.harmonicAmp * DPR;
      const k1 = ribbon.wavelength / DPR;
      const k2 = k1 * ribbon.harmonicRatio;

      let modeAmpMultiplier = 1;
      let modeFreqMultiplier = 1;

      if (mode === 'mesh') {
        modeAmpMultiplier = 0.85;
        modeFreqMultiplier = 1.3;
      } else if (mode === 'aurora') {
        modeAmpMultiplier = 1.35;
        modeFreqMultiplier = 0.7;
      }

      // Base undulating sine + cosine harmonics
      const t = time * ribbon.speed * 0.0008 + ribbon.phase;
      const scrollAmpBoost = 1 + scrollVal * 0.4;
      const scrollPhaseShift = scrollVal * Math.PI * 1.5;

      const y1 = Math.sin(x * k1 * modeFreqMultiplier + t + scrollPhaseShift) * baseAmp * modeAmpMultiplier * scrollAmpBoost;
      const y2 = Math.cos(x * k2 * modeFreqMultiplier - t * 0.8) * harmAmp * modeAmpMultiplier;
      const y3 = Math.sin((x * 0.0005) + t * 0.4) * (15 * DPR);

      let totalY = ribbon.baseYRatio * canvasHeight + y1 + y2 + y3;

      // Mouse interactive ripple / displacement
      if (mouseObj.active && mouseObj.x >= 0) {
        const dx = x - mouseObj.x;
        const distSq = dx * dx;
        const radius = 240 * DPR;
        const radiusSq = radius * radius;

        if (distSq < radiusSq) {
          const proximity = 1 - Math.sqrt(distSq) / radius;
          // Smooth bell curve with dynamic ripple sine wave
          const ripple = Math.sin((Math.sqrt(distSq) * 0.035) - time * 0.008) * (35 * DPR);
          const push = (1 - (mouseObj.y / canvasHeight)) * (25 * DPR);
          totalY += (ripple + push) * proximity * proximity;
        }
      }

      return totalY;
    };

    // Main animation render loop
    const render = (timestamp) => {
      // Lerp mouse target for smooth trailing
      if (mouse.x < 0) {
        mouse.x = mouse.targetX;
        mouse.y = mouse.targetY;
      } else {
        mouse.x += (mouse.targetX - mouse.x) * 0.08;
        mouse.y += (mouse.targetY - mouse.y) * 0.08;
      }

      scrollProgress += (scrollTarget - scrollProgress) * 0.06;

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      // 1. Render ambient subtle glow orbs
      ambientOrbs.forEach((orb) => {
        const cx = orb.x * canvasWidth;
        const cy = orb.y * canvasHeight + Math.sin(timestamp * 0.0005 + orb.x * 5) * (30 * DPR);
        const r = orb.radius * DPR;
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        grad.addColorStop(0, orb.color);
        grad.addColorStop(1, 'rgba(6, 8, 19, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
      });

      // 2. Render mouse cursor spotlight aura
      if (hasPointer && mouse.active && mouse.x >= 0) {
        const spotRadius = 260 * DPR;
        const spotGrad = ctx.createRadialGradient(mouse.x, mouse.y, 10, mouse.x, mouse.y, spotRadius);
        spotGrad.addColorStop(0, 'rgba(56, 189, 248, 0.09)');
        spotGrad.addColorStop(0.5, 'rgba(99, 102, 241, 0.04)');
        spotGrad.addColorStop(1, 'rgba(6, 8, 19, 0)');
        ctx.fillStyle = spotGrad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, spotRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      const mode = modeRef.current;
      const stepX = mode === 'mesh' ? 12 * DPR : 18 * DPR;
      const numPoints = Math.ceil(canvasWidth / stepX) + 1;

      // Precalculate heights for all ribbons across the width
      const ribbonPoints = [];

      for (let r = 0; r < ribbons.length; r++) {
        const ribbon = ribbons[r];
        const points = [];

        for (let i = 0; i <= numPoints; i++) {
          const x = i * stepX;
          const y = calculateWaveY(ribbon, x, timestamp, scrollProgress, mouse);
          points.push({ x, y });
        }
        ribbonPoints.push(points);
      }

      // 3. Mode: Cyber Wave Mesh (connecting transverse lines between ribbons)
      if (mode === 'mesh') {
        const colInterval = Math.max(2, Math.floor(36 * DPR / stepX));
        ctx.lineWidth = 1 * DPR;

        for (let i = 0; i < numPoints; i += colInterval) {
          const x = i * stepX;
          const meshGrad = ctx.createLinearGradient(0, ribbonPoints[0][i].y, 0, ribbonPoints[ribbons.length - 1][i].y);
          meshGrad.addColorStop(0, 'rgba(56, 189, 248, 0.25)');
          meshGrad.addColorStop(0.5, 'rgba(99, 102, 241, 0.35)');
          meshGrad.addColorStop(1, 'rgba(168, 85, 247, 0.15)');
          ctx.strokeStyle = meshGrad;

          ctx.beginPath();
          ctx.moveTo(ribbonPoints[0][i].x, ribbonPoints[0][i].y);
          for (let r = 1; r < ribbons.length; r++) {
            ctx.lineTo(ribbonPoints[r][i].x, ribbonPoints[r][i].y);
          }
          ctx.stroke();

          // Mesh intersection node dots
          for (let r = 0; r < ribbons.length; r += 2) {
            ctx.fillStyle = 'rgba(56, 189, 248, 0.55)';
            ctx.beginPath();
            ctx.arc(ribbonPoints[r][i].x, ribbonPoints[r][i].y, 1.8 * DPR, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // 4. Render Wave Ribbon Fills & Gradient Strokes
      for (let r = 0; r < ribbons.length; r++) {
        const ribbon = ribbons[r];
        const points = ribbonPoints[r];

        // Volumetric Area Fill under the wave
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);

        for (let i = 1; i < points.length; i++) {
          const prev = points[i - 1];
          const curr = points[i];
          const midX = (prev.x + curr.x) / 2;
          const midY = (prev.y + curr.y) / 2;
          ctx.quadraticCurveTo(prev.x, prev.y, midX, midY);
        }

        ctx.lineTo(canvasWidth, canvasHeight);
        ctx.lineTo(0, canvasHeight);
        ctx.closePath();

        const fillGrad = ctx.createLinearGradient(0, ribbon.baseYRatio * canvasHeight - 50, 0, canvasHeight);
        fillGrad.addColorStop(0, ribbon.fillColor);
        fillGrad.addColorStop(0.6, 'rgba(12, 16, 32, 0.02)');
        fillGrad.addColorStop(1, 'rgba(6, 8, 19, 0)');
        ctx.fillStyle = fillGrad;
        ctx.fill();

        // Wave Ribbon Stroke Curve
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);

        for (let i = 1; i < points.length; i++) {
          const prev = points[i - 1];
          const curr = points[i];
          const midX = (prev.x + curr.x) / 2;
          const midY = (prev.y + curr.y) / 2;
          ctx.quadraticCurveTo(prev.x, prev.y, midX, midY);
        }

        const strokeGrad = ctx.createLinearGradient(0, 0, canvasWidth, 0);
        strokeGrad.addColorStop(0, ribbon.colorStart);
        strokeGrad.addColorStop(0.5, ribbon.colorEnd);
        strokeGrad.addColorStop(1, ribbon.colorStart);

        ctx.strokeStyle = strokeGrad;
        ctx.lineWidth = ribbon.lineWidth * DPR;
        ctx.shadowColor = ribbon.colorStart;
        ctx.shadowBlur = mode === 'aurora' ? 14 * DPR : 6 * DPR;
        ctx.stroke();
        ctx.shadowBlur = 0; // reset
      }

      // 5. Render Surfing Wave Crest Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.xRatio = (p.xRatio + p.speedX + 1) % 1;

        const currentX = p.xRatio * canvasWidth;
        const ribbon = ribbons[p.ribbonIndex];
        const waveY = calculateWaveY(ribbon, currentX, timestamp, scrollProgress, mouse);
        const finalY = waveY + p.yOffset * DPR;

        const pulse = Math.sin(timestamp * 0.002 + p.pulsePhase) * 0.3 + 0.7;
        const particleOpacity = p.baseOpacity * pulse;

        ctx.beginPath();
        ctx.arc(currentX, finalY, p.size * DPR, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(186, 230, 253, ${particleOpacity})`;
        ctx.shadowColor = 'rgba(56, 189, 248, 0.8)';
        ctx.shadowBlur = 4 * DPR;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('orientationchange', resizeCanvas);
      if (hasPointer) {
        window.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const cycleMode = () => {
    const currentIndex = MODES.findIndex((m) => m.id === currentMode);
    const nextMode = MODES[(currentIndex + 1) % MODES.length];
    setCurrentMode(nextMode.id);
  };

  const currentModeObj = MODES.find((m) => m.id === currentMode) || MODES[0];
  const CurrentIcon = currentModeObj.icon;

  return (
    <div className="canvas-background-container" aria-hidden="true">
      <canvas ref={canvasRef} className="kinetic-tunnel-canvas" />

      {/* Atmospheric Vignette Overlays */}
      <div className="canvas-vignette-overlay" />
      <div className="ambient-glow-top" />

      {/* Interactive Wave Engine Mode Controller Switch */}
      <div className="wavy-engine-control" style={{ pointerEvents: 'auto' }}>
        <button
          type="button"
          onClick={cycleMode}
          className="wavy-mode-pill"
          title="Click to cycle dynamic wave animation forms"
          aria-label={`Waveform Engine: ${currentModeObj.label}. Click to switch mode.`}
        >
          <span className="wavy-pulse-icon">
            <CurrentIcon size={14} className="wavy-icon-spin" />
          </span>
          <span className="wavy-mode-label">
            <span className="wavy-dim-text">Waveform:</span> {currentModeObj.label}
          </span>
          <span className="wavy-badge-switch">Switch</span>
        </button>
      </div>
    </div>
  );
};

export default Background;
