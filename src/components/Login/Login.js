import React from 'react'
import { Container, Jumbotron, Form, Button } from 'react-bootstrap'

const Login = () => (
  <Container>
    <Jumbotron className="bg-light">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Adresa de email</Form.Label>
          <Form.Control type="email" placeholder="Introdu adresa de email" />
          <Form.Text className="text-muted">
      </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Parola</Form.Label>
          <Form.Control type="password" placeholder="Introdu parola" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Retine datele de logare" />
        </Form.Group>
        <Button variant="primary"
                type="submit"
                size="lg"
                block>
          Submit
    </Button>
      </Form>
    </Jumbotron>
  </Container>
)

export default Login;

