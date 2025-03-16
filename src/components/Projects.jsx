import React, { useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./Projects.css";
import demoImg from "../assets/demo.webp"; 

const projectData = [
  {
    title: "Portfolio Website",
    category: "Web Apps",
    description: "A responsive portfolio website built with React and Bootstrap.",
    image: demoImg,
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "AI Chatbot",
    category: "AI/ML",
    description: "A chatbot powered by NLP and machine learning algorithms.",
    image: demoImg,
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "VR Learning App",
    category: "AR/VR",
    description: "An immersive VR learning platform for students.",
    image: demoImg,
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Hackathon Project",
    category: "Hackathon Projects",
    description: "An innovative solution developed during a 24-hour hackathon.",
    image: demoImg,
    demoLink: "#",
    githubLink: "#",
  },
];

const categories = ["All", "Web Apps", "AI/ML", "AR/VR", "Hackathon Projects"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projectData
      : projectData.filter((project) => project.category === selectedCategory);

  return (
    <section className="projects-section" id="projects">
      <Container>
        <h2 className="projects-title">My <span className="highlight">Projects</span></h2>

        <div className="filter-buttons">
          {categories.map((category, index) => (
            <Button
              key={index}
              className={`filter-btn ${selectedCategory === category ? "active" : ""}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <Row className="project-grid">
          {filteredProjects.map((project, index) => (
            <Col md={6} lg={4} key={index} className="project-card">
              <Card className="project-card-inner">
                <div className="project-image-wrapper">
                  <Card.Img variant="top" src={project.image} alt={project.title} />
                </div>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <div className="project-links">
                    <Button variant="primary" href={project.demoLink} target="_blank">
                      Live Demo
                    </Button>
                    <Button variant="dark" href={project.githubLink} target="_blank">
                      GitHub
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
