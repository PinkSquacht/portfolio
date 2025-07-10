import React from 'react';
import Navbar from './Navbar';
const Landing = () => (
  <div className="text-center text-light-emphasis">
    <Navbar />
    <div className="container">
      <div className="row">
        <div className="col col-sm-12 offset-sm-0 fst-italic bg-info-subtle bg-gradient m-auto" style={{ textAlign: "center" }}>
          <h1 className="text-center">
            <img src="/assets/img/PinkSquatch.png" width="110" height="98" alt="Logo" />
            Welcome to my Portfolio
          </h1>
          <p>
            <br />
            <strong>Hi, I’m Lloyd — a certified full stack developer and tech support professional.</strong>
            <br />
            Currently at Leviton, I bring hands-on experience in problem-solving combined with strong coding skills in Python, JavaScript, SQL, Node.js, React, TypeScript, and Flask.
            <br />
            I’m passionate about building efficient, scalable web applications and continuously growing my expertise in software development.
            <br /><br />
          </p>
          <button className="btn btn-primary h-auto overflow-auto" type="button">See My Work</button>
        </div>
      </div>
    </div>
  </div>
);

export default Landing;
