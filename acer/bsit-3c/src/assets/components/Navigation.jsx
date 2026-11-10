import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaInfinity } from "react-icons/fa";

function Navigation() {
  return (
    <Navbar expand="lg" className="main-navbar">
      <Container>

        <Navbar.Brand as={Link} to="/" className="brand-name">
          <FaInfinity className="brand-icon" />
          React App BSIT 3C
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">

            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/gallery">
              Gallery
            </Nav.Link>

            <Nav.Link as={Link} to="/contact">
              Contact Us
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default Navigation;