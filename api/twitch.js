export default async function handler(req, res) {
  // Get App Access Token from environment variable (recommended for security)
  const accessToken = (typeof process !== 'undefined' && process.env && process.env.TWITCH_APP_TOKEN)
    ? process.env.TWITCH_APP_TOKEN
    : ''; // fallback or throw error if not set
  const clientId = '7o4ipezcpllt8i60uy7sr5xsx9cy5f';

  // Check if we have the required token
  if (!accessToken) {
    return res.status(500).json({ 
      error: 'TWITCH_APP_TOKEN environment variable not set',
      message: 'Please configure your Twitch API credentials'
    });
  }

  // Determine which endpoint to call based on query param
  const { type } = req.query;
  let twitchUrl = '';
  if (type === 'videos') {
    twitchUrl = 'https://api.twitch.tv/helix/videos?user_id=443228723&type=archive&first=5';
  } else {
    twitchUrl = 'https://api.twitch.tv/helix/streams?user_login=PinkSquatch';
  }

  try {
    const response = await fetch(twitchUrl, {
      headers: {
        'Client-ID': clientId,
        'Authorization': `Bearer ${accessToken}`,
        'Accept': 'application/json',
      },
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      console.error('Twitch API error:', data);
      return res.status(response.status).json({
        error: 'Twitch API error',
        message: data.message || 'Unknown error from Twitch API',
        details: data
      });
    }
    
    res.status(200).json(data);
  } catch (error) {
    console.error('API handler error:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
}
