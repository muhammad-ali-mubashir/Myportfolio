import React from 'react';
import SectionShell from './SectionShell.jsx';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const subject = encodeURIComponent('Reaching out from your portfolio');
    const body = encodeURIComponent(
      `Hi Ali,\n\n${message}\n\n— ${name} (${email})`
    );

    window.location.href = `mailto:alimubashirprof@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <SectionShell id="contact" kicker="open channel" title="Let’s talk">
      <div className="contact-shell">
        <div className="contact-copy">
          <p>
            I&apos;m currently looking for{' '}
            <span className="hero-highlight">software engineering</span> and{' '}
            <span className="hero-highlight">AI‑focused</span> internships or
            junior roles where research, systems design and product thinking all
            matter.
          </p>
          <p>
            If you&apos;re building something for learners, cities or animals,
            I&apos;d especially love to hear from you.
          </p>
          <a
            href="mailto:alimubashirprof@gmail.com"
            className="contact-email mono"
          >
            alimubashirprof@gmail.com
          </a>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" required />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" required />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required />
          </div>
          <button type="submit" className="button primary full">
            Draft email
          </button>
          <p className="contact-footnote mono">
            shortcuts: G → GitHub, L → LinkedIn, T → top, M → music
          </p>
          <p className="contact-footnote mono playful-note">
            small confession: this site was actually handcrafted. no AI layout
            generators were harmed in the making of it.
          </p>
        </form>
      </div>
    </SectionShell>
  );
};

export default Contact;

