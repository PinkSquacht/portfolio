import React from 'react';
import Navbar from './Navbar';
const Landing = () => (
  <div>
    <section className="w-100 py-4" style={{ background: '#ffe4ec' }}>
      <div className="container">
        <div className="mb-4">
          <div className="alert alert-primary text-center p-4 rounded-4 shadow-sm d-flex flex-column flex-md-row align-items-center justify-content-center gap-4">
            <img src="/assets/img/PinkSquatch.png" alt="Tech Workspace" style={{ width: 200, height: 200 }} className="me-md-4 mb-3 mb-md-0" />
            <div className="text-start">
              <div className="fs-2 fw-bold mb-2">💻 Welcome to My Digital Workspace</div>
              <div className="fs-4 mb-2">Hi, I’m Lloyd – Full-Stack Developer & IT Consultant</div>
              <div className="mb-2">Crafting modern web solutions and delivering real-world IT expertise. Whether you're here to view my work, collaborate on a project, or explore how I can help your business grow — you're in the right place.</div>
              <div className="mb-1">
                <span className="me-3">🛠️ Skilled in React, Node.js, Python, SQL, and more</span>
                <span>📍 Based in the U.S. – Available for freelance & consulting work</span>
              </div>
            </div>
          </div>
        </div>
        <div className="card shadow-sm mx-auto" style={{ maxWidth: 1000, background: '#eafbe7' }}>
          <div className="card-body text-center text-light-emphasis">
            <h1 className="text-center">
              
            </h1>
            <p>
              <br />
              <strong>Hi, I’m Lloyd — a certified full stack developer and tech support professional.</strong>
              <br />
              Currently at Leviton, I bring hands-on experience in problem-solving combined with strong coding skills in Python, JavaScript, SQL, Node.js, React, TypeScript, and Flask.
              <br />
              I’m passionate about building efficient, scalable web applications and continuously growing my expertise in software development.
              <br /><br />
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
); 

export default Landing;
