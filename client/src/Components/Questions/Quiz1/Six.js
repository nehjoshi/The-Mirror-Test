import React, { useEffect, useState, useRef } from "react";
import { Grid, useTheme } from "@material-ui/core";
import axios from "axios";
import { gsap, Power2 } from "gsap";
import { useHistory } from "react-router-dom";
import { useStyles } from "./QuestionStyles.js";

const Six = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const mainRef = useRef(null);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
 axios
            .get("https://self-growth-questionaire.herokuapp.com/verify", {
        headers: {
          "x-access-token": token,
        },
      })
      .then((res) => {
        if (res.data.auth === true) {
            setTimeout(() => {
                setLoading(false);
                gsap.to(mainRef.current, {
                  duration: 0.5,
                  left: 0,
                  top: 0,
                  opacity: 1,
                  
                });
              }, 750);
        } else {
          history.push("/");
        }
      })
      .catch((e) => {
        
      });
  });

  const handleRes = (ans) => {
    const data = { ans: ans, result: parseInt(localStorage.getItem("result")), done: false, email: localStorage.getItem("email"), qno:6}
    axios.post("https://self-growth-questionaire.herokuapp.com/quiz1", data,
        {
          headers: {
            "x-access-token": localStorage.getItem("token"),
          }
        })
      .then((response) => {
  
        if (response.data.success === true) {
          localStorage.setItem("result", response.data.result);
          gsap.to(mainRef.current, {
            left: -1000,
            
            duration: 0.5,
            opacity: 0,
            ease: Power2.easeOut,
          });
          setTimeout(() => {
            history.push("/quiz1/question7");
          }, 250);
        }
      })
      .catch((e) => {
        
      });
  };

  const theme = useTheme();
  const classes = useStyles(theme);;
  return loading ? (
        <Grid container className={classes.wrapper}>
            Loading...
        </Grid>
  ) : (
    <Grid container className={classes.wrapper}>
      <Grid className={classes.box} ref={mainRef}>
        <h1 className={classes.heading}>Question 6</h1>
        <p className={classes.text} style={{marginTop: '30px'}}>
        Were your parents <b>ever</b> separated or divorced?
        </p>


        <div className={classes.buttonWrapper}>
            <div className={classes.button} onClick={() => handleRes(1)}>Yes</div>
            <div className={classes.button} onClick={() => handleRes(0)}>No</div>
        </div>
      </Grid>
    </Grid>
  );
};
export default Six;
