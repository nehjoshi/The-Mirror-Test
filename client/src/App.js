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
import Quiz2Six from "./Components/Questions/Quiz2/Six.js";
import Quiz2Seven from "./Components/Questions/Quiz2/Seven.js";
import Quiz2Eight from "./Components/Questions/Quiz2/Eight.js";
import Quiz2Nine from "./Components/Questions/Quiz2/Nine.js";
import Quiz2Ten from "./Components/Questions/Quiz2/Ten.js";
import Quiz2Eleven from "./Components/Questions/Quiz2/Eleven.js";
import Quiz2Twelve from "./Components/Questions/Quiz2/Twelve.js";
import Quiz2Thirteen from "./Components/Questions/Quiz2/Thirteen.js";
import Quiz2Fourteen from "./Components/Questions/Quiz2/Fourteen.js";
import Quiz2Fifteen from "./Components/Questions/Quiz2/Fifteen.js";
import Quiz2Sixteen from "./Components/Questions/Quiz2/Sixteen.js";
import Quiz2Seventeen from "./Components/Questions/Quiz2/Seventeen.js";
import Quiz2Eighteen from "./Components/Questions/Quiz2/Eighteen.js";
import Quiz2Nineteen from "./Components/Questions/Quiz2/Nineteen.js";
import Quiz2Twenty from "./Components/Questions/Quiz2/Twenty.js";
import Quiz2TwentyOne from "./Components/Questions/Quiz2/TwentyOne.js";
import Quiz2TwentyTwo from "./Components/Questions/Quiz2/TwentyTwo.js";
import Quiz2TwentyThree from "./Components/Questions/Quiz2/TwentyThree.js";
import Quiz2TwentyFour from "./Components/Questions/Quiz2/TwentyFour.js";
import Quiz2TwentyFive from "./Components/Questions/Quiz2/TwentyFive.js";
import Quiz2TwentySix from "./Components/Questions/Quiz2/TwentySix.js";
import Quiz2TwentySeven from "./Components/Questions/Quiz2/TwentySeven.js";
import Quiz2TwentyEight from "./Components/Questions/Quiz2/TwentyEight.js";
import Quiz2TwentyNine from "./Components/Questions/Quiz2/TwentyNine.js";
import Quiz2Thirty from "./Components/Questions/Quiz2/Thirty.js";
import Quiz2ThirtyOne from "./Components/Questions/Quiz2/ThirtyOne.js";
import Quiz2ThirtyTwo from "./Components/Questions/Quiz2/ThirtyTwo.js";
import Quiz2ThirtyThree from "./Components/Questions/Quiz2/ThirtyThree.js";
import Quiz2ThirtyFour from "./Components/Questions/Quiz2/ThirtyFour.js";
import Quiz2ThirtyFive from "./Components/Questions/Quiz2/ThirtyFive.js";
import Quiz2ThirtySix from "./Components/Questions/Quiz2/ThirtySix.js";
import Quiz2ThirtySeven from "./Components/Questions/Quiz2/ThirtySeven.js";
import Quiz2ThirtyEight from "./Components/Questions/Quiz2/ThirtyEight.js";
import Quiz2ThirtyNine from "./Components/Questions/Quiz2/ThirtyNine.js";
import Quiz2Fourty from "./Components/Questions/Quiz2/Fourty.js";
import Intro3 from './Components/Intro3.js';
import Quiz3_1 from "./Components/Questions/Quiz3/Q1.js";
import Quiz3_2 from "./Components/Questions/Quiz3/Q2.js";
import Quiz3_3 from "./Components/Questions/Quiz3/Q3.js";
import Quiz3_4 from "./Components/Questions/Quiz3/Q4.js";

const App = () => {


  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/instructions' component={Intro} />
        <Route exact path='/instructions2' component={Intro2} />
        <Route exact path='/instructions3' component={Intro3} />
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
        <Route exact path='/quiz2/question6' component={Quiz2Six} />
        <Route exact path='/quiz2/question7' component={Quiz2Seven} />
        <Route exact path='/quiz2/question8' component={Quiz2Eight} />
        <Route exact path='/quiz2/question9' component={Quiz2Nine} />
        <Route exact path='/quiz2/question10' component={Quiz2Ten} />
        <Route exact path='/quiz2/question11' component={Quiz2Eleven} />
        <Route exact path='/quiz2/question12' component={Quiz2Twelve} />
        <Route exact path='/quiz2/question13' component={Quiz2Thirteen} />
        <Route exact path='/quiz2/question14' component={Quiz2Fourteen} />
        <Route exact path='/quiz2/question15' component={Quiz2Fifteen} />
        <Route exact path='/quiz2/question16' component={Quiz2Sixteen} />
        <Route exact path='/quiz2/question17' component={Quiz2Seventeen} />
        <Route exact path='/quiz2/question18' component={Quiz2Eighteen} /> 
        <Route exact path='/quiz2/question19' component={Quiz2Nineteen} />
        <Route exact path='/quiz2/question20' component={Quiz2Twenty} />
        <Route exact path='/quiz2/question21' component={Quiz2TwentyOne} />
        <Route exact path='/quiz2/question22' component={Quiz2TwentyTwo} />
        <Route exact path='/quiz2/question23' component={Quiz2TwentyThree} />
        <Route exact path='/quiz2/question24' component={Quiz2TwentyFour} />
        <Route exact path='/quiz2/question25' component={Quiz2TwentyFive} />
        <Route exact path='/quiz2/question26' component={Quiz2TwentySix} />
        <Route exact path='/quiz2/question27' component={Quiz2TwentySeven} />
        <Route exact path='/quiz2/question28' component={Quiz2TwentyEight} />
        <Route exact path='/quiz2/question29' component={Quiz2TwentyNine} />
        <Route exact path='/quiz2/question30' component={Quiz2Thirty} />
        <Route exact path='/quiz2/question31' component={Quiz2ThirtyOne} />
        <Route exact path='/quiz2/question32' component={Quiz2ThirtyTwo} />
        <Route exact path='/quiz2/question33' component={Quiz2ThirtyThree} />
        <Route exact path='/quiz2/question34' component={Quiz2ThirtyFour} />
        <Route exact path='/quiz2/question35' component={Quiz2ThirtyFive} />
        <Route exact path='/quiz2/question36' component={Quiz2ThirtySix} />
        <Route exact path='/quiz2/question37' component={Quiz2ThirtySeven} />
        <Route exact path='/quiz2/question38' component={Quiz2ThirtyEight} />
        <Route exact path='/quiz2/question39' component={Quiz2ThirtyNine} />
        <Route exact path='/quiz2/question40' component={Quiz2Fourty} />
        <Route exact path='/quiz3/question1' component={Quiz3_1} />
        <Route exact path='/quiz3/question2' component={Quiz3_2} />
        <Route exact path='/quiz3/question3' component={Quiz3_3} />
        <Route exact path='/quiz3/question4' component={Quiz3_4} />
        <Route exact path='/results' component={Results} />
      </Switch>
    </Router>
  );
}
export default App;
