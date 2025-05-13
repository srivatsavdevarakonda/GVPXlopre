import React from 'react';
import './ClubMain.css';


function AIMLClub() {
  return (
    <div className="club-detail">
      <h2>AI/ML Club</h2>
      <h3>Board Members</h3>
      <ul>
        <li>President: J. Dinesh</li>
        <li>Vice President: T. Priya</li>
        <li>Secretary: K. Arjun</li>
      </ul>

      <h3>Past Achievements</h3>
      <ul>
        <li>AI Conference participation at IIIT-H</li>
        <li>Internal Kaggle Contest Winner</li>
      </ul>

      <h3>Upcoming Programs</h3>
      <ul>
        <li>Neural Network Bootcamp - June 2025</li>
        <li>AI in Healthcare Webinar - July 2025</li>
      </ul>
    </div>
  );
}

export default AIMLClub;