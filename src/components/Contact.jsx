import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <Container>
        <h2 className="contact-title">Contact Me</h2>
        <Row>
          {/* Contact Form */}
          <Col md={6}>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" required />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mt-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" required />
              </Form.Group>

              <Form.Group controlId="formMessage" className="mt-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Your message" required />
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-3">
                Send Message
              </Button>
            </Form>
          </Col>

          {/* Resume Download & Social Links */}
          <Col md={6} className="text-center">
            <Button href="/Resume Tanushree Mohanty.pdf" target="_blank" className="hero-btn me-3">
              Download Resume
            </Button>

            <div className="social-links mt-4">
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon linkedin" />
              </a>
              <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
                <FaGithub className="social-icon github" />
              </a>
              <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="social-icon twitter" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
