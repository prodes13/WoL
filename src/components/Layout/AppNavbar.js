import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';

const AppNavbar = () => {
    return (
      <Container>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/logo192.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Dezvoltare personală
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/quiz">Test</Nav.Link>
              <Nav.Link href="/results">Evaluarea ta</Nav.Link>
            </Nav>
            <Nav>
              <Navbar.Text>
                    Logat ca: <a href="/profile">Florin</a>
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>   
    )
}

export default AppNavbar;