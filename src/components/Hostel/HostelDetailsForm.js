import React, { useState } from 'react';
import './Hostel.css';

function HostelDetailsForm({ selectedHostel }) {
  const [form, setForm] = useState({
    roll: '',
    name: '',
    branch: '',
    roomNumber: '',
    type: '',
    occupancy: '',
    fromDate: '',
    toDate: '',
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Details saved!');
  };

  return (
    <div className="form-container">
      <h3>Hostel Selected: {selectedHostel.name}</h3>
      <form onSubmit={handleSubmit}>
        {/* Student Details */}
        <label>Roll No:</label>
        <input name="roll" value={form.roll} onChange={handleChange} required />

        <label>Name:</label>
        <input name="name" value={form.name} onChange={handleChange} required />

        <label>Branch:</label>
        <input name="branch" value={form.branch} onChange={handleChange} required />

        {/* Hostel Details */}
        <label>Room Number:</label>
        <input name="roomNumber" value={form.roomNumber} onChange={handleChange} required />

        <label>Type:</label>
        <select name="type" onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Boys">Boys</option>
          <option value="Girls">Girls</option>
        </select>

        <label>Occupancy:</label>
        <select name="occupancy" onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Single">Single</option>
          <option value="Double">Double</option>
          <option value="Triple">Triple</option>
        </select>

        <label>From:</label>
        <input type="date" name="fromDate" onChange={handleChange} required />

        <label>To:</label>
        <input type="date" name="toDate" onChange={handleChange} required />

        <button type="submit">Save Details</button>
      </form>
    </div>
  );
}

export default HostelDetailsForm;
