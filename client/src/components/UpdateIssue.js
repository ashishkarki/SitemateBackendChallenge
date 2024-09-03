import React, { useState } from 'react'
import { updateIssue } from '../services' // Assuming you have a service for API calls

function UpdateIssue() {
  const [issue, setIssue] = useState({ id: '', title: '', description: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    updateIssue(issue.id, issue)
      .then((response) => console.log('Issue Updated:', response.data))
      .catch((error) => console.error('Error updating issue:', error))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Update Issue</h2>
      <input
        type='text'
        placeholder='ID'
        value={issue.id}
        onChange={(e) => setIssue({ ...issue, id: e.target.value })}
      />
      <input
        type='text'
        placeholder='Title'
        value={issue.title}
        onChange={(e) => setIssue({ ...issue, title: e.target.value })}
      />
      <input
        type='text'
        placeholder='Description'
        value={issue.description}
        onChange={(e) => setIssue({ ...issue, description: e.target.value })}
      />
      <button type='submit'>Update Issue</button>
    </form>
  )
}

export default UpdateIssue
