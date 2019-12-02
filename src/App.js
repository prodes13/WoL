import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import Link as well here, if component doesn't update
import AppNavbar from './components/Layout/AppNavbar';
import Home from './components/Home/Home';
import Quiz from './Quiz';
import ShowResults from "./components/Results/ShowResults";
import SignIn from "./components/AuthComponent/SignIn";
import SignUp from "./components/AuthComponent/SignUp";
export default function App() {
  return (
    <Router>
      <AppNavbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/quiz">
            <Quiz />
          </Route>
          <Route path="/results">
            <ShowResults />
          </Route>
          <Route path="/signin">
            <SignIn/>
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
    </Router>
  );
}