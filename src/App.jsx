import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Resume from './components/Resume';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

// Hook to handle scrolling to hash on route change
function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    // Extract hash from location
    const hash = location.hash.replace('#', '');
    
    if (hash) {
      // Wait for DOM to render, then scroll to element
      const timer = setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToHash />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Landing />
              <About />
              <Projects />
              <Contact />
            </>
          } />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
