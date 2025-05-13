import React from 'react';
import './ClubMain.css';  

function CSClub() {
  return (
    <div className="club-detail">
      <h2>Computer Science Club</h2>
      <h3>Board Members</h3>
      <ul>
        <li>President: A. Sandeep</li>
        <li>Vice President: B. Kavya</li>
        <li>Secretary: R. Teja</li>
      </ul>

      <h3>Past Achievements</h3>
      <ul>
        <li>Organized TechTalks 2024 with 300+ participants</li>
        <li>Hackathon Winner at National Level</li>
      </ul>

      <h3>Upcoming Programs</h3>
      <ul>
        <li>CodeMania - 15th May 2025</li>
        <li>Web Dev Bootcamp - June 2025</li>
      </ul>
    </div>
  );
}

export default CSClub;
