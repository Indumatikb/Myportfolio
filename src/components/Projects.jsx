import React, { useState } from 'react';
import { ExternalLink, Layers, ArrowUpRight, Code, Calendar } from 'lucide-react';
import { Github } from './Icons';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 'eventwaala',
      title: 'EventWaala - Event Management Platform',
      category: 'fullstack',
      featured: true,
      tagline: 'Modern event booking and vendor coordination portal',
      description: 'A full-stack web application designed to simplify booking event venues, decorators, and catering services. Built with a modular React frontend and robust Django REST backend architecture.',
      highlights: [
        'End-to-end event and vendor booking workflow',
        'RESTful API integration with token-based authentication',
        'Real-time status tracking & responsive dashboard',
        'Relational database models for scalable event reservations'
      ],
      techStack: ['React', 'JavaScript', 'Django', 'Python', 'REST APIs', 'CSS3'],
      demoLink: '#',
      githubLink: 'https://github.com'
    },
    {
      id: 'portfolio',
      title: 'Interactive Developer Portfolio',
      category: 'frontend',
      featured: true,
      tagline: 'Sleek, dark developer-style personal portfolio & showcase',
      description: 'A responsive personal portfolio website engineered from scratch using modern React and Vite. Showcases technical projects, academic milestones, and coding journey with custom glassmorphism and subtle animations.',
      highlights: [
        'Modular, component-based React architecture',
        'Custom dark aesthetic with glassmorphic cards and gradients',
        'Fully responsive across smartphones, tablets, and desktops',
        'Semantic HTML and SEO structured metadata'
      ],
      techStack: ['React', 'Vite', 'JavaScript', 'Vanilla CSS', 'Lucide Icons'],
      demoLink: '#home',
      githubLink: 'https://github.com'
    },
    {
      id: 'algo-visualizer',
      title: 'Algorithm & Data Structure Visualizer',
      category: 'cs',
      featured: false,
      tagline: 'Step-by-step visualizer for core computer science algorithms',
      description: 'An interactive web simulation tool that renders sorting algorithms (Bubble Sort, Merge Sort, Quick Sort) and search techniques in real time with adjustable animation speeds to analyze Big-O complexity.',
      highlights: [
        'Live step-by-step state visualization',
        'Comparative time and space complexity metrics',
        'Interactive array size and velocity controls',
        'Clean Object-Oriented JavaScript architecture'
      ],
      techStack: ['JavaScript (ES6)', 'HTML5 Canvas', 'CSS3', 'Data Structures'],
      demoLink: '#',
      githubLink: 'https://github.com'
    },
    {
      id: 'student-portal',
      title: 'Student Academic Portal & Tracker',
      category: 'fullstack',
      featured: false,
      tagline: 'Centralized coursework and performance management system',
      description: 'A software system built to maintain student records, calculate GPA trends, track course attendance, and generate performance reports using clean object-oriented principles and database queries.',
      highlights: [
        'CRUD operations for student records and subjects',
        'Normalized SQL database schema with relational integrity',
        'Input validation and grade classification modules',
        'Exportable academic performance summaries'
      ],
      techStack: ['Java', 'MySQL', 'JDBC', 'OOP Concepts', 'HTML/CSS'],
      demoLink: '#',
      githubLink: 'https://github.com'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-pill">Portfolio Showcase</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            A selection of practical applications and software experiments I have built to solve real problems and apply CS concepts.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="project-filters">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
            id="proj-filter-all"
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${filter === 'fullstack' ? 'active' : ''}`}
            onClick={() => setFilter('fullstack')}
            id="proj-filter-fullstack"
          >
            Full Stack
          </button>
          <button 
            className={`filter-btn ${filter === 'frontend' ? 'active' : ''}`}
            onClick={() => setFilter('frontend')}
            id="proj-filter-frontend"
          >
            Frontend
          </button>
          <button 
            className={`filter-btn ${filter === 'cs' ? 'active' : ''}`}
            onClick={() => setFilter('cs')}
            id="proj-filter-cs"
          >
            Core CS & Logic
          </button>
        </div>

        {/* Project Cards Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card glass-panel">
              <div className="project-card-header">
                <div className="project-tags">
                  {project.featured && (
                    <span className="tag-featured">Featured</span>
                  )}
                  <span className="tag-category">{project.category}</span>
                </div>
                <div className="project-links">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="p-icon-link"
                    title="View Source Code"
                    aria-label={`GitHub source for ${project.title}`}
                  >
                    <Github size={18} />
                  </a>
                  <a 
                    href={project.demoLink} 
                    className="p-icon-link"
                    title="Live Preview"
                    aria-label={`Live demo for ${project.title}`}
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-tagline">{project.tagline}</p>
              <p className="project-desc">{project.description}</p>

              <div className="project-highlights">
                <h4 className="highlights-heading">Key Highlights:</h4>
                <ul className="highlights-list">
                  {project.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>

              <div className="project-tech-stack">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
