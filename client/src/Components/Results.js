import React, { useEffect, useState, useRef } from "react";
import { Grid, useTheme } from "@material-ui/core";
import axios from "axios";
import { gsap, Power2 } from "gsap";
import { useHistory } from "react-router-dom";
import { useStyles } from "./Questions/Quiz1/QuestionStyles.js"; //We can just use the same question styles for the wrapper

const Results = () => {
  const theme = useTheme();
  const classes = useStyles(theme);;
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const loadingRef1 = useRef(null);
  const loadingRef2 = useRef(null);
  const loadingRef3 = useRef(null);
  const [result, setResult] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    
    axios
      .get("/verify", {
        headers: {
          "x-access-token": token,
        },
      })
      .then((res) => {
        if (res.data.auth === true) {
          setResult(localStorage.getItem("result"));
          gsap.to(loadingRef1.current, {
            top: -50,
            position: "relative",
            opacity: 0,
            ease: Power2.easeIn,
            delay: 0.5,
            display: "none",
            duration: 0.2,
          });
          gsap.to(loadingRef2.current, {
            top: 0,
            opacity: 1,
            display: "block",
            duration: 0.2,
            delay: 0.7,
          });
          gsap.to(loadingRef2.current, {
            top: -50,
            opacity: 0,
            duration: 0.2,
            delay: 2.7,
            display: "none",
            ease: Power2.easeIn,
          });
          gsap.to(loadingRef3.current, {
            top: 0,
            opacity: 1,
            duration: 0.2,
            delay: 2.9,
            display: "block",
            ease: Power2.easeIn,
          });

          gsap.to(loadingRef3.current, {
            top: -50,
            opacity: 0,
            duration: 0.2,
            display: "none",
            delay: 5,
            ease: Power2.easeIn,
          });
          setTimeout(() => {setLoading(false)}, 6000)
        } else {
          history.push("/");
        }
      })
      .catch((e) => {
        console.log(e);
      });

  });

  return loading ? (
    <Grid container className={classes.wrapper}>
      <div ref={loadingRef1}>Loading...</div>
      <p
        ref={loadingRef2}
        style={{
          display: "none",
          opacity: 0,
          position: "relative",
          top: "50px",
        }}
      >
        Consolidating Results...
      </p>
      <p
        ref={loadingRef3}
        style={{
          display: "none",
          opacity: 0,
          position: "relative",
          top: "50px",
        }}
      >
        Finishing Up...
      </p>
    </Grid>
  ) : (
    <Grid container className={classes.wrapper}>
      <Grid item className={classes.box} style={{opacity: 1, top: 0, left: 0}}>
        <h1 className={classes.heading}>Results</h1>
        <p className={classes.text}>
          Your ACE score is {result}
        </p>

      </Grid>
    </Grid>
  );
};
export default Results;
