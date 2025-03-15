import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css"; // Updated CSS for better responsiveness and design

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

        <Row className="align-items-center about-content">
          {/* Left - Introduction */}
          <Col md={6} data-aos="fade-right">
            <h3 className="section-heading">Who am I?</h3>
            <p className="about-text">
              I'm a passionate <strong>Frontend Developer</strong> with a deep
              interest in web development, React, and UI/UX design. I love
              creating visually appealing and highly functional web applications.
            </p>

            <h3 className="section-heading">Education</h3>
            <p className="about-text">
              🎓 B.Tech in Computer Science - XYZ University (2020 - 2024)
            </p>
          </Col>

          {/* Right - Skills */}
          <Col md={6} data-aos="fade-left">
            <h3 className="section-heading">Skills & Expertise</h3>
            <div className="about-skills">
              <span>⚡ React.js & JavaScript</span>
              <span>⚡ Bootstrap & Tailwind CSS</span>
              <span>⚡ Responsive Web Design</span>
              <span>⚡ REST APIs & Firebase</span>
              <span>⚡ Git & Version Control</span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
