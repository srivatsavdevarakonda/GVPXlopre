import React from 'react';
import './ClubMain.css';


function NSSClub() {
  return (
    <div className="club-detail">
      <h2>NSS Club</h2>
      <h3>Board Members</h3>
      <ul>
        <li>President: V. Satya</li>
        <li>Vice President: K. Alekhya</li>
        <li>Secretary: G. Sai Krishna</li>
      </ul>

      <h3>Past Achievements</h3>
      <ul>
        <li>7-day special camp at rural school</li>
        <li>COVID-19 Awareness Program</li>
      </ul>

      <h3>Upcoming Programs</h3>
      <ul>
        <li>Tree Plantation - June 2025</li>
        <li>Swachh Bharat Abhiyan - August 2025</li>
      </ul>
    </div>
  );
}

export default NSSClub;