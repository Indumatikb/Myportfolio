import React from 'react';
import { Milestone } from 'lucide-react';
import './Journey.css';

const Journey = () => {
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
