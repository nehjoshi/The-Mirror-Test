import React, { useEffect, useState, useRef } from "react";
import { Grid, useTheme } from "@material-ui/core";
import axios from "axios";
import { gsap, Power2 } from "gsap";
import { useHistory } from "react-router-dom";
import { useStyles } from "./QuestionStyles.js";

const Three = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const mainRef = useRef(null);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
 axios
            .get("https://self-growth-questionaire.herokuapp.comverify", {
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
        console.log(e);
      });
  });

  const handleRes = (ans) => {
    const data = { ans: ans, result: parseInt(localStorage.getItem("result")), done: false, email: localStorage.getItem("email"), qno:3}
    axios.post("https://self-growth-questionaire.herokuapp.comquiz1", data,
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
            history.push("/quiz1/question4");
          }, 250);
        }
      })
      .catch((e) => {
        console.log(e);
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
        <h1 className={classes.heading}>Question 3</h1>
        <p className={classes.text}>
        Did an adult or person at least 5 years older than you ever…  <br />
          <b>Touch or fondle you or have you touch their body in a sexual way? </b>
        </p>
        <p
          className={classes.text}
          style={{ textAlign: "center", marginTop: "0px" }}
        >
          or
        </p>
        <p className={classes.text} style={{ marginTop: "0px" }}>
          <b>
          Try to or actually have oral, anal, or vaginal sex with you? 
          </b>
        </p>
        <div className={classes.buttonWrapper}>
            <div className={classes.button} onClick={() => handleRes(1)}>Yes</div>
            <div className={classes.button} onClick={() => handleRes(0)}>No</div>
        </div>
      </Grid>
    </Grid>
  );
};
export default Three;
