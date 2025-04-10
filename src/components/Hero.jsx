import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Hero.css"; 
import profileImage from "../assets/profile.jpeg"; 

const Hero = () => {
  return (
    <section id="hero">
      <Container>
        <Row className="align-items-center text-center text-md-start">
          {/* Right - Profile Image with Floating Animation */}
          <Col md={6} className="text-center">
            <div className="hero-image-wrapper">
              <img src={profileImage} alt="Profile" className="hero-img floating" />
            </div>
          </Col>

          {/* Left Content - Text */}
          <Col md={6} className="hero-text">
            <h1 className="title">
              Hey, I'm <span className="highlight">Tanushree Mohanty</span>
            </h1>
            <h2 className="hero-subtitle">Full Stack Developer</h2>
            <p className="hero-bio">
            Passionate about building scalable web apps, I specialize in crafting seamless user experiences with modern frontend frameworks and robust backend systems. Constantly exploring new tech to turn ideas into reality!             </p>
            <div className="hero-buttons">
              <Button href="/Tanushree Mohanty Resume.pdf" target="_blank" className="hero-btn primary-btn">
                 Resume
              </Button>
              <Button href="#contact" className="hero-btn secondary-btn">
              Let's Connect
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
