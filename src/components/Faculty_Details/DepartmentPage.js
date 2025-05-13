import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import facultyData from '../Faculty_Details/facultyData.json';
import '../Faculty_Details/DepartmentPage.css';

const DepartmentPage = () => {
  const { dept } = useParams();
  const deptFaculty = facultyData[dept.toLowerCase()] || [];

  return (
<>
  <div className="page-background">  {/* 👈 Wrapper div added */}
    <div className="banner-container">
      <img
        src="https://gvpce.ac.in/images/banner.jpg"
        alt="GVP College Banner"
        className="banner-image"
      />
    </div>

    <div className="container my-5">
      <h2 className="text-center mb-4 text-capitalize text-primary hello">{dept.toUpperCase()} Department Faculty</h2>
      <div className="row justify-content-center">
        {deptFaculty.length > 0 ? deptFaculty.map((faculty, index) => (
          <div className="col-12 mb-4" key={index}>
            <div className="card shadow faculty-profile-card d-flex flex-row align-items-center p-3">
              <div className="faculty-info flex-grow-1">
                <h5 className="card-title mb-1">{faculty.name}</h5>
                <p className="mb-1"><strong>Designation:</strong> {faculty.designation}</p>
                <p className="mb-1"><strong>Qualification:</strong> {faculty.qualification}</p>
                <p className="mb-1"><strong>Area of Research:</strong> {faculty.research}</p>
                <p className="mb-2"><strong>Email:</strong> <a href={`mailto:${faculty.email}`}>{faculty.email}</a></p>
                <Link to ={`/portfolio/${faculty.id}`}                  
                  className="btn btn-outline-primary btn-sm"
                  target='_self'
                  rel="noopener noreferrer"
                >
                  View Portfolio
                </Link>
              </div>
              <div className="faculty-img ms-4">
                <img src={faculty.image} alt={faculty.name} className="rounded-circle img-fluid faculty-photo" />
              </div>
            </div>
          </div>
        )) : (
          <p>No faculty data available for this department yet.</p>
        )}
      </div>
    </div>
  </div>
</>

  );
};

export default DepartmentPage;
