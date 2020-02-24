import React from 'react'
import { Container, Jumbotron, Form, Button } from 'react-bootstrap'

const Registration = () => (
    <Container className="bg-light jumbotron">
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label><b>Adresa de email*</b></Form.Label>
                <Form.Control type="email" placeholder="Introdu adresa de email" required />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label><b>Parola*</b></Form.Label>
                <Form.Control type="password" placeholder="Introdu parola" required />
            </Form.Group>

            <Form.Group controlId="formBasicPasswordConfirmation">
                <Form.Label><b>Confirmare parola*</b></Form.Label>
                <Form.Control type="password" placeholder="Reintrodu parola" required />
            </Form.Group>

            <Form.Group controlId="formBasicName">
                <Form.Label>Nume</Form.Label>
                <Form.Control type="text" placeholder="Introdu adresa de email" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicSurname">
                <Form.Label>Prenume</Form.Label>
                <Form.Control type="text" placeholder="Introdu adresa de email" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <br />

            <Button variant="primary"
                type="submit"
                size="lg"
                block>
                Inregistrare
                </Button>
        </Form>
    </Container>
)

export default Registration;