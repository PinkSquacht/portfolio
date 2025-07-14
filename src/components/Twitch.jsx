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
        const response = await fetch(
          'https://api.twitch.tv/helix/streams?user_login=PinkSquacht',
          {
            headers: {
              'Client-ID': '7o4ipezcpllt8i60uy7sr5xsx9cy5f',
              'Accept': 'application/json',
            },
          }
        );
        if (!response.ok) throw new Error('Failed to fetch stream info');
        const data = await response.json();
        setStreamInfo(data.data[0] || null);
      } catch (err) {
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
        const response = await fetch(
          'https://api.twitch.tv/helix/videos?user_id=443228723&type=archive&first=5',
          {
            headers: {
              'Client-ID': '7o4ipezcpllt8i60uy7sr5xsx9cy5f',
              'Accept': 'application/json',
            },
          }
        );
        if (!response.ok) throw new Error('Failed to fetch past streams');
        const data = await response.json();
        setVideos(data.data || []);
      } catch (err) {
        setVideosError(err.message);
      } finally {
        setVideosLoading(false);
      }
    };
    // PinkSquacht's user_id is 443228723 (replace if needed)
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
              <p>Loading stream info...</p>
            ) : error ? (
              <div className="alert alert-danger">{error}</div>
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
                src="https://player.twitch.tv/?channel=PinkSquacht&parent=lloydbowar.vercel.app"
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
                src="https://www.twitch.tv/embed/PinkSquacht/chat?parent=lloydbowar.vercel.app"
                frameBorder="0"
                scrolling="no"
                height="480"
                width="100%"
                title="Twitch Chat"
              ></iframe>
            </div>
            <h3 className="mt-5 mb-3">Past Streams</h3>
            {videosLoading ? (
              <p>Loading past streams...</p>
            ) : videosError ? (
              <div className="alert alert-danger">{videosError}</div>
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