import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm('mzzgnwye');

  return (
    <>
      <style>{`
          @keyframes fadeInBounce {
            0% { opacity: 0; transform: scale(0.3) translateY(-20px); }
            50% { opacity: 1; transform: scale(1.05) translateY(0); }
            100% { opacity: 1; transform: scale(1) translateY(0); }
          }
          @keyframes bounce {
            0% { transform: translateY(0); }
            100% { transform: translateY(-10px); }
          }
          .loading-form { opacity: 0.7; pointer-events: none; }
        `}
      </style>

      <section className="w-100 py-4" style={{ background: '#ffe4ec' }}>
        <div className="container">
          <div className="card shadow-sm mx-auto" style={{ maxWidth: 700, background: '#eafbe7' }}>
            <div className="card-body">
              <h2 className="mb-4">Contact</h2>

              {state.succeeded ? (
                <div
                  className="alert alert-success text-center"
                  aria-live="polite"
                  style={{ animation: 'fadeInBounce 0.8s ease-out', transform: 'scale(1)' }}
                >
                  <div className="mb-3">
                    <div
                      className="text-success"
                      style={{ fontSize: '3rem', animation: 'bounce 1s ease-in-out infinite alternate' }}
                    >
                      ✅
                    </div>
                  </div>
                  <h4 className="text-success">Thanks for reaching out!</h4>
                  <p className="mb-3">Your message has been sent successfully. I’ll reply soon.</p>
                  <button className="btn btn-primary mt-2" onClick={() => window.location.reload()}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={state.submitting ? 'loading-form' : ''}>
                  <div aria-live="polite" className="mb-2">
                    {state.errors?.length ? <small className="text-danger">Please fix the errors below.</small> : null}
                  </div>

                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    placeholder="Name"
                    autoComplete="name"
                    className="form-control mb-3"
                    disabled={state.submitting}
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />

                  <label htmlFor="email" className="form-label mt-3">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="Email"
                    autoComplete="email"
                    className="form-control mb-3"
                    disabled={state.submitting}
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />

                  <label htmlFor="message" className="form-label mt-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Please leave me a message"
                    autoComplete="off"
                    className="form-control mb-3"
                    disabled={state.submitting}
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />

                  <button type="submit" className="btn btn-primary mt-3" disabled={state.submitting}>
                    {state.submitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Sending...
                      </>
                    ) : (
                      'Send'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
