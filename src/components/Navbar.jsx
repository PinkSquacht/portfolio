import React from 'react'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark site-navbar sticky-top">
      <div className="container-fluid">
        {/* Brand and primary navigation links. */}
        <a className="navbar-brand fw-semibold letter-spaced" href="/">Lloyd Bowar</a>
        <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1" aria-controls="navcol-1" aria-expanded="false" aria-label="Toggle navigation">
          <span className="visually-hidden">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navcol-1">
          <ul className="navbar-nav align-items-md-center gap-md-2">
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            <li className="nav-item ms-md-2"><a className="nav-link nav-link-cta" href="/resume">Resume</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar