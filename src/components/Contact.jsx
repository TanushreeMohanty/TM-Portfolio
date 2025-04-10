import React, { useState } from "react";
import Swal from "sweetalert2";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Contact.css";

// Importing Images Instead of Icons
import linkedinImg from "../assets/linkedin.png";
import githubImg from "../assets/github.png";
import contactImg from "../assets/contact.svg"; // New Image Added

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    if (!formData.name || !formData.email || !formData.message) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "All fields are required!",
      });
      return;
    }

    // Create FormData object
    const submissionData = new FormData();
    submissionData.append("access_key", "7edc5920-5aa7-43cf-8b64-c579589feae8");
    submissionData.append("name", formData.name);
    submissionData.append("email", formData.email);
    submissionData.append("message", formData.message);

    // Convert FormData to JSON
    const object = Object.fromEntries(submissionData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await res.json();

      if (result.success) {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "We will get back to you soon.",
        });

        // Clear form fields after submission
        setFormData({ name: "", email: "", message: "" });
      } else {
        Swal.fire({
          icon: "error",
          title: "Submission Failed",
          text: "Something went wrong. Please try again later.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while submitting the form.",
      });
    }
  };

  return (
    <section id="contact">
      <Container>
        <h2 className="title">Get in Touch</h2>
        <Row className="contact-wrapper">
          {/* Contact Form */}
          <Col lg={6} md={12}>
            <div className="contact-form">
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mt-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formMessage" className="mt-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
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
              <a href="https://www.linkedin.com/in/tanushree-mohanty-69353323b/" target="_blank" rel="noopener noreferrer">
                <img src={linkedinImg} alt="LinkedIn" className="social-image linkedin" />
              </a>
              <a href="https://github.com/TanushreeMohanty" target="_blank" rel="noopener noreferrer">
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
