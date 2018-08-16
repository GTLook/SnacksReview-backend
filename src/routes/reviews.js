const express = require('express')
const router = express.Router()
const dataController = require('../controllers/reviews')
const authController = require('../controllers/auth')

// Basic CRUD Methods

router.get('/reviews/', dataController.getAll)
router.post('/snacks/:id/reviews/', authController.isAuthenticated, dataController.create)
router.put('/snacks/:id/reviews/:reviewId', authController.isAuthenticated, dataController.modify)
router.delete('/snacks/:id/reviews/:reviewId', authController.isAuthenticated, dataController.remove)

module.exports = router
