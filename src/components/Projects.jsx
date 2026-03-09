import React from 'react';
import SectionShell from './SectionShell.jsx';

const projects = [
  {
    id: 'track-01',
    title: 'NUST Markaz',
    role: 'Co‑founder & Lead Developer',
    timeframe: 'Dec 2025 – Present',
    problem:
      'Campus life at NUST runs on scattered WhatsApp groups and word‑of‑mouth. Students miss events, deadlines and opportunities because there is no centralized, student‑first platform.',
    solution:
      'Designed and led development of a centralized mobile application built with FastAPI, React, Docker, RBAC and Supabase to stream day‑to‑day campus needs into one humane interface.',
    impact:
      'Gave students a single place to track events, announcements and services, while giving societies and admins structured tools instead of ad‑hoc broadcasts.',
    tech: ['React Native', 'React', 'FastAPI', 'Supabase', 'Docker', 'RBAC']
  },
  {
    id: 'track-02',
    title: 'Venture Alpha Engine',
    role: 'Data & AI Engineer',
    timeframe: 'Sep 2025 – Dec 2025',
    problem:
      'Investors were drowning in unstructured startup data, making it hard to form a consistent view across 500,000+ records.',
    solution:
      'Built an end‑to‑end data pipeline using Python, pandas, NumPy and Seaborn to clean, explore and visualize venture data, then trained an AI model to surface explainable insights.',
    impact:
      'Turned noisy data into a repeatable decision surface, enabling exploratory analysis, narrative reporting and faster investor conversations.',
    tech: ['Python', 'pandas', 'NumPy', 'Seaborn', 'ML', 'Data Pipelines']
  },
  {
    id: 'track-03',
    title: 'Stray Sense',
    role: 'Founder & CEO',
    timeframe: 'Sep 2024 – Aug 2025',
    problem:
      'Adoption for stray animals is fragmented across social media, with no structured way to track animals, shelters or potential adopters.',
    solution:
      'Founded and led development of a nonprofit adoption platform on a MERN stack, deployed on a scalable cloud‑based architecture and piloted with a large ISB/RWP shelter.',
    impact:
      'Helped shelters manage profiles, track interest and share analytics, receiving recognition from government partners while staying grounded in real animal stories.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Cloud', 'Product Design']
  }
];

const Projects = () => {
  return (
    <SectionShell
      id="projects"
      kicker="tracklist"
      title="Projects, arranged like songs I keep replaying"
    >
      <div className="tracks-shell">
        {projects.map((p, index) => (
          <article key={p.id} className="track-card">
            <header className="track-header">
              <div className="track-index">
                <span className="mono">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <div>
                <h3 className="track-title">{p.title}</h3>
                <p className="track-meta">
                  {p.role} · {p.timeframe}
                </p>
              </div>
            </header>
            <div className="track-body">
              <div className="track-column">
                <h4 className="track-label">Problem</h4>
                <p>{p.problem}</p>
              </div>
              <div className="track-column">
                <h4 className="track-label">Approach</h4>
                <p>{p.solution}</p>
              </div>
              <div className="track-column">
                <h4 className="track-label">Impact</h4>
                <p>{p.impact}</p>
              </div>
            </div>
            <footer className="track-footer">
              <div className="track-tech">
                {p.tech.map((t) => (
                  <span key={t} className="pill">
                    {t}
                  </span>
                ))}
              </div>
            </footer>
          </article>
        ))}
      </div>
    </SectionShell>
  );
};

export default Projects;

