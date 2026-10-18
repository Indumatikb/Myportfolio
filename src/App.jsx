import React from 'react';
import ScrollProgress from './components/ScrollProgress';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsStrip from './components/StatsStrip';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import InteractiveTerminal from './components/InteractiveTerminal';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WavyUnderline from './components/WavyUnderline';

function App() {
  return (
    <div className="app-container relative">
      {/* Scroll Progress Bar at the Top */}
      <ScrollProgress />

      {/* Luminous Atmospheric Ambient Background */}
      <Background />
      
      {/* Floating Navigation Header */}
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Quick Credibility & Metrics Strip */}
        <StatsStrip />

        {/* About Story & Philosophy */}
        <About />

        {/* Technical Stack & Skill Matrix */}
        <Skills />

        {/* Featured Project: EventLedger Startup Build */}
        <Projects />

        {/* Interactive Developer CLI Shell */}
        <section id="terminal" className="terminal-section" style={{ padding: '4.5rem 0' }}>
          <div className="container">
            <div className="section-header" style={{ marginBottom: '2rem' }}>
              <span className="section-pill">Interactive DevShell</span>
              <h2 className="section-title">
                Explore via <span className="gradient-text">Command Line</span>
              </h2>
              <WavyUnderline color="#4f46e5" height={4} width="90px" />
              <p className="section-subtitle">
                Prefer the terminal? Type commands or click quick action chips below to query my background, projects, and contact info directly.
              </p>
            </div>
            <div style={{ maxWidth: '840px', margin: '0 auto' }}>
              <InteractiveTerminal />
            </div>
          </div>
        </section>

        {/* Academic Background */}
        <Education />

        {/* Get In Touch Contact Section */}
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
