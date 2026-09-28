import React from 'react';
import { 
  GitCommit, 
  GitPullRequest, 
  Code, 
  Flame, 
  ExternalLink,
  Award,
  Milestone
} from 'lucide-react';
import { Github } from './Icons';
import './Journey.css';

const Journey = () => {
  const stats = [
    { label: 'Repositories & Projects', value: '15+', icon: <Code size={20} /> },
    { label: 'Consistent Coding Days', value: '180+', icon: <Flame size={20} /> },
    { label: 'Code Commits Pushed', value: '450+', icon: <GitCommit size={20} /> },
    { label: 'Core Algorithms Solved', value: '120+', icon: <Award size={20} /> }
  ];

  const milestones = [
    {
      year: '2023',
      title: 'The Foundation: CSE Journey Begins',
      description: 'Started B.E. in Computer Science Engineering. Learned computational logic, C programming, memory concepts, and foundational algorithms.'
    },
    {
      year: '2024',
      title: 'Object-Oriented Mastery & Databases',
      description: 'Strengthened Java and Python programming. Built relational database applications using MySQL and adopted version control with Git & GitHub.'
    },
    {
      year: '2025',
      title: 'Modern Web & Full-Stack Exploration',
      description: 'Embraced modern JavaScript (ES6+), React, and Vite. Designed responsive interfaces and integrated REST APIs with backend services.'
    },
    {
      year: '2026',
      title: 'Advanced Projects & Placement Readiness',
      description: 'Building production-grade applications like EventWaala, solving complex DSA problems daily, and preparing for software engineering roles.'
    }
  ];

  // Simulating GitHub activity heat map rows
  const heatMapDays = Array.from({ length: 52 * 7 }, (_, i) => {
    // Generate realistic distribution of commit intensities (0 to 4)
    const random = (i * 17 + (i % 7) * 23) % 100;
    if (random > 80) return 3;
    if (random > 60) return 2;
    if (random > 35) return 1;
    return 0;
  });

  return (
    <section id="journey" className="journey-section">
      <div className="container">
        <div className="section-header">
          <span className="section-pill">GitHub & Progression</span>
          <h2 className="section-title">
            Coding <span className="gradient-text">Journey & Milestones</span>
          </h2>
          <p className="section-subtitle">
            A visual reflection of consistency, code commits, and the continuous evolution of my engineering skills.
          </p>
        </div>

        {/* Stats Counter Row */}
        <div className="stats-row">
          {stats.map((stat, i) => (
            <div key={i} className="stat-card glass-panel">
              <div className="stat-icon-wrap">{stat.icon}</div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* GitHub Contribution Heatmap Card */}
        <div className="github-card glass-panel">
          <div className="github-card-header">
            <div className="gh-header-left">
              <Github size={22} className="gh-icon" />
              <div>
                <h3 className="gh-title">GitHub Activity & Contributions</h3>
                <span className="gh-sub">Public contributions and continuous development commits</span>
              </div>
            </div>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-outline gh-profile-btn"
              id="view-github-profile-btn"
            >
              View GitHub Profile <ExternalLink size={14} style={{ marginLeft: '6px' }} />
            </a>
          </div>

          {/* Activity Heatmap Grid representation */}
          <div className="heatmap-wrapper">
            <div className="heatmap-scroll">
              <div className="heatmap-grid">
                {heatMapDays.slice(0, 364).map((level, idx) => (
                  <div 
                    key={idx} 
                    className={`heatmap-cell level-${level}`}
                    title={`Activity day ${idx + 1}`}
                  ></div>
                ))}
              </div>
            </div>
            <div className="heatmap-legend">
              <span className="legend-text">Less</span>
              <div className="heatmap-cell level-0"></div>
              <div className="heatmap-cell level-1"></div>
              <div className="heatmap-cell level-2"></div>
              <div className="heatmap-cell level-3"></div>
              <span className="legend-text">More</span>
            </div>
          </div>
        </div>

        {/* Timeline of Milestones */}
        <div className="timeline-container">
          <h3 className="timeline-heading">
            <Milestone size={20} className="milestone-icon" />
            Milestones & Engineering Evolution
          </h3>

          <div className="timeline-track">
            {milestones.map((item, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-marker">
                  <span className="marker-dot"></span>
                </div>
                <div className="timeline-content glass-panel">
                  <span className="timeline-year">{item.year}</span>
                  <h4 className="timeline-title">{item.title}</h4>
                  <p className="timeline-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
