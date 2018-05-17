const snacks = require('../data/snacks.json')
const TABLE_NAME = 'snacks'


exports.seed = function(knex, Promise) {
  return knex(TABLE_NAME).del()
    .then(() => {
      return knex(TABLE_NAME).insert(snacks.map((ele, id) => ({...ele, id: id+1})));
    })
    .then(() => {
      return knex.raw(
        `SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`
      )
    })
}
