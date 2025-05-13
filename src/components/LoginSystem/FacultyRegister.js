// FacultyRegister.js
import React, { useState } from 'react';
import './FacultyRegister.css';
import { useNavigate } from 'react-router-dom';

function FacultyRegister() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    facultyId: '',
    email: '',
    dateOfJoining: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // For now, just navigate to faculty portal without backend interaction
    navigate('/faculty-portal');

    /* Commented out for now - backend integration
    try {
      const response = await fetch('http://localhost:5000/api/faculty/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (response.ok) {
        alert("Registration successful!");
        navigate('/faculty-login');
      } else {
        alert(result.message || "Registration failed.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error.");
    }
    */
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleSubmit}>
        <h2>Faculty Registration</h2>
        <input
          type="text"
          name="fullName"
          id="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="facultyId"
          id="facultyId"
          placeholder="Faculty ID"
          value={formData.facultyId}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          title="Enter your domain mail ID"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="dateOfJoining"
          id="dateOfJoining"
          placeholder="Date of Joining"
          title="Select your Date of Joining"
          value={formData.dateOfJoining}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
        <p>
          Already registered?{" "}
          <span className="link" onClick={() => navigate('/faculty-login')}>
            Login here
          </span>
        </p>
      </form>
    </div>
  );
}

export default FacultyRegister;