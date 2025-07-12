import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {

  return (
    <>
      <Landing />
      <About />
      <Projects />
      <Contact />
    </>
  )
}

export default App
