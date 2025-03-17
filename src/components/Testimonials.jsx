import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Testimonials.css";

const testimonials = [
  {
    name: "John Doe",
    role: "Senior Developer at Google",
    feedback: "An excellent developer with a great eye for design and functionality!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jane Smith",
    role: "UI/UX Designer at Microsoft",
    feedback: "Incredible work ethic and always delivers beyond expectations.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "David Lee",
    role: "Software Engineer at Amazon",
    feedback: "A problem-solver who brings creativity and efficiency to every project.",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
  },
  
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <Container>
        <h2 className="title">What People Say</h2>
        <Row>
          {testimonials.map((testimonial, index) => (
            <Col md={4} key={index}>
              <Card className="testimonial-card">
                <Card.Img variant="top" src={testimonial.image} className="testimonial-img" />
                <Card.Body>
                  <Card.Title>{testimonial.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted role">{testimonial.role}</Card.Subtitle>
                  <Card.Text>"{testimonial.feedback}"</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
