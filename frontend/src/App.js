import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./Pages/Auth/SignIn";
import Signup from "./Pages/Auth/Signup";
import Dashboard from "./Pages/Teacher/Dashboard";
import StuDashboard from "./Pages/Student/StuDashboard";
import CreateTest from "./Pages/Teacher/CreateTest";
import AddQuestion from "./Pages/Teacher/AddQuestion";
import AddNotice from "./Pages/Teacher/AddNotice";

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
        <Route exact path="/teacher/addquestion">
          <AddQuestion />
        </Route>
        <Route exact path="/teacher/addnotice">
          <AddNotice />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
