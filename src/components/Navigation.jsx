import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold fs-3 text-success">
          kienyeji.ke
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="fw-medium">Home</Nav.Link>
            <Nav.Link href="#products" className="fw-medium">Our Chicken</Nav.Link>
            <Nav.Link href="#about" className="fw-medium">About</Nav.Link>
            <Nav.Link href="#contact" className="fw-medium">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
