import React, { useState, useEffect } from 'react'
import { getIssues } from '../services' // Assuming you have a service for API calls

function ReadIssues() {
  const [issues, setIssues] = useState([])

  useEffect(() => {
    getIssues()
      .then((response) => setIssues(response.data))
      .catch((error) => console.error('Error fetching issues:', error))
  }, [])

  return (
    <div>
      <h2>Issues List</h2>
      <ul>
        {issues.map((issue) => (
          <li key={issue.id}>
            <strong>{issue.title}</strong>: {issue.description}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ReadIssues
