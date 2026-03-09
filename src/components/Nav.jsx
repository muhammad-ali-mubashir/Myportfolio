import React from 'react';

const sections = [
  { id: 'hero', label: 'Now Playing' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Tracks' },
  { id: 'experience', label: 'Timeline' },
  { id: 'skills', label: 'Systems Map' },
  { id: 'education', label: 'Foundation' },
  { id: 'contact', label: 'Contact' }
];

const Nav = () => {
  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <div className="nav-ai-note mono">
        No AI was used in the making of this website. Any bugs are 100% human.
      </div>
      <header className="nav-shell">
        <div className="nav-left">
          <span className="nav-logo">ali.mubashir</span>
          <span className="nav-dot">●</span>
          <span className="nav-sub">AI / full‑stack / systems</span>
        </div>
        <nav className="nav-links">
          {sections.map((s) => (
            <button
              key={s.id}
              className="nav-link"
              onClick={() => handleClick(s.id)}
            >
              {s.label}
            </button>
          ))}
        </nav>
      </header>
    </>
  );
};

export default Nav;

