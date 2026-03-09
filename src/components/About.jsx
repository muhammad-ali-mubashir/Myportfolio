import React from 'react';
import SectionShell from './SectionShell.jsx';

const About = () => {
  return (
    <SectionShell id="about" kicker="liner notes" title="How I ended up here">
      <div className="about-body">
        <p>
          I am a motivated builder who enjoys taking small ideas and turning
          them into real products. Learning Computer Science at NUST gave me
          the language for what I was already doing in my free time
          experimenting with code and shipping little tools for myself and
          friends.
        </p>
        <p>
          I love animals and I care about the people who look after them.
          That is why a lot of my work points back to humane systems
          technology that respects the humans using it and the lives it
          touches in the background.
        </p>
        <p>
          Whether it is AI research at{' '}
          <span className="hero-highlight">Cradle Lab</span>, building campus
          tools with <span className="hero-highlight">NUST Markaz</span> or
          creating <span className="hero-highlight">Stray Sense</span>, my goal
          is the same build products that help people and businesses work
          smarter while staying kind to the world around them.
        </p>
      </div>
      <aside className="about-notes">
        <div className="note-card">
          <div className="note-label">curiosity log</div>
          <ul>
            <li>What if ML models felt more like instruments than black boxes?</li>
            <li>How do we make adoption journeys as smooth as ordering food?</li>
            <li>Can research writing feel as crafted as product copy?</li>
          </ul>
        </div>
      </aside>
    </SectionShell>
  );
};

export default About;

