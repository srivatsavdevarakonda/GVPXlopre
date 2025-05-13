// FacultyPortal.js
import React from "react";
import "./FacultyPortal.css";
import { Calendar, Briefcase, Award, LogOut, User, Book } from "lucide-react";
import { useNavigate } from 'react-router-dom';

function FacultyPortal() {
  const navigate = useNavigate();

  // Commented: Auth logic for future use
  // const [isAuthenticated, setIsAuthenticated] = useState(true);
  // if (!isAuthenticated) return <Navigate to="/login" />;

  const faculty = {
    name: "Dr. D. Uma Devi",
    id: "322103382024",
    dept: "CSE (AI & ML)",
    doj: "2022-08-10",
    designation: "Head of the Dept. CSM",
    image: "https://via.placeholder.com/150"
  };

  const subjects = [
    { name: "Artificial Intelligence", semester: 6, students: 42, section:'CSE-3', color: "#7e22ce" },
    { name: "Machine Learning", semester: 5, students: 38, section:'CSM', color: "#1e40af" },
    { name: "Data Structures", semester: 3, students: 45, section:'CSD', color: "#16a34a" },
    { name: "Web Development", semester: 4, students: 40, section:'CSE-1', color: "#ea580c"},
  ];

  return (
    <div className="faculty-portal">
      {/* Top Navigation Bar */}
      <nav className="navbar">
        <img
          src="https://th.bing.com/th?q=GVP+Logo+for+Google+Forms&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"
          className="logo" alt=""
        />

        <div className="navbar-brand">
          <span>
            <center>
              GAYATRI VIDYA PARISHAD COLLEGE OF ENGINEERING <br />
              Faculty Portal
            </center>
          </span>
        </div>

        <div className="navbar-menu">
          <button className="navbar-link">
            <User className="h-5 w-5" />
            <span>Profile</span>
          </button>
          <button className="logout-button" onClick={() => navigate('/')}>
            <LogOut className="h-4 w-4" />
            <span>Logout</span>
          </button>
        </div>
      </nav>

      {/* Header with faculty profile */}
      <header className="portal-header">
        <div className="decorative-circle top-right"></div>
        <div className="profile-section">
          <div className="profile-image-container">
            <div className="profile-image-bg"></div>
            <img 
              src={'https://gvpce.ac.in/CSE/FacPhotos/umadevi.jpg'} 
              alt="Faculty" 
              className="profile-image"
            />
          </div>
          <div className="profile-details">
            <div className="profile-header">
              <h1 className="faculty-name">{faculty.name}</h1>
              <div className="status-badge active">Active</div>
            </div>
            <div className="faculty-info-grid">
              <div className="faculty-info-item">
                <User className="info-icon" />
                <span className="info-label">Name:</span>
                <span className="info-value">{faculty.name}</span>
              </div>
              <div className="faculty-info-item">
                <div className="id-icon info-icon"><span>#</span></div>
                <span className="info-label">Faculty ID:</span>
                <span className="info-value">{faculty.id}</span>
              </div>
              <div className="faculty-info-item">
                <Briefcase className="info-icon" />
                <span className="info-label">Department:</span>
                <span className="info-value">{faculty.dept}</span>
              </div>
              <div className="faculty-info-item">
                <Calendar className="info-icon" />
                <span className="info-label">Date of Joining:</span>
                <span className="info-value">{faculty.doj}</span>
              </div>
              <div className="faculty-info-item">
                <Award className="info-icon" />
                <span className="info-label">Designation:</span>
                <span className="info-value">{faculty.designation}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Summary */}
      <div className="stats-grid">
        <div className="stat-card" style={{"--accent-color": "#3b82f6"}}>
          <div className="stat-label">Total Subjects</div>
          <div className="stat-value">{subjects.length}</div>
        </div>
        <div className="stat-card" style={{"--accent-color": "#16a34a"}}>
          <div className="stat-label">Total Students</div>
          <div className="stat-value">
            {subjects.reduce((total, subject) => total + subject.students, 0)}
          </div>
        </div>
        <div className="stat-card" style={{"--accent-color": "#7e22ce"}}>
          <div className="stat-label">Assignments</div>
          <div className="stat-value">12</div>
        </div>
        <div className="stat-card" style={{"--accent-color": "#eab308"}}>
          <div className="stat-label">Announcements</div>
          <div className="stat-value">5</div>
        </div>
      </div>

      {/* Section Title */}
      <div className="section-title">
        <Book className="section-icon" />
        <h2>My Subjects</h2>
      </div>

      {/* Subject Grid */}
      <main className="subjects-grid">
        {subjects.map((subject, index) => (
          <div 
            key={index}
            className="subject-card"
            style={{"--index": index}}
          >
            <div className="subject-header" style={{"backgroundColor": subject.color}}>
              <h3>{subject.name}</h3>
              <h4 className="section">{subject.section}</h4>
            </div>
            <div className="subject-body">
              <div className="tags-container">
                <span className="tag semester">Semester {subject.semester}</span>
                <span className="tag students">{subject.students} Students</span>
              </div>
              <div className="action-buttons">
                <button className="action-link">View Details</button>
                <button className="action-link manage">Manage</button>
              </div>
            </div>
          </div>
        ))}
      </main>

      <div className="decorative-circle bottom-left"></div>
    </div>
  );
}

export default FacultyPortal;