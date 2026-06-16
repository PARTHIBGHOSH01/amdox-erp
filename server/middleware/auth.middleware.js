const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {

  // 1. Get the token from the request header
  // Frontend sends it as:  Authorization: Bearer eyJhbGci...
  const authHeader = req.headers['authorization']

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ msg: 'No token. Access denied.' })
  }

  const token = authHeader.split(' ')[1]

  // 2. Verify the token using your JWT_SECRET
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    // 3. Attach the decoded user info to the request object
    // Now any route that uses this middleware can access req.user
    req.user = decoded

    // 4. Move on to the actual route handler
    next()

  } catch (err) {
    return res.status(401).json({ msg: 'Token is invalid or expired.' })
  }
}

module.exports = authMiddleware