import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Card, Badge, Button, Tab, Nav } from 'react-bootstrap';
import { FaEnvelope, FaLinkedin, FaResearchgate, FaGraduationCap, FaBook, FaChalkboardTeacher, FaAward} from 'react-icons/fa';
import facultyData from '../Faculty_Details/facultyData.json';
import '../Faculty_Details/FacultyPortfolio.css';

const FacultyPortfolio = () => {
  const { id } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('about');

  // Flatten all depts
  const allFaculty = Object.values(facultyData).flat();
  const faculty = allFaculty.find(f => f.id === id);

  // Mock data for extended sections (to be replaced with actual data from your JSON)
  const publications = [
    { id: 1, title: "Machine Learning Applications in Modern Education", journal: "Journal of Educational Technology", year: 2023, link: "#" },
    { id: 2, title: "A Novel Approach to Neural Networks in Classroom Settings", journal: "IEEE Transactions on Education", year: 2022, link: "#" },
    { id: 3, title: "Computational Methods for Student Performance Analysis", journal: "International Journal of Educational Research", year: 2021, link: "#" }
  ];

  const courses = [
    { id: 1, code: "CS401", name: "Advanced Machine Learning", semester: "Fall 2023" },
    { id: 2, code: "CS302", name: "Data Structures and Algorithms", semester: "Spring 2023" },
    { id: 3, code: "CS201", name: "Introduction to Programming", semester: "Fall 2022" }
  ];

  const achievements = [
    { id: 1, title: "Best Teacher Award", organization: "University Excellence Committee", year: 2023 },
    { id: 2, title: "Research Grant", organization: "National Science Foundation", year: 2022, amount: "$150,000" },
    { id: 3, title: "Outstanding Research Paper", organization: "IEEE International Conference", year: 2021 }
  ];

  useEffect(() => {
    // Animation delay
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    // Scroll to top
    window.scrollTo(0, 0);
  }, []);

  if (!faculty) return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h2>Faculty Not Found</h2>
        <p>Sorry, we couldn't find the faculty member you're looking for.</p>
        <Link to="/faculty" className="btn-return">
          Return to Faculty Page
        </Link>
      </div>
    </div>
  );

  // Parse research areas into array
  const researchAreas = faculty.research ? faculty.research.split(',').map(area => area.trim()) : [];

  return (
    <div className="portfolio-wrapper">
      {/* Hero Section */}
      <div className="portfolio-hero">
        <div className="hero-overlay"></div>
        <Container>
        <div className={`hero-content ${isLoaded ? 'loaded' : ''}`}>
            <div className="profile-image-container">
              <img src={faculty.image} alt={faculty.name} className="profile-image" />
            </div>
            <div className="hero-text">
              <h1>{faculty.name}, <span className="text-highlight">Ph.D</span></h1>
              <h3>{faculty.designation}</h3>
              <div className="contact-links">
              <a href={`mailto:${faculty.email}`} className="contact-link">
                  <FaEnvelope /> {faculty.email}
                </a>
                {faculty.linkedin && (
                  <a href={faculty.linkedin} className="contact-link" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin /> LinkedIn
                  </a>
                )}
                {faculty.researchgate && (
                  <a href={faculty.researchgate} className="contact-link" target="_blank" rel="noopener noreferrer">
                    <FaResearchgate /> ResearchGate
                  </a>
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Content */}
      <Container className="portfolio-content">
        <Row>
          {/* Sidebar */}
          <Col lg={4} className={`sidebar ${isLoaded ? 'loaded' : ''}`}>
            <Card className="info-card qualification-card">
              <Card.Body>
                <Card.Title className="section-title">
                  <FaGraduationCap className="section-icon" /> Qualifications
                </Card.Title>
                <div className="qualification-item">
                  <h5>Ph.D</h5>
                  <p>{faculty.qualification && faculty.qualification.includes('Ph.D') ? 
                    faculty.qualification : 'Computer Science'}</p>
                </div>
                <div className="qualification-divider"></div>
                <div className="expertise-section">
                  <h5>Areas of Expertise</h5>
                  <div className="research-areas">
                    {researchAreas.map((area, index) => (
                      <Badge key={index} className="research-badge">{area}</Badge>
                    ))}
                  </div>
                </div>
              </Card.Body>
            </Card>

            <Card className="info-card stats-card">
              <Card.Body>
                <Card.Title className="section-title">Academic Record</Card.Title>
                <div className="stats-container">
                  <div className="stat-item">
                    <div className="stat-value">{publications.length}</div>
                    <div className="stat-label">Publications</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value">{courses.length}</div>
                    <div className="stat-label">Courses</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-value">{achievements.length}</div>
                    <div className="stat-label">Awards</div>
                  </div>
                </div>
              </Card.Body>
            </Card>

            <Button variant="primary" className="btn-download-cv">
              Download CV
            </Button>
          </Col>

          {/* Main Content */}
          <Col lg={8} className={`main-content ${isLoaded ? 'loaded' : ''}`}>
            <Card className="content-card">
              <Card.Body>
                <Tab.Container id="portfolio-tabs" activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
                  <Nav variant="tabs" className="portfolio-nav-tabs">
                    <Nav.Item>
                      <Nav.Link eventKey="about">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="publications">Publications</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="teaching">Teaching</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="achievements">Achievements</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content className="mt-4">
                    <Tab.Pane eventKey="about">
                      <h3 className="section-title">About Me</h3>
                      <div className="about-content">
                        <p className="about-text">{faculty.about || `As a dedicated professor with a Ph.D in Computer Science, I bring extensive knowledge and experience to the classroom. With over 10 years in academia, I'm passionate about bridging theoretical concepts with practical applications, ensuring students are well-prepared for both industry challenges and further academic pursuits.`}</p>
                        
                        <div className="philosophy-section">
                          <h4>Teaching Philosophy</h4>
                          <p>I believe in creating an engaging learning environment that encourages critical thinking and practical application of theoretical concepts. My approach combines traditional teaching methods with innovative technologies to ensure students develop both a strong foundation and adaptable skills for the rapidly evolving field.</p>
                        </div>
                      </div>
                    </Tab.Pane>
                    
                    <Tab.Pane eventKey="publications">
                      <h3 className="section-title">
                        <FaBook className="section-icon" /> Publications
                      </h3>
                      <div className="publications-list">
                        {publications.map(pub => (
                          <div key={pub.id} className="publication-item">
                            <h4 className="publication-title">{pub.title}</h4>
                            <p className="publication-meta">
                              {pub.journal}, {pub.year}
                            </p>
                            <a href={pub.link} className="publication-link" target="_blank" rel="noopener noreferrer">
                              View Publication
                            </a>
                          </div>
                        ))}
                      </div>
                    </Tab.Pane>
                    
                    <Tab.Pane eventKey="teaching">
                      <h3 className="section-title">
                        <FaChalkboardTeacher className="section-icon" /> Teaching
                      </h3>
                      <div className="courses-container">
                        {courses.map(course => (
                          <div key={course.id} className="course-card">
                            <div className="course-code">{course.code}</div>
                            <h4 className="course-name">{course.name}</h4>
                            <p className="course-semester">{course.semester}</p>
                          </div>
                        ))}
                      </div>
                    </Tab.Pane>
                    
                    <Tab.Pane eventKey="achievements">
                      <h3 className="section-title">
                        <FaAward className="section-icon" /> Achievements & Awards
                      </h3>
                      <div className="achievements-timeline">
                        {achievements.map(achievement => (
                          <div key={achievement.id} className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                              <div className="achievement-year">{achievement.year}</div>
                              <h4 className="achievement-title">{achievement.title}</h4>
                              <p className="achievement-org">{achievement.organization}</p>
                              {achievement.amount && (
                                <p className="achievement-amount">{achievement.amount}</p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      
      {/* Footer */}
      <footer className="portfolio-footer">
        <Container>
          <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} {faculty.name} | All Rights Reserved</p>
            <p>Gayatri Vidya Parishad College of Engineering</p>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default FacultyPortfolio;