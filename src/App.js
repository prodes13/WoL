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
      <div className="container">
        <Switch>
          <Route exact path="/"> <Home /> </Route>

          <Route exact path="/data"> <Data /> </Route>

          <Route path="/quiz"> <Quiz /> </Route>

          <Route path="/results"> <ShowResults /> </Route>

          <Route path="/login"> <Login /> </Route>

          <Route path="/registration"> <Registration /> </Route>

          <Route path="/profile"> <Profile /> </Route>
        </Switch>
      </div>
    </Router>
  );
}