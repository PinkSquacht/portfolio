import React, { useEffect, useState } from 'react';

const GITHUB_USERNAME = 'PinkSquacht';

/* Live demo URLs for each featured project. */
const demoLinks = {
  WatchBuddy: 'https://watch-buddy.vercel.app',
  portfolio: 'https://lloydbowar.dev',
  'Ecommerce-Templates-Site': 'https://ecommercetemplatessite.vercel.app',
};

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    /* Fetch GitHub repos once on mount so the project list stays live. */
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=10`);

        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }

        const data = await response.json();
        /* Only show these 3 featured projects on the portfolio. */
        const featuredProjectNames = ['WatchBuddy', 'portfolio', 'Ecommerce-Templates-Site'];
        const filteredRepos = data
          .filter((repo) => featuredProjectNames.includes(repo.name))
          .sort((a, b) => b.stargazers_count - a.stargazers_count);

        setRepos(filteredRepos);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="projects" className="content-section">
      <div className="container section-shell">
        {/* This heading frames the live repo section. */}
        <div className="section-heading">
          <div className="eyebrow mb-2">Projects</div>
          <h2 className="section-title mb-0">Selected work and live repositories.</h2>
        </div>

        {/* Switches between loading, error, and the actual cards. */}
        <div className="content-panel">
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : error ? (
            <div className="alert alert-danger mb-0" role="alert">
              Error loading projects: {error}
            </div>
          ) : repos.length > 0 ? (
            <div className="row g-4">
              {repos.map((repo) => (
                <div key={repo.id} className="col-md-6 col-lg-4">
                  {/* Each card can be restyled independently if you later feature a specific project. */}
                  <div className="project-card h-100">
                    <div className="project-card-body">
                      <h5 className="project-card-title">
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                          {repo.name}
                        </a>
                      </h5>
                      <p className="project-card-text">{repo.description || 'No description available'}</p>
                      <div className="d-flex justify-content-between align-items-center gap-3 mt-auto pt-3 border-top">
                        <div className="d-flex flex-wrap align-items-center gap-2">
                          {repo.language && <span className="badge rounded-pill text-bg-light border">{repo.language}</span>}
                          <small className="text-secondary">Stars: {repo.stargazers_count}</small>
                        </div>
                        <small className="text-secondary text-nowrap">Updated {new Date(repo.updated_at).toLocaleDateString()}</small>
                      </div>
                      {/* Demo and source code links. */}
                      <div className="d-flex gap-2 mt-3">
                        {demoLinks[repo.name] && (
                          <a href={demoLinks[repo.name]} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary flex-grow-1">
                            View Live
                          </a>
                        )}
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary flex-grow-1">
                          Source Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-4">
              <p className="lead mb-0">No repositories found.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
