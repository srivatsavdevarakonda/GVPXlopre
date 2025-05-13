import React from 'react';
import { Link } from 'react-router-dom';
import './ClubMain.css'; // Import your CSS file

function ClubMain() {
  return (
    <div className="club-container">
      <h2 className="page-title">College Clubs</h2>
      
      <div className="club-section">
        <h3 className="section-title">Technical Clubs</h3>
        <div className="club-list">
          <Link to="/clubs/cs" className="club-item">Computer Science (CS)</Link>
          <Link to="/clubs/ieee" className="club-item">IEEE</Link>
          <Link to="/clubs/ds" className="club-item">Data Science (DS)</Link>
          <Link to="/clubs/aiml" className="club-item">Artificial Intelligence & Machine Learning (AIML)</Link>
        </div>
      </div>

      <div className="club-section">
        <h3 className="section-title">Social Clubs</h3>
        <div className="club-list">
          <Link to="/clubs/rotaract" className="club-item">Rotaract</Link>
          <Link to="/clubs/werforhelp" className="club-item">WeRForHelp</Link>
          <Link to="/clubs/nss" className="club-item">National Service Scheme (NSS)</Link>
        </div>
      </div>
    </div>
  );
}

export default ClubMain;
