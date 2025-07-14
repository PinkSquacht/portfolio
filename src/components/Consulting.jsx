import React from 'react'
import Contact from './Contact'


function Consulting() {
  return (
    <section className="bg-light w-100 py-4">
      <div className="container">
        <div className="card shadow mx-auto" style={{ maxWidth: 800 }}>
          <div className="card-body">
            <h1 className="mb-4 text-center">Consulting</h1>
            <p className="lead text-center mb-4">
              I help individuals and small businesses navigate technology with confidence.
            </p>
            <section className="mb-4">
              <h2 className="h5 border-bottom pb-2">What I Offer</h2>
              <ul>
                <li>Step-by-step guides for setting up and using essential tools (e.g., password managers, cloud storage).</li>
                <li>Advice on securing data, devices, and internet connections.</li>
                <li>Recommendations for digital organization and productivity.</li>
                <li>Clear, patient explanations for non-technical users.</li>
                <li>Ongoing support for troubleshooting and tech questions.</li>
              </ul>
            </section>
            <section className="mb-4">
              <h2 className="h5 border-bottom pb-2">Example Consulting Topics</h2>
              <ul>
                <li>Choosing and setting up a password manager</li>
                <li>Improving Wi-Fi security and home network setup</li>
                <li>Backing up important files and data</li>
                <li>Protecting against phishing and online scams</li>
                <li>Best practices for device and account security</li>
              </ul>
            </section>
            <div className="alert alert-info text-center">
              Need help with a tech challenge? <a href="/contact" className="alert-link">Contact me</a> for a free consultation!
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </section>
  )
}

export default Consulting