import React from 'react';
import { ExternalLink, Globe, Users, Sparkles, CheckCircle2 } from 'lucide-react';
import WavyUnderline from './WavyUnderline';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-pill">Featured Project</span>
          <h2 className="section-title">
            Featured{' '}
            <span className="wavy-title-accent">
              <span className="gradient-text">Build</span>
              <WavyUnderline color="#38bdf8" height={8} />
            </span>
          </h2>
          <p className="section-subtitle">
            Practical builds from coursework, personal learning, and student-focused product development.
          </p>
        </div>

        {/* EventLedger Showcase Card */}
        <div className="eventledger-showcase-card glass-panel">
          <div className="el-card-grid">
            {/* Left: Project Brand & Meta */}
            <div className="el-meta-col">
              <div className="el-badge-row">
                <span className="el-startup-badge">
                  <Sparkles size={12} className="el-spark-icon" />
                  Active Startup
                </span>
                <span className="el-live-indicator">
                  <span className="live-dot-pulse"></span>
                  Live Project
                </span>
              </div>

              <h3 className="el-title">EventLedger</h3>

              <div className="el-meta-list">
                <div className="el-meta-item">
                  <Users size={15} className="el-meta-icon" />
                  <span>Team: Student build</span>
                </div>
                <div className="el-meta-item">
                  <Globe size={15} className="el-meta-icon" />
                  <span>Domain: eventledger.me</span>
                </div>
                <div className="el-meta-item">
                  <CheckCircle2 size={15} className="el-meta-icon text-emerald" />
                  <span>Status: Production Live</span>
                </div>
              </div>
            </div>

            {/* Right: Description, Tech Stack & Action */}
            <div className="el-info-col">
              <p className="el-description">
                A web application for managing and tracking events, created to explore full-stack thinking, structured workflows, and real product-style development.
              </p>

              <div className="el-tech-section">
                <span className="el-tech-label">Built With:</span>
                <div className="el-tech-pills">
                  {['React', 'JavaScript', 'HTML', 'CSS'].map((tech) => (
                    <span key={tech} className="el-tech-pill">
                      <span className="tech-dot"></span>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="el-action-row">
                <a 
                  href="https://eventledger.me/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary el-demo-btn"
                  id="eventledger-live-demo"
                >
                  <span>Live Demo</span>
                  <ExternalLink size={16} style={{ marginLeft: '6px' }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
