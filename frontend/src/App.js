import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./Pages/Auth/SignIn";
import Signup from "./Pages/Auth/Signup";
import Dashboard from "./Pages/Teacher/Dashboard";
import StuDashboard from "./Pages/Student/StuDashboard";
import CreateTest from "./Pages/Teacher/CreateTest";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SignIn />
        </Route>
        <Route exact path="/register">
          <Signup />
        </Route>
        <Route exact path="/teacher/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/teacher/createtest">
          <CreateTest />
        </Route>
        <Route exact path="/student/dashboard">
          <StuDashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
