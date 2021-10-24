import React from 'react';
import './App.css';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import SignIn from './Pages/Auth/SignIn';
import Signup from './Pages/Auth/Signup';
import Dashboard from './Pages/Teacher/Dashboard';

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
      </Switch>
    </Router>
  );
}

export default App;
