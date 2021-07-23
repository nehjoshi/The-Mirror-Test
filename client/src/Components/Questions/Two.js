import React, { useEffect, useState, useRef } from "react";
import { Grid } from "@material-ui/core";
import axios from "axios";
import { gsap, Power2 } from "gsap/";
import { useHistory } from "react-router-dom";
import { useStyles } from "./QuestionStyles.js";

const Two = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const mainRef = useRef(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:5000/verify", {
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
    const data = {ans: ans}
    axios.post("http://localhost:5000/quiz", data,
        {
          headers: {
            "x-access-token": localStorage.getItem("token"),
          }
        })
      .then((response) => {
  
        if (response.data.success === true) {
          gsap.to(mainRef.current, {
            left: -1000,
            top: 50,
            duration: 0.5,
            opacity: 0,
            ease: Power2.easeOut,
          });
          setTimeout(() => {
            history.push("/question3");
          }, 1000);
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
        <h1 className={classes.heading}>Question 2</h1>
        <p className={classes.text}>
          Did a parent or other adult in the household often … <br />
          <b>Push, grab, slap, or throw something at you?</b>
        </p>
        <p
          className={classes.text}
          style={{ textAlign: "center", marginTop: "0px" }}
        >
          or
        </p>
        <p className={classes.text} style={{ marginTop: "0px" }}>
          <b>Ever hit you so hard that you had marks or were injured?</b>
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
export default Two;
