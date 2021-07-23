import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home.js';
import "./App.css";
import  Intro  from "./Components/Intro.js";
import One from "./Components/Questions/One.js";
import Two from "./Components/Questions/Two.js";
import Three from "./Components/Questions/Three.js";
import Four from "./Components/Questions/Four.js";
import Five from "./Components/Questions/Five.js";
import Six from "./Components/Questions/Six.js";
import Seven from "./Components/Questions/Seven.js";
import Eight from "./Components/Questions/Eight.js";
import Nine from "./Components/Questions/Nine.js";
import Ten from "./Components/Questions/Ten.js";

const App = () => {


  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/instructions' component={Intro} />
        <Route exact path='/question1' component={One} />
        <Route exact path='/question2' component={Two} />
        <Route exact path='/question3' component={Three} />
        <Route exact path='/question4' component={Four} />
        <Route exact path='/question5' component={Five} />
        <Route exact path='/question6' component={Six} />
        <Route exact path='/question7' component={Seven} />
        <Route exact path='/question8' component={Eight} />
        <Route exact path='/question9' component={Nine} />
        <Route exact path='/question10' component={Ten} />
      </Switch>
    </Router>
  );
}
export default App;
