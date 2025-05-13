// LoginPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  const navigate = useNavigate();
  
  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Welcome to College Portal</h1>
        <div className="logo-container">
          <div><img className="college-logo" src="https://th.bing.com/th?q=GVP+Logo+for+Google+Forms&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" alt="College Logo" /></div>
        </div>
        <p className="login-subtitle">Please select your role to continue</p>
        <div className="button-group">
          <button 
            className="login-button student-button"
            onClick={() => navigate('/student-login')}
          >
            Student Login
          </button>
          <button 
            className="login-button faculty-button"
            onClick={() => navigate('/faculty-login')}
          >
            Faculty Login
          </button>
        </div>
        <p className="help-text">Need help? <span className="link">Contact support</span></p>
      </div>
    </div>
  );
}

export default LoginPage;