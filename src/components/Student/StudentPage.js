import React from 'react';
import { useLocation } from 'react-router-dom';
import ToDoList from './ToDoList';
import PersonalFolder from './PersonalFolder';
import AttendanceView from './AttendanceView';

const StudentPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const rollNumber = queryParams.get("rollNumber");

  return (
    <div>
      <h2>Welcome, Student {rollNumber}</h2>
      <div style={{ padding: '20px' }}>
        <ToDoList rollNumber={rollNumber} />
        <hr />
        <PersonalFolder rollNumber={rollNumber} />
        <hr />
        <AttendanceView />
      </div>
    </div>
  );
};

export default StudentPage;
