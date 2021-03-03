import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
function nav() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>Jesse R. Larsen</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse  id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item>
            <Nav.Link>
              <Link
                to="/portfolio-v3/"
                className={
                  window.location.pathname === "/portfolio-v3/"  ? "nav-link active" : "nav-link"}
              >
                About
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Link>
            <Link
              to="/portfolio"
              className={
                window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
            >
              Portfolio
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar >
  );
}

export default nav;