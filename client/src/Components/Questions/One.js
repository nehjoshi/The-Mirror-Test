import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useStyles } from "./QuestionStyles.js";

const One = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);

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
          setLoading(false);
        } else {
          history.push("/");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  });

  const handleRes = (res) => {

  }

  const classes = useStyles();
  console.log(classes);
  return loading ? (
    <Grid container className={classes.wrapper}>
      loading
    </Grid>
  ) : (
    <Grid container className={classes.wrapper}>
      <Grid className={classes.box}>
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
            <div className={classes.button} onClick={() => handleRes(1)}>Yes</div>
            <div className={classes.button} onClick={() => handleRes(0)}>No</div>
        </div>
      </Grid>
    </Grid>
  );
};
export default One;
