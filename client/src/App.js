import './styles/index.css'

import CreateIssue from './components/CreateIssue'
import ReadIssues from './components/ReadIssues'
import UpdateIssue from './components/UpdateIssue'
import DeleteIssue from './components/DeleteIssue'

function App() {
  return (
    <div>
      <h1>Issue Tracker</h1>
      <CreateIssue />
      <ReadIssues />
      <UpdateIssue />
      <DeleteIssue />
    </div>
  )
}

export default App
