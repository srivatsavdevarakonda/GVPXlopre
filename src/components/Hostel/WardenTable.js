import React from 'react';
import './Hostel.css';

const wardenData = {
  boys: [
    { name: "Mr. Ravi", phone: "9876543210", position: "Chief Warden" },
    { name: "Mr. Kiran", phone: "9876501234", position: "Assistant Warden" },
  ],
  girls: [
    { name: "Mrs. Rekha", phone: "9876567890", position: "Chief Warden" },
    { name: "Ms. Anu", phone: "9876512345", position: "Assistant Warden" },
  ],
  harmony: [
    { name: "Mr. Das", phone: "9876598765", position: "Manager" },
  ],
  sunshine: [
    { name: "Mr. Nikhil", phone: "9876587654", position: "Supervisor" },
  ],
};

function WardenTable({ hostelId }) {
  const list = wardenData[hostelId] || [];

  return (
    <div className="warden-table">
      <h3>Warden Information</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {list.map((warden, index) => (
            <tr key={index}>
              <td>{warden.name}</td>
              <td>{warden.phone}</td>
              <td>{warden.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WardenTable;
