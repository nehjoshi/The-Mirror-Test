import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';  
import "./App.css";
import { One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten } from "./Components/Questions/Quiz1";
import { Quiz2One, Quiz2Two, Quiz2Three, Quiz2Four, Quiz2Five, Quiz2Six, Quiz2Seven, Quiz2Eight, Quiz2Nine, Quiz2Ten, Quiz2Eleven, Quiz2Twelve, Quiz2Thirteen, Quiz2Fourteen, Quiz2Fifteen, Quiz2Sixteen, Quiz2Seventeen, Quiz2Eighteen, Quiz2Nineteen, Quiz2Twenty, Quiz2TwentyOne, Quiz2TwentyTwo, Quiz2TwentyThree, Quiz2TwentyFour, Quiz2TwentyFive, Quiz2TwentySix, Quiz2TwentySeven, Quiz2TwentyEight, Quiz2TwentyNine, Quiz2Thirty, Quiz2ThirtyOne, Quiz2ThirtyTwo, Quiz2ThirtyThree, Quiz2ThirtyFour, Quiz2ThirtyFive, Quiz2ThirtySix, Quiz2ThirtySeven, Quiz2ThirtyEight, Quiz2ThirtyNine, Quiz2Fourty } from "./Components/Questions/Quiz2";
import { Quiz3_1, Quiz3_2, Quiz3_3, Quiz3_4, Quiz3_5, Quiz3_6, Quiz3_7, Quiz3_8, Quiz3_9, Quiz3_10, Quiz3_11, Quiz3_12, Quiz3_13, Quiz3_14, Quiz3_15, Quiz3_16, Quiz3_17, Quiz3_18, Quiz3_19, Quiz3_20, Quiz3_21, Quiz3_22, Quiz3_23, Quiz3_24, Quiz3_25, Quiz3_26, Quiz3_27, Quiz3_28, Quiz3_29, Quiz3_30, Quiz3_31, Quiz3_32, Quiz3_33, Quiz3_34, Quiz3_35, Quiz3_36, Quiz3_37, Quiz3_38, Quiz3_39, Quiz3_40, Quiz3_41, Quiz3_42, Quiz3_43, Quiz3_44, Quiz3_45, Quiz3_46, Quiz3_47, Quiz3_48 } from "./Components/Questions/Quiz3";
import { Quiz4_1, Quiz4_2, Quiz4_3, Quiz4_4, Quiz4_5, Quiz4_6, Quiz4_7, Quiz4_8, Quiz4_9, Quiz4_10, Quiz4_11, Quiz4_12, Quiz4_13, Quiz4_14, Quiz4_15, Quiz4_16, Quiz4_17, Quiz4_18, Quiz4_19, Quiz4_20, Quiz4_21, Quiz4_22, Quiz4_23, Quiz4_24, Quiz4_25, Quiz4_26, Quiz4_27, Quiz4_28, Quiz4_29, Quiz4_30, Quiz4_31, Quiz4_32, Quiz4_33, Quiz4_34, Quiz4_35, Quiz4_36, Quiz4_37, Quiz4_38, Quiz4_39, Quiz4_40, Quiz4_41, Quiz4_42, Quiz4_43, Quiz4_44, Quiz4_45, Quiz4_46, Quiz4_47, Quiz4_48, Quiz4_49, Quiz4_50 } from "./Components/Questions/Quiz4/index.js";
import { Quiz5_1, Quiz5_2, Quiz5_3, Quiz5_4, Quiz5_5, Quiz5_6, Quiz5_7, Quiz5_8, Quiz5_9, Quiz5_10, Quiz5_11, Quiz5_12, Quiz5_13, Quiz5_14, Quiz5_15, Quiz5_16, Quiz5_17, Quiz5_18, Quiz5_19, Quiz5_20, Quiz5_21, Quiz5_22, Quiz5_23 } from "./Components/Questions/Quiz5/index.js";
import { Home, Intro1, Register, Login, Result1, Result2, Intro2, Intro3, Intro4, Intro5, ResetPassword, NewPassword, Dashboard, Landing, DetailsForm1, DetailsForm2 } from "./Components/index.js";
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
        <Route exact path='/instructions1' component={Intro1} />
        <Route exact path='/instructions2' component={Intro2} />
        <Route exact path='/instructions3' component={Intro3} />
        <Route exact path='/instructions4' component={Intro4} />
        <Route exact path='/instructions5' component={Intro5} />
        {[One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten].map((item, index) => {
          return (
            <Route exact path={`/quiz1/question${index+1}`} component={item} />
          );
          })}
          {[Quiz2One, Quiz2Two, Quiz2Three, Quiz2Four, Quiz2Five, Quiz2Six, Quiz2Seven, Quiz2Eight, Quiz2Nine, Quiz2Ten, Quiz2Eleven, Quiz2Twelve, Quiz2Thirteen, Quiz2Fourteen, Quiz2Fifteen, Quiz2Sixteen, Quiz2Seventeen, Quiz2Eighteen, Quiz2Nineteen, Quiz2Twenty, Quiz2TwentyOne, Quiz2TwentyTwo, Quiz2TwentyThree, Quiz2TwentyFour, Quiz2TwentyFive, Quiz2TwentySix, Quiz2TwentySeven, Quiz2TwentyEight, Quiz2TwentyNine, Quiz2Thirty, Quiz2ThirtyOne, Quiz2ThirtyTwo, Quiz2ThirtyThree, Quiz2ThirtyFour, Quiz2ThirtyFive, Quiz2ThirtySix, Quiz2ThirtySeven, Quiz2ThirtyEight, Quiz2ThirtyNine, Quiz2Fourty].map((item, index) => {
            return (
              <Route exact path={`/quiz2/question${index+1}`} component={item} />
            )
          })}
          {[Quiz3_1, Quiz3_2, Quiz3_3, Quiz3_4, Quiz3_5, Quiz3_6, Quiz3_7, Quiz3_8, Quiz3_9, Quiz3_10, Quiz3_11, Quiz3_12, Quiz3_13, Quiz3_14, Quiz3_15, Quiz3_16, Quiz3_17, Quiz3_18, Quiz3_19, Quiz3_20, Quiz3_21, Quiz3_22, Quiz3_23, Quiz3_24, Quiz3_25, Quiz3_26, Quiz3_27, Quiz3_28, Quiz3_29, Quiz3_30, Quiz3_31, Quiz3_32, Quiz3_33, Quiz3_34, Quiz3_35, Quiz3_36, Quiz3_37, Quiz3_38, Quiz3_39, Quiz3_40, Quiz3_41, Quiz3_42, Quiz3_43, Quiz3_44, Quiz3_45, Quiz3_46, Quiz3_47, Quiz3_48].map((item, index) => {
            return (
              <Route exact path={`/quiz3/question${index+1}`} component={item} />
            )
            })}
          {[Quiz4_1, Quiz4_2, Quiz4_3, Quiz4_4, Quiz4_5, Quiz4_6, Quiz4_7, Quiz4_8, Quiz4_9, Quiz4_10, Quiz4_11, Quiz4_12, Quiz4_13, Quiz4_14, Quiz4_15, Quiz4_16, Quiz4_17, Quiz4_18, Quiz4_19, Quiz4_20, Quiz4_21, Quiz4_22, Quiz4_23, Quiz4_24, Quiz4_25, Quiz4_26, Quiz4_27, Quiz4_28, Quiz4_29, Quiz4_30, Quiz4_31, Quiz4_32, Quiz4_33, Quiz4_34, Quiz4_35, Quiz4_36, Quiz4_37, Quiz4_38, Quiz4_39, Quiz4_40, Quiz4_41, Quiz4_42, Quiz4_43, Quiz4_44, Quiz4_45, Quiz4_46, Quiz4_47, Quiz4_48, Quiz4_49, Quiz4_50].map((item, index) => {
            return (
              <Route exact path={`/quiz4/question${index+1}`} component={item} />
            )
            })}
          {[Quiz5_1, Quiz5_2, Quiz5_3, Quiz5_4, Quiz5_5, Quiz5_6, Quiz5_7, Quiz5_8, Quiz5_9, Quiz5_10, Quiz5_11, Quiz5_12, Quiz5_13, Quiz5_14, Quiz5_15, Quiz5_16, Quiz5_17, Quiz5_18, Quiz5_19, Quiz5_20, Quiz5_21, Quiz5_22, Quiz5_23].map((item, index) => {
            return (
              <Route exact path={`/quiz5/question${index+1}`} component={item} />
            )
            })}
        <Route exact path='/results/ace' component={Result1} />
        <Route exact path='/results/attachment-style' component={Result2} />
      </Switch>
    </Router>
  );
}
export default App;
