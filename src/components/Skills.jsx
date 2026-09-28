import React, { useState } from 'react';
import { 
  Code2, 
  Globe, 
  Cpu, 
  Terminal, 
  Layers, 
  Database, 
  GitBranch, 
  CheckCircle,
  FileCode2
} from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Tech' },
    { id: 'languages', label: 'Languages' },
    { id: 'web', label: 'Web Dev' },
    { id: 'core', label: 'Core CS' },
    { id: 'tools', label: 'Tools & Workflow' }
  ];

  const skillsData = [
    // Languages
    { name: 'JavaScript', category: 'languages', level: 'Intermediate', icon: '⚡', desc: 'Modern ES6+, Async/Await, DOM manipulation' },
    { name: 'Java', category: 'languages', level: 'Intermediate', icon: '☕', desc: 'OOP concepts, Collections, Robust fundamentals' },
    { name: 'Python', category: 'languages', level: 'Intermediate', icon: '🐍', desc: 'Scripting, Data structures, Logic building' },
    { name: 'C / C++', category: 'languages', level: 'Foundational', icon: '⚙️', desc: 'Memory concepts, Pointers, Algorithm basics' },

    // Web Development
    { name: 'React.js', category: 'web', level: 'Intermediate', icon: '⚛️', desc: 'Functional Components, Hooks, State management' },
    { name: 'HTML5 & CSS3', category: 'web', level: 'Advanced', icon: '🎨', desc: 'Responsive Design, Flexbox, Grid, Glassmorphism' },
    { name: 'Vite & Modern Tooling', category: 'web', level: 'Intermediate', icon: '🚀', desc: 'Bundling, Fast HMR, Project scaffolding' },
    { name: 'REST APIs', category: 'web', level: 'Intermediate', icon: '🔌', desc: 'HTTP methods, JSON serialization, Client-side fetch' },

    // Core CS
    { name: 'Data Structures', category: 'core', level: 'Intermediate', icon: '🌳', desc: 'Arrays, Linked Lists, Stacks, Queues, Trees' },
    { name: 'Algorithms', category: 'core', level: 'Intermediate', icon: '🧮', desc: 'Searching, Sorting, Recursion, Time complexity' },
    { name: 'OOP Principles', category: 'core', level: 'Proficient', icon: '🧩', desc: 'Encapsulation, Polymorphism, Inheritance, Abstraction' },
    { name: 'DBMS & SQL', category: 'core', level: 'Intermediate', icon: '🗄️', desc: 'Relational design, Normalization, Queries' },

    // Tools & Workflow
    { name: 'Git & GitHub', category: 'tools', level: 'Proficient', icon: '🐙', desc: 'Version control, Branching, Pull requests' },
    { name: 'VS Code', category: 'tools', level: 'Proficient', icon: '💻', desc: 'Extensions, Debugging, Productivity workflows' },
    { name: 'Command Line / Bash', category: 'tools', level: 'Intermediate', icon: '📟', desc: 'File operations, Shell scripting basics, NPM' },
    { name: 'Postman', category: 'tools', level: 'Intermediate', icon: '📬', desc: 'API testing, Endpoint inspection, Requests' }
  ];

  const filteredSkills = activeTab === 'all' 
    ? skillsData 
    : skillsData.filter(s => s.category === activeTab);

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-pill">Technical Toolkit</span>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Competencies</span>
          </h2>
          <p className="section-subtitle">
            Technologies and concepts I utilize to design, build, and deploy reliable software solutions.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="skills-tabs">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`skill-tab-btn ${activeTab === cat.id ? 'active' : ''}`}
              id={`skill-tab-${cat.id}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, idx) => (
            <div key={idx} className="skill-card glass-panel">
              <div className="skill-card-top">
                <span className="skill-icon-emoji">{skill.icon}</span>
                <span className={`skill-level-badge level-${skill.level.toLowerCase()}`}>
                  {skill.level}
                </span>
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-desc">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
