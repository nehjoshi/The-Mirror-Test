import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home.js';
import "./App.css";
import  Intro  from "./Components/Intro.js";
import Register from './Components/Register.js';
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
import Quiz3_5 from "./Components/Questions/Quiz3/Q5.js";
import Quiz3_6 from "./Components/Questions/Quiz3/Q6.js";
import Quiz3_7 from "./Components/Questions/Quiz3/Q7.js";
import Quiz3_8 from "./Components/Questions/Quiz3/Q8.js";
import Quiz3_9 from "./Components/Questions/Quiz3/Q9.js";
import Quiz3_10 from "./Components/Questions/Quiz3/Q10.js";
import Quiz3_11 from "./Components/Questions/Quiz3/Q11.js";
import Quiz3_12 from "./Components/Questions/Quiz3/Q12.js";
import Quiz3_13 from "./Components/Questions/Quiz3/Q13.js";
import Quiz3_14 from "./Components/Questions/Quiz3/Q14.js";
import Quiz3_15 from "./Components/Questions/Quiz3/Q15.js";
import Quiz3_16 from "./Components/Questions/Quiz3/Q16.js";
import Quiz3_17 from "./Components/Questions/Quiz3/Q17.js";
import Quiz3_18 from "./Components/Questions/Quiz3/Q18.js";
import Quiz3_19 from "./Components/Questions/Quiz3/Q19.js";
import Quiz3_20 from "./Components/Questions/Quiz3/Q20.js";
import Quiz3_21 from "./Components/Questions/Quiz3/Q21.js";
import Quiz3_22 from "./Components/Questions/Quiz3/Q22.js";
import Quiz3_23 from "./Components/Questions/Quiz3/Q23.js";
import Quiz3_24 from "./Components/Questions/Quiz3/Q24.js";
import Quiz3_25 from "./Components/Questions/Quiz3/Q25.js";
import Quiz3_26 from "./Components/Questions/Quiz3/Q26.js";
import Quiz3_27 from "./Components/Questions/Quiz3/Q27.js";
import Quiz3_28 from "./Components/Questions/Quiz3/Q28.js";
import Quiz3_29 from "./Components/Questions/Quiz3/Q29.js";
import Quiz3_30 from "./Components/Questions/Quiz3/Q30.js";
import Quiz3_31 from "./Components/Questions/Quiz3/Q31.js";
import Quiz3_32 from "./Components/Questions/Quiz3/Q32.js";
import Quiz3_33 from "./Components/Questions/Quiz3/Q33.js";
import Quiz3_34 from "./Components/Questions/Quiz3/Q34.js";
import Quiz3_35 from "./Components/Questions/Quiz3/Q35.js";
import Quiz3_36 from "./Components/Questions/Quiz3/Q36.js";
import Quiz3_37 from "./Components/Questions/Quiz3/Q37.js";
import Quiz3_38 from "./Components/Questions/Quiz3/Q38.js";
import Quiz3_39 from "./Components/Questions/Quiz3/Q39.js";
import Quiz3_40 from "./Components/Questions/Quiz3/Q40.js";
import Quiz3_41 from "./Components/Questions/Quiz3/Q41.js";
import Quiz3_42 from "./Components/Questions/Quiz3/Q42.js";
import Quiz3_43 from "./Components/Questions/Quiz3/Q43.js";
import Quiz3_44 from "./Components/Questions/Quiz3/Q44.js";
import Quiz3_45 from "./Components/Questions/Quiz3/Q45.js";
import Quiz3_46 from "./Components/Questions/Quiz3/Q46.js";
import Quiz3_47 from "./Components/Questions/Quiz3/Q47.js";
import Quiz3_48 from "./Components/Questions/Quiz3/Q48.js";
import Intro4 from "./Components/Intro4.js";
import Quiz4_1 from "./Components/Questions/Quiz4/Q1.js";
import Quiz4_2 from "./Components/Questions/Quiz4/Q2.js";
import Quiz4_3 from "./Components/Questions/Quiz4/Q3.js";
import Quiz4_4 from "./Components/Questions/Quiz4/Q4.js";
import Quiz4_5 from "./Components/Questions/Quiz4/Q5.js";
import Quiz4_6 from "./Components/Questions/Quiz4/Q6.js";
import Quiz4_7 from "./Components/Questions/Quiz4/Q7.js";
import Quiz4_8 from "./Components/Questions/Quiz4/Q8.js";
import Quiz4_9 from "./Components/Questions/Quiz4/Q9.js";
import Quiz4_10 from "./Components/Questions/Quiz4/Q10.js";
import Quiz4_11 from "./Components/Questions/Quiz4/Q11.js";
import Quiz4_12 from "./Components/Questions/Quiz4/Q12.js";
import Quiz4_13 from "./Components/Questions/Quiz4/Q13.js";
import Quiz4_14 from "./Components/Questions/Quiz4/Q14.js";
import Quiz4_15 from "./Components/Questions/Quiz4/Q15.js";
import Quiz4_16 from "./Components/Questions/Quiz4/Q16.js";
import Quiz4_17 from "./Components/Questions/Quiz4/Q17.js";
import Quiz4_18 from "./Components/Questions/Quiz4/Q18.js";
import Quiz4_19 from "./Components/Questions/Quiz4/Q19.js";
import Quiz4_20 from "./Components/Questions/Quiz4/Q20.js";
import Quiz4_21 from "./Components/Questions/Quiz4/Q21.js";
import Quiz4_22 from "./Components/Questions/Quiz4/Q22.js";
import Quiz4_23 from "./Components/Questions/Quiz4/Q23.js";
import Quiz4_24 from "./Components/Questions/Quiz4/Q24.js";
import Quiz4_25 from "./Components/Questions/Quiz4/Q25.js";
import Quiz4_26 from "./Components/Questions/Quiz4/Q26.js";
import Quiz4_27 from "./Components/Questions/Quiz4/Q27.js";
import Quiz4_28 from "./Components/Questions/Quiz4/Q28.js";
import Quiz4_29 from "./Components/Questions/Quiz4/Q29.js";
import Quiz4_30 from "./Components/Questions/Quiz4/Q30.js";
import Quiz4_31 from "./Components/Questions/Quiz4/Q31.js";
import Quiz4_32 from "./Components/Questions/Quiz4/Q32.js";
import Quiz4_33 from "./Components/Questions/Quiz4/Q33.js";
import Quiz4_34 from "./Components/Questions/Quiz4/Q34.js";
import Quiz4_35 from "./Components/Questions/Quiz4/Q35.js";
import Quiz4_36 from "./Components/Questions/Quiz4/Q36.js";
import Quiz4_37 from "./Components/Questions/Quiz4/Q37.js";
import Quiz4_38 from "./Components/Questions/Quiz4/Q38.js";
import Quiz4_39 from "./Components/Questions/Quiz4/Q39.js";
import Quiz4_40 from "./Components/Questions/Quiz4/Q40.js";
import Quiz4_41 from "./Components/Questions/Quiz4/Q41.js";
import Quiz4_42 from "./Components/Questions/Quiz4/Q42.js";
import Quiz4_43 from "./Components/Questions/Quiz4/Q43.js";
import Quiz4_44 from "./Components/Questions/Quiz4/Q44.js";
import Quiz4_45 from "./Components/Questions/Quiz4/Q45.js";
import Quiz4_46 from "./Components/Questions/Quiz4/Q46.js";
import Quiz4_47 from "./Components/Questions/Quiz4/Q47.js";
import Quiz4_48 from "./Components/Questions/Quiz4/Q48.js";
import Quiz4_49 from "./Components/Questions/Quiz4/Q49.js";
import Quiz4_50 from "./Components/Questions/Quiz4/Q50.js";
import Intro5 from "./Components/Intro5.js";
import Quiz5_1 from "./Components/Questions/Quiz5/Q1.js";
import Quiz5_2 from "./Components/Questions/Quiz5/Q2.js";
import Quiz5_3 from "./Components/Questions/Quiz5/Q3.js";
import Quiz5_4 from "./Components/Questions/Quiz5/Q4.js";
import Quiz5_5 from "./Components/Questions/Quiz5/Q5.js";
import Quiz5_6 from "./Components/Questions/Quiz5/Q6.js";
import Quiz5_7 from "./Components/Questions/Quiz5/Q7.js";
import Quiz5_8 from "./Components/Questions/Quiz5/Q8.js";
import Quiz5_9 from "./Components/Questions/Quiz5/Q9.js";
import Quiz5_10 from "./Components/Questions/Quiz5/Q10.js";
import Quiz5_11 from "./Components/Questions/Quiz5/Q11.js";
import Quiz5_12 from "./Components/Questions/Quiz5/Q12.js";
import Quiz5_13 from "./Components/Questions/Quiz5/Q13.js";
import Quiz5_14 from "./Components/Questions/Quiz5/Q14.js";
import Quiz5_15 from "./Components/Questions/Quiz5/Q15.js";
import Quiz5_16 from "./Components/Questions/Quiz5/Q16.js";
import Quiz5_17 from "./Components/Questions/Quiz5/Q17.js";
import Quiz5_18 from "./Components/Questions/Quiz5/Q18.js";
import Quiz5_19 from "./Components/Questions/Quiz5/Q19.js";
import Quiz5_20 from "./Components/Questions/Quiz5/Q20.js";
import Quiz5_21 from "./Components/Questions/Quiz5/Q21.js";
import Quiz5_22 from "./Components/Questions/Quiz5/Q22.js";
import Quiz5_23 from "./Components/Questions/Quiz5/Q23.js";
// import ResultPDF from "./Components/ResultPDF.js";

