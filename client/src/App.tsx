import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import CreateIssue from './components/CreateIssue';
import ReadIssues from './components/ReadIssues';
import UpdateIssue from './components/UpdateIssue';
import DeleteIssue from './components/DeleteIssue';

import './styles/index.css';

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <div className="container">
          <h1>Issue Tracker</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/create">Create Issue</Link></li>
              <li><Link to="/read">View Issues</Link></li>
              <li><Link to="/update">Update Issue</Link></li>
              <li><Link to="/delete">Delete Issue</Link></li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<h2>Welcome to Issue tracker!!</h2>} />
            <Route path="/create" element={<CreateIssue />} />
            <Route path="/read" element={<ReadIssues />} />
            <Route path="/update" element={<UpdateIssue />} />
            <Route path="/delete" element={<DeleteIssue />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
