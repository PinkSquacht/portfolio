import React from 'react';

const Landing = () => (
  <section id="home" className="hero-section">
    <div className="container section-shell hero-shell">
      <div className="row align-items-center g-5">
        <div className="col-lg-7">
          {/* Main hero message. Update this first if you want to change your positioning. */}
          <div className="eyebrow mb-3">Full Stack Developer · Technical Support</div>
          <h1 className="display-5 fw-semibold text-white mb-3">
            Professional portfolio and practical technical problem solving.
          </h1>
          <p className="lead text-white-50 mb-4">
            I build polished web experiences and bring hands-on support experience to every project. My focus is clear communication, reliable delivery, and software that feels dependable.
          </p>
          <div className="d-flex flex-wrap gap-3 mb-4">
            <a className="btn btn-primary btn-lg" href="#projects">View Projects</a>
            <a className="btn btn-outline-light btn-lg" href="#contact">Contact Me</a>
            <a className="btn btn-link text-decoration-none text-white-50 px-0" href="/resume">Open Resume</a>
          </div>
          {/* Skill chips make the stack easy to scan at a glance. */}
          <div className="d-flex flex-wrap gap-2">
            <span className="skill-pill">React</span>
            <span className="skill-pill">Node.js</span>
            <span className="skill-pill">Python</span>
            <span className="skill-pill">SQL</span>
            <span className="skill-pill">TypeScript</span>
            <span className="skill-pill">Flask</span>
          </div>
        </div>
        <div className="col-lg-5">
          {/* Secondary hero card: swap the image or summary here if you want a different first impression. */}
          <div className="hero-card text-center">
            <img
              src="/assets/img/PinkSquatch.png"
              alt="Lloyd Bowar portrait"
              className="hero-avatar mb-4"
            />
            <p className="text-uppercase text-white-50 small mb-2">Based in the U.S.</p>
            <h2 className="h4 text-white mb-3">Lloyd Bowar</h2>
            <p className="text-white-75 mb-0">
              Certified full stack developer with experience in frontend development, backend APIs, and technical service work.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
); 

export default Landing;
