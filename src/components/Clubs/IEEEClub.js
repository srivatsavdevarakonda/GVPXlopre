import React from 'react';
import './ClubMain.css';

function IEEEClub() {
  return (
    <div className="club-detail">
      <h2>IEEE Club</h2>
      <h3>Board Members</h3>
      <ul>
        <li>President: M. Smith</li>
        <li>Vice President: L. Johnson</li>
        <li>Secretary: P. Raghav</li>
      </ul>

      <h3>Past Achievements</h3>
      <ul>
        <li>Organized IEEE Tech Summit 2024 with 500+ participants</li>
        <li>Winner of National Robotics Competition</li>
      </ul>

      <h3>Upcoming Programs</h3>
      <ul>
        <li>IEEE Tech Talk - 25th May 2025</li>
        <li>AI Workshop - July 2025</li>
      </ul>
    </div>
  );
}

export default IEEEClub;
