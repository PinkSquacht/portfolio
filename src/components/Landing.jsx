import React from 'react';
import Navbar from './Navbar';
const Landing = () => (
  <div>
    <Navbar />
    <div className="bg-info-subtle bg-gradient w-100 py-4">
      <div className="container text-center text-light-emphasis">
        <h1 className="text-center">
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
); 

export default Landing;
