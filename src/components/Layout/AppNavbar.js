import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AppNavbar = () => {
    return (
      <Container className="mb-4">
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Link to="/">
            <Navbar.Brand>
              <img
                alt=""
                src="/logo192.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              Dezvoltare personală
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Link className="nav-link" to='/quiz'>Test</Link>
                <Link className="nav-link"  to='/results'>Evaluarea ta</Link>
            </Nav>
            <Nav>
              <Navbar.Text>
                    Logat ca: <Link to="/profile">Florin</Link>
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>   
    )
}

export default AppNavbar;