import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home.js';
import "./App.css";
import  Intro  from "./Components/Intro.js";
import One from "./Components/Questions/Quiz1/One.js";
import Two from "./Components/Questions/Quiz1/Two.js";
import Three from "./Components/Questions/Quiz1/Three.js";
import Four from "./Components/Questions/Quiz1/Four.js";
import Five from "./Components/Questions/Quiz1/Five.js";
import Six from "./Components/Questions/Quiz1/Six.js";
import Seven from "./Components/Questions/Quiz1/Seven.js";
import Eight from "./Components/Questions/Quiz1/Eight.js";
import Nine from "./Components/Questions/Quiz1/Nine.js";
import Ten from "./Components/Questions/Quiz1/Ten.js";
import Results from "./Components/Results.js";
import Intro2 from "./Components/Intro2.js";
import Quiz2One from "./Components/Questions/Quiz2/One.js";
import Quiz2Two from "./Components/Questions/Quiz2/Two.js";
import Quiz2Three from "./Components/Questions/Quiz2/Three.js";
import Quiz2Four from "./Components/Questions/Quiz2/Four.js";
import Quiz2Five from "./Components/Questions/Quiz2/Five.js";

const App = () => {


  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/instructions' component={Intro} />
        <Route exact path='/instructions2' component={Intro2} />
        <Route exact path='/quiz1/question1' component={One} />
        <Route exact path='/quiz1/question2' component={Two} />
        <Route exact path='/quiz1/question3' component={Three} />
        <Route exact path='/quiz1/question4' component={Four} />
        <Route exact path='/quiz1/question5' component={Five} />
        <Route exact path='/quiz1/question6' component={Six} />
        <Route exact path='/quiz1/question7' component={Seven} />
        <Route exact path='/quiz1/question8' component={Eight} />
        <Route exact path='/quiz1/question9' component={Nine} />
        <Route exact path='/quiz1/question10' component={Ten} />
        <Route exact path='/quiz2/question1' component={Quiz2One} />
        <Route exact path='/quiz2/question2' component={Quiz2Two} />
        <Route exact path='/quiz2/question3' component={Quiz2Three} />
        <Route exact path='/quiz2/question4' component={Quiz2Four} />
        <Route exact path='/quiz2/question5' component={Quiz2Five} />
        <Route exact path='/results' component={Results} />
      </Switch>
    </Router>
  );
}
export default App;
