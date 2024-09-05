require('dotenv').config()

const express = require('express')
const path = require('path')
const fs = require('fs')
const PORT = process.env.PORT || 8000

const expressApp = express()

// middlewares
const cors = require('cors')
expressApp.use(cors({
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}))
expressApp.use(express.json())

// Serve static files from the React app if the build folder exists in the client directory
const buildPath = path.join(__dirname, '../../client/build')
if(fs.existsSync(buildPath)) {
  expressApp.use(express.static(buildPath))
}

// routes base path
expressApp.use('/api/v1', require('./routes'))

// Catch-all handler to serve React's index.html for any other routes
expressApp.get('*', (req, res) => {
  // res.sendFile(path.join(__dirname, '../../client/build', 'index.html'))
})

// start server
expressApp.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

module.exports = expressApp
