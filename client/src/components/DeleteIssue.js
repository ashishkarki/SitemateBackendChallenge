import React, { useState } from 'react'
import { deleteIssue } from '../services' // Assuming you have a service for API calls

function DeleteIssue() {
  const [id, setId] = useState('')

  const handleDelete = () => {
    deleteIssue(id)
      .then((response) => console.log('Issue Deleted:', response.data))
      .catch((error) => console.error('Error deleting issue:', error))
  }

  return (
    <div>
      <h2>Delete Issue</h2>
      <input
        type='text'
        placeholder='ID'
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={handleDelete}>Delete Issue</button>
    </div>
  )
}

export default DeleteIssue
