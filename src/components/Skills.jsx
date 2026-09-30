import React, { useState } from 'react';
import { 
  PythonIcon, 
  CIcon, 
  JavaIcon, 
  JavaScriptIcon, 
  HTMLIcon, 
  CSSIcon, 
  VSCodeIcon, 
  GitGitHubIcon 
} from './Icons';
import './Skills.css';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'languages', label: 'Programming Languages' },
    { id: 'web', label: 'Web Development' },
    { id: 'tools', label: 'Tools & Workflow' }
  ];

  const skillsData = [
    // Programming Languages
    { 
      id: 'python',
      name: 'Python', 
      category: 'languages', 
      level: 'Intermediate', 
      color: '#387eb8',
      icon: <PythonIcon size={34} />,
      desc: 'Core syntax, scripting, data structures, and problem-solving logic.' 
    },
    { 
      id: 'c',
      name: 'C', 
      category: 'languages', 
      level: 'Foundational', 
      color: '#659AD2',
      icon: <CIcon size={34} />,
      desc: 'Memory concepts, pointers, structured programming, and core algorithmic fundamentals.' 
    },
    { 
      id: 'java',
      name: 'Java', 
      category: 'languages', 
      level: 'Intermediate', 
      color: '#ea2d2e',
      icon: <JavaIcon size={34} />,
      desc: 'Object-oriented programming, classes, inheritance, polymorphism, and collections.' 
    },
    { 
      id: 'js',
      name: 'JavaScript (JS)', 
      category: 'languages', 
      level: 'Intermediate', 
      color: '#F7DF1E',
      icon: <JavaScriptIcon size={34} />,
      desc: 'Modern ES6+ syntax, DOM manipulation, event handling, and dynamic web functionality.' 
    },

    // Web Technologies
    { 
      id: 'html',
      name: 'HTML', 
      category: 'web', 
      level: 'Proficient', 
      color: '#E34F26',
      icon: <HTMLIcon size={34} />,
      desc: 'Semantic page structure, accessible forms, audio/video elements, and modern HTML5 standards.' 
    },
    { 
      id: 'css',
      name: 'CSS', 
      category: 'web', 
      level: 'Proficient', 
      color: '#1572B6',
      icon: <CSSIcon size={34} />,
      desc: 'Modern styling, Flexbox, CSS Grid layouts, responsive UI, gradients, and micro-animations.' 
    },

    // Tools & Workflow
    { 
      id: 'vscode',
      name: 'VS Code', 
      category: 'tools', 
      level: 'Proficient', 
      color: '#007ACC',
      icon: <VSCodeIcon size={34} />,
      desc: 'Primary code editor, extensions, integrated terminal, debugging tools, and custom shortcuts.' 
    },
    { 
      id: 'gitgithub',
      name: 'Git & GitHub', 
      category: 'tools', 
      level: 'Proficient', 
      color: '#F05032',
      icon: <GitGitHubIcon size={34} />,
      desc: 'Distributed version control, commits, branching, pull requests, and repository management.' 
    }
  ];

  const filteredSkills = activeTab === 'all' 
    ? skillsData 
    : skillsData.filter(s => s.category === activeTab);

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-pill">Technical Stack</span>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle">
            Core programming languages, web technologies, and developer tools I actively work with.
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
          {filteredSkills.map((skill) => (
            <div 
              key={skill.id} 
              className="skill-card glass-panel"
              style={{ '--brand-color': skill.color }}
            >
              <div className="skill-card-top">
                <div className="skill-brand-icon-box">
                  {skill.icon}
                </div>
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
