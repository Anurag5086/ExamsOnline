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
import QuestionBank from "./Pages/Student/QuestionBank";
import Test from "./Pages/Test/Test";
import TestList from "./Pages/test-list/TestList";

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
        <Route exact path="/student/questionBank">
          <QuestionBank />
        </Route>
        <Route exact path="/teacher/test">
          <TestList />
        </Route>
        <Route exact path="/teacher/test/:testID">
          <Test />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
