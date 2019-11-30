import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {Navbar, Nav, Container} from 'react-bootstrap'

import Quiz from './Quiz';
import ShowResults from "./components/Results/ShowResults";


export default function App() {
  return (
    <Router>
      <Container>
        <Navbar expand="lg" variant="light" bg="light">
          <Navbar.Brand href="/">WheelOfLife</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="/quiz">Quiz</Nav.Link>
            <Nav.Link href="/results">Results</Nav.Link>
          </Nav>
        </Navbar>
      </Container>
        <Switch>
          <Route path="/quiz">
            <Quiz />
          </Route>
          <Route path="/results">
            <ShowResults />
          </Route>
        </Switch>
    </Router>
  );
}