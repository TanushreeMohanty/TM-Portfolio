import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaReact, FaJsSquare, FaBootstrap, FaCss3Alt, FaDatabase, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiFirebase } from "react-icons/si";
import "./About.css";

const About = () => {
  return (
    <section id="about">
      <Container>
        <Row className="text-center">
          <Col>
            <h2 className="title">About Me</h2>
          </Col>
        </Row>

        <Row className="about-content">
          {/* Left - Introduction */}
          <Col lg={6} md={12} className="about-intro" data-aos="fade-right">
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
          <Col lg={6} md={12} className="about-skills-container" data-aos="fade-left">
            <h3 className="section-heading">Skills & Expertise</h3>
            <div className="about-skills">
              <div className="skill-item"><FaReact className="skill-icon react" /> React.js</div>
              <div className="skill-item"><FaJsSquare className="skill-icon js" /> JavaScript</div>
              <div className="skill-item"><FaBootstrap className="skill-icon bootstrap" /> Bootstrap</div>
              <div className="skill-item"><SiTailwindcss className="skill-icon tailwind" /> Tailwind CSS</div>
              <div className="skill-item"><FaCss3Alt className="skill-icon css" /> Responsive Web Design</div>
              <div className="skill-item"><FaDatabase className="skill-icon database" /> REST APIs</div>
              <div className="skill-item"><SiFirebase className="skill-icon firebase" /> Firebase</div>
              <div className="skill-item"><FaGitAlt className="skill-icon git" /> Git & Version Control</div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
