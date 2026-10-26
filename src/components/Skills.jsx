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
import { Code2, Database, Terminal, Cpu, Search, Sparkles } from 'lucide-react';
import WavyUnderline from './WavyUnderline';
import './Skills.css';

const SKILLS_DATA = [
  // Programming Languages
  { 
    id: 'python',
    name: 'Python', 
    category: 'languages', 
    level: 'Intermediate', 
    color: '#387eb8',
    icon: <PythonIcon size={36} />,
    desc: 'Algorithmic problem solving, Data Structures, automation scripts, and logic building.' 
  },
  { 
    id: 'java',
    name: 'Java', 
    category: 'languages', 
    level: 'Intermediate', 
    color: '#ea2d2e',
    icon: <JavaIcon size={36} />,
    desc: 'Object-Oriented Programming (OOP), inheritance, interfaces, polymorphism, and Collections framework.' 
  },
  { 
    id: 'c',
    name: 'C Language', 
    category: 'languages', 
    level: 'Foundational', 
    color: '#659AD2',
    icon: <CIcon size={36} />,
    desc: 'Memory management, pointers, low-level data structures, and computer architecture fundamentals.' 
  },
  { 
    id: 'js',
    name: 'JavaScript (ES6+)', 
    category: 'languages', 
    level: 'Proficient', 
    color: '#F7DF1E',
    icon: <JavaScriptIcon size={36} />,
    desc: 'Modern asynchronous workflows, DOM manipulation, closures, promises, and dynamic applications.' 
  },

  // Web & Frontend
  { 
    id: 'react',
    name: 'React.js', 
    category: 'web', 
    level: 'Proficient', 
    color: '#61DAFB',
    icon: <Code2 size={36} color="#61DAFB" />,
    desc: 'Component lifecycle, hooks, state management, modular architecture, and single-page apps.' 
  },
  { 
    id: 'html',
    name: 'HTML5', 
    category: 'web', 
    level: 'Proficient', 
    color: '#E34F26',
    icon: <HTMLIcon size={36} />,
    desc: 'Semantic structure, accessibility best practices, metadata optimization, and web standards.' 
  },
  { 
    id: 'css',
    name: 'CSS3 & Modern Layouts', 
    category: 'web', 
    level: 'Proficient', 
    color: '#1572B6',
    icon: <CSSIcon size={36} />,
    desc: 'Flexbox, CSS Grid, Glassmorphism, animations, responsive design systems, and media queries.' 
  },

  // Database & Systems
  { 
    id: 'sql',
    name: 'SQL & Relational DBs', 
    category: 'tools', 
    level: 'Intermediate', 
    color: '#00758F',
    icon: <Database size={36} color="#00758F" />,
    desc: 'Relational schema design, queries, normalization, table joins, and transactional integrity.' 
  },
  { 
    id: 'gitgithub',
    name: 'Git & GitHub', 
    category: 'tools', 
    level: 'Proficient', 
    color: '#F05032',
    icon: <GitGitHubIcon size={36} />,
    desc: 'Branching, PRs, merge workflows, distributed version control, and GitHub repository hosting.' 
  },
  { 
    id: 'vscode',
    name: 'VS Code & Tooling', 
    category: 'tools', 
    level: 'Proficient', 
    color: '#007ACC',
    icon: <VSCodeIcon size={36} />,
    desc: 'Extensions, debugging, integrated terminals, Vite build tool, and efficient developer setups.' 
  },
  { 
    id: 'terminal',
    name: 'Linux & Terminal', 
    category: 'tools', 
    level: 'Intermediate', 
    color: '#10b981',
    icon: <Terminal size={36} color="#10b981" />,
    desc: 'Shell commands, package managers, npm/yarn scripts, and local developer environment management.' 
  }
];

const CATEGORIES = [
  { id: 'all', label: 'All Technologies' },
  { id: 'languages', label: 'Programming Languages' },
  { id: 'web', label: 'Web & Frameworks' },
  { id: 'tools', label: 'Tools, DB & Systems' }
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    const matchesCategory = activeTab === 'all' || skill.category === activeTab;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          skill.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-pill">Technical Matrix</span>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <WavyUnderline color="#06b6d4" height={4} width="90px" />
          <p className="section-subtitle">
            Core programming languages, web stacks, database paradigms, and engineering tools I actively work with.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="skills-filter-toolbar">
          <div className="skills-tabs-row">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`skill-tab-pill ${activeTab === cat.id ? 'active' : ''}`}
                id={`skill-filter-${cat.id}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="skills-search-wrapper">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Search skills (e.g. Python, React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="skills-search-input"
              aria-label="Search skills"
            />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredSkills.length > 0 ? (
            filteredSkills.map((skill) => (
              <div 
                key={skill.id} 
                className="skill-card glass-panel"
                style={{ '--brand-color': skill.color }}
              >
                <div className="skill-card-top">
                  <div className="skill-icon-bubble">
                    {skill.icon}
                  </div>
                  <span className={`skill-level-pill level-${skill.level.toLowerCase()}`}>
                    {skill.level}
                  </span>
                </div>

                <h3 className="skill-title">{skill.name}</h3>
                <p className="skill-text">{skill.desc}</p>
                
                <div className="skill-card-glow" />
              </div>
            ))
          ) : (
            <div className="skills-empty-state glass-panel">
              <p>No technologies matched "{searchQuery}". Try searching for Python, Java, or React.</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default Skills;
