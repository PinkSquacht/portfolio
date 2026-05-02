import React from 'react'

const CREDLY_USERNAME = 'lloyd-bowar'
const CREDLY_PROFILE_URL = `https://www.credly.com/users/${CREDLY_USERNAME}`

// Certifications from Credly transcript (manually extracted for reliability)
const badges = [
  {
    id: 'reflective-problem-solver',
    name: 'Reflective Problem Solver',
    issuer: 'University of Phoenix',
    issuedDate: '20 October 2022',
    image: 'https://images.credly.com/size/340x340/images/6a91cf96-8add-4b49-a85f-8fc0dc63162f/image.png',
    url: 'https://www.credly.com/badges/6a91cf96-8add-4b49-a85f-8fc0dc63162f',
  },
  {
    id: 'reflective-decision-maker',
    name: 'Reflective Decision Maker',
    issuer: 'University of Phoenix',
    issuedDate: '20 October 2022',
    image: 'https://images.credly.com/size/340x340/images/21c52b80-bc04-4004-b8fe-d9423d2741ab/image.png',
    url: 'https://www.credly.com/badges/21c52b80-bc04-4004-b8fe-d9423d2741ab',
  },
  {
    id: 'typescript-certified',
    name: 'TypeScript Certified',
    issuer: 'Coding Temple',
    issuedDate: '28 March 2024',
    image: 'https://images.credly.com/size/340x340/images/47572ec1-e407-42d7-9781-2a65f4c38228/image.png',
    url: 'https://www.credly.com/badges/47572ec1-e407-42d7-9781-2a65f4c38228',
  },
  {
    id: 'html-certified',
    name: 'HTML Certified',
    issuer: 'Coding Temple',
    issuedDate: '28 March 2024',
    image: 'https://images.credly.com/size/340x340/images/f10cfb58-b0fe-4d5c-ba76-bdadc3e1fff3/image.png',
    url: 'https://www.credly.com/badges/f10cfb58-b0fe-4d5c-ba76-bdadc3e1fff3',
  },
  {
    id: 'css-certified',
    name: 'CSS Certified',
    issuer: 'Coding Temple',
    issuedDate: '28 March 2024',
    image: 'https://images.credly.com/size/340x340/images/cb615822-7cee-4f3c-b67c-891196b0d01f/image.png',
    url: 'https://www.credly.com/badges/cb615822-7cee-4f3c-b67c-891196b0d01f',
  },
  {
    id: 'python-certified',
    name: 'Python Certified',
    issuer: 'Coding Temple',
    issuedDate: '28 March 2024',
    image: 'https://images.credly.com/size/340x340/images/d2ce1275-b1dc-46c3-b31d-e6c5eb182cc4/image.png',
    url: 'https://www.credly.com/badges/d2ce1275-b1dc-46c3-b31d-e6c5eb182cc4',
  },
  {
    id: 'software-engineering-cert',
    name: 'Software Engineering: Certificate of Completion',
    issuer: 'Coding Temple',
    issuedDate: '28 March 2024',
    image: 'https://images.credly.com/size/340x340/images/4abab2fd-db88-4d87-ba0d-743c3047105e/image.png',
    url: 'https://www.credly.com/badges/4abab2fd-db88-4d87-ba0d-743c3047105e',
  },
  {
    id: 'javascript-certified',
    name: 'JavaScript Certified',
    issuer: 'Coding Temple',
    issuedDate: '28 March 2024',
    image: 'https://images.credly.com/size/340x340/images/3652f50d-ccdd-4d5f-8560-af205a4ba4d4/image.png',
    url: 'https://www.credly.com/badges/3652f50d-ccdd-4d5f-8560-af205a4ba4d4',
  },
  {
    id: 'sql-certified',
    name: 'SQL Certified',
    issuer: 'Coding Temple',
    issuedDate: '28 March 2024',
    image: 'https://images.credly.com/size/340x340/images/84934681-aa28-4da2-8fd4-0ae4469744a5/image.png',
    url: 'https://www.credly.com/badges/84934681-aa28-4da2-8fd4-0ae4469744a5',
  },
  {
    id: 'flask-certified',
    name: 'Flask Certified',
    issuer: 'Coding Temple',
    issuedDate: '28 March 2024',
    image: 'https://images.credly.com/size/340x340/images/ceb9d2f3-b9cb-4a05-bb54-7b491810578d/image.png',
    url: 'https://www.credly.com/badges/ceb9d2f3-b9cb-4a05-bb54-7b491810578d',
  },
  {
    id: 'react-certified',
    name: 'React Certified',
    issuer: 'Coding Temple',
    issuedDate: '28 March 2024',
    image: 'https://images.credly.com/size/340x340/images/a4256fae-8645-4aab-8084-9942439bdb41/image.png',
    url: 'https://www.credly.com/badges/a4256fae-8645-4aab-8084-9942439bdb41',
  },
  {
    id: 'nodejs-certified',
    name: 'NodeJS Certified',
    issuer: 'Coding Temple',
    issuedDate: '28 March 2024',
    image: 'https://images.credly.com/size/340x340/images/a220d3a8-6185-42f9-9e44-f2ae37877721/image.png',
    url: 'https://www.credly.com/badges/a220d3a8-6185-42f9-9e44-f2ae37877721',
  },
]

