const express = require('express')
const router = express.Router()
const dataController = require('../controllers/snacks')

// Basic CRUD Methods

router.get('/snacks', dataController.getAll)

module.exports = router
