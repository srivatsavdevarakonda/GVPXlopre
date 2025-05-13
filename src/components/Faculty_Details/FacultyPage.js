import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import '../Faculty_Details/FacultyPage.css';

// Department data with improved images
const departments = [
  {
    name: "CSE",
    fullName: "Computer Science Engineering",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: "💻"
  },
  {
    name: "ECE",
    fullName: "Electronics & Communication Engineering",
    image: "https://images.unsplash.com/photo-1592659762303-90081d34b277?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: "📡"
  },
  {
    name: "IT",
    fullName: "Information Technology",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: "🖥️"
  },
  {
    name: "EEE",
    fullName: "Electrical & Electronics Engineering",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: "⚡"
  },
  {
    name: "MECHANICAL",
    fullName: "Mechanical Engineering",
    image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: "⚙️"
  },
  {
    name: "CIVIL",
    fullName: "Civil Engineering",
    image: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: "🏗️"
  },
  {
    name: "CHEMICAL",
    fullName: "Chemical Engineering",
    image: "https://images.unsplash.com/photo-1616458964690-917898af8477?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: "🧪"
  },

];

const FacultyPage = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Add animation class after component mounts
    setIsLoaded(true);
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="faculty-page-bg">
      {/* Header Section with Parallax Effect */}
      <div className="header-section">
        <div className="banner-container">
          <img
            src="https://gvpce.ac.in/images/banner.jpg"
            alt="GVP College Banner"
            className="banner-image"
          />
        </div>
        <div className="college-info-container">
          <h1 className="college-title">Gayatri Vidya Parishad College of Engineering</h1>
          <div className="divider">
            <span></span>
            <span className="diamond"></span>
            <span></span>
          </div>
          <p className="college-tagline">Excellence in Education Since 1996</p>
        </div>
      </div>

      {/* Faculty Section */}
      <Container className="text-center faculty-container">
        <div className={`section-header ${isLoaded ? 'fade-in' : ''}`}>
          <h2 className="faculty-heading">Our Faculty Departments</h2>
          <p className="section-description">
            Explore our academic departments led by experienced faculty members dedicated to excellence in teaching and research.
          </p>
        </div>
        
        <Row className="justify-content-center department-row">
          {departments.map((dept, index) => (
            <Col 
              key={index} 
              xs={12} sm={6} md={4} lg={3} 
              className={`mb-4 d-flex justify-content-center department-col ${isLoaded ? 'slide-in' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className="department-card"
                style={{ backgroundImage: `url(${dept.image})` }}
                onClick={() => navigate(`/department/${dept.name.toLowerCase()}`)}

              >
                <div className="card-overlay">
                  <div className="department-icon">{dept.icon}</div>
                  <h3 className="department-name">{dept.name}</h3>
                  <p className="department-fullname">{dept.fullName}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Footer Section */}
      <footer className="faculty-footer">
        <Container>
          <Row>
            <Col md={6} className="footer-info">
              <h4>Contact Us</h4>
              <p>Gayatri Vidya Parishad College of Engineering</p>
              <p>Madhurawada, Visakhapatnam</p>
              <p>Andhra Pradesh, India</p>
            </Col>
            <Col md={6} className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/academics">Academics</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </Col>
          </Row>
          <div className="footer-copyright">
            <p>© {new Date().getFullYear()} Gayatri Vidya Parishad College of Engineering. All Rights Reserved.</p>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default FacultyPage;