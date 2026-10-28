import React, { useState } from "react";

const causes = [
  {
    number: "01",
    icon: "✳",
    title: "Education",
    description:
      "Help every child get the learning resources, mentorship, and confidence they need to thrive.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Students learning together in a classroom",
  },
  {
    number: "02",
    icon: "❋",
    title: "Environment",
    description:
      "Back local teams restoring green spaces and building a healthier, more sustainable future.",
    image:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Green hills and a thriving natural landscape",
  },
  {
    number: "03",
    icon: "♡",
    title: "Community Support",
    description:
      "Show up for neighbors with practical support, shared resources, and a little human connection.",
    image:
      "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Community volunteers working together",
  },
];

const waysToHelp = [
  {
    icon: "↗",
    title: "Volunteer",
    description: "Give your time and skills to a cause that feels close to home.",
    action: "Find a way to help",
    message: "I'm interested in volunteering.",
  },
  {
    icon: "◎",
    title: "Support an NGO",
    description: "Help a local organization reach more people and do more good.",
    action: "Partner with us",
    message: "I'd like to support an NGO.",
  },
  {
    icon: "✳",
    title: "Donate",
    description: "Every contribution helps community-led work go a little further.",
    action: "Ask how to give",
    message: "I'd like to learn about supporting a cause.",
  },
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={`section-heading${centered ? " centered" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  function goToContact(message) {
    setFormValues((current) => ({ ...current, message }));
    setSuccessMessage("");
    setMenuOpen(false);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    window.setTimeout(() => document.getElementById("name")?.focus(), 450);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSuccessMessage(
      `Thanks, ${formValues.name.trim()}! Your message is ready. This demo doesn't send information to a server.`,
    );
    setFormValues({ name: "", email: "", message: "" });
  }

  function handleChange(event) {
    setSuccessMessage("");
    setFormValues((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <header className="site-header">
        <nav className="navbar container" aria-label="Main navigation">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="CauseConnect home">
            <span className="brand-mark" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </span>
            <span>cause<span className="brand-accent">connect</span></span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>

          <div className={`nav-links${menuOpen ? " nav-links-open" : ""}`}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#causes" onClick={closeMenu}>Causes</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a className="button button-small button-navy nav-cta" href="#get-involved" onClick={closeMenu}>
              Get involved <ArrowIcon />
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span className="eyebrow-dot" /> GOOD THINGS HAPPEN TOGETHER</p>
              <h1>Connect with causes <span>that matter.</span></h1>
              <p className="hero-description">
                A little time, a thoughtful gift, the right connection. We bring
                NGOs, volunteers, and donors together to make each one count.
              </p>
              <div className="hero-actions">
                <a className="button button-orange" href="#causes">Explore causes <ArrowIcon /></a>
                <a className="button button-outline" href="#get-involved">Become a volunteer</a>
              </div>
              <div className="hero-note">
                <span className="note-icon" aria-hidden="true">✳</span>
                <span>Small acts. Shared impact.</span>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-image-frame">
                <img
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1400&q=90"
                  alt="Volunteers coming together to support their community"
                />
              </div>
              <div className="image-caption">
                <span className="caption-icon" aria-hidden="true">♡</span>
                <div>
                  <strong>People power change</strong>
                  <span>It starts with showing up.</span>
                </div>
              </div>
              <span className="hero-spark" aria-hidden="true">✳</span>
            </div>
          </div>
          <div className="hero-bottom-line" aria-hidden="true" />
        </section>

        <section className="about section-wrap" id="about">
          <div className="container about-grid">
            <SectionHeading eyebrow="A better way to do good" title={<>Good intentions, <span>meet good connections.</span></>} />
            <div className="about-copy">
              <p>
                Doing good shouldn’t feel hard to find. CauseConnect makes it
                easier for people who care to find the organizations doing
                meaningful work right in their communities.
              </p>
              <p>
                NGOs can find the hands, hearts, and support they need. And
                everyone else can discover a simple, worthwhile way to pitch in.
                Because lasting change is something we make together.
              </p>
              <a className="text-link" href="#get-involved">See how you can help <ArrowIcon /></a>
            </div>
          </div>
          <div className="container impact-strip">
            <span>Closer connections</span><i />
            <span>Stronger communities</span><i />
            <span>Change that lasts</span>
          </div>
        </section>

        <section className="causes section-wrap" id="causes">
          <div className="container">
            <div className="causes-heading-row">
              <SectionHeading
                eyebrow="Find your kind of good"
                title={<>Causes worth <span>showing up for.</span></>}
                description="Start with what moves you. There’s no wrong way to make a difference."
              />
              <span className="section-count">01 — 03</span>
            </div>
            <div className="cause-grid">
              {causes.map((cause) => (
                <article className="cause-card" key={cause.title}>
                  <div className="cause-image">
                    <img src={cause.image} alt={cause.imageAlt} loading="lazy" />
                    <span className="cause-number">{cause.number}</span>
                    <span className="cause-icon" aria-hidden="true">{cause.icon}</span>
                  </div>
                  <div className="cause-content">
                    <h3>{cause.title}</h3>
                    <p>{cause.description}</p>
                    <button
                      className="text-link"
                      type="button"
                      onClick={() => goToContact(`I'd like to learn more about ${cause.title.toLowerCase()}.`)}
                    >
                      Learn more <ArrowIcon />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="involved section-wrap" id="get-involved">
          <div className="container involved-grid">
            <div className="involved-intro">
              <SectionHeading
                eyebrow="Your next little big thing"
                title={<>There’s a place <span>for you here.</span></>}
              />
              <p>However you want to help, we’ll help you find a place to start.</p>
              <span className="involved-doodle" aria-hidden="true">✳</span>
            </div>
            <div className="ways-list">
              {waysToHelp.map((way, index) => (
                <article className="way-card" key={way.title}>
                  <span className="way-number">0{index + 1}</span>
                  <span className="way-icon" aria-hidden="true">{way.icon}</span>
                  <div className="way-copy">
                    <h3>{way.title}</h3>
                    <p>{way.description}</p>
                  </div>
                  <button className="way-action" type="button" onClick={() => goToContact(way.message)}>
                    {way.action} <ArrowIcon />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact section-wrap" id="contact">
          <div className="container contact-grid">
            <div className="contact-intro">
              <p className="eyebrow">LET’S MAKE SOMETHING GOOD HAPPEN</p>
              <h2>Have a cause <span>in mind?</span></h2>
              <p className="contact-description">
                Tell us what matters to you. We’d love to help you find your next step.
              </p>
              <div className="contact-aside">
                <span aria-hidden="true">↘</span>
                <p>No pressure. Just a good place to start.</p>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label htmlFor="name">Your name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="What should we call you?"
                  value={formValues.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row">
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={formValues.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row">
                <label htmlFor="message">What’s on your mind?</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Tell us a little about the cause you care about..."
                  value={formValues.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-submit-row">
                <button className="button button-orange" type="submit">Send a message <ArrowIcon /></button>
                <span>Your details stay in this demo.</span>
              </div>
              {successMessage && (
                <p className="success-message" role="status">{successMessage}</p>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand">
            <a className="brand brand-light" href="#home">
              <span className="brand-mark" aria-hidden="true"><span /><span /><span /><span /></span>
              <span>cause<span className="brand-accent">connect</span></span>
            </a>
            <p>Making it easier for good people to do good things, together.</p>
          </div>
          <div className="footer-nav-wrap">
            <p className="footer-label">Find your way</p>
            <nav className="footer-nav" aria-label="Footer navigation">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#causes">Causes</a>
              <a href="#get-involved">Get involved</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
          <a className="back-to-top" href="#home" aria-label="Back to top">↑</a>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} CauseConnect</span>
          <span>Good things happen together.</span>
        </div>
      </footer>
    </>
  );
}

export default App;
