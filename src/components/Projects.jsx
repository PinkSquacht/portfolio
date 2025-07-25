import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Replace 'your-github-username' with your actual GitHub username
  const GITHUB_USERNAME = 'PinkSquacht';

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=10`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        
        const data = await response.json();
        // Filter out forked repos and sort by stars
        const filteredRepos = data
          .filter(repo => !repo.fork)
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

  if (loading) {
    return (
      <section className="w-100 py-4" style={{ background: '#ffe4ec' }}>
        <div className="container">
          <div className="card shadow-sm mx-auto" style={{ maxWidth: 1000, background: '#eafbe7' }}>
            <div className="card-body">
              <h2 className="mb-4">Projects</h2>
              <div className="text-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="w-100 py-4" style={{ background: '#ffe4ec' }}>
        <div className="container">
          <div className="card shadow-sm mx-auto" style={{ maxWidth: 1000, background: '#eafbe7' }}>
            <div className="card-body">
              <h2 className="mb-4">Projects</h2>
              <div className="alert alert-danger" role="alert">
                Error loading projects: {error}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-100 py-4" style={{ background: '#ffe4ec' }}>
      <div className="container">
        <div className="card shadow-sm mx-auto" style={{ maxWidth: 1000, background: '#eafbe7' }}>
          <div className="card-body">
            <h2 className="mb-4">Projects</h2>
            <div className="row">
              {repos.map(repo => (
                <div key={repo.id} className="col-md-6 col-lg-4 mb-4">
                  <div className="card h-100">
                    <div className="card-body">
                      <h5 className="card-title">
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                          {repo.name}
                        </a>
                      </h5>
                      <p className="card-text">
                        {repo.description || 'No description available'}
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          {repo.language && (
                            <span className="badge bg-primary me-2">{repo.language}</span>
                          )}
                          <small className="text-muted">
                            <i className="bi bi-star"></i> {repo.stargazers_count}
                          </small>
                        </div>
                        <small className="text-muted">
                          Updated: {new Date(repo.updated_at).toLocaleDateString()}
                        </small>
                      </div>
                    </div>
                    <div className="card-footer">
                      <div className="d-flex justify-content-between">
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm">
                          View Code
                        </a>
                        {repo.homepage && (
                          <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="btn btn-outline-success btn-sm">
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {repos.length === 0 && (
              <div className="text-center">
                <p className="lead">No repositories found.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
