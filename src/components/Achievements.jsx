import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Achievements.css";

const achievementsData = [
  {
    title: "3rd Place - SciTech Competition",
    description: "Secured 3rd position in the SciTech competition on National Technology Day.",
    icon: "🏆",
  },
  {
    title: "Trinit Hackathon 2024",
    description: "Participated in Trinit Hackathon at NIT Trichy, building an innovative project.",
    icon: "🏆",
  },
  {
    title: "AR/VR Workshop",
    description: "Completed a 5-day AR/VR workshop, gaining hands-on experience in immersive technologies.",
    icon: "📜",
  },
  {
    title: "LinkedIn Learning - AI Fundamentals",
    description: "Completed a LinkedIn Learning course on Artificial Intelligence Fundamentals.",
    icon: "📜",
  },
  {
    title: "Udemy - Full Stack Web Development",
    description: "Completed a Udemy course covering React, Node.js, and MongoDB.",
    icon: "📜",
  },
];

const Achievements = () => {
  return (
    <section id="achievements">
      <Container>
        <h2 className="title">Achievements & Certifications</h2>
        <Row>
          {achievementsData.map((item, index) => (
            <Col md={6} lg={4} key={index} className="achievement-card">
              <Card className="achievement-item">
                <Card.Body>
                  <div className="achievement-icon">{item.icon}</div>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Achievements;
