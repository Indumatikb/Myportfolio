import React from 'react';
import { Code, Compass, Target, Laptop, Sparkles, CheckCircle2 } from 'lucide-react';
import './About.css';

const About = () => {
  const highlights = [
    {
      icon: <Laptop size={20} className="hl-icon" />,
      title: "Learning by Building",
      description: "Believing that writing code and tackling real-world problems is the fastest way to master software engineering."
    },
    {
      icon: <Code size={20} className="hl-icon" />,
      title: "Core CS Fundamentals",
      description: "Strong foundation in Data Structures, Object-Oriented Programming (Java/Python), and Database Management."
    },
    {
      icon: <Target size={20} className="hl-icon" />,
      title: "Future Software Developer",
      description: "Driven by clean code, architectural scalability, and building dependable, user-friendly digital solutions."
    },
    {
      icon: <Compass size={20} className="hl-icon" />,
      title: "Engineering Mindset",
      description: "Guided by the mantra: 'Learn. Build. Break. Fix. Repeat.' Always learning from bugs and edge cases."
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-pill">About Me</span>
          <h2 className="section-title">
            Passionate About <span className="gradient-text">Code & Engineering</span>
          </h2>
        </div>

        <div className="about-grid">
          {/* Left: Bio & Story */}
          <div className="about-story glass-panel">
            <h3 className="about-name-title">
              Indumati Kallanagoud Biradar
            </h3>
            <p className="about-subtitle">
              Computer Science Engineering Student • Aspiring Software Engineer
            </p>

            <div className="about-paragraphs">
              <p>
                Hello! I am <strong>Indumati Kallanagoud Biradar</strong>, an enthusiastic Computer Science 
                Engineering student with an unquenchable drive to learn and innovate through software. 
              </p>
              <p>
                I thrive in turning ideas into practical, tangible projects. Currently, I am actively deepening my 
                knowledge in <strong>Python, Java, C, JavaScript, HTML, CSS</strong>, 
                and core software development workflows with Git and VS Code.
              </p>
              <p>
                Whether it's writing algorithms, designing responsive interfaces, or debugging backend logic, 
                I believe that real growth happens when you experiment fearlessly.
              </p>
            </div>

            <div className="quote-box">
              <Sparkles size={18} className="quote-icon" />
              <p className="quote-text">
                "Learn. Build. Break. Fix. Repeat."
              </p>
            </div>

            <div className="about-quick-specs">
              <div className="spec-item">
                <span className="spec-label">Degree:</span>
                <span className="spec-value">B.E. in Computer Science & Engineering</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Career Target:</span>
                <span className="spec-value">Future Software Developer</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Interests:</span>
                <span className="spec-value">Full Stack Web, Algorithms, System Architecture</span>
              </div>
            </div>
          </div>

          {/* Right: Highlights Grid */}
          <div className="about-highlights-col">
            <div className="highlights-grid">
              {highlights.map((item, index) => (
                <div key={index} className="highlight-card glass-panel">
                  <div className="hl-icon-wrap">
                    {item.icon}
                  </div>
                  <h4 className="hl-title">{item.title}</h4>
                  <p className="hl-desc">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="learning-banner glass-panel">
              <div className="lb-header">
                <CheckCircle2 size={18} className="lb-icon" />
                <span className="lb-title">Current Focus</span>
              </div>
              <p className="lb-text">
                Developing full-stack applications, practicing data structure problem sets, and exploring production-ready deployment workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
