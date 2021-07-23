import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home.js';
import "./App.css";
import  Intro  from "./Components/Intro.js";
import One from "./Components/Questions/One.js";
import Two from "./Components/Questions/Two.js";
import Three from "./Components/Questions/Three.js";

const App = () => {


  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/instructions' component={Intro} />
        <Route exact path='/question1' component={One} />
        <Route exact path='/question2' component={Two} />
        <Route exact path='/question3' component={Three} />
      </Switch>
    </Router>
  );
}
export default App;
