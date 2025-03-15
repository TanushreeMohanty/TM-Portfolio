import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Hero.css"; 
import profileImage from "../assets/profile.jpeg"; 

const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      <Container>
        <Row className="align-items-center text-center text-md-start">
          {/* Left Content */}
          <Col md={6} className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Tanushree Mohanty</span>
            </h1>
            <h2 className="hero-subtitle">Frontend Developer | React Enthusiast</h2>
            <p className="hero-bio">
              Crafting elegant, responsive, and high-performance web experiences with 
              React, JavaScript, and modern UI frameworks.
            </p>
            <div className="hero-buttons">
              <Button
                href="/Resume Tanushree Mohanty.pdf"
                target="_blank"
                className="hero-btn primary-btn"
              >
                📄 Resume
              </Button>
              <Button href="#contact" className="hero-btn secondary-btn">
                💼 Hire Me
              </Button>
            </div>
          </Col>

          {/* Right - Profile Image */}
          <Col md={6} className="text-center">
            <div className="hero-image-wrapper">
              <img src={profileImage} alt="Profile" className="hero-img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
