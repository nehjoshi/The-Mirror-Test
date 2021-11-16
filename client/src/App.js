import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.css";
import { One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten } from "./Components/Questions/Quiz1";
import { Quiz2One, Quiz2Two, Quiz2Three, Quiz2Four, Quiz2Five, Quiz2Six, Quiz2Seven, Quiz2Eight, Quiz2Nine, Quiz2Ten, Quiz2Eleven, Quiz2Twelve, Quiz2Thirteen, Quiz2Fourteen, Quiz2Fifteen, Quiz2Sixteen, Quiz2Seventeen, Quiz2Eighteen, Quiz2Nineteen, Quiz2Twenty, Quiz2TwentyOne, Quiz2TwentyTwo, Quiz2TwentyThree, Quiz2TwentyFour, Quiz2TwentyFive, Quiz2TwentySix, Quiz2TwentySeven, Quiz2TwentyEight, Quiz2TwentyNine, Quiz2Thirty, Quiz2ThirtyOne, Quiz2ThirtyTwo, Quiz2ThirtyThree, Quiz2ThirtyFour, Quiz2ThirtyFive, Quiz2ThirtySix, Quiz2ThirtySeven, Quiz2ThirtyEight, Quiz2ThirtyNine, Quiz2Fourty } from "./Components/Questions/Quiz2";
import { Quiz3_1, Quiz3_2, Quiz3_3, Quiz3_4, Quiz3_5, Quiz3_6, Quiz3_7, Quiz3_8, Quiz3_9, Quiz3_10, Quiz3_11, Quiz3_12, Quiz3_13, Quiz3_14, Quiz3_15, Quiz3_16, Quiz3_17, Quiz3_18, Quiz3_19, Quiz3_20, Quiz3_21, Quiz3_22, Quiz3_23, Quiz3_24, Quiz3_25, Quiz3_26, Quiz3_27, Quiz3_28, Quiz3_29, Quiz3_30, Quiz3_31, Quiz3_32, Quiz3_33, Quiz3_34, Quiz3_35, Quiz3_36, Quiz3_37, Quiz3_38, Quiz3_39, Quiz3_40, Quiz3_41, Quiz3_42, Quiz3_43, Quiz3_44, Quiz3_45, Quiz3_46, Quiz3_47, Quiz3_48 } from "./Components/Questions/Quiz3";
import { Quiz4_1, Quiz4_2, Quiz4_3, Quiz4_4, Quiz4_5, Quiz4_6, Quiz4_7, Quiz4_8, Quiz4_9, Quiz4_10, Quiz4_11, Quiz4_12, Quiz4_13, Quiz4_14, Quiz4_15, Quiz4_16, Quiz4_17, Quiz4_18, Quiz4_19, Quiz4_20, Quiz4_21, Quiz4_22, Quiz4_23, Quiz4_24, Quiz4_25, Quiz4_26, Quiz4_27, Quiz4_28, Quiz4_29, Quiz4_30, Quiz4_31, Quiz4_32, Quiz4_33, Quiz4_34, Quiz4_35, Quiz4_36, Quiz4_37, Quiz4_38, Quiz4_39, Quiz4_40, Quiz4_41, Quiz4_42, Quiz4_43, Quiz4_44, Quiz4_45, Quiz4_46, Quiz4_47, Quiz4_48, Quiz4_49, Quiz4_50 } from "./Components/Questions/Quiz4/index.js";
import { Quiz5_1, Quiz5_2, Quiz5_3, Quiz5_4, Quiz5_5, Quiz5_6, Quiz5_7, Quiz5_8, Quiz5_9, Quiz5_10, Quiz5_11, Quiz5_12, Quiz5_13, Quiz5_14, Quiz5_15, Quiz5_16, Quiz5_17, Quiz5_18, Quiz5_19, Quiz5_20, Quiz5_21, Quiz5_22, Quiz5_23 } from "./Components/Questions/Quiz5/index.js";
import { Home, Intro, Register, Login, Results, Intro2, Intro3, Intro4, Intro5, ResetPassword, NewPassword, Dashboard, Landing, DetailsForm1, DetailsForm2 } from "./Components/index.js";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path='/login' component={Login} />
        <Route exact path="/details" component={DetailsForm1} />
        <Route exact path="/details2" component={DetailsForm2} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/reset_password' component={ResetPassword} />
        <Route path='/reset_password/:resetToken' component={NewPassword} />
        <Route exact path='/instructions1' component={Intro} />
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
