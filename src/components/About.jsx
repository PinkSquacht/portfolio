import React from "react";

const About = () => (
  <section id="about" className="content-section">
    <div className="container section-shell">
      {/* Section heading used to anchor the about narrative. */}
      <div className="section-heading">
        <div className="eyebrow mb-2">About</div>
        <h2 className="section-title mb-0">A pragmatic developer with a service mindset.</h2>
      </div>
      {/* Main about content block. */}
      <div className="content-panel">
        <p>
          I’m Lloyd Bowar, a certified full stack developer and IT consultant based in the U.S. I specialize in building modern, scalable web applications and helping individuals and small businesses solve real-world technical problems.
        </p>
        <p>
          My experience spans React, Node.js, Python, SQL, and support work in production environments. I care about clean structure, strong communication, and solutions that are easy to maintain after launch.
        </p>
        <p className="mb-0">
          Outside of coding, I stay close to practical technology trends and look for ways to make complex tools feel more approachable for the people using them.
        </p>
        </div>
    </div>
  </section>
);

export default About;
