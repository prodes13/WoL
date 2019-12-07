import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import Link as well here, if component doesn't update
import AppNavbar from './components/Navigation/AppNavbar';
import Home from './components/Home/Home';
import ShowResults from "./components/Results/ShowResults";

import CreateQuestion from "./components/FirebaseQuestion/CreateQuestion";
import ListQuestions from "./components/FirebaseQuestion/ListQuestions";
// dumitru
import Login from "./components/Login/Login";
import Registration from './components/Registration/Registration';
import TestHistory from "./components/TestHistory/TestHistory";


export default function App() {
  return (
    <Router>
      <AppNavbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/quiz">
            <ListQuestions />
          </Route>
          <Route path="/results">
            <ShowResults />
          </Route> 
          <Route path="/create">
            <CreateQuestion />
            </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/profile">
            <TestHistory />
          </Route>
        </Switch>
    </Router>
  );
}