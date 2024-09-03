const express = require('express')
const router = express.Router()

// api routes
router.get('/', (req, res) => {
  res.send('Hello from Sitemate Backend Challenge!!!')
})

router.get('/issues', (req, res) => {
  res.send('Here is a list of issues.')
})

// TODO add more

module.exports = router
