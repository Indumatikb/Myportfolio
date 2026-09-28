import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  ShieldCheck, 
  Activity, 
  Cpu, 
  Lock, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Layers, 
  RefreshCw,
  Send,
  Radio
} from 'lucide-react';
import './EventLedger.css';

const sampleBookings = [
  {
    id: 'TX-9842',
    name: 'Royal Heritage Palace',
    type: 'Luxury Venue',
    amount: '₹1,85,000',
    time: 'Just now',
    hash: '0x8f...c4b1',
    color: '#38bdf8'
  },
  {
    id: 'TX-9841',
    name: 'Stage Kinetics & Intelligent Light Suite',
    type: 'Decor & AV',
    amount: '₹52,000',
    time: '2m ago',
    hash: '0x3e...7f92',
    color: '#a855f7'
  },
  {
    id: 'TX-9840',
    name: 'Grand Gourmet Banquet (450 pax)',
    type: 'Catering',
    amount: '₹1,40,000',
    time: '12m ago',
    hash: '0x7b...110e',
    color: '#34d399'
  }
];

const mockNewEvents = [
  { name: 'Emerald Convention Hall', type: 'Grand Venue', amount: '₹1,20,000', color: '#38bdf8' },
  { name: 'Royal Feast Catering (500 pax)', type: 'Catering', amount: '₹1,60,000', color: '#34d399' },
  { name: 'Floral Pavilion & Arch Setup', type: 'Decor', amount: '₹45,000', color: '#a855f7' },
  { name: 'Symphony Audio & Stage Rigging', type: 'AV Setup', amount: '₹62,000', color: '#f59e0b' }
];

