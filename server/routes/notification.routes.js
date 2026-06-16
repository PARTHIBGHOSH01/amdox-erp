const router       = require('express').Router()
const Notification = require('../models/Notification')
const auth         = require('../middleware/auth.middleware')

// GET /api/notifications — get all notifications for logged-in user
router.get('/', auth, async (req, res) => {
  try {
    const notifications = await Notification.find({ userId: req.user.id })
      .sort({ createdAt: -1 })
    res.json(notifications)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
})

// PATCH /api/notifications/:id/read — mark one as read
router.patch('/:id/read', auth, async (req, res) => {
  try {
    const notification = await Notification.findByIdAndUpdate(
      req.params.id,
      { isRead: true },
      { new: true }
    )
    res.json(notification)
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
})

// PATCH /api/notifications/read-all — mark all as read
router.patch('/read-all', auth, async (req, res) => {
  try {
    await Notification.updateMany({ userId: req.user.id }, { isRead: true })
    res.json({ msg: 'All notifications marked as read' })
  } catch (err) {
    res.status(500).json({ msg: err.message })
  }
})

module.exports = router