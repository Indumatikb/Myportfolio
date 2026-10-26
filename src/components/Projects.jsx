import React, { useState } from 'react';
import { 
  ExternalLink, 
  Globe, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  Calendar, 
  ShieldCheck, 
  Activity, 
  CreditCard, 
  ArrowUpRight, 
  Layers, 
  Code2, 
  Terminal, 
  Check 
} from 'lucide-react';
import WavyUnderline from './WavyUnderline';
import './Projects.css';

const SECONDARY_PROJECTS = [
  {
    id: 'dsa-viz',
    title: 'Algorithmic & DSA Visualizer',
    tagline: 'Interactive Pathfinding & Sorting Simulation',
    category: 'algorithms',
    description: 'An interactive developer visualizer built to demonstrate sorting algorithms (Merge Sort, Quick Sort) and graph traversals (Dijkstra, BFS, DFS) with real-time step execution.',
    tags: ['Python Logic', 'JavaScript', 'React', 'Canvas API', 'Algorithms'],
    metrics: 'O(V + E) Traversals • Interactive Speed Slider',
    github: 'https://github.com'
  },
  {
    id: 'campus-sync',
    title: 'CampusSync Academic Hub',
    category: 'fullstack',
    tagline: 'College Resource & Event Logistics System',
    description: 'A responsive student portal managing technical fest schedules, study material repositories, and project team collaborations with relational database backing.',
    tags: ['JavaScript', 'HTML5 & CSS3', 'SQL Schema', 'REST Architecture'],
    metrics: 'Relational DB • Role-Based Views',
    github: 'https://github.com'
  }
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState('overview'); // overview, architecture, ledger
  const [projectFilter, setProjectFilter] = useState('all');

  const filteredSecondary = projectFilter === 'all' 
    ? SECONDARY_PROJECTS 
    : SECONDARY_PROJECTS.filter(p => p.category === projectFilter || projectFilter === 'secondary');

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-pill">Featured Work</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects & Startup Builds</span>
          </h2>
          <WavyUnderline color="#6366f1" height={4} width="100px" />
          <p className="section-subtitle">
            Engineered from ground up: production architectures, real users, structured workflows, and full-stack execution.
          </p>
        </div>

        {/* Flagship Project Card: EventLedger.me */}
        <div className="eventledger-showcase-card glass-panel">
          
          <div className="el-card-grid">
            
            {/* Left: Project Brand, Metrics & Story */}
            <div className="el-meta-col">
              
              <div className="el-badge-row">
                <span className="el-startup-badge">
                  <Sparkles size={13} className="el-spark-icon" />
                  Flagship Startup Platform
                </span>
                <span className="el-live-indicator">
                  <span className="live-dot-pulse"></span>
                  Live in Production
                </span>
              </div>

              <h3 className="el-title">EventLedger</h3>
              <p className="el-tagline">
                Next-generation event management and transparent financial ledger platform built for colleges, tech fests, and student communities.
              </p>

              {/* Interactive Showcase Tabs */}
              <div className="el-feature-tabs">
                <button 
                  className={`el-tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
                  onClick={() => setActiveTab('overview')}
                >
                  Overview
                </button>
                <button 
                  className={`el-tab-btn ${activeTab === 'architecture' ? 'active' : ''}`}
                  onClick={() => setActiveTab('architecture')}
                >
                  Architecture
                </button>
                <button 
                  className={`el-tab-btn ${activeTab === 'ledger' ? 'active' : ''}`}
                  onClick={() => setActiveTab('ledger')}
                >
                  Live Ledger Flow
                </button>
              </div>

              {/* Tab Content Display */}
              <div className="el-tab-content-area">
                {activeTab === 'overview' && (
                  <div className="el-features-list">
                    <div className="el-feature-bullet">
                      <CheckCircle2 size={16} className="feature-check" />
                      <span>Real-time attendee registration and automated ticketing pass generation</span>
                    </div>
                    <div className="el-feature-bullet">
                      <CheckCircle2 size={16} className="feature-check" />
                      <span>Transparent public budget allocation & instant expenditure tracking</span>
                    </div>
                    <div className="el-feature-bullet">
                      <CheckCircle2 size={16} className="feature-check" />
                      <span>High-performance mobile-first responsive UI engineered with Vite & React</span>
                    </div>
                  </div>
                )}

                {activeTab === 'architecture' && (
                  <div className="el-features-list">
                    <div className="el-feature-bullet">
                      <ShieldCheck size={16} className="feature-check" />
                      <span>Zero-latency edge routing served on high-availability global CDNs</span>
                    </div>
                    <div className="el-feature-bullet">
                      <ShieldCheck size={16} className="feature-check" />
                      <span>Client-side ledger state verification with robust schema validation</span>
                    </div>
                    <div className="el-feature-bullet">
                      <ShieldCheck size={16} className="feature-check" />
                      <span>Component modularity: reusable modals, analytics widgets, export utilities</span>
                    </div>
                  </div>
                )}

                {activeTab === 'ledger' && (
                  <div className="el-features-list">
                    <div className="el-feature-bullet">
                      <Activity size={16} className="feature-check" />
                      <span>Multi-event support: parallel fests, workshops, and team hackathons</span>
                    </div>
                    <div className="el-feature-bullet">
                      <Activity size={16} className="feature-check" />
                      <span>Instant balance calculation with verifiable transaction hashes</span>
                    </div>
                    <div className="el-feature-bullet">
                      <Activity size={16} className="feature-check" />
                      <span>Auditable logs designed for college student council reviews</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Meta Specs Grid */}
              <div className="el-meta-specs-grid">
                <div className="el-spec-box">
                  <Globe size={15} className="spec-icon" />
                  <div className="spec-text">
                    <span className="spec-label">Live Domain</span>
                    <span className="spec-val">eventledger.me</span>
                  </div>
                </div>
                <div className="el-spec-box">
                  <Users size={15} className="spec-icon" />
                  <div className="spec-text">
                    <span className="spec-label">Target Audience</span>
                    <span className="spec-val">Fest Leads & Attendees</span>
                  </div>
                </div>
                <div className="el-spec-box">
                  <Activity size={15} className="spec-icon" />
                  <div className="spec-text">
                    <span className="spec-label">Status</span>
                    <span className="spec-val">Production Deployed</span>
                  </div>
                </div>
                <div className="el-spec-box">
                  <ShieldCheck size={15} className="spec-icon" />
                  <div className="spec-text">
                    <span className="spec-label">Security</span>
                    <span className="spec-val">Encrypted Ledger</span>
                  </div>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="el-tech-section">
                <span className="el-tech-label">Core Technologies:</span>
                <div className="el-tech-pills">
                  {['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3 Modern Grid', 'Vite', 'Cloudflare Edge'].map((tech) => (
                    <span key={tech} className="el-tech-pill">
                      <span className="tech-dot"></span>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="el-action-row">
                <a 
                  href="https://eventledger.me/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary el-demo-btn"
                  id="eventledger-live-launch"
                >
                  <span>Launch EventLedger.me</span>
                  <ArrowUpRight size={17} />
                </a>
              </div>

            </div>

            {/* Right: Simulated App Browser Showcase Preview */}
            <div className="el-preview-col">
              <div className="browser-mockup-frame">
                
                {/* Mockup Header */}
                <div className="mockup-header">
                  <div className="mockup-dots">
                    <span className="m-dot red"></span>
                    <span className="m-dot yellow"></span>
                    <span className="m-dot green"></span>
                  </div>
                  <div className="mockup-url-bar">
                    <span className="url-lock">🔒</span>
                    <span className="url-text">https://eventledger.me</span>
                  </div>
                  <span className="mockup-live-tag">LIVE APP</span>
                </div>

                {/* Mockup Screen Content */}
                <div className="mockup-body">
                  
                  {/* Event Dashboard Hero Card */}
                  <div className="mockup-dash-card">
                    <div className="dash-card-header">
                      <div>
                        <span className="dash-pill">Campus Annual Fest 2026</span>
                        <h4 className="dash-title">TechGenesis Hackathon & Symposium</h4>
                      </div>
                      <span className="dash-status">ACTIVE</span>
                    </div>

                    <div className="dash-stats-row">
                      <div className="dash-stat">
                        <span className="d-stat-val">520+</span>
                        <span className="d-stat-lbl">Registered</span>
                      </div>
                      <div className="dash-stat">
                        <span className="d-stat-val">₹1,84,000</span>
                        <span className="d-stat-lbl">Ledger Pool</span>
                      </div>
                      <div className="dash-stat">
                        <span className="d-stat-val">12</span>
                        <span className="d-stat-lbl">Workshops</span>
                      </div>
                    </div>
                  </div>

                  {/* Mock Activity List */}
                  <div className="mockup-ledger-preview">
                    <span className="ledger-preview-title">Recent Event Ledger Entries:</span>
                    <div className="ledger-entry-row">
                      <div className="le-icon-box">
                        <CreditCard size={14} />
                      </div>
                      <div className="le-info">
                        <span className="le-title">AI Workshop Pass • CSE Dept</span>
                        <span className="le-time">2 mins ago • Verified</span>
                      </div>
                      <span className="le-amount positive">+ ₹499</span>
                    </div>

                    <div className="ledger-entry-row">
                      <div className="le-icon-box">
                        <Calendar size={14} />
                      </div>
                      <div className="le-info">
                        <span className="le-title">Hackathon Team #42 Slot</span>
                        <span className="le-time">14 mins ago • Confirmed</span>
                      </div>
                      <span className="le-amount positive">+ ₹1,200</span>
                    </div>
                  </div>

                  {/* Visit Overlay Trigger */}
                  <div className="mockup-cta-overlay">
                    <a 
                      href="https://eventledger.me/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="mockup-launch-btn"
                    >
                      <ExternalLink size={15} />
                      <span>Explore Live Platform</span>
                    </a>
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>

        {/* Secondary Projects Grid */}
        <div className="secondary-projects-header">
          <h3 className="sec-proj-title">Additional Engineering Projects</h3>
          <p className="sec-proj-sub">Algorithmic tools and interactive academic solutions</p>
        </div>

        <div className="secondary-projects-grid">
          {filteredSecondary.map((proj) => (
            <div key={proj.id} className="sec-proj-card glass-panel">
              <div className="sec-card-top">
                <span className="sec-tagline-badge">{proj.tagline}</span>
                <span className="sec-metric-tag">{proj.metrics}</span>
              </div>
              
              <h4 className="sec-card-title">{proj.title}</h4>
              <p className="sec-card-desc">{proj.description}</p>

              <div className="sec-tags-row">
                {proj.tags.map(tag => (
                  <span key={tag} className="sec-tag-pill">{tag}</span>
                ))}
              </div>

              <div className="sec-card-footer">
                <a 
                  href={proj.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="sec-action-link"
                >
                  <Code2 size={15} />
                  <span>View Repository</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
