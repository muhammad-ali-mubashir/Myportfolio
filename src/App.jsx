import React, { useEffect } from 'react';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Skills from './components/Skills.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';
import Nav from './components/Nav.jsx';
import CursorTrail from './components/CursorTrail.jsx';

const App = () => {
  useEffect(() => {
    const handleKey = (e) => {
      const key = e.key.toLowerCase();
      if (key === 't') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (key === 'g') {
        window.open('https://github.com/muhammad-ali-mubashir', '_blank');
      } else if (key === 'l') {
        window.open(
          'https://www.linkedin.com/in/muhammad-ali-9771b3287/',
          '_blank'
        );
      } else if (key === 'm') {
        window.dispatchEvent(new CustomEvent('toggle-music'));
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <div className="page-root">
      <CursorTrail />
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
    </div>
  );
};

export default App;

