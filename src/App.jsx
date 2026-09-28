import React from 'react';
import Background from './components/Background';
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
      {/* Dynamic Animated Background with Cyber Grid & Aurora Orbs */}
      <Background />
      
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
