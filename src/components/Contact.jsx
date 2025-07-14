import React, { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    const formData = new FormData(e.target);
    
    try {
      const response = await fetch('https://formspree.io/f/mzzgnwye', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setSubmitted(true);
        e.target.reset(); // Reset the form
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error sending your message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <style>
        {`
          @keyframes fadeInBounce {
            0% {
              opacity: 0;
              transform: scale(0.3) translateY(-20px);
            }
            50% {
              opacity: 1;
              transform: scale(1.05) translateY(0);
            }
            100% {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }
          
          @keyframes bounce {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-10px);
            }
          }
          
          .loading-form {
            opacity: 0.7;
            pointer-events: none;
          }
        `}
      </style>
      <section className="w-100 py-4" style={{ background: '#ffe4ec' }}>
        <div className="container">
          <div className="card shadow-sm mx-auto" style={{ maxWidth: 700, background: '#eafbe7' }}>
            <div className="card-body">
              <h2 className="mb-4">Contact</h2>
            {submitted ? (
              <div 
                className="alert alert-success text-center"
                style={{
                  animation: 'fadeInBounce 0.8s ease-out',
                  transform: 'scale(1)',
                }}
              >
                <div className="mb-3">
                  <div 
                    className="text-success" 
                    style={{ 
                      fontSize: '3rem',
                      animation: 'bounce 1s ease-in-out infinite alternate'
                    }}
                  >
                    ✅
                  </div>
                </div>
                <h4 className="text-success">Thank you for reaching out!</h4>
                <p className="mb-3">Your message has been sent successfully. I'll get back to you soon.</p>
                <button 
                  className="btn btn-primary mt-2" 
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={isLoading ? 'loading-form' : ''}>
                <div className="mb-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="form-control"
                    disabled={isLoading}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="form-control"
                    disabled={isLoading}
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    className="form-control"
                    rows="5"
                    disabled={isLoading}
                  />
                </div>
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={isLoading}
                >
                  {isLoading ? (
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
};

export default Contact;
