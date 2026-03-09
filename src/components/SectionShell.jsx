import React, { useEffect, useRef, useState } from 'react';

const SectionShell = ({ id, kicker, title, children }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`section-shell ${visible ? 'section-visible' : ''}`}
    >
      <div className="section-label">
        <span className="section-kicker">{kicker}</span>
        <span className="section-line" />
      </div>
      <div className="section-content">
        <h2 className="section-title">{title}</h2>
        {children}
      </div>
    </section>
  );
};

export default SectionShell;

