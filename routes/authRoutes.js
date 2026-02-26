const express = require('express')
const router = express.Router()
const { register, login } = require('../controllers/authController')
const protect = require('../middleware/authMiddleware')

// Public routes
router.post('/register', register)
router.post('/login', login)

// Protected route
router.get('/profile', protect, (req, res) => {
  res.status(200).json({ 
    message: 'Protected route accessed successfully', 
    user: req.user 
  })
})

module.exports = router