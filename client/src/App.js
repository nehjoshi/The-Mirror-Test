import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home.js';
import "./App.css";

const App = () => {


  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
  );
}
export default App;
