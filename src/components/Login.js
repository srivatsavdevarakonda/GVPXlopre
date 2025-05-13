import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const role = new URLSearchParams(location.search).get("role");

  const [rollNumber, setRollNumber] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (role === "student" && rollNumber) {
      // You can add real validation here later
      navigate(`/student?rollNumber=${rollNumber}`);
    } else {
      alert("Please enter valid roll number");
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Login - {role?.toUpperCase()}</h2>
      {role === "student" && (
        <form onSubmit={handleLogin}>
          <label>
            Roll Number:
            <input
              type="text"
              value={rollNumber}
              onChange={(e) => setRollNumber(e.target.value)}
              required
            />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      )}
      {/* Add forms for faculty/admin similarly later if needed */}
    </div>
  );
}

export default Login;
