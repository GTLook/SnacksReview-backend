const db = require('../../db/knex')

const getAll = () => {
  return db('snacks')
}

module.exports = { getAll }
