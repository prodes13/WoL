import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AppNavbar from './components/Layout/AppNavbar';


import Quiz from './Quiz';
import ShowResults from "./components/Results/ShowResults";


export default function App() {
  return (
    <Router>
      <AppNavbar />

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