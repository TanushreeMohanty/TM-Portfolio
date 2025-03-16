import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" className="navbar-light bg-light" fixed="top" expanded={expanded}>
      <Container>
        {/* Brand */}
        <Navbar.Brand href="#hero">My Portfolio</Navbar.Brand>

        {/* Navbar Toggle Button */}
        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} />

        {/* Navbar Content */}
        <Navbar.Collapse>
          <Nav className="ms-auto">
            {[
              { href: "#hero", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#skills", label: "Skills" },
              { href: "#projects", label: "Projects" },
              { href: "#experience", label: "Experience" },
              { href: "#achievements", label: "Achievements" },
              { href: "#blog", label: "Blog" },
              { href: "#testimonials", label: "Testimonials" },
              { href: "#contact", label: "Contact" },
            ].map(({ href, label }) => (
              <Nav.Link key={href} href={href} onClick={() => setExpanded(false)}>
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
