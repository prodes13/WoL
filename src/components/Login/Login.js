import React from 'react'
import { Container, Jumbotron, Form, Button } from 'react-bootstrap'

const Login = () => (
  <Container>
    <Jumbotron className="bg-light">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label><b>Adresa de email*</b></Form.Label>
          <Form.Control type="email" placeholder="Introdu adresa de email" required/>
          <Form.Text className="text-muted">
      </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label><b>Parola*</b></Form.Label>
          <Form.Control type="password" placeholder="Introdu parola" required/>
        </Form.Group>
        
        <br />

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

export default Login;