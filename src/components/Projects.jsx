import React from 'react';
import styles from './Projects.module.css';

const Projects = () => (
  <section className={styles.projects}>
    <h2>Projects</h2>
    <ul>
      <li>
        <strong>Project One:</strong> A modern web app built with React.
      </li>
      <li>
        <strong>Project Two:</strong> An innovative solution using Vite and modern tooling.
      </li>
    </ul>
  </section>
);

export default Projects;
