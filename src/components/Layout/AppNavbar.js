import React from 'react';
import {Navbar, Nav, Container, Button} from 'react-bootstrap';
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
                
                <Link className="nav-link"  to='/create'>Creeaza</Link>
            </Nav>
            <Nav>
              <Navbar.Text>
                    {/* Logat ca: <Link to="/profile">{profile.firstName}</Link> */}
                    {profile.firstName}<Button onClick={props.signOut}>Signout</Button>
              </Navbar.Text>
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