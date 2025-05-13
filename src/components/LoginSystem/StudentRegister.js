import React from 'react';
import '../LoginSystem/LoginPage.css'

const StudentRegister = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Student Registration</h2>
        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="Roll Number" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Register</button>
      </div>
    </div>
  );
};

export default StudentRegister;
