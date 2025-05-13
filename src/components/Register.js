import React from 'react';
import { useLocation } from 'react-router-dom';

function Register() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const role = queryParams.get('role'); // Get selected role (student/faculty/administration)

  return (
    <div>
      <h2>Register as {role ? role.charAt(0).toUpperCase() + role.slice(1) : 'User'}</h2>
      {/* Render your respective registration forms for student, faculty, or administration */}
      {role === 'student' && <div>Student Registration Form</div>}
      {role === 'faculty' && <div>Faculty Registration Form</div>}
      {role === 'administration' && <div>Administration Registration Form</div>}
    </div>
  );
}

export default Register;
