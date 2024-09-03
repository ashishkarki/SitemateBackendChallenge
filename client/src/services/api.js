import axios from 'axios'

const API_BASE_URL = 'http://localhost:8000/api/v1/issues'

export const createIssue = (issue) => axios.post(API_BASE_URL, issue)

export const getIssues = () => axios.get(API_BASE_URL)

export const updateIssue = (id, issue) =>
  axios.put(`${API_BASE_URL}/${id}`, issue)

export const deleteIssue = (id) => axios.delete(`${API_BASE_URL}/${id}`)
