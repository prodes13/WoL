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
import Login from "./components/Login/Login";
import Registration from './components/Registration/Registration';
import Profile from './components/Profile/Profile';
import Data from './components/ApiCall/ApiCall';
export default function App() {
  return (
    <Router>
      <AppNavbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/data" component={Data} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/results" component={ShowResults} />
        <Route path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}