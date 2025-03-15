import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css"; // Custom CSS for styling

const About = () => {
  return (
    <section className="about-section" id="about">
      <Container>
        <Row className="text-center">
          <Col>
            <h2 className="about-title">About Me</h2>
            <p className="about-tagline">
              "Building interactive and user-friendly digital experiences."
            </p>
          </Col>
        </Row>

        <Row className="align-items-center">
          {/* Left - Introduction */}
          <Col md={6}>
            <h3>Who am I?</h3>
            <p className="about-text">
              I'm a passionate <strong>Frontend Developer</strong> with a deep interest in web development, React, and UI/UX design.
              I love creating visually appealing and highly functional web applications.
            </p>

            <h3>Education</h3>
            <p className="about-text">
              🎓 B.Tech in Computer Science - XYZ University (2020 - 2024)
            </p>
          </Col>

          {/* Right - Skills */}
          <Col md={6}>
            <h3>Skills & Expertise</h3>
            <ul className="about-skills">
              <li>⚡ React.js & JavaScript</li>
              <li>⚡ Bootstrap & Tailwind CSS</li>
              <li>⚡ Responsive Web Design</li>
              <li>⚡ REST APIs & Firebase</li>
              <li>⚡ Git & Version Control</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
