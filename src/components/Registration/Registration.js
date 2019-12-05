import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../redux/authActions';
import { Container, Jumbotron, Form, Button } from 'react-bootstrap'

class Registration extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
      }
      handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
      }
      handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
      }
    render() { 

    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to='/' /> 
        return (
    <Container>
        <Jumbotron className="bg-light">
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="email">
                    <Form.Label><b>Adresa de email*</b></Form.Label>
                    <Form.Control type="email" placeholder="Introdu adresa de email"  onChange={this.handleChange}  required/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label><b>Parola*</b></Form.Label>
                    <Form.Control type="password" placeholder="Introdu parola"  onChange={this.handleChange}  required/>
                </Form.Group>

                <Form.Group controlId="password2">
                    <Form.Label><b>Confirmare parola*</b></Form.Label>
                    <Form.Control type="password" placeholder="Reintrodu parola"  onChange={this.handleChange}  required/>
                </Form.Group>

                <Form.Group controlId="lastName">
                    <Form.Label>Nume</Form.Label>
                    <Form.Control type="text" placeholder="Introdu adresa de email"  onChange={this.handleChange} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="firstName">
                    <Form.Label>Prenume</Form.Label>
                    <Form.Control type="text" placeholder="Introdu adresa de email"  onChange={this.handleChange} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <div className="center red-text">
                { authError ? <p>{authError}</p> : null }
                </div>
                <br />

                <Button variant="primary"
                    type="submit"
                    size="lg"
                    block>
                    Inregistrare
                </Button>
            </Form>
        </Jumbotron>
    </Container>
    )
 }
   }

const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth,
      authError: state.auth.authError
    }
  }
  
  const mapDispatchToProps = (dispatch)=> {
    return {
      signUp: (creds) => dispatch(signUp(creds))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Registration)