// LeftSidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import './LeftSidebar.css';

function LeftSidebar() {
  return (
    <aside className="left-sidebar">
      <img src={logo} alt="Logo" className="sidebar-logo" />
      <nav className="sidebar-links">
        <Link to="/administration">Administration</Link>
        <Link to="/regulation-syllabi" className="sidebar-link">Regulations</Link>
        <Link to="/departments">Department Details</Link>
        <Link to="/faculty" className="sidebar-link">Faculty</Link>
        <Link to="/library">Library</Link>
        <Link to="/clubs">Clubs</Link>
      </nav>
    </aside>
  );
}

export default LeftSidebar;
