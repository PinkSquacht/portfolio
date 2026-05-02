import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark site-navbar sticky-top">
      <div className="container-fluid">
        {/* Brand and primary navigation links. */}
        <Link className="navbar-brand fw-semibold letter-spaced" to="/">Lloyd Bowar</Link>
        <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1" aria-controls="navcol-1" aria-expanded="false" aria-label="Toggle navigation">
          <span className="visually-hidden">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navcol-1">
          <ul className="navbar-nav align-items-md-center gap-md-2">
            <li className="nav-item"><Link className="nav-link" to="/#about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/#projects">Projects</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/#contact">Contact</Link></li>
            <li className="nav-item ms-md-2"><Link className="nav-link nav-link-cta" to="/resume">Resume</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar