import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import './RightSidebar.css';

function RightSidebar() {
  return (
    <aside className="right-sidebar">
      <img src={logo} alt="Logo" className="sidebar-logo" />
      <nav className="sidebar-links">
        <Link to="/academic-calendar">Academic Calendars</Link>
        <Link to="/exams">Timetables</Link>
        <Link to="/fees">Fee Payments</Link>
        <Link to="/hostel">Hostel Details</Link>
      </nav>
    </aside>
  );
}

export default RightSidebar;