const db = require('../../db/knex')

const getAll = () => {
  return (
    db('reviews')
  )
}

const getOne = (snackId, reviewId) => {
  return (
    db('reviews')
    .where({ snack_id: snackId, id: reviewId })
    .returning('*')
  )
}

const create = (snackId, userId, {title, text, rating}) => {
  return (
    db('reviews')
    .insert({title, text, rating, snack_id: snackId, user_id: userId})
    .returning('*')
  )
}

const modify = (snackId, reviewId, userId, {title, text, rating}) => {
  return (
    db('reviews')
    .where({ id: reviewId })
    .update({title, text, rating, snack_id: snackId, user_id: userId})
    .returning('*')
  )
}

const remove = (reviewId) => {
  return (
    db('reviews')
    .where({ id: reviewId })
    .first()
    .del()
    .returning('*')
  )
}


module.exports = { getAll, getOne, create, modify, remove}
