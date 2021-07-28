import React, { useEffect, useRef, useState } from "react";
import { Grid } from "@material-ui/core";
import axios from "axios";
import { gsap, Power2 } from "gsap";
import { useHistory } from "react-router-dom";
import { useStyles } from "./QuestionStyles.js";

const One = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const mainRef = useRef(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    window.history.forward();
    function noBack() {
        window.history.forward();
    }
        
    axios
      .get(" /verify", {
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
          }, 2000);
        } else {
          history.push("/");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  });

  const handleRes = (ans) => {
    const data = {ans: ans, result: 0}
    axios.post(" /quiz1", data,
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
            history.push("/quiz1/question2");
          }, 750);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const classes = useStyles();

  return loading ? (
    <Grid container className={classes.wrapper}>
      loading
    </Grid>
  ) : (
    <Grid container className={classes.wrapper}>
      <Grid className={classes.box} ref={mainRef}>
        <h1 className={classes.heading}>Question 1</h1>
        <p className={classes.text}>
          Did a parent or other adult in the household often … <br />
          <b>Swear at you, insult you, put you down, or humiliate you?</b>
        </p>
        <p
          className={classes.text}
          style={{ textAlign: "center", marginTop: "0px" }}
        >
          or
        </p>
        <p className={classes.text} style={{ marginTop: "0px" }}>
          <b>
            Act in a way that made you afraid that you might be physically hurt?
          </b>
        </p>
        <div className={classes.buttonWrapper}>
          <div className={classes.button} onClick={() => handleRes(1)}>
            Yes
          </div>
          <div className={classes.button} onClick={() => handleRes(0)}>
            No
          </div>
        </div>
      </Grid>
    </Grid>
  );
};
export default One;
