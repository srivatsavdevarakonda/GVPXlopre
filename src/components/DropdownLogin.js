import React, { useState } from 'react';
import './DropdownLogin.css'; // Make sure to import this CSS file

function DropdownLogin() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    alert(`Redirect to ${e.target.value} login`);
  };

  return (
    <div className="dropdown-container">
      <select
        value={selectedOption}
        onChange={handleChange}
        className="dropdown-select"
      >
        <option value="">Login/Register</option>
        <option value="student">Student</option>
        <option value="faculty">Faculty</option>
        <option value="admin">Administration</option>
      </select>
    </div>
  );
}

export default DropdownLogin;
