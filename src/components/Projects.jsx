import React, { useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./Projects.css";
import p1 from "../assets/quicklist1.png";
import p2 from "../assets/weathery.png";
import p3 from "../assets/prodsync.png";
const projectData = [
  {
    title: "QuickList",
    category: "Beginner Level",
    description: "A sleek and minimalistic Todo application built with React.js that allows users to efficiently manage daily tasks with a clean and intuitive interface.",
    image: p1,
    demoLink: "https://quick-list-iota.vercel.app/",
    githubLink: "https://github.com/TanushreeMohanty/QuickList",
    techStack: ["React.js"],
  },
  {
    title: "ProdSync",
    category: "Intermediate Level",
    description: "This is a Product Management System created using React + Firebase",
    image: p3,
    demoLink: "https://prod-sync.vercel.app/",
    githubLink: "https://github.com/TanushreeMohanty/ProdSync",
    techStack: ["React.js", "MUI", "Firebase Auth", "Firestore DB"],
  },
  {
    title: "Weathery",
    category: "Intermediate Level",
    description: "A responsive and visually appealing weather dashboard developed using React.js and the OpenWeatherMap API, providing real-time weather updates for any city worldwide.",
    image: p2,
    demoLink: "https://weathery-webapp.vercel.app/",
    githubLink: "https://github.com/TanushreeMohanty/Weathery",
    techStack: ["React.js", "OpenWeatherMap API"],
  },
  
];


const categories = ["All", "Beginner Level", "Intermediate Level", "Advanced Level"];

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

        <div className="filter-buttons mb-4">
          {categories.map((category, index) => (
            <Button
              key={index}
              className={`filter-btn me-2 ${selectedCategory === category ? "active" : ""}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <Row className="project-grid">
          {filteredProjects.map((project, index) => (
            <Col md={6} lg={4} key={index} className="project-card mb-4">
              <Card className="project-card-inner">
                <div className="project-image-wrapper">
                  <Card.Img variant="top" src={project.image} alt={project.title} />
                </div>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>

                  {/* Tech Stack Buttons */}
                  <div className="tech-stack mb-3">
                    {project.techStack.map((tech, idx) => (
                      <Button
                        key={idx}
                        variant="outline-secondary"
                        size="sm"
                        className="me-2 mb-2"
                      >
                        {tech}
                      </Button>
                    ))}
                  </div>

                  <div className="project-links">
                    <Button variant="success" href={project.demoLink} target="_blank" className="me-2">
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
