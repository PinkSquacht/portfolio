import React from 'react'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md bg-success-subtle bg-gradient">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img src="/assets/img/PinkSquatch.png" width="62" height="60" alt="Logo" />Lloyd Bowar</a>
        <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1">
          <span className="visually-hidden">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link active" href="#">First Item</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Second Item</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Third Item</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar