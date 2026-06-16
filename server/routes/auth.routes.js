const router  = require('express').Router()
const bcrypt  = require('bcryptjs')
const jwt     = require('jsonwebtoken')
const User    = require('../models/User')

// ── REGISTER ──────────────────────────────────────────────────
// POST /api/auth/register
// Body: { name, email, password, role }
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, role } = req.body

    // 1. Check all fields are provided
    if (!name || !email || !password) {
      return res.status(400).json({ msg: 'Please fill all fields' })
    }

    // 2. Check if user with this email already exists
    const existing = await User.findOne({ email })
    if (existing) {
      return res.status(400).json({ msg: 'Email already registered' })
    }

    // 3. Hash the password (never save plain text password)
    const salt   = await bcrypt.genSalt(10)
    const hashed = await bcrypt.hash(password, salt)

    // 4. Save new user to database
    const user = await User.create({
      name,
      email,
      password: hashed,
      role: role || 'employee'
    })

    // 5. Return success
    res.status(201).json({
      msg: 'User registered successfully',
      userId: user._id
    })

  } catch (err) {
    console.error(err)
    res.status(500).json({ msg: 'Server error: ' + err.message })
  }
})

// ── LOGIN ─────────────────────────────────────────────────────
// POST /api/auth/login
// Body: { email, password }
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    // 1. Check fields provided
    if (!email || !password) {
      return res.status(400).json({ msg: 'Please enter email and password' })
    }

    // 2. Find user by email
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({ msg: 'Invalid email or password' })
    }

    // 3. Compare the entered password with the hashed one in DB
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid email or password' })
    }

    // 4. Create a JWT token valid for 7 days
    const token = jwt.sign(
      { id: user._id, role: user.role, name: user.name },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    )

    // 5. Send back the token and basic user info
    res.json({
      msg: 'Login successful',
      token,
      user: {
        id:   user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    })

  } catch (err) {
    console.error(err)
    res.status(500).json({ msg: 'Server error: ' + err.message })
  }
})

// ── GET CURRENT USER ──────────────────────────────────────────
// GET /api/auth/me  (protected — needs token)
const auth = require('../middleware/auth.middleware')
router.get('/me', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password')
    res.json(user)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
})

module.exports = router