import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Quiz from './Quiz';

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/quiz">Quiz</Link>
          </li>
          <li>
            <Link to="/results">Results</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/quiz">
            <Quiz />
          </Route>
          <Route path="/results">
            <h1>Results</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}