const EventLedger = () => {
  const [stream, setStream] = useState(sampleBookings);
  const [isProcessing, setIsProcessing] = useState(false);
  const [pulseCount, setPulseCount] = useState(0);
  const [activeNode, setActiveNode] = useState('engine');
  const [volume, setVolume] = useState(1320000);

  const triggerLiveBooking = () => {
    if (isProcessing) return;
    setIsProcessing(true);
    setPulseCount(prev => prev + 1);

    // Simulate pipeline traversal
    setTimeout(() => {
      const pick = mockNewEvents[Math.floor(Math.random() * mockNewEvents.length)];
      const newTx = {
        id: `TX-${Math.floor(9843 + Math.random() * 800)}`,
        name: pick.name,
        type: pick.type,
        amount: pick.amount,
        time: 'Just now',
        hash: `0x${Math.random().toString(16).substring(2, 4)}...${Math.random().toString(16).substring(2, 6)}`,
        color: pick.color,
        isNew: true
      };

      setStream(prev => [newTx, ...prev.slice(0, 3)]);
      setVolume(prev => prev + parseInt(pick.amount.replace(/[^0-9]/g, ''), 10));
      setIsProcessing(false);
    }, 900);
  };

  return (
    <div className="eventledger-experience">
      {/* Ambient Radial Mesh Behind Section */}
      <div className="el-ambient-glow" aria-hidden="true" />

      {/* Header with Live Holographic Indicator */}
      <div className="el-top-row">
        <div className="el-title-group">
          <div className="el-radar-pill">
            <Radio size={14} className="radar-signal-icon" />
            <span className="live-text">EVENTLEDGER PROTOCOL</span>
            <span className="status-ping"></span>
          </div>

          <h3 className="el-main-heading">
            EventLedger: <span className="gradient-text">Real-Time Audit & Booking Engine</span>
          </h3>
          <p className="el-main-desc">
            A high-concurrency event logistics & financial settlement engine built with 
            Django REST Framework, React 19, and ACID-safe database pipelines.
          </p>
        </div>

        <div className="el-trigger-wrap">
          <button 
            onClick={triggerLiveBooking}
            className={`el-magic-btn ${isProcessing ? 'animating' : ''}`}
            disabled={isProcessing}
            id="trigger-live-booking-btn"
          >
            <span className="btn-glow-ring"></span>
            <Zap size={16} className={`btn-zap ${isProcessing ? 'spin' : ''}`} />
            <span>{isProcessing ? 'Reconciling Ledger...' : 'Simulate Booking Wave'}</span>
          </button>
        </div>
      </div>

      {/* Integrated Hologram HUD Telemetry Bar (No rigid boxes!) */}
      <div className="el-hud-strip">
        <div className="hud-metric">
          <span className="hud-label">Settled Ledger Volume</span>
          <span className="hud-value cyan">₹{(volume / 100000).toFixed(2)} Lakhs</span>
        </div>
        <div className="hud-divider" />
        <div className="hud-metric">
          <span className="hud-label">Concurrency Guard</span>
          <span className="hud-value purple">100% ACID Safe</span>
        </div>
        <div className="hud-divider" />
        <div className="hud-metric">
          <span className="hud-label">Verification Speed</span>
          <span className="hud-value emerald">&lt; 8.4 ms</span>
        </div>
        <div className="hud-divider" />
        <div className="hud-metric">
          <span className="hud-label">Audit Consensus</span>
          <span className="hud-value amber">SHA-256 Hashes</span>
        </div>
      </div>

      {/* Interactive Visualizer: Hologram Pipeline + Live Floating Stream */}
      <div className="el-stage-container">
        
        {/* Left: Dynamic Holographic Pipeline Canvas */}
        <div className="el-pipeline-canvas">
          <div className="canvas-header">
            <span className="canvas-tag">INTERACTIVE ARCHITECTURE PIPELINE</span>
            <span className="canvas-hint">Click nodes to inspect data flow</span>
          </div>

          {/* SVG Animated Laser Stream */}
          <div className="svg-beam-wrapper">
            <svg className="pipeline-svg" viewBox="0 0 460 160" preserveAspectRatio="none">
              <defs>
                <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#a855f7" stopOpacity="1" />
                  <stop offset="100%" stopColor="#34d399" stopOpacity="0.8" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Base Path Line */}
              <path 
                d="M 50 80 C 140 80, 160 80, 230 80 C 300 80, 320 80, 410 80" 
                stroke="rgba(255,255,255,0.08)" 
                strokeWidth="4" 
                fill="none" 
              />

              {/* Animated Glowing Laser Beam */}
              <path 
                className={`animated-laser-beam ${isProcessing ? 'laser-fast' : ''}`}
                d="M 50 80 C 140 80, 160 80, 230 80 C 300 80, 320 80, 410 80" 
                stroke="url(#beamGradient)" 
                strokeWidth="3" 
                fill="none" 
                filter="url(#glow)"
              />
            </svg>

            {/* Node 1: Client Layer */}
            <div 
              className={`hologram-node node-client ${activeNode === 'client' ? 'active' : ''}`}
              onClick={() => setActiveNode('client')}
              title="Click to inspect Client Portal"
            >
              <div className="node-orbital-ring"></div>
              <div className="node-icon-core cyan">
                <Activity size={18} />
              </div>
              <span className="node-name">Booking Portal</span>
              <span className="node-sub">React 19 / Vite</span>
            </div>

            {/* Node 2: Core ACID Engine (Centerpiece with Rotating Radar) */}
            <div 
              className={`hologram-node node-engine ${activeNode === 'engine' ? 'active' : ''}`}
              onClick={() => setActiveNode('engine')}
              title="Click to inspect Core Engine"
            >
              <div className="radar-sweep-orb"></div>
              <div className="node-icon-core purple">
                <Cpu size={22} />
              </div>
              <span className="node-name">EventLedger Hub</span>
              <span className="node-sub">Django REST ACID</span>
            </div>

            {/* Node 3: Immutable Vault */}
            <div 
              className={`hologram-node node-vault ${activeNode === 'vault' ? 'active' : ''}`}
              onClick={() => setActiveNode('vault')}
              title="Click to inspect Audit Vault"
            >
              <div className="node-orbital-ring green"></div>
              <div className="node-icon-core emerald">
                <ShieldCheck size={18} />
              </div>
              <span className="node-name">Audit Vault</span>
              <span className="node-sub">PostgreSQL Ledger</span>
            </div>
          </div>

          {/* Node Insight Pill */}
          <div className="node-insight-banner">
            <Sparkles size={16} className="insight-icon" />
            <div className="insight-text">
              {activeNode === 'client' && (
                <span><strong>Client Portal:</strong> Real-time reservation UI with optimistic locking preventing overlapping slot submissions.</span>
              )}
              {activeNode === 'engine' && (
                <span><strong>EventLedger Hub:</strong> Serialized transactions ensure that no venue, decorator, or caterer can ever be double-booked.</span>
              )}
              {activeNode === 'vault' && (
                <span><strong>Audit Vault:</strong> Cryptographically logged append-only ledger with timestamped event proofs and financial reconciliation.</span>
              )}
            </div>
          </div>
        </div>

        {/* Right: Floating Live Booking Stream */}
        <div className="el-stream-wrapper">
          <div className="stream-header">
            <span className="stream-title">
              <span className="pulse-dot-green"></span> LIVE LEDGER STREAM
            </span>
            <span className="stream-tagline">Reconciled in real time</span>
          </div>

          <div className="stream-cards-col">
            {stream.map((item, idx) => (
              <div 
                key={item.id} 
                className={`stream-floating-card ${item.isNew ? 'slide-glow-in' : ''}`}
                style={{ animationDelay: `${idx * 0.08}s` }}
              >
                <div className="stream-card-left" style={{ borderLeftColor: item.color }}>
                  <div className="card-primary-info">
                    <span className="event-name">{item.name}</span>
                    <div className="event-tags-row">
                      <span className="type-pill" style={{ color: item.color, borderColor: `${item.color}40` }}>
                        {item.type}
                      </span>
                      <span className="hash-code">{item.hash}</span>
                    </div>
                  </div>
                </div>

                <div className="stream-card-right">
                  <span className="amount-text">{item.amount}</span>
                  <span className="time-badge">
                    <CheckCircle2 size={12} className="check-icon" /> {item.time}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="stream-footer-hint">
            <div className="sync-badge">
              <RefreshCw size={12} className={isProcessing ? 'spin' : ''} />
              <span>Pipeline Synced</span>
            </div>
            <span className="stream-id-count">Live Block #{9840 + pulseCount}</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default EventLedger;
