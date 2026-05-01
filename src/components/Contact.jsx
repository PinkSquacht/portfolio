import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm('mzzgnwye');

  return (
    <section id="contact" className="content-section">
        <div className="container section-shell">
          {/* Contact heading: update the wording if you want a more casual or more formal tone. */}
          <div className="section-heading text-center text-lg-start">
            <div className="eyebrow mb-2">Contact</div>
            <h2 className="section-title mb-0">Let’s talk about your next project.</h2>
          </div>
          {/* This card holds both the form and the success state after submit. */}
          <div className="contact-panel mx-auto">
            {state.succeeded ? (
              <div className="alert alert-success text-center mb-0" aria-live="polite">
                <h4 className="alert-heading">Thanks for reaching out.</h4>
                <p className="mb-0">Your message has been sent successfully. I’ll reply as soon as I can.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={state.submitting ? 'loading-form' : ''}>
                <div className="row g-3">
                  <div className="col-12">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      autoComplete="name"
                      className="form-control form-control-lg"
                      disabled={state.submitting}
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                  </div>

                  <div className="col-12">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      autoComplete="email"
                      className="form-control form-control-lg"
                      disabled={state.submitting}
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>

                  <div className="col-12">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Tell me a bit about what you need help with"
                      autoComplete="off"
                      className="form-control form-control-lg"
                      disabled={state.submitting}
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>

                  <div className="col-12 d-flex align-items-center justify-content-between flex-wrap gap-3 pt-2">
                    <p className="text-secondary mb-0">Form submissions are handled securely through Formspree.</p>
                    <button type="submit" className="btn btn-primary btn-lg" disabled={state.submitting}>
                      {state.submitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
  );
}

export default Contact;
