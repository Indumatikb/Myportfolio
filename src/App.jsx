import React from 'react';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WavyDivider from './components/WavyDivider';

function App() {
  return (
    <div className="app-container relative">
      {/* Generative Kinetic Waveforms & Harmonic Mesh Background */}
      <Background />
      
      <Navbar />
      
      <main>
        <Hero />
        <WavyDivider variant="cyan-indigo" height={70} opacity={0.85} />
        <About />
        <WavyDivider variant="indigo-violet" flip={true} height={75} opacity={0.85} />
        <Skills />
        <WavyDivider variant="cyan-indigo" height={70} opacity={0.85} />
        <Projects />
        <WavyDivider variant="indigo-violet" flip={true} height={75} opacity={0.85} />
        <Education />
        <WavyDivider variant="cyan-indigo" height={70} opacity={0.85} />
        <Contact />
        <WavyDivider variant="indigo-violet" flip={true} height={60} opacity={0.7} />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
