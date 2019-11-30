import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';

const AppNavbar = () => {
    return (
      <Container>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Navbar.Brand href="/">WheelOfLife</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/quiz">Quiz</Nav.Link>
              <Nav.Link href="/results">Results</Nav.Link>
            </Nav>
            <Nav>
              <Navbar.Text>
                    Signed in as: <a href="/profile">Florin</a>
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>   
    )
}

export default AppNavbar;