import React from 'react';
import SectionShell from './SectionShell.jsx';

const Education = () => {
  return (
    <SectionShell id="education" kicker="foundation" title="Education">
      <div className="education-shell">
        <div>
          <h3>National University of Sciences & Technology (NUST)</h3>
          <p className="education-meta">
            B.Sc. Computer Science · H‑12 Campus · 3rd Year
          </p>
        </div>
        <p className="education-note">
          Currently deepening my understanding of algorithms, distributed
          systems and AI while building products that live outside the classroom.
        </p>
      </div>
    </SectionShell>
  );
};

export default Education;

