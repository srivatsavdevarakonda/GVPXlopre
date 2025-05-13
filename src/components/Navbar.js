import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdown(false);
    }
  };

  useEffect(() => {
    if (dropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdown]);

  return (
    <nav className="navbar">
      {/* Left links */}
      <div className="navbar-left">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about-us" className="nav-link">About Us</Link>
      </div>

      {/* Right dropdown */}  
      <div className="navbar-right">
        <div className="dropdown" ref={dropdownRef}>
          <button onClick={toggleDropdown} className="dropdown-btn">Login/Register</button>
          {dropdown && (
            <div className="dropdown-content">
              <Link to="/student-login">Student Login</Link>
              <Link to="/student-register">Student Register</Link>
              <Link to="/faculty-login">Faculty Login</Link>
              <Link to="/faculty-register">Faculty Register</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