function Resume() {

  return (
    <section id="resume" className="content-section">
      <div className="container section-shell">
        <div className="section-heading text-center mb-4">
          <div className="eyebrow mb-2">Resume</div>
          <h1 className="section-title mb-0">Lloyd Bowar</h1>
        </div>

        <div className="content-panel resume-panel">
          <div className="row g-4">
            {/* Main column */}
            <div className="col-12 col-md-8">
              <section className="mb-4">
                <h2 className="h4 section-subtitle">Summary</h2>
                <p className="mb-0">
                  Driven and detail-oriented Software Engineer with a strong academic background in full
                  stack development and SQL programming. Experienced in creating innovative, data-driven
                  applications and solving challenging technical problems. Proficient in leveraging modern
                  frameworks and collaborating effectively in team settings.
                </p>
              </section>

              <section className="mb-4">
                <h2 className="h4 section-subtitle">Professional Experience</h2>
                <div className="mb-3">
                  <h3 className="h5">Architecural Lighting Controls Technical Service Representative | Leviton <span className="text-white-50">June 2025 – Present</span></h3>
                  <ul>
                    <li>Provide technical support and troubleshooting for architectural lighting control systems.</li>
                    <li>Assist clients with installation, configuration, and maintenance of lighting solutions.</li>
                    <li>Deliver training and documentation to end users and partners.</li>
                  </ul>
                </div>

                <div className="mb-3">
                  <h3 className="h5">Software Engineer Intern | coLab | Remote <span className="text-white-50">Oct 2023 – Dec 2023</span></h3>
                  <ul>
                    <li>Contributed to the development of an AI-powered web application for personalized movie recommendations.</li>
                    <li>Built a user-friendly React frontend with dynamic filtering features.</li>
                    <li>Developed a RESTful API backend in Flask and Python to integrate machine learning models.</li>
                  </ul>
                </div>

                <div className="mb-3">
                  <h3 className="h5">Machine Operator | Milgard Windows | Tualatin, OR <span className="text-white-50">May 2022 – Aug 2023</span></h3>
                  <ul>
                    <li>Enhanced production workflows, achieving a 10% efficiency increase by introducing new processes.</li>
                    <li>Developed and implemented a tracking system for quality control and accurate assembly.</li>
                  </ul>
                </div>
              </section>

              <section className="mb-4">
                <h2 className="h4 section-subtitle">Education</h2>
                <div className="mb-2">
                  <strong>Coding Temple | Chicago, IL</strong><br />
                  Full Stack Development Bootcamp — January 2024
                  <ul>
                    <li>Designed and implemented a fully functional e-commerce platform utilizing advanced CRUD operations and an intuitive user interface.</li>
                    <li>Gained practical experience in Agile workflows and version control with Git/GitHub.</li>
                  </ul>
                </div>
                <div>
                  <strong>Woodburn High School | Woodburn, OR</strong><br />
                  High School Diploma — July 2013
                </div>
              </section>

              <section className="mb-4">
                <h2 className="h4 section-subtitle">Projects</h2>
                <div className="mb-3 ms-3">
                  <strong>AI-Driven Movie Recommendation App</strong>
                  <ul>
                    <li>Developed a web application that leverages machine learning to provide personalized movie suggestions.</li>
                    <li>Incorporated APIs to fetch streaming service availability, improving usability and relevance for users.</li>
                  </ul>
                </div>
              </section>
            </div>

            {/* Sidebar column */}
            <aside className="col-12 col-md-4">
              <div className="mb-4 p-3 border rounded">
                <h2 className="h5 section-subtitle">Contact</h2>
                <ul className="list-unstyled mb-0">
                  <li><strong>Email:</strong> <a href="mailto:Lloyd.bowar@gmail.com">Lloyd.bowar@gmail.com</a></li>
                  <li><strong>Phone:</strong> (503) 779-3173</li>
                  <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/lloydbowar" target="_blank" rel="noopener noreferrer">linkedin.com/in/lloydbowar</a></li>
                </ul>
              </div>

              <div className="mb-4 p-3 border rounded">
                <h2 className="h5 section-subtitle">Skills</h2>
                <ul className="mb-0">
                  <li>Python, JavaScript, SQL, TypeScript</li>
                  <li>React, Node.js, Flask</li>
                  <li>MySQL, PostgreSQL</li>
                  <li>Git, GitHub</li>
                </ul>
              </div>

              <div className="mb-4 p-3 border rounded">
                <h2 className="h5 section-subtitle">Certifications</h2>
                <div className="d-flex flex-wrap gap-2">
                  {badges.map((b) => (
                    <a key={b.id} href={b.url} target="_blank" rel="noopener noreferrer" className="d-inline-block text-decoration-none" title={b.name}>
                      <div className="text-center" style={{ width: '70px' }}>
                        <img 
                          src={b.image} 
                          alt={b.name} 
                          className="rounded mb-1" 
                          style={{ width: '70px', height: '70px', objectFit: 'contain', background: '#f8f9fa', padding: '3px', border: '1px solid #e9ecef' }} 
                          onError={(e) => e.target.style.display = 'none'}
                        />
                      </div>
                    </a>
                  ))}
                </div>
                <div className="mt-3 pt-2 border-top">
                  <small className="text-white-50">View all on <a href={CREDLY_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="text-light">Credly</a></small>
                </div>
              </div>

              <div className="text-center mt-2">
                <a href="/assets/LloydBowar_2025_Resume.pdf" download="LloydBowar_Resume_2025.pdf" className="btn btn-primary">Download PDF</a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume