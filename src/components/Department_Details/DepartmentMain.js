import React from 'react';
import { Link } from 'react-router-dom';
import './DepartmentMain.css';

function DepartmentMain() {
  return (
    <div className="department-main-container">
      <h1>Department Details</h1>
      <ul className="department-list">
        <li><Link to="/departments/chemical">Chemical Engineering</Link></li>
        <li><Link to="/departments/civil">Civil Engineering</Link></li>
        <li><Link to="/departments/computer">Computer Science and Engineering</Link></li>
        <li><Link to="/departments/ece">Electronics and Communication Engineering</Link></li>


      </ul>
      
    </div>
  );
}

export default DepartmentMain;
