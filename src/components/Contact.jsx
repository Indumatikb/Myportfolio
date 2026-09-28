import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Copy, Check, Sparkles } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const emailAddress = "indumatibiradar.dev@gmail.com";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 5000);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-pill">Get In Touch</span>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle">
            Whether you have an internship opportunity, project collaboration, or simply want to talk tech—my inbox is always open!
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Info & Socials */}
          <div className="contact-info-card glass-panel">
            <h3 className="contact-info-title">Let's talk about building something impactful.</h3>
            <p className="contact-info-desc">
              I am actively seeking internship opportunities, junior developer roles, and open-source collaborations where I can contribute and grow.
            </p>

            <div className="contact-methods">
              <div className="contact-method-item">
                <div className="c-icon-box">
                  <Mail size={18} />
                </div>
                <div className="c-method-details">
                  <span className="c-method-label">Email Me</span>
                  <div className="c-email-row">
                    <span className="c-method-value">{emailAddress}</span>
                    <button 
                      onClick={copyEmail} 
                      className="copy-btn" 
                      title="Copy email to clipboard"
                      aria-label="Copy email address"
                    >
                      {copied ? <Check size={14} className="copied-icon" /> : <Copy size={14} />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="contact-method-item">
                <div className="c-icon-box">
                  <MapPin size={18} />
                </div>
                <div className="c-method-details">
                  <span className="c-method-label">Location</span>
                  <span className="c-method-value">Karnataka, India</span>
                </div>
              </div>

              <div className="contact-method-item">
                <div className="c-icon-box">
                  <Sparkles size={18} />
                </div>
                <div className="c-method-details">
                  <span className="c-method-label">Current Status</span>
                  <span className="c-method-value status-available">
                    Available for Internships & Projects
                  </span>
                </div>
              </div>
            </div>

            <div className="social-connect">
              <span className="social-label">Connect with me online:</span>
              <div className="social-links">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="social-btn"
                  id="contact-github-btn"
                  aria-label="GitHub Profile"
                >
                  <Github size={18} />
                  <span>GitHub</span>
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="social-btn"
                  id="contact-linkedin-btn"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="contact-form-card glass-panel">
            <h3 className="form-card-title">Send a Direct Message</h3>
            
            {submitted ? (
              <div className="success-banner">
                <CheckCircle2 size={32} className="success-icon" />
                <h4 className="success-title">Message Received!</h4>
                <p className="success-text">
                  Thank you for reaching out, I will get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" id="portfolio-contact-form">
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">Your Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Alex Johnson"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">Your Email</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="e.g. alex@example.com"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Internship opportunity / Project collaboration"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Hi Indumati, I'd like to discuss..."
                    className="form-input form-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-btn" id="contact-submit-btn">
                  Send Message <Send size={16} style={{ marginLeft: '8px' }} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
