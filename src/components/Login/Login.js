import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../redux/authActions'
import { Redirect } from 'react-router-dom'
import { Container, Jumbotron, Form, Button } from 'react-bootstrap'

class Login extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state)
  }
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to='/' /> 
    return (
    <Container>
      <Jumbotron className="bg-light">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="email">
            <Form.Label><b>Adresa de email*</b></Form.Label>
            <Form.Control type="email" placeholder="Introdu adresa de email"  onChange={this.handleChange}  required />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label><b>Parola*</b></Form.Label>
            <Form.Control type="password" placeholder="Introdu parola" onChange={this.handleChange}  required />
          </Form.Group>

          <br />
          <div className="center red-text">
              { authError ? <p>{authError}</p> : null }
            </div>
          <Button variant="primary"
            type="submit"
            size="lg"
            block>
            Autentificare
          </Button>
        </Form>
      </Jumbotron>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)