const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/instructions' component={Intro} />
        <Route exact path='/instructions2' component={Intro2} />
        <Route exact path='/instructions3' component={Intro3} />
        <Route exact path='/instructions4' component={Intro4} />
        <Route exact path='/instructions5' component={Intro5} />
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
        <Route exact path='/quiz3/question5' component={Quiz3_5} />
        <Route exact path='/quiz3/question6' component={Quiz3_6} />
        <Route exact path='/quiz3/question7' component={Quiz3_7} />
        <Route exact path='/quiz3/question8' component={Quiz3_8} />
        <Route exact path='/quiz3/question9' component={Quiz3_9} />
        <Route exact path='/quiz3/question10' component={Quiz3_10} />
        <Route exact path='/quiz3/question11' component={Quiz3_11} />
        <Route exact path='/quiz3/question12' component={Quiz3_12} />
        <Route exact path='/quiz3/question13' component={Quiz3_13} />
        <Route exact path='/quiz3/question14' component={Quiz3_14} />
        <Route exact path='/quiz3/question15' component={Quiz3_15} />
        <Route exact path='/quiz3/question16' component={Quiz3_16} />
        <Route exact path='/quiz3/question17' component={Quiz3_17} />
        <Route exact path='/quiz3/question18' component={Quiz3_18} />
        <Route exact path='/quiz3/question19' component={Quiz3_19} />
        <Route exact path='/quiz3/question20' component={Quiz3_20} />
        <Route exact path='/quiz3/question21' component={Quiz3_21} />
        <Route exact path='/quiz3/question22' component={Quiz3_22} />
        <Route exact path='/quiz3/question23' component={Quiz3_23} />
        <Route exact path='/quiz3/question24' component={Quiz3_24} />
        <Route exact path='/quiz3/question25' component={Quiz3_25} />
        <Route exact path='/quiz3/question26' component={Quiz3_26} />
        <Route exact path='/quiz3/question27' component={Quiz3_27} />
        <Route exact path='/quiz3/question28' component={Quiz3_28} />
        <Route exact path='/quiz3/question29' component={Quiz3_29} />
        <Route exact path='/quiz3/question30' component={Quiz3_30} />
        <Route exact path='/quiz3/question31' component={Quiz3_31} />
        <Route exact path='/quiz3/question32' component={Quiz3_32} />
        <Route exact path='/quiz3/question33' component={Quiz3_33} />
        <Route exact path='/quiz3/question34' component={Quiz3_34} />
        <Route exact path='/quiz3/question35' component={Quiz3_35} />
        <Route exact path='/quiz3/question36' component={Quiz3_36} />
        <Route exact path='/quiz3/question37' component={Quiz3_37} />
        <Route exact path='/quiz3/question38' component={Quiz3_38} />
        <Route exact path='/quiz3/question39' component={Quiz3_39} />
        <Route exact path='/quiz3/question40' component={Quiz3_40} />
        <Route exact path='/quiz3/question41' component={Quiz3_41} />
        <Route exact path='/quiz3/question42' component={Quiz3_42} />
        <Route exact path='/quiz3/question43' component={Quiz3_43} />
        <Route exact path='/quiz3/question44' component={Quiz3_44} />
        <Route exact path='/quiz3/question45' component={Quiz3_45} />
        <Route exact path='/quiz3/question46' component={Quiz3_46} />
        <Route exact path='/quiz3/question47' component={Quiz3_47} />
        <Route exact path='/quiz3/question48' component={Quiz3_48} />
        <Route exact path='/quiz4/question1' component={Quiz4_1} />
        <Route exact path='/quiz4/question2' component={Quiz4_2} />
        <Route exact path='/quiz4/question3' component={Quiz4_3} />
        <Route exact path='/quiz4/question4' component={Quiz4_4} />
        <Route exact path='/quiz4/question5' component={Quiz4_5} />
        <Route exact path='/quiz4/question6' component={Quiz4_6} />
        <Route exact path='/quiz4/question7' component={Quiz4_7} />
        <Route exact path='/quiz4/question8' component={Quiz4_8} />
        <Route exact path='/quiz4/question9' component={Quiz4_9} />
        <Route exact path='/quiz4/question10' component={Quiz4_10} />
        <Route exact path='/quiz4/question11' component={Quiz4_11} />
        <Route exact path='/quiz4/question12' component={Quiz4_12} />
        <Route exact path='/quiz4/question13' component={Quiz4_13} />
        <Route exact path='/quiz4/question14' component={Quiz4_14} />
        <Route exact path='/quiz4/question15' component={Quiz4_15} />
        <Route exact path='/quiz4/question16' component={Quiz4_16} />
        <Route exact path='/quiz4/question17' component={Quiz4_17} />
        <Route exact path='/quiz4/question18' component={Quiz4_18} />
        <Route exact path='/quiz4/question19' component={Quiz4_19} />
        <Route exact path='/quiz4/question20' component={Quiz4_20} />
        <Route exact path='/quiz4/question21' component={Quiz4_21} />
        <Route exact path='/quiz4/question22' component={Quiz4_22} />
        <Route exact path='/quiz4/question23' component={Quiz4_23} />
        <Route exact path='/quiz4/question24' component={Quiz4_24} />
        <Route exact path='/quiz4/question25' component={Quiz4_25} />
        <Route exact path='/quiz4/question26' component={Quiz4_26} />
        <Route exact path='/quiz4/question27' component={Quiz4_27} />
        <Route exact path='/quiz4/question28' component={Quiz4_28} />
        <Route exact path='/quiz4/question29' component={Quiz4_29} />
        <Route exact path='/quiz4/question30' component={Quiz4_30} />
        <Route exact path='/quiz4/question31' component={Quiz4_31} />
        <Route exact path='/quiz4/question32' component={Quiz4_32} />
        <Route exact path='/quiz4/question33' component={Quiz4_33} />
        <Route exact path='/quiz4/question34' component={Quiz4_34} />
        <Route exact path='/quiz4/question35' component={Quiz4_35} />
        <Route exact path='/quiz4/question36' component={Quiz4_36} />
        <Route exact path='/quiz4/question37' component={Quiz4_37} />
        <Route exact path='/quiz4/question38' component={Quiz4_38} />
        <Route exact path='/quiz4/question39' component={Quiz4_39} />
        <Route exact path='/quiz4/question40' component={Quiz4_40} />
        <Route exact path='/quiz4/question41' component={Quiz4_41} />
        <Route exact path='/quiz4/question42' component={Quiz4_42} />
        <Route exact path='/quiz4/question43' component={Quiz4_43} />
        <Route exact path='/quiz4/question44' component={Quiz4_44} />
        <Route exact path='/quiz4/question45' component={Quiz4_45} />
        <Route exact path='/quiz4/question46' component={Quiz4_46} />
        <Route exact path='/quiz4/question47' component={Quiz4_47} />
        <Route exact path='/quiz4/question48' component={Quiz4_48} />
        <Route exact path='/quiz4/question49' component={Quiz4_49} />
        <Route exact path='/quiz4/question50' component={Quiz4_50} />
        <Route exact path='/quiz5/question1' component={Quiz5_1} /> 
        <Route exact path='/quiz5/question2' component={Quiz5_2} /> 
        <Route exact path='/quiz5/question3' component={Quiz5_3} /> 
        <Route exact path='/quiz5/question4' component={Quiz5_4} /> 
        <Route exact path='/quiz5/question5' component={Quiz5_5} /> 
        <Route exact path='/quiz5/question6' component={Quiz5_6} /> 
        <Route exact path='/quiz5/question7' component={Quiz5_7} /> 
        <Route exact path='/quiz5/question8' component={Quiz5_8} /> 
        <Route exact path='/quiz5/question9' component={Quiz5_9} /> 
        <Route exact path='/quiz5/question10' component={Quiz5_10} /> 
        <Route exact path='/quiz5/question11' component={Quiz5_11} /> 
        <Route exact path='/quiz5/question12' component={Quiz5_12} /> 
        <Route exact path='/quiz5/question13' component={Quiz5_13} /> 
        <Route exact path='/quiz5/question14' component={Quiz5_14} /> 
        <Route exact path='/quiz5/question15' component={Quiz5_15} /> 
        <Route exact path='/quiz5/question16' component={Quiz5_16} />
        <Route exact path='/quiz5/question17' component={Quiz5_17} />
        <Route exact path='/quiz5/question18' component={Quiz5_18} />
        <Route exact path='/quiz5/question19' component={Quiz5_19} />
        <Route exact path='/quiz5/question20' component={Quiz5_20} />
        <Route exact path='/quiz5/question21' component={Quiz5_21} />
        <Route exact path='/quiz5/question22' component={Quiz5_22} />
        <Route exact path='/quiz5/question23' component={Quiz5_23} />
        <Route exact path='/results' component={Results} />
        {/* <Route exact path='/download' component={ResultPDF} /> */}
      </Switch>
    </Router>
  );
}
export default App;
