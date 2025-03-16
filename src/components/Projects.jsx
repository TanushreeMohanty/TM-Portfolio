import React, { useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./Projects.css";
import demoImg from "../assets/demo.webp"; 
import p1 from "../assets/project1.png"; 

const projectData = [
  {
    title: "TaskSync",
    category: "Web Apps",
    description: "This is a Todo App created using React.js",
    image: p1,
    demoLink: "https://task-sync-app.vercel.app/",
    githubLink: "https://github.com/TanushreeMohanty/TaskSync.git",
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
    <section id="projects">
      <Container>
        <h2 className="title">My Projects</h2>

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
                    <Button variant="success" href={project.demoLink} target="_blank">
                      Live Demo
                    </Button>
                    <Button variant="light" href={project.githubLink} target="_blank">
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
