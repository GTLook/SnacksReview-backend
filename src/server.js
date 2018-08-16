// Initilize modules

const express = require('express')
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors')
const fs = require('fs')

const path = require('path');
const app = express();


app.disable('x-powered-by')
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())

if(process.env.NODE_ENV === 'development') app.use(morgan('dev'))
if(process.env.NODE_ENV !== 'production') require('dotenv').load()

// Routes

app.use('/api', require('./routes/snacks'))
app.use('/api', require('./routes/reviews'))
app.use('/auth', require('./routes/auth'))
app.use('/users', require('./routes/users'))

// Default Route

app.use((req, res, next) => next({status: 404, message: 'Route not found' }))

// Error Handling

app.use((err, req, res, next) => {
  console.error(err)
  const status = err.status || 500
  res.status(status).json({ error: err })
})

// Starting Server

const port = process.env.PORT || 5000

app.listen(port, () => {console.log(`Listening on port ${port}`)})

module.exports = app
