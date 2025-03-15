import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaReact, FaJs, FaPython, FaNodeJs, FaDatabase, FaGitAlt, FaCloud } from "react-icons/fa";
import "./Skills.css";

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Databases (SQL/MongoDB)", icon: <FaDatabase /> },
  { name: "Git & Version Control", icon: <FaGitAlt /> },
  { name: "Cloud Platforms (AWS/GCP)", icon: <FaCloud /> },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <Container>
        <h2 className="skills-title">My Skills</h2>
        <Row className="justify-content-center">
          {skills.map((skill, index) => (
            <Col xs={6} sm={4} md={3} key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h4 className="skill-name">{skill.name}</h4>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
