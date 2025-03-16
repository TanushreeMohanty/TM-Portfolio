import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Experience.css";
import sgtu from "../assets/sgtu.jpg"; 
import iaa from "../assets/iaa.png"; 

const experienceData = [
  {
    company: "Indian Aviation Academy",
    role: "Software Development Intern",
    duration: "Feb 2025 - Present",
    description: "Working on Management System in IT Domain",
    logo: iaa,
    link: "https://www.iaa.edu.in/",
  },
  {
    company: "SGT University",
    role: "Frontend Developer Intern",
    duration: "April 2024 - July 2024",
    description: "Worked on official SGT website ",
    logo: sgtu,
    link: "https://sgtuniversity.ac.in/",
  },
  {
    company: "SGT University",
    role: "Wordpress Developer Intern",
    duration: "April 2023 - May 2023",
    description: "Built and deployed various webpages for the University.",
    logo: sgtu,
    link: "https://sgtuniversity.ac.in/",
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <Container>
        <h2 className="title">
          Experience & Internships
        </h2>
        <Row className="justify-content-center">
          {experienceData.map((exp, index) => (
            <Col xs={12} sm={6} md={4} key={index} className="experience-card">
              <Card className="exp-card">
                <Card.Body>
                  <div className="company-logo">
                    <img src={exp.logo} alt={exp.company} />
                  </div>
                  <Card.Title className="role">{exp.role}</Card.Title>
                  <Card.Subtitle className="company-name">{exp.company}</Card.Subtitle>
                  <Card.Text className="duration">{exp.duration}</Card.Text>
                  <Card.Text className="description">{exp.description}</Card.Text>
                  <a href={exp.link} target="_blank" rel="noopener noreferrer" className="company-link">
                    Visit Company
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
