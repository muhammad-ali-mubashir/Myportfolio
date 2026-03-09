import React, { useEffect, useRef, useState } from 'react';
import myPfp from '../../images/my pfp.png';

const Hero = () => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [audioAvailable, setAudioAvailable] = useState(true);

  useEffect(() => {
    const handler = () => toggleMusic();
    window.addEventListener('toggle-music', handler);
    return () => window.removeEventListener('toggle-music', handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing]);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => {
          setAudioAvailable(false);
          setPlaying(false);
        });
    }
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-shell">
      <audio
        ref={audioRef}
        loop
        src="/audio/lofi-loop.mp3"
        preload="none"
      />
      <div className="hero-main">
        <div>
          <div className="hero-now-playing mono">
            <span className="hero-now-dot" />
            Now playing portfolio side A
          </div>
          <div className="hero-header-row">
            <div className="hero-tagline">
            I think about my work like making an album small experiments that
            loop together into something people want to live with.
            </div>
            <div className="hero-photo-wrap hero-photo-inline">
              <img
                src={myPfp}
                alt="Portrait of M. Ali Mubashir"
                className="hero-photo"
              />
            </div>
          </div>
          <h1 className="hero-name">M. Ali Mubashir</h1>
          <p className="hero-sub">
            Computer Science undergrad at NUST exploring the edges of{' '}
            <span className="hero-highlight">AI research</span>,{' '}
            <span className="hero-highlight">full‑stack web</span>, and{' '}
            <span className="hero-highlight">mobile products</span> that feel
            crafted, not cloned.
          </p>
          <div className="hero-cta-row">
            <a
              href="https://github.com/muhammad-ali-mubashir"
              target="_blank"
              rel="noreferrer"
              className="button primary"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-ali-9771b3287/"
              target="_blank"
              rel="noreferrer"
              className="button ghost"
            >
              LinkedIn
            </a>
            <button className="button subtle" onClick={toggleMusic}>
              {audioAvailable
                ? playing
                  ? 'Pause focus loop (M)'
                  : 'Play focus loop (M)'
                : 'Add lofi-loop.mp3 to enable music'}
            </button>
          </div>
          <div className="hero-meta">
            <span>AI Research Intern · Cradle Lab</span>
            <span>MERN Dev Intern · MBMalik Technologies</span>
            <span>Co‑founder · NUST Markaz & Stray Sense</span>
          </div>
          <button className="hero-secondary-cta" onClick={scrollToProjects}>
            View selected tracks ↓
          </button>
        </div>
        <div className="hero-right">
          <div className="hero-cassette-wrap">
            <img
              src="/cassette.png"
              alt="Cassette illustration"
              className="hero-cassette-img"
            />
            <div className="hero-cassette-pill mono">side A · Full stack / AI</div>
            <div className="hero-cassette-tag hero-cassette-tag-ai mono">AI</div>
            <div className="hero-cassette-tag hero-cassette-tag-product mono">
              Product
            </div>
            <div className="hero-cassette-tag hero-cassette-tag-strays mono">
              Strays
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-card-header">
              <span className="hero-card-label">signal / today</span>
              <span className="hero-card-pill">open to AI & product teams</span>
            </div>
            <div className="hero-waveform">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <ul className="hero-list">
              <li>AI research on vision, NLP & generative models.</li>
              <li>Full‑stack apps with React, FastAPI, Node.js & Supabase.</li>
              <li>Stray‑animal welfare platform built as a product, not a project.</li>
            </ul>
            <div className="hero-footnote">
              hint: tap <span className="mono">M</span> for music,{' '}
              <span className="mono">T</span> to jump to top.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

