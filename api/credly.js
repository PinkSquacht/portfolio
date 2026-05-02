// Vercel serverless function to proxy Credly badge requests.
// Set CREDLY_API_TOKEN in your Vercel Project > Settings > Environment Variables.

export default async function handler(req, res) {
  const token = process.env.CREDLY_API_TOKEN
  if (!token) {
    res.status(500).json({ error: 'CREDLY_API_TOKEN not configured on server' })
    return
  }

  const username = req.query.username || req.query.user || ''
  if (!username) {
    res.status(400).json({ error: 'username query parameter required' })
    return
  }

  const url = `https://api.credly.com/v1/recipients/${encodeURIComponent(username)}/badges`

  try {
    const resp = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    })

    const body = await resp.text()
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET')
    res.setHeader('Content-Type', 'application/json')
    res.status(resp.status).send(body)
  } catch (err) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.status(500).json({ error: err.message })
  }
}
// Simple Vercel serverless proxy for Credly badges
// Expects a server-side env var `CREDLY_API_TOKEN` set in Vercel dashboard.
// This endpoint forwards the badges list to the client and adds CORS headers.

export default async function handler(req, res) {
  const token = process.env.CREDLY_API_TOKEN
  if (!token) {
    res.status(500).json({ error: 'CREDLY_API_TOKEN not configured on server' })
    return
  }

  const username = req.query.username || req.query.user || ''
  // If username not provided, return 400
  if (!username) {
    res.status(400).json({ error: 'username query parameter required' })
    return
  }

  const url = `https://api.credly.com/v1/recipients/${encodeURIComponent(username)}/badges`

  try {
    const resp = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    })

    const body = await resp.text()
    // Mirror status
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET')
    res.setHeader('Content-Type', 'application/json')
    res.status(resp.status).send(body)
  } catch (err) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.status(500).json({ error: err.message })
  }
}
