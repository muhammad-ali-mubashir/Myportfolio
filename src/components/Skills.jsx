import React from 'react';
import SectionShell from './SectionShell.jsx';

const groups = [
  {
    label: 'AI / ML',
    skills: ['Computer Vision', 'NLP', 'Deep Learning', 'Generative AI'],
    level: 'growing fast'
  },
  {
    label: 'Systems & Backend',
    skills: ['Node.js', 'FastAPI', 'Spring Boot', 'RBAC'],
    level: 'comfortable'
  },
  {
    label: 'Frontend & Mobile',
    skills: ['React', 'React Native', 'Next.js'],
    level: 'love crafting UX'
  },
  {
    label: 'Data & Tools',
    skills: [
      'MongoDB',
      'MySQL',
      'PostgreSQL',
      'Supabase',
      'pandas',
      'NumPy',
      'Seaborn'
    ],
    level: 'analytical'
  },
  {
    label: 'Dev Productivity',
    skills: ['Docker', 'Git', 'Tableau', 'Power BI', 'Matplotlib', 'Hadoop', 'Spark'],
    level: 'pragmatic'
  }
];

const Skills = () => {
  return (
    <SectionShell
      id="skills"
      kicker="systems map"
      title="Skills, arranged like instruments in a band"
    >
      <div className="skills-shell">
        {groups.map((g) => (
          <div key={g.label} className="skill-cluster">
            <div className="skill-cluster-header">
              <h3>{g.label}</h3>
            </div>
            <div className="skill-tags">
              {g.skills.map((s) => (
                <span key={s} className="pill">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
};

export default Skills;

