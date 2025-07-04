import React, { useEffect } from 'react';
import './App.css'; 

// Import components
import Hero from './components/Hero';
import Mission from './components/Mission';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const revealSections = () => {
      const windowHeight = window.innerHeight;

      sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < windowHeight * 0.85) {
          section.classList.add('visible');
        }
      });
    };

    revealSections();
    window.addEventListener('scroll', revealSections);
    return () => window.removeEventListener('scroll', revealSections);
  }, []);

  return (
    <div>
      <Hero />
      <Mission />
      <Experience />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;