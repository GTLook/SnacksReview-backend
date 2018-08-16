const dataModel = require('../models/snacks')

// Basic CRUD Methods

const getAll = (req, res, next) => {
  dataModel.getAll()
  .then((data) => res.status(200).json({ data }))
  .catch(next)
}

module.exports = { getAll }
