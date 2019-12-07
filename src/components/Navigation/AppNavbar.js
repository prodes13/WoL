import React from 'react';
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { signOut } from '../../redux/authActions';
import { connect } from 'react-redux'


const AppNavbar = (props) => {

  const { auth, profile } = props;
  // console.log(auth);
  console.log(auth);
  console.log(profile.firstName);
  
  
  // const links = auth.uid 
    return (
      <Container className="mb-4">
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Link to="/">
            <Navbar.Brand>
              <img
                alt=""
                src="/logo.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
                <span className="ml-4">
                  Wheel of Life
                </span>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Link className="nav-link" to='/quiz'>Test</Link>
                <Link className="nav-link"  to='/results'>Evaluarea ta</Link>
                <Link className="nav-link"  to='/create'>Creeaza</Link>
                <Link className="nav-link"  to='/login'>Autentificare</Link>
                <Link className="nav-link"  to='/registration'>Inregistrare</Link>
            </Nav>
            <Nav>
            <Navbar.Text>Logat ca: </Navbar.Text>
            <NavDropdown title={profile.firstName} id="collasible-nav-dropdown">
            <NavDropdown.Item>
            <Link  className="nav-link" to='/profile'>Profil</Link>
            </NavDropdown.Item>  
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={props.signOut}>Logout</NavDropdown.Item>
          </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>   
    )
}

const mapStateToProps = (state) => {
  // console.log(state);
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppNavbar)


/*

import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = (props) => {
  const { auth, profile } = props;
  // console.log(auth);
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">MarioPlan</Link>
        {links}
      </div>
    </nav>
  )
}


*/