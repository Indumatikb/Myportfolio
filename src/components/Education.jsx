import React from 'react';
import { GraduationCap, BookOpen, School, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';
import './Education.css';

const Education = () => {
  const engineeringCoursework = [
    'Data Structures & Algorithms',
    'Object-Oriented Programming (Java/Python)',
    'Database Management Systems (SQL)',
    'Operating Systems & System Architecture',
    'Computer Networks & Protocols',
    'Software Engineering Principles',
    'Web Development & Modern Frameworks',
    'Discrete Mathematics & Logic'
  ];

  const educationHistory = [
    {
      id: 'be',
      degree: 'Bachelor of Engineering (B.E.)',
      major: 'Computer Science & Engineering',
      institution: 'Visvesvaraya Technological University affiliated Institution',
      period: '2023 – 2027',
      location: 'Karnataka, India',
      status: 'Currently Pursuing',
      statusType: 'active',
      icon: <GraduationCap size={24} className="deg-icon" />,
      description: 'Comprehensive engineering degree focused on software architecture, algorithmic problem solving, modern programming paradigms, and relational database systems.',
      coursework: engineeringCoursework
    },
    {
      id: 'puc',
      degree: 'Pre-University Course (PUC / 12th)',
      major: 'Science Stream (PCMB / PCMC)',
      institution: 'Vision Girls PU College, Bangalore',
      period: 'Completed',
      location: 'Bangalore, Karnataka',
      status: 'Completed',
      statusType: 'completed',
      icon: <School size={24} className="deg-icon" />,
      description: 'Completed higher secondary education in the science stream with a rigorous academic curriculum in Mathematics, Physics, and Chemistry, strengthening analytical thinking and problem-solving skills.',
      coursework: ['Mathematics', 'Physics', 'Chemistry', 'Biology / Computer Science', 'Analytical Reasoning']
    },
    {
      id: 'schooling',
      degree: 'Secondary Schooling (SSLC / 10th)',
      major: 'General High School Curriculum',
      institution: 'Sanganbasava International Residential School, Kavalagi, Vijayapura',
      period: 'Completed',
      location: 'Kavalagi, Vijayapura, Karnataka',
      status: 'Completed',
      statusType: 'completed',
      icon: <Award size={24} className="deg-icon" />,
      description: 'Completed high school education with holistic academic excellence, disciplined residential schooling, and strong scholastic foundations in Science and Mathematics.',
      coursework: ['Mathematics', 'General Science', 'Social Sciences', 'Language & Communication', 'Co-curricular Leadership']
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="section-header">
          <span className="section-pill">Academic Journey</span>
          <h2 className="section-title">
            Education & <span className="gradient-text">Academic Background</span>
          </h2>
          <p className="section-subtitle">
            Formal education providing strong foundational discipline, theoretical depth, and engineering rigor.
          </p>
        </div>

        <div className="education-timeline-grid">
          {educationHistory.map((item) => (
            <div key={item.id} className="education-card glass-panel">
              <div className="edu-card-header">
                <div className="edu-icon-wrap">
                  {item.icon}
                </div>
                <span className={`edu-status-pill ${item.statusType}`}>
                  {item.status}
                </span>
              </div>

              <div className="edu-card-body">
                <h3 className="edu-degree-title">{item.degree}</h3>
                <h4 className="edu-major-title">{item.major}</h4>
                <p className="edu-institution-name">{item.institution}</p>

                <div className="edu-meta-row">
                  <span className="edu-meta-point">
                    <Calendar size={14} /> {item.period}
                  </span>
                  <span className="edu-meta-point">
                    <MapPin size={14} /> {item.location}
                  </span>
                </div>

                <p className="edu-description">{item.description}</p>

                <div className="edu-coursework">
                  <h5 className="edu-coursework-title">
                    <BookOpen size={14} /> Key Focus & Coursework:
                  </h5>
                  <div className="edu-coursework-tags">
                    {item.coursework.map((course, idx) => (
                      <span key={idx} className="edu-tag">
                        <CheckCircle2 size={12} className="tag-check" />
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
