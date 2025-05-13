// FacultyLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FacultyLogin.css';

function FacultyLogin() {
  const [loginData, setLoginData] = useState({
    facultyId: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // 🔒 Future backend authentication (commented)
    /*
    try {
      const response = await fetch('http://localhost:5000/api/faculty/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
      });

      const result = await response.json();
      if (response.ok) {
        alert("Login successful!");
        navigate('/faculty');
      } else {
        alert(result.message || "Login failed.");
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("Server error during login.");
    }
    */

    // 🚀 Direct redirect without authentication
    navigate('/faculty-portal');
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleLogin}>
        <h2>Faculty Login</h2>
        <input
          type="text"
          name="facultyId"
          id="facultyId"
          placeholder="Faculty ID"
          value={loginData.facultyId}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={loginData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
        <p>
          New faculty?{" "}
          <span className="link" onClick={() => navigate('/faculty-register')}>
            Register here
          </span>
        </p>
      </form>
    </div>
  );
}

export default FacultyLogin;