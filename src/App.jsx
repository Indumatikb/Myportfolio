import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Learning from './components/Learning';
import Journey from './components/Journey';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container relative">
      <div className="bg-glow"></div>
      <div className="bg-glow-right"></div>
      
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Learning />
        <Journey />
        <Education />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
