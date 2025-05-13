import React from 'react';
import './Header.css'; // Ensure this file exists in same folder
import logo from '../logo.png'; // Make sure logo.png is in src folder

const Header = () => {
  return (
    <header className="header-container fade-in">
      <img src={logo} alt="College Logo" className="header-logo" />
      <div className="header-text">
        <h1 className="college-name">GVP College of Engineering</h1>
        <p className="college-details">
          Madhurawada, Visakhapatnam - 530048, Andhra Pradesh <br />
          NAAC Accredited: A++
        </p>
      </div>
    </header>
  );
};

export default Header;
