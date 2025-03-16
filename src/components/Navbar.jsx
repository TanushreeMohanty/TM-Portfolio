import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Navbar.css";
import logo from "../assets/logo.png"; // Ensure you have a logo image

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" className="custom-navbar" fixed="top" expanded={expanded}>
      <Container>
        {/* Logo & Brand */}
        <Navbar.Brand href="#hero" className="navbar-brand">
          <img src={logo} alt="Logo" className="navbar-logo" /> Tanushree Mohanty
        </Navbar.Brand>

        {/* Navbar Toggle Button */}
        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} />

        {/* Navbar Links */}
        <Navbar.Collapse>
          <Nav className="ms-auto">
            {[
              { href: "#hero", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#projects", label: "Projects" },
              { href: "#experience", label: "Experience" },
              { href: "#achievements", label: "Achievements" },
              { href: "#testimonials", label: "Testimonials" },
              { href: "#contact", label: "Contact" },
            ].map(({ href, label }) => (
              <Nav.Link
                key={href}
                href={href}
                onClick={() => setExpanded(false)}
                className="nav-link"
              >
                {label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
