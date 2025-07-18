import React, { useEffect, useState } from 'react'

function Twitch() {
  const [streamInfo, setStreamInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [videos, setVideos] = useState([]);
  const [videosLoading, setVideosLoading] = useState(true);
  const [videosError, setVideosError] = useState(null);

  useEffect(() => {
    const fetchStream = async () => {
      try {
        const response = await fetch('/api/twitch?type=stream');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const text = await response.text();
        console.log('Stream response:', text);
        
        try {
          const data = JSON.parse(text);
          setStreamInfo(data.data[0] || null);
        } catch (parseError) {
          console.error('JSON parse error:', parseError);
          console.error('Response text:', text);
          throw new Error('Invalid JSON response from server');
        }
      } catch (err) {
        console.error('Stream fetch error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchStream();
  }, []);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('/api/twitch?type=videos');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const text = await response.text();
        console.log('Videos response:', text);
        
        try {
          const data = JSON.parse(text);
          setVideos(data.data || []);
        } catch (parseError) {
          console.error('JSON parse error:', parseError);
          console.error('Response text:', text);
          throw new Error('Invalid JSON response from server');
        }
      } catch (err) {
        console.error('Videos fetch error:', err);
        setVideosError(err.message);
      } finally {
        setVideosLoading(false);
      }
    };
    fetchVideos();
  }, []);

  return (
    <section
      className="w-100 py-4"
      style={{
        backgroundImage: "url('/assets/img/twitchBackground.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        width: '100%'
      }}
    >
      <div className="container">
        <div className="card shadow-sm mx-auto " style={{ maxWidth: 1000, background: '#eafbe7'}}>
          <div className="card-body">
            <h2 className="mb-4">Watch My Twitch Stream</h2>
            {loading ? (
              <div className="text-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-2">Loading stream info...</p>
              </div>
            ) : error ? (
              <div className="alert alert-warning">
                <h5>🔧 API Configuration Needed</h5>
                <p>The Twitch API is not configured yet. To show live stream status:</p>
                <ol>
                  <li>Go to <a href="https://dev.twitch.tv/console/apps" target="_blank" rel="noopener noreferrer">Twitch Developer Console</a></li>
                  <li>Create an app and get your App Access Token</li>
                  <li>Add <code>TWITCH_APP_TOKEN=your_token_here</code> to your <code>.env.local</code> file</li>
                </ol>
                <small className="text-muted">Error: {error}</small>
              </div>
            ) : streamInfo ? (
              <div className="mb-3">
                <span className="badge bg-success me-2">Live</span>
                <span className="fw-bold">{streamInfo.title}</span>
                <br />
                <span>Viewers: {streamInfo.viewer_count}</span>
                <br />
                <span>Game: {streamInfo.game_name}</span>
              </div>
            ) : (
              <div className="mb-3">
                <span className="badge bg-secondary">Offline</span>
                <span className="fw-bold ms-2">PinkSquacht is not live right now.</span>
              </div>
            )}
            <div className="ratio ratio-16x9 mb-4">
              <iframe
                src="https://player.twitch.tv/?channel=PinkSquatch&parent=lloydbowar.vercel.app"
                frameBorder="0"
                allowFullScreen
                scrolling="no"
                height="480"
                width="100%"
                title="Twitch Stream"
              ></iframe>
            </div>
            <div className="ratio ratio-16x9 mb-4">
              <iframe
                src="https://www.twitch.tv/embed/PinkSquatch/chat?parent=lloydbowar.vercel.app"
                frameBorder="0"
                scrolling="no"
                height="480"
                width="100%"
                title="Twitch Chat"
              ></iframe>
            </div>
            <h3 className="mt-5 mb-3">Past Streams</h3>
            {videosLoading ? (
              <div className="text-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-2">Loading past streams...</p>
              </div>
            ) : videosError ? (
              <div className="alert alert-warning">
                <h5>🔧 API Configuration Needed</h5>
                <p>Past streams will show here once the Twitch API is configured.</p>
                <small className="text-muted">Error: {videosError}</small>
              </div>
            ) : videos.length > 0 ? (
              <div className="row justify-content-center">
                {videos.map(video => (
                  <div key={video.id} className="col-md-6 mb-4">
                    <div className="card h-100">
                      <div className="card-body">
                        <h5 className="card-title">{video.title}</h5>
                        <p className="card-text">{new Date(video.created_at).toLocaleString()}</p>
                        <a href={video.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">Watch Replay</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>No past streams found.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Twitch