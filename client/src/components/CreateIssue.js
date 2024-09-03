import React, { useState } from 'react'
import { createIssue } from '../services/api'

function CreateIssue() {
  const [issue, setIssue] = useState({ title: '', description: '' })

  const handleSubmit = (e) => {
    e.preventDefault()

    createIssue(issue)
      .then((response) => console.log('Issue Created:', response.data))
      .catch((error) => console.error('Error:', error))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Issue</h2>
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
      <button type='submit'>Create</button>
    </form>
  )
}

export default CreateIssue
