import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Hero.css"; // Import CSS for custom styling
import profileImage from "../assets/profile.jpeg"; // Add your image inside 'src/assets/'

const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      <Container>
        <Row className="align-items-center text-center text-md-start">
          {/* Left Side - Text Content */}
          <Col md={6}>
            <h1 className="hero-title">Hi, I'm <span>Tanushree Mohanty</span></h1>
            <h2 className="hero-subtitle">Frontend Developer | React Enthusiast</h2>
            <p className="hero-bio">
              Passionate about building interactive and user-friendly web applications.
              Experienced in React, JavaScript, and modern UI frameworks.
            </p>
            <Button href="/Resume Tanushree Mohanty.pdf" target="_blank" className="hero-btn me-3">
              Download Resume
            </Button>
            <Button href="#contact" variant="outline-primary" className="hero-btn">
              Hire Me
            </Button>
          </Col>

          {/* Right Side - Profile Image */}
          <Col md={6} className="text-center">
            <img src={profileImage} alt="Profile" className="hero-img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
