import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import Link as well here, if component doesn't update
import AppNavbar from './components/Layout/AppNavbar';
import Home from './components/Home/Home';
import ShowResults from "./components/Results/ShowResults";

// eu
import SignIn from "./components/AuthComponent/SignIn";
import SignUp from "./components/AuthComponent/SignUp";
import CreateQuestion from "./components/FirebaseQuestion/CreateQuestion";
import ListQuestions from "./components/FirebaseQuestion/ListQuestions";
// dumitru
import Login from "./components/Login/Login";
import Registration from './components/Registration/Registration';
import Profile from './components/Profile/Profile';


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
          <Route path="/signin">
            <SignIn/>
          </Route>
          <Route path="/signup">
            <SignUp />
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
            <Profile />
          </Route>
        </Switch>
    </Router>
  );
}