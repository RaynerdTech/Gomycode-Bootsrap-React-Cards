// src/App.js
import React from 'react';
import { Container, Navbar, Nav, NavDropdown, Card, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <>
      {/* Responsive Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#">My React App</Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="ms-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Services</Nav.Link>
              <NavDropdown title="More" id="nav-dropdown">
                <NavDropdown.Item href="#">Contact</NavDropdown.Item>
                <NavDropdown.Item href="#">Help</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content */}
      <Container className="mt-5 mb-5">
        <h1 className="text-center mb-4">Welcome to My React App</h1>
        <Row className="g-4">
          <Col md={4}>
            <Card className="shadow-sm h-100">
              <Card.Img variant="top" src="https://cdn.dribbble.com/userupload/33441989/file/original-93d23126c4cc8198692078a0099842f8.png?format=webp&resize=400x300&vertical=center" />
              <Card.Body>
                <Card.Title>Beautiful UI</Card.Title>
                <Card.Text>Build responsive interfaces quickly using React and Bootstrap.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-sm h-100">
              <Card.Img variant="top" src="https://www.hostpapa.com/blog/app/uploads/2015/09/ResponsiveWebDesign21.jpg" />
              <Card.Body>
                <Card.Title>Responsive Layout</Card.Title>
                <Card.Text>Cards and navbar adjust smoothly to all screen sizes.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-sm h-100">
              <Card.Img variant="top" src="https://miro.medium.com/v2/resize:fit:1400/1*My2zwH-vAAt0deBjY7S1IA.png" />
              <Card.Body>
                <Card.Title>Quick Setup</Card.Title>
                <Card.Text>Get started in minutes with React and react-bootstrap setup.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
