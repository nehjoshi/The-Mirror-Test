import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home.js';
import "./App.css";
import  Intro  from "./Components/Intro.js";
import One from "./Components/Questions/One.js";

const App = () => {


  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/instructions' component={Intro} />
        <Route exact path='/question1' component={One} />
      </Switch>
    </Router>
  );
}
export default App;
