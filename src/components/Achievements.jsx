import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Achievements.css";

const achievementsData = [
  {
    title: "Hack-Wars 2024",
    description:
      "Achieved Top 50 out of 3000+ (Phase 1 Cleared) at Chandigarh University (Sept 2024).",
    icon: "🏆",
  },
  {
    title: "SciTech Competition 2024",
    description:
      "Secured 3rd position on National Technology Day (May 2024).",
    icon: "🏆",
  },
  {
    title: "Trinit Hackathon 2024",
    description:
      "Participated in the hackathon at NIT Trichy (March 2024).",
    icon: "🏆",
  },
  {
    title: "MUJ HackX (Senior Category)",
    description:
      "Cleared Round 1 at Manipal University Jaipur (Oct 2023).",
    icon: "🏆",
  },
  {
    title: "AR/VR Workshop",
    description:
      "Completed a 5-day AR/VR workshop, gaining hands-on experience in immersive technologies.",
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
