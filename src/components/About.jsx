import React from "react";

const About = () => (
  <section className="bg-info-subtle bg-gradient w-100 py-4">
    <div className="container">
      <div className="card shadow-sm mx-auto" style={{ maxWidth: 1000 }}>
        <div className="card-body text-center">
          <h2 className="mb-3">About Me</h2>
          <p>
            I am a passionate developer with experience in building modern web
            applications using React and other technologies.
          </p>
          <div className="text-center mt-3">
            <a
              href="https://www.linkedin.com/in/your-linkedin-username"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <i className="bi bi-linkedin me-2"></i>
              Connect with me on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
