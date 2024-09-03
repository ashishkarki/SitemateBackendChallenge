require('dotenv').config()

const express = require('express')
const PORT = process.env.PORT || 3000

const expressApp = express()

// middlewares
expressApp.use(express.json())

// routes base path
expressApp.use('/api/v1', require('./routes'))

// start server
expressApp.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

module.exports = expressApp
