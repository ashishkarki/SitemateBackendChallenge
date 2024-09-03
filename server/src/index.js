require('dotenv').config()

const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 8000

const expressApp = express()

// middlewares
expressApp.use(express.json())

// Serve static files from the React app
expressApp.use(express.static(path.join(__dirname, '../../client/build')))

// routes base path
expressApp.use('/api/v1', require('./routes'))

// Catch-all handler to serve React's index.html for any other routes
expressApp.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build', 'index.html'))
})

// start server
expressApp.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

module.exports = expressApp
