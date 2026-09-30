import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Flame, 
  Award, 
  Milestone,
  BookOpen
} from 'lucide-react';
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
    { label: 'Core Technical Skills', target: 15, suffix: '+', icon: <Code size={20} /> },
    { label: 'Consistent Learning Days', target: 180, suffix: '+', icon: <Flame size={20} /> },
    { label: 'Core CS Subject Modules', target: 8, suffix: '+', icon: <BookOpen size={20} /> },
    { label: 'Algorithmic Problems Solved', target: 120, suffix: '+', icon: <Award size={20} /> }
  ];

  const milestones = [
    {
      year: '2021',
      title: 'Schooling Completed — Sanganbasava International Residential School',
      description: 'Completed secondary schooling at Sanganbasava International Residential School, Kavalagi, Vijayapura with a strong foundation in mathematics, analytical thinking, and scholastic discipline.'
    },
    {
      year: '2023',
      title: 'PUC Completed — Vision Girls PU College, Bangalore',
      description: 'Graduated Pre-University Course (Science) from Vision Girls PU College, Bangalore, solidifying fundamentals in Physics, Chemistry, Mathematics, and logical problem-solving.'
    },
    {
      year: '2023 – 2027',
      title: 'B.E. in Computer Science & Engineering',
      description: 'Enrolled in Computer Science Engineering. Actively mastering C, Java, Python, Data Structures, Relational Database Systems (SQL), and Object-Oriented Software Design.'
    },
    {
      year: 'Present',
      title: 'Full-Stack Web Engineering & Career Readiness',
      description: 'Strengthening modern web technologies with React, JavaScript (ES6+), and REST APIs while continuously training on data structures and preparing for software engineering roles.'
    }
  ];

  return (
    <section id="journey" className="journey-section">
      <div className="container">
        <div className="section-header">
          <span className="section-pill">Academic & Coding Journey</span>
          <h2 className="section-title">
            My <span className="gradient-text">Journey & Milestones</span>
          </h2>
          <p className="section-subtitle">
            A reflection of dedication, continuous learning, and key milestones in my academic and engineering evolution.
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

        {/* Timeline of Milestones */}
        <div className="timeline-container">
          <h3 className="timeline-heading">
            <Milestone size={20} className="milestone-icon" />
            Milestones & Academic Progression
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
