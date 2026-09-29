import React, { useState, useEffect } from 'react';
import { 
  GitCommit, 
  Code, 
  Flame, 
  ExternalLink,
  Award,
  Milestone
} from 'lucide-react';
import { Github } from './Icons';
import './Journey.css';

const StatCounter = ({ target, suffix = '+' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const duration = 1400;
    const intervalTime = 30;
    const totalSteps = duration / intervalTime;
    const stepIncrement = target / totalSteps;

    const timer = setInterval(() => {
      current += stepIncrement;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count}{suffix}</span>;
};

const Journey = () => {
  const stats = [
    { label: 'Repositories & Projects', target: 15, suffix: '+', icon: <Code size={20} /> },
    { label: 'Consistent Coding Days', target: 180, suffix: '+', icon: <Flame size={20} /> },
    { label: 'Code Commits Pushed', target: 450, suffix: '+', icon: <GitCommit size={20} /> },
    { label: 'Core Algorithms Solved', target: 120, suffix: '+', icon: <Award size={20} /> }
  ];

  const milestones = [
    {
      year: '2023',
      title: 'The Foundation: CSE Journey Begins',
      description: 'Enrolled in B.E. Computer Science and Engineering. Mastered C programming fundamentals, memory management basics, algorithmic logic, and computing mathematics.'
    },
    {
      year: '2024',
      title: 'Object-Oriented Programming & Databases',
      description: 'Strengthened Java and Python programming paradigms. Implemented relational database projects with MySQL and established active version control with Git and GitHub.'
    },
    {
      year: '2025',
      title: 'Modern Web Engineering & React',
      description: 'Built dynamic frontend applications using modern JavaScript (ES6+), React, and Vite. Designed responsive UI systems and integrated RESTful APIs.'
    },
    {
      year: '2026',
      title: 'Full-Stack Architecture & Placement Readiness',
      description: 'Architecting end-to-end full-stack applications with Django REST and React, solving advanced DSA challenges on Trees and Graphs, and actively preparing for software engineering roles.'
    }
  ];

  // Realistic distribution of GitHub commit intensity levels (0 to 3) for 52 weeks (364 days)
  const heatMapDays = Array.from({ length: 52 * 7 }, (_, i) => {
    const random = (i * 19 + (i % 7) * 31) % 100;
    if (random > 78) return 3;
    if (random > 55) return 2;
    if (random > 28) return 1;
    return 0;
  });

  return (
    <section id="journey" className="journey-section">
      <div className="container">
        <div className="section-header">
          <span className="section-pill">Engineering Consistency</span>
          <h2 className="section-title">
            Coding <span className="gradient-text">Journey & Milestones</span>
          </h2>
          <p className="section-subtitle">
            A visual reflection of consistency, code commits, and the continuous evolution of my engineering skills.
          </p>
        </div>

        {/* Stats Row */}
        <div className="stats-row">
          {stats.map((stat, i) => (
            <div key={i} className="stat-card glass-panel">
              <div className="stat-icon-wrap">{stat.icon}</div>
              <div className="stat-value">
                <StatCounter target={stat.target} suffix={stat.suffix} />
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* GitHub Contribution Heatmap Card */}
        <div className="github-card glass-panel">
          <div className="github-card-header">
            <div className="gh-header-left">
              <Github size={24} className="gh-icon" />
              <div>
                <h3 className="gh-title">GitHub Activity & Contributions</h3>
                <span className="gh-sub">Public contributions, regular commits, and open-source learning</span>
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

          <div className="heatmap-wrapper">
            <div className="heatmap-scroll">
              <div className="heatmap-grid">
                {heatMapDays.map((level, idx) => (
                  <div 
                    key={idx} 
                    className={`heatmap-cell level-${level}`}
                    title={`Day ${idx + 1}: ${level === 0 ? 'No' : level * 2 + 1} contributions`}
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
