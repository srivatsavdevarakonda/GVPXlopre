import React from 'react';
import './MainContent.css'; // Make sure to create this CSS file

function MainContent() {
  return (
    <div className="main-content-container">
      <div className="content-section updates">
        <h2 className="section-title">Latest Updates</h2>
        <p className="section-description">
          Admissions Open 2025 | New Lab Inauguration | NAAC A++
        </p>
        <hr />
      </div>
      <div className="content-section events">
        <h3 className="section-title">Upcoming Events</h3>
        <ul className="events-list">
          <li className="event-item">Tech Fest 2025 - June 5</li>
          <li className="event-item">Workshop on AI - July 10</li>
          <li className="event-item">Hackathon 2025 - August 1</li>
        </ul>
      </div>
    </div>
  );
}

export default MainContent;
