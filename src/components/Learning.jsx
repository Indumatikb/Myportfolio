import React from 'react';
import { BookOpen, Flame, CheckCircle2 } from 'lucide-react';
import './Learning.css';

const Learning = () => {
  const learningTopics = [
    {
      title: 'Full-Stack Architecture & REST APIs',
      category: 'Web Engineering',
      progress: 80,
      description: 'Strengthening backend API integration with Django REST & Node.js, authentication protocols, and database schema optimization.',
      badge: 'Active'
    },
    {
      title: 'Advanced Data Structures & Algorithms',
      category: 'Core CS',
      progress: 75,
      description: 'Solving algorithmic challenges focusing on Trees, Graphs, Dynamic Programming, and Time Complexity optimization.',
      badge: 'Daily Practice'
    },
    {
      title: 'Next.js & Modern React Ecosystem',
      category: 'Frontend',
      progress: 60,
      description: 'Exploring Server-Side Rendering (SSR), Static Site Generation (SSG), and modern full-stack React tooling.',
      badge: 'In Progress'
    },
    {
      title: 'Cloud Deployment & DevOps Basics',
      category: 'DevOps',
      progress: 45,
      description: 'Understanding containerization with Docker, CI/CD automated pipelines, and cloud hosting services.',
      badge: 'Exploring'
    }
  ];

  const currentReadings = [
    'Clean Code: A Handbook of Agile Software Craftsmanship',
    'Introduction to Algorithms (CLRS) & Problem Solving',
    'Modern JavaScript Deep Dive & MDN Docs'
  ];

  return (
    <section id="learning" className="learning-section">
      <div className="container">
        <div className="section-header">
          <span className="section-pill">Continuous Growth</span>
          <h2 className="section-title">
            Currently <span className="gradient-text">Learning</span>
          </h2>
          <p className="section-subtitle">
            Technology moves rapidly. Here is what I am actively exploring, practicing, and mastering right now.
          </p>
        </div>

        <div className="learning-grid">
          {/* Main Learning Cards */}
          <div className="learning-cards">
            {learningTopics.map((item, idx) => (
              <div key={idx} className="learning-card glass-panel">
                <div className="learning-card-top">
                  <span className="learning-category">{item.category}</span>
                  <span className="learning-badge">{item.badge}</span>
                </div>
                
                <h3 className="learning-card-title">{item.title}</h3>
                <p className="learning-card-desc">{item.description}</p>
                
                <div className="progress-container">
                  <div className="progress-info">
                    <span className="progress-label">Milestone Progress</span>
                    <span className="progress-val">{item.progress}%</span>
                  </div>
                  <div className="progress-bar-track">
                    <div 
                      className="progress-bar-fill" 
                      style={{ width: `${item.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar / Focus Card */}
          <div className="learning-sidebar">
            <div className="focus-card glass-panel">
              <div className="focus-icon-box">
                <Flame size={24} className="flame-icon" />
              </div>
              <h3 className="focus-heading">Engineering Philosophy</h3>
              <p className="focus-quote">
                "Learn. Build. Break. Fix. Repeat."
              </p>
              <p className="focus-text">
                Every bug encountered is an opportunity to dive deeper into how things actually operate under the hood. Continuous tinkering produces real mastery.
              </p>
              
              <div className="reading-list">
                <h4 className="reading-heading">
                  <BookOpen size={16} /> Current Reading & Guides
                </h4>
                <ul>
                  {currentReadings.map((reading, i) => (
                    <li key={i}>
                      <CheckCircle2 size={14} className="list-check" />
                      <span>{reading}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learning;
