// components/LoginSystem/SubjectDashboard.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./SubjectDashboard.css"; // Create CSS if needed

const SubjectDashboard = () => {
  const { subjectId } = useParams();
  const navigate = useNavigate();

  const formattedName = subjectId.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());

  const handleClick = (page) => {
    navigate(`/faculty-portal/${subjectId}/${page}`);
  };

  return (
    <div className="subject-dashboard">
      <h1>{formattedName} - Dashboard</h1>
      <div className="button-grid">
        <button onClick={() => handleClick("attendance")}>Attendance</button>
        <button onClick={() => handleClick("marks")}>Marks</button>
        <button onClick={() => handleClick("materials")}>Materials</button>
        <button onClick={() => handleClick("tasks")}>Tasks</button>
      </div>
    </div>
  );
};

export default SubjectDashboard;