import React from 'react'
import { Container, Jumbotron } from 'react-bootstrap'

const Home = () => (
    <Container>
        <Jumbotron className="bg-light">
            <img src='/logo512.png' alt='Logo' className="img-thumbnail"/>
        </Jumbotron>
    </Container>
)

export default Home;