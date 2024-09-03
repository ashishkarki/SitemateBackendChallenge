const express = require('express')
const router = express.Router()
const { SAMPLE_ISSUE } = require('../utils')

// api routes
router.get('/', (req, res) => {
  res.send('Hello from Sitemate Backend Challenge!!!')
})

// 1. Create: accepts a JSON object & prints/logs the object
router.post('/issues', (req, res) => {
  const newIssue = req.body
  console.log('Created Issue:', newIssue) // Log the issue
  res.status(201).send(newIssue) // Respond with the created issue
})

// 2. Read: returns a static JSON object
router.get('/issues', (req, res) => {
  res.status(200).send(SAMPLE_ISSUE) // Use the imported SAMPLE_ISSUE
})

// 3. Update: accepts a JSON object & prints/logs the object
router.put('/issues/:id', (req, res) => {
  const updatedIssue = req.body
  console.log('Updated Issue:', updatedIssue) // Log the updated issue
  res.status(200).send(updatedIssue) // Respond with the updated issue
})

// 4. Delete: prints/logs out the object or id to delete
router.delete('/issues/:id', (req, res) => {
  const issueId = req.params.id
  console.log('Deleted Issue ID:', issueId) // Log the ID of the issue to delete
  res.status(200).send(`Issue with ID ${issueId} deleted`) // Respond with a delete confirmation
})

module.exports = router
