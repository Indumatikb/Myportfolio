import React, { useEffect, useRef, useState } from 'react';
import { Activity, Radio, Cpu, Sparkles, RefreshCw } from 'lucide-react';
import './HeroWaveform.css';

const HeroWaveform = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [resonance, setResonance] = useState(1.2);
  const [isHovered, setIsHovered] = useState(false);
  const [activeHarmonic, setActiveHarmonic] = useState(3);
  const mouseRef = useRef({ x: 0.5, y: 0.5, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * DPR;
      canvas.height = rect.height * DPR;
    };

    resize();
    window.addEventListener('resize', resize);

    let phase = 0;

    const render = (time) => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      phase += 0.035 * resonance;

      // 4 harmonic wave lines with distinct frequencies & colors
      const waveConfigs = [
        {
          freq: 0.015,
          harm: activeHarmonic * 0.5,
          amp: h * 0.22 * resonance,
          color: 'rgba(56, 189, 248, 0.9)',    // Cyan
          glow: 'rgba(56, 189, 248, 0.6)',
          lineWidth: 2.2 * DPR,
          offset: 0
        },
        {
          freq: 0.022,
          harm: activeHarmonic * 0.7,
          amp: h * 0.18 * resonance,
          color: 'rgba(129, 140, 248, 0.85)',  // Indigo
          glow: 'rgba(129, 140, 248, 0.5)',
          lineWidth: 2.0 * DPR,
          offset: Math.PI * 0.4
        },
        {
          freq: 0.031,
          harm: activeHarmonic * 0.9,
          amp: h * 0.14 * resonance,
          color: 'rgba(192, 132, 252, 0.75)',  // Violet
          glow: 'rgba(192, 132, 252, 0.45)',
          lineWidth: 1.8 * DPR,
          offset: Math.PI * 0.8
        },
        {
          freq: 0.009,
          harm: 1,
          amp: h * 0.26 * resonance,
          color: 'rgba(52, 211, 153, 0.65)',   // Emerald
          glow: 'rgba(52, 211, 153, 0.4)',
          lineWidth: 1.5 * DPR,
          offset: Math.PI * 1.3
        }
      ];

      // Subtle center grid line
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1 * DPR;
      ctx.beginPath();
      ctx.moveTo(0, h / 2);
      ctx.lineTo(w, h / 2);
      ctx.stroke();

      const centerY = h / 2;

      // Draw each wave form
      waveConfigs.forEach((cfg) => {
        ctx.beginPath();
        ctx.lineWidth = cfg.lineWidth;
        ctx.strokeStyle = cfg.color;
        ctx.shadowColor = cfg.glow;
        ctx.shadowBlur = 8 * DPR;

        const points = [];
        const steps = 100;

        for (let i = 0; i <= steps; i++) {
          const x = (i / steps) * w;
          const normX = i / steps;

          // Envelope window to taper ends smoothly to 0 amplitude
          const envelope = Math.sin(normX * Math.PI);

          // Harmonic sine calculation
          const wave1 = Math.sin(normX * 12 + phase + cfg.offset);
          const wave2 = Math.cos(normX * 24 * (cfg.harm / 2) - phase * 0.8);
          
          let mouseInfluence = 0;
          if (mouseRef.current.active) {
            const dist = Math.abs(normX - mouseRef.current.x);
            if (dist < 0.25) {
              mouseInfluence = Math.cos((dist / 0.25) * Math.PI * 0.5) * (h * 0.15);
            }
          }

          const y = centerY + (wave1 * cfg.amp * 0.65 + wave2 * cfg.amp * 0.35 + mouseInfluence) * envelope;
          points.push({ x, y });

          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            const prev = points[i - 1];
            const midX = (prev.x + x) / 2;
            const midY = (prev.y + y) / 2;
            ctx.quadraticCurveTo(prev.x, prev.y, midX, midY);
          }
        }

        ctx.stroke();
        ctx.shadowBlur = 0;

        // Draw animated pulse nodes along the wave
        const nodeIndex = Math.floor((Math.sin(phase * 0.6 + cfg.offset) * 0.4 + 0.5) * steps);
        if (points[nodeIndex]) {
          const node = points[nodeIndex];
          ctx.beginPath();
          ctx.arc(node.x, node.y, 4 * DPR, 0, Math.PI * 2);
          ctx.fillStyle = '#ffffff';
          ctx.shadowColor = cfg.color;
          ctx.shadowBlur = 10 * DPR;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      animationId = requestAnimationFrame(render);
    };

    animationId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, [resonance, activeHarmonic]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
    mouseRef.current = { x, y, active: true };
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setResonance(1.6);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseRef.current.active = false;
    setResonance(1.2);
  };

  const cycleHarmonics = () => {
    setActiveHarmonic((prev) => (prev >= 5 ? 2 : prev + 1));
  };

  return (
    <div 
      className={`hero-waveform-card glass-panel ${isHovered ? 'hovered' : ''}`}
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="waveform-header">
        <div className="waveform-status-pill">
          <span className="waveform-pulse-dot"></span>
          <Activity size={13} className="waveform-pulse-icon" />
          <span className="waveform-status-text">Harmonic Oscillating Waves • Interactive</span>
        </div>

        <div className="waveform-actions">
          <button 
            type="button" 
            className="waveform-action-btn"
            onClick={cycleHarmonics}
            title="Cycle harmonic wave frequency"
          >
            <RefreshCw size={12} className="btn-icon-spin" />
            <span>Harmonics: {activeHarmonic}x</span>
          </button>
        </div>
      </div>

      <div className="waveform-canvas-box">
        <canvas ref={canvasRef} className="waveform-canvas" />
        
        {/* Animated Equalizer Wave Bars on sides */}
        <div className="waveform-side-bars left">
          <span className="eq-bar bar-1"></span>
          <span className="eq-bar bar-2"></span>
          <span className="eq-bar bar-3"></span>
          <span className="eq-bar bar-4"></span>
          <span className="eq-bar bar-5"></span>
        </div>
        <div className="waveform-side-bars right">
          <span className="eq-bar bar-5"></span>
          <span className="eq-bar bar-4"></span>
          <span className="eq-bar bar-3"></span>
          <span className="eq-bar bar-2"></span>
          <span className="eq-bar bar-1"></span>
        </div>
      </div>

      <div className="waveform-footer">
        <div className="waveform-metric">
          <span className="metric-label">Modulation</span>
          <span className="metric-val text-cyan">Sine/Cosine Realtime</span>
        </div>
        <div className="waveform-metric">
          <span className="metric-label">Wave Resonance</span>
          <span className="metric-val text-violet">{resonance.toFixed(1)}x {isHovered ? '(Boosted)' : ''}</span>
        </div>
        <div className="waveform-metric">
          <span className="metric-label">Interaction</span>
          <span className="metric-val text-emerald">Hover & Drag Cursor</span>
        </div>
      </div>
    </div>
  );
};

export default HeroWaveform;
