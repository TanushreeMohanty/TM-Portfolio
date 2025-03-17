import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPython, FaGitAlt, FaGithub 
} from "react-icons/fa";
import { SiDjango, SiVercel, SiApachespark } from "react-icons/si";
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
          <Col lg={6} md={12} className="about-skills-container" data-aos="fade-left">
            <h3 className="about-heading">Skills</h3>
            <div className="about-skills">
              <div className="skill-item"><FaHtml5 className="skill-icon html" /> HTML</div>
              <div className="skill-item"><FaCss3Alt className="skill-icon css" /> CSS</div>
              <div className="skill-item"><FaJsSquare className="skill-icon js" /> JavaScript</div>
              <div className="skill-item"><FaReact className="skill-icon react" /> React.js</div>
              <div className="skill-item"><FaPython className="skill-icon python" /> Python</div>
              <div className="skill-item"><SiDjango className="skill-icon django" /> Django</div>
              <div className="skill-item"><SiApachespark className="skill-icon api" /> API Integration</div>
              <div className="skill-item"><SiVercel className="skill-icon vercel" /> Vercel</div>
              <div className="skill-item"><FaGitAlt className="skill-icon git" /> Git</div>
              <div className="skill-item"><FaGithub className="skill-icon github" /> GitHub</div>
            </div>
          </Col>


          {/* Right - Skills */}
          <Col lg={6} md={12} className="about-intro" data-aos="fade-right">
            <h3 className="about-heading">Who am I?</h3>
            <p className="about-text">
            I'm a passionate <strong>Full-Stack Developer</strong> with a love for crafting 
              dynamic, scalable, and user-friendly web applications. With expertise in both frontend and backend technologies,  
              I thrive on bringing ideas to life through clean, efficient, and high-performance code.
            </p>

            <h3 className="about-heading">Education</h3>
            <div className="education-container">
              <div className="education-item">
                 B.Tech in Computer Science - SGT University (2022 - 2026)  
                <span className="education-score">[CGPA: 9.68/10]</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
