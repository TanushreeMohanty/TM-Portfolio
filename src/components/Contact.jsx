import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Contact.css";

// Importing Images Instead of Icons
import linkedinImg from "../assets/linkedin.png";
import githubImg from "../assets/github.png";
import contactImg from "../assets/contact.svg"; // New Image Added

const Contact = () => {
  return (
    <section id="contact">
      <Container>
        <h2 className="title">Get in Touch</h2>
        <Row className="contact-wrapper">
          {/* Contact Form */}
          <Col lg={6} md={12}>
            <div className="contact-form">
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

                <Button variant="primary" type="submit" className="submit-btn mt-4">
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>

          {/* Resume Download & Social Links */}
          <Col lg={6} md={12} className="contact-info text-center">
          <img src={contactImg} alt="Contact Illustration" className="contact-image" />



            <div className="social-links mt-4">
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                <img src={linkedinImg} alt="LinkedIn" className="social-image linkedin" />
              </a>
              <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
                <img src={githubImg} alt="GitHub" className="social-image github" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
