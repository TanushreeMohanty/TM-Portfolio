import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Experience.css";
import demoImg from "../assets/demo.webp"; 
import google from "../assets/google.png"; 
import ms from "../assets/ms.png"; 

const experienceData = [
  {
    company: "Google",
    role: "Software Engineering Intern",
    duration: "June 2024 - Aug 2024",
    description: "Worked on optimizing search algorithms and improving user experience.",
    logo: google,
    link: "https://careers.google.com/",
  },
  {
    company: "Microsoft",
    role: "Frontend Developer Intern",
    duration: "Jan 2024 - May 2024",
    description: "Developed responsive UI components using React and Bootstrap.",
    logo: ms,
    link: "https://careers.microsoft.com/",
  },
  {
    company: "Startup XYZ",
    role: "Full Stack Developer Intern",
    duration: "July 2023 - Dec 2023",
    description: "Built and deployed a scalable web application for the company's clients.",
    logo: demoImg,
    link: "https://www.startupxyz.com/",
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
