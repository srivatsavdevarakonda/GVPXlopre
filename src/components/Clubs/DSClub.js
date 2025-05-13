import React from 'react';
import './ClubMain.css';


function DSClub() {
  return (
    <div className="club-detail">
      <h2>Data Science Club</h2>
      <h3>Board Members</h3>
      <ul>
        <li>President: P. Meghana</li>
        <li>Vice President: L. Rahul</li>
        <li>Secretary: S. Pavan</li>
      </ul>

      <h3>Past Achievements</h3>
      <ul>
        <li>Data Science Symposium conducted in 2024</li>
        <li>Model selected for Zonal Expo</li>
      </ul>

      <h3>Upcoming Programs</h3>
      <ul>
        <li>DataViz Workshop - 30th May 2025</li>
        <li>Machine Learning Challenge - July 2025</li>
      </ul>
    </div>
  );
}

export default DSClub;