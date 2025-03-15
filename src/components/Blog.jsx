import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Blog.css";

const blogData = [
  {
    title: "Building a Full-Stack Web App with React and Node.js",
    description: "A step-by-step guide to developing a MERN stack application with authentication.",
    link: "https://yourblog.com/fullstack-react",
    image: "https://source.unsplash.com/400x250/?technology,coding",
  },
  {
    title: "How I Built an AI-Powered Chatbot",
    description: "Exploring NLP and AI to create an interactive chatbot with JavaScript.",
    link: "https://yourblog.com/ai-chatbot",
    image: "https://source.unsplash.com/400x250/?ai,chatbot",
  },
  {
    title: "AR/VR Development - My Workshop Experience",
    description: "My learnings from a 5-day AR/VR workshop and how to get started.",
    link: "https://yourblog.com/ar-vr",
    image: "https://source.unsplash.com/400x250/?vr,augmented-reality",
  },
];

const Blog = () => {
  return (
    <section className="blog-section" id="blog">
      <Container>
        <h2 className="blog-title">My Blog & Articles</h2>
        <Row>
          {blogData.map((blog, index) => (
            <Col md={6} lg={4} key={index} className="blog-card">
              <Card className="blog-item">
                <Card.Img variant="top" src={blog.image} alt={blog.title} />
                <Card.Body>
                  <Card.Title>{blog.title}</Card.Title>
                  <Card.Text>{blog.description}</Card.Text>
                  <Button variant="primary" href={blog.link} target="_blank">
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Blog;
