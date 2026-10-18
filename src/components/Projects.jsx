import React from 'react';
import { ExternalLink, Globe, Users, Sparkles, CheckCircle2, Calendar, ShieldCheck, Activity, CreditCard, ArrowUpRight } from 'lucide-react';
import WavyUnderline from './WavyUnderline';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-pill">Featured Project</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Startup Build</span>
          </h2>
          <WavyUnderline color="#4f46e5" height={4} width="100px" />
          <p className="section-subtitle">
            Engineered from ground up: practical product development, real users, structured workflows, and full-stack thinking.
          </p>
        </div>

        {/* EventLedger Showcase Container */}
        <div className="eventledger-showcase-card glass-panel">
          
          <div className="el-card-grid">
            
            {/* Left: Project Brand, Metrics & Story */}
            <div className="el-meta-col">
              <div className="el-badge-row">
                <span className="el-startup-badge">
                  <Sparkles size={13} className="el-spark-icon" />
                  Active Startup Platform
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

              {/* Key Features List */}
              <div className="el-features-list">
                <div className="el-feature-bullet">
                  <CheckCircle2 size={16} className="feature-check" />
                  <span>Real-time attendee registration & ticketing workflows</span>
                </div>
                <div className="el-feature-bullet">
                  <CheckCircle2 size={16} className="feature-check" />
                  <span>Transparent budget & financial ledger analytics</span>
                </div>
                <div className="el-feature-bullet">
                  <CheckCircle2 size={16} className="feature-check" />
                  <span>High-performance mobile-first responsive architecture</span>
                </div>
              </div>

              {/* Meta Specs Grid */}
              <div className="el-meta-specs-grid">
                <div className="el-spec-box">
                  <Globe size={16} className="spec-icon" />
                  <div className="spec-text">
                    <span className="spec-label">Domain</span>
                    <span className="spec-val">eventledger.me</span>
                  </div>
                </div>
                <div className="el-spec-box">
                  <Users size={16} className="spec-icon" />
                  <div className="spec-text">
                    <span className="spec-label">Target Audience</span>
                    <span className="spec-val">College & Fest Leads</span>
                  </div>
                </div>
                <div className="el-spec-box">
                  <Activity size={16} className="spec-icon" />
                  <div className="spec-text">
                    <span className="spec-label">Deployment</span>
                    <span className="spec-val">Global Edge Network</span>
                  </div>
                </div>
                <div className="el-spec-box">
                  <ShieldCheck size={16} className="spec-icon" />
                  <div className="spec-text">
                    <span className="spec-label">Architecture</span>
                    <span className="spec-val">Secure Client-Side Ledger</span>
                  </div>
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div className="el-tech-section">
                <span className="el-tech-label">Core Technologies:</span>
                <div className="el-tech-pills">
                  {['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3 Modern Grid', 'Vite', 'Cloudflare'].map((tech) => (
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
                  id="eventledger-live-demo"
                >
                  <span>Explore Live Platform</span>
                  <ArrowUpRight size={17} style={{ marginLeft: '4px' }} />
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
                      <span>Launch EventLedger.me</span>
                    </a>
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;
