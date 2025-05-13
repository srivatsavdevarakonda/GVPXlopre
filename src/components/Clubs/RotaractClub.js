import React from 'react';
import './ClubMain.css';


function RotaractClub() {
  return (
    <div className="club-detail">
      <h2>Rotaract Club</h2>
      <h3>Board Members</h3>
      <ul>
        <li>President: Y. Kiran</li>
        <li>Vice President: M. Ramya</li>
        <li>Secretary: A. Manas</li>
      </ul>

      <h3>Past Achievements</h3>
      <ul>
        <li>Blood donation camps organized</li>
        <li>Clean Vizag Campaign</li>
      </ul>

      <h3>Upcoming Programs</h3>
      <ul>
        <li>Green Drive - June 2025</li>
        <li>Social Awareness Rally - August 2025</li>
      </ul>
    </div>
  );
}

export default RotaractClub;