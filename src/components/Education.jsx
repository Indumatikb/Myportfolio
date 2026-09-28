import React from 'react';
import { GraduationCap, BookOpen, Award, CheckCircle2, Calendar, MapPin } from 'lucide-react';
import './Education.css';

const Education = () => {
  const coursework = [
    'Data Structures & Algorithms',
    'Object-Oriented Programming (Java/Python)',
    'Database Management Systems (SQL)',
    'Operating Systems & System Architecture',
    'Computer Networks & Protocols',
    'Software Engineering & SDLC',
    'Web Development & Modern Frameworks',
    'Discrete Mathematics & Logic'
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="section-header">
          <span className="section-pill">Academic Background</span>
          <h2 className="section-title">
            Education & <span className="gradient-text">Foundations</span>
          </h2>
          <p className="section-subtitle">
            Formal education equipping me with theoretical depth and practical engineering rigor.
          </p>
        </div>

        <div className="education-grid">
          {/* Main Degree Card */}
          <div className="degree-card glass-panel">
            <div className="degree-badge-row">
              <div className="degree-icon-box">
                <GraduationCap size={24} className="deg-icon" />
              </div>
              <span className="degree-status">Currently Pursuing</span>
            </div>

            <h3 className="degree-title">Bachelor of Engineering (B.E.)</h3>
            <h4 className="degree-major">Computer Science & Engineering</h4>
            
            <div className="degree-meta">
              <span className="meta-point">
                <Calendar size={15} /> 2023 – 2027
              </span>
              <span className="meta-point">
                <MapPin size={15} /> Karnataka, India
              </span>
            </div>

            <p className="degree-desc">
              Rigorous curriculum focusing on computing algorithms, software architecture, relational databases, and hands-on laboratory programming in modern technologies.
            </p>

            <div className="coursework-section">
              <h5 className="coursework-heading">
                <BookOpen size={16} /> Key Relevant Coursework:
              </h5>
              <div className="coursework-tags">
                {coursework.map((course, idx) => (
                  <span key={idx} className="course-tag">
                    <CheckCircle2 size={13} className="course-check" />
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Academic Highlights / Focus Card */}
          <div className="academic-highlights glass-panel">
            <div className="ah-header">
              <Award size={22} className="ah-icon" />
              <h3 className="ah-title">Academic & Technical Focus</h3>
            </div>

            <ul className="ah-list">
              <li>
                <strong>Consistent Practical Implementation:</strong> Applying theoretical computer science principles directly to real-world code repositories and projects.
              </li>
              <li>
                <strong>Engineering Problem Solving:</strong> Regular practice of algorithmic challenges to sharpen analytical reasoning and time-complexity optimization.
              </li>
              <li>
                <strong>Collaborative Development:</strong> Participating in group engineering labs, technical seminars, and peer-to-peer code reviews.
              </li>
              <li>
                <strong>Self-Directed Mastery:</strong> Complementing academic syllabi with industry-relevant full-stack web and cloud architectures.
              </li>
            </ul>

            <div className="goal-banner">
              <span className="gb-tag">Aspiration</span>
              <p className="gb-text">
                "Preparing every day to transition seamlessly from a dedicated CSE student into a high-impact, dependable Software Developer."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
