import React, { useState } from 'react'

function Consulting() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="w-100 py-4" style={{ background: '#ffe4ec' }}>
      <div className="container">
        <div className="card shadow-sm mx-auto" style={{ maxWidth: 1000, background: '#eafbe7' }}>
          <div className="card-body">
            <h2 className="mb-4">Consulting</h2>
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
              Need help with a tech challenge? Contact me for a free consultation!
            </div>
          </div>
        </div>
        <div className="card shadow-sm mx-auto" style={{ maxWidth: 600 }}>
          <div className="card-body text-center">
            <h2 className="mb-4">Contact</h2>
            {submitted ? (
              <p>Thank you for reaching out!</p>
            ) : (
              <form action="https://formspree.io/f/mzzgnwye" method="POST" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="form-control"
                    rows="5"
                  />
                </div>
                <button type="submit" className="btn btn-primary">Send</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Consulting