import React from 'react'


function Resume() {
  return (
    <section className="content-section">
      <div className="container section-shell">
        {/* Resume header: keep this aligned with the name you use everywhere else. */}
        <div className="section-heading text-center">
          <div className="eyebrow mb-2">Resume</div>
          <h1 className="section-title mb-0">Lloyd Bowar</h1>
        </div>
        {/* Keep the resume sections separate so you can edit one area without touching the rest. */}
        <div className="content-panel resume-panel">
            <section className="mb-4">
              <h2 className="h4 section-subtitle">Contact Information</h2>
              <ul className="list-unstyled mb-0">
                <li><strong>Email:</strong> Lloyd.bowar@gmail.com</li>
                <li><strong>Phone:</strong> (503) 779-3173</li>
                <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/lloydbowar" target="_blank" rel="noopener noreferrer">linkedin.com/in/lloydbowar</a></li>
              </ul>
            </section>
            <section className="mb-4">
              <h2 className="h4 section-subtitle">Summary</h2>
              <p className="mb-0">
                Driven and detail-oriented Software Engineer with a strong academic background in full
                stack development and SQL programming. Experienced in creating innovative, data-driven 
                applications and solving challenging technical problems. Proficient in leveraging modern 
                frameworks and collaborating effectively in team settings. Excited to apply technical 
                expertise to contribute to Garmin International’s innovative wearable, marine, and aviation 
                solutions.
              </p>
            </section>
            <section className="mb-4">
              <h2 className="h4 section-subtitle">Education</h2>
              <div className="mb-2">
                <strong>Coding Temple | Chicago, IL</strong><br />
                Full Stack Development Bootcamp<br />
                GPA: 4.7/5<br />
                January 2024
                <ul>
                  <li>Designed and implemented a fully functional e-commerce platform utilizing advanced CRUD operations and an intuitive user interface.</li>
                  <li>Gained practical experience in Agile workflows, including sprint management and collaboration using version control tools like Git and GitHub.</li>
                  <li>Relational Databases, API REST Development
                    <ul>
                      <li>Created SQL queries to interact with relational databases</li>
                      <li>Applied SQL within Python applications</li>
                      <li>Built APIs using Flask</li>
                    </ul>
                  </li>
                  <li>Advanced Python
                    <ul>
                      <li>Advanced Data Structures</li>
                      <li>File Handling</li>
                      <li>OOP Fundamentals</li>
                    </ul>
                  </li>
                  <li>Frameworks & Javascript
                    <ul>
                      <li>JavaScript Syntax & Control Structures</li>
                      <li>Form Handling in Bootstrap</li>
                      <li>Interactive Web Elements</li>
                      <li>Bootstrap for Layouts</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div>
                <strong>Woodburn High School | Woodburn, OR</strong><br />
                High School Diploma<br />
                GPA: 3.65/4<br />
                July 2013
              </div>
            </section>
            <section className="mb-4">
              <h2 className="h4 section-subtitle">Skills</h2>
              <ul className="mb-0">
                <li>Programming Languages: Python, JavaScript, SQL, Typescript</li>
                <li>Frameworks: React, Node.js, Flask</li>
                <li>Web Technologies: HTML, CSS, Bootstrap, Material UI, Tailwind CSS</li>
                <li>Database Management: MySQL, PostgreSQL</li>
                <li>Version Control: Git, GitHub</li>
                <li>Agile Methodologies: Scrum, Kanban</li>
              </ul>
            </section>
            <section className="mb-4">
              <h2 className="h4 section-subtitle">Projects</h2>
              <div className="mb-3 ms-3">
                <strong>AI-Driven Movie Recommendation App</strong>
                <ul>
                  <li>Developed a web application that leverages machine learning to provide personalized movie suggestions.</li>
                  <li>Enhanced user engagement with a visually appealing React frontend and tailored content delivery.</li>
                  <li>Incorporated APIs to fetch streaming service availability, improving usability and relevance for users.</li>
                </ul>
              </div>
            </section>
            <section className="mb-4">
              <h2 className="h4 section-subtitle">Professional Experience</h2>
              <div className="mb-3">
                <h3 className="h5">Architecural Lighting Controls Technical Service Representative | Leviton <span className="text-muted">June 2025 – Present</span></h3>
                <ul>
                  <li>Provide technical support and troubleshooting for architectural lighting control systems.</li>
                  <li>Assist clients with installation, configuration, and maintenance of lighting solutions.</li>
                  <li>Deliver training and documentation to end users and partners.</li>
                </ul>
              </div>
              <div className="mb-3">
                <h3 className="h5">Driver | Excellerate LLC | Wilsonville, OR <span className="text-muted">Sep 2024 – May 2025</span></h3>
                <ul>
                  <li>Transported and delivered packages to homes, businesses, and other locations while following designated routes and schedules.</li>
                  <li>Communicated with customers regarding deliveries, confirming receipt and handling inquiries.</li>
                  <li>Used GPS and mapping tools to navigate efficiently and minimize delays.</li>
                </ul>
              </div>
              <div className="mb-3">
                <h3 className="h5">Software Engineer Intern | coLab | Remote <span className="text-muted">Oct 2023 – Dec 2023</span></h3>
                <ul>
                  <li>Contributed to the development of an AI-powered web application for personalized movie recommendations.</li>
                  <li>Built a user-friendly React frontend with dynamic filtering features.</li>
                  <li>Developed a RESTful API backend in Flask and Python to integrate machine learning models.</li>
                  <li>Utilized cloud technologies for high availability and scalability.</li>
                  <li>Participated in Agile development cycles, including sprint planning and code reviews.</li>
                </ul>
              </div>
              <div className="mb-3">
                <h3 className="h5">Machine Operator | Milgard Windows | Tualatin, OR <span className="text-muted">May 2022 – Aug 2023</span></h3>
                <ul>
                  <li>Enhanced production workflows, achieving a 10% efficiency increase by introducing new processes.</li>
                  <li>Developed and implemented a tracking system for quality control and accurate assembly.</li>
                  <li>Collaborated with cross-functional teams to resolve production challenges.</li>
                </ul>
              </div>
            </section>
            <section className="mb-4">
              <h2 className="h4 section-subtitle">Certifications</h2>
              <ul className="mb-0">
                <li>
                  <a href="https://www.credly.com/users/lloyd-bowar" target="_blank" rel="noopener noreferrer">
                    Check Out My Certification on Credly
                  </a>
                </li>
              </ul>
            </section>
            <div className="text-center mt-4 pt-3 border-top">
              {/* Update this PDF path whenever you export a new resume version. */}
              <a
                href="/assets/LloydBowar_2025_Resume.pdf"
                download="LloydBowar_Resume_2025.pdf"
                className="btn btn-primary"
              >
                Download PDF
              </a>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Resume