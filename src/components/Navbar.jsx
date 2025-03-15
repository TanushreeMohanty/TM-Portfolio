import React, { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Navbar, Container, Nav, Form } from "react-bootstrap";

const CustomNavbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" className={darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"} fixed="top" expanded={expanded}>
      <Container>
        {/* Brand */}
        <Navbar.Brand href="#hero">My Portfolio</Navbar.Brand>

          {/* Dark Mode Toggle */}
          <Form.Check
            type="switch"
            id="dark-mode-toggle"
            label={darkMode ? "🌙 Dark Mode" : "☀ Light Mode"}
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className="ms-3"
          />        
        {/* Navbar Toggle Button */}
        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} />

        {/* Navbar Content */}
        <Navbar.Collapse>
  <Nav className="ms-auto">
    <Nav.Link href="#hero" onClick={() => setExpanded(false)}>Home</Nav.Link>
    <Nav.Link href="#about" onClick={() => setExpanded(false)}>About</Nav.Link>
    <Nav.Link href="#skills" onClick={() => setExpanded(false)}>Skills</Nav.Link>
    <Nav.Link href="#projects" onClick={() => setExpanded(false)}>Projects</Nav.Link>
    <Nav.Link href="#experience" onClick={() => setExpanded(false)}>Experience</Nav.Link>
    <Nav.Link href="#achievements" onClick={() => setExpanded(false)}>Achievements</Nav.Link>
    <Nav.Link href="#blog" onClick={() => setExpanded(false)}>Blog</Nav.Link>
    <Nav.Link href="#testimonials" onClick={() => setExpanded(false)}>Testimonials</Nav.Link>
    <Nav.Link href="#contact" onClick={() => setExpanded(false)}>Contact</Nav.Link>
  </Nav>
</Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
