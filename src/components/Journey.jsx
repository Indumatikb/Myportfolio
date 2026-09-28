import React, { useState, useEffect } from 'react';
import { 
  GitCommit, 
  GitPullRequest, 
  Code, 
  Flame, 
  ExternalLink,
  Award,
  Milestone,
  Sparkles
} from 'lucide-react';
import EventLedger from './EventLedger';
import './Journey.css';

const StatCounter = ({ target, suffix = '+' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const duration = 1600;
    const intervalTime = 35;
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
      title: 'EventLedger & Placement Readiness',
      description: 'Engineered EventLedger booking engine, architecting transaction-safe backend logic, solving complex DSA problems, and preparing for software engineering roles.'
    }
  ];

  return (
    <section id="journey" className="journey-section">
      <div className="container">
        <div className="section-header">
          <span className="section-pill">Flagship Engineering & Milestones</span>
          <h2 className="section-title">
            EventLedger & <span className="gradient-text">Coding Journey</span>
          </h2>
          <p className="section-subtitle">
            Hands-on software architecture in action: exploring the EventLedger audit engine alongside key milestones in my engineering evolution.
          </p>
        </div>

        {/* Stats Counter Row */}
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

        {/* BREATHTAKING EVENTLEDGER SPOTLIGHT (Replaced green boxes) */}
        <EventLedger />

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
