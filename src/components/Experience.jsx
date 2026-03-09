import React from 'react';
import SectionShell from './SectionShell.jsx';

const Experience = () => {
  return (
    <SectionShell id="experience" kicker="timeline" title="Experience in the wild">
      <div className="timeline-shell">
        <div className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-content">
            <h3>AI Research Intern · Cradle Lab</h3>
            <p className="timeline-meta">Jul 2025 – Oct 2025</p>
            <ul>
              <li>
                Conducted research on state‑of‑the‑art models in computer vision,
                NLP and generative AI.
              </li>
              <li>
                Distilled papers from venues like arXiv and NeurIPS into clear,
                reproducible technical reports.
              </li>
              <li>
                Helped bridge the gap between experimentation and engineering by
                proposing deployable architectures.
              </li>
            </ul>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot" />
          <div className="timeline-content">
            <h3>MERN Stack Development Intern · MBMalik Technologies</h3>
            <p className="timeline-meta">May 2025 – Jul 2025</p>
            <ul>
              <li>
                Built user‑centric front‑end applications in React and React
                Native for international clients.
              </li>
              <li>
                Collaborated with cross‑border teams to ship features that met
                global UX and accessibility standards.
              </li>
              <li>
                Learned how to turn ambiguous product requirements into scoped,
                testable tickets.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SectionShell>
  );
};

export default Experience;

