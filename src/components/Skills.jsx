import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import { FaReact, FaJs, FaPython, FaNodeJs, FaDatabase, FaGitAlt, FaCloud } from "react-icons/fa";
import "./Skills.css";

const skills = [
  { name: "React", icon: <FaReact />, level: 85 },
  { name: "JavaScript", icon: <FaJs />, level: 90 },
  { name: "Python", icon: <FaPython />, level: 80 },
  { name: "Node.js", icon: <FaNodeJs />, level: 75 },
  { name: "Databases (SQL/MongoDB)", icon: <FaDatabase />, level: 70 },
  { name: "Git & Version Control", icon: <FaGitAlt />, level: 85 },
  { name: "Cloud Platforms (AWS/GCP)", icon: <FaCloud />, level: 60 },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <Container>
        <h2 className="skills-title">My Skills</h2>

        <Row>
          {skills.map((skill, index) => (
            <Col md={6} key={index} className="skill-item">
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-text">
                <h4>{skill.name}</h4>
                <ProgressBar now={skill.level} label={`${skill.level}%`} />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
