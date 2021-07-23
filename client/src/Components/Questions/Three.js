import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useStyles } from "./QuestionStyles.js";

const Three = () => {
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
            setTimeout(() => {
                setLoading(false);
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
    axios.post('http://localhost:5000/quiz', {qnumber: 1, ans: ans})
    .then(response => {
        if (response.data.success===true){
          history.push('/question3');
        }
      
    })
    .catch(e => {
      console.log(e);
    })
  }

  const classes = useStyles();
  return loading ? (
    <Grid container className={classes.wrapper}>
      loading
    </Grid>
  ) : (
    <Grid container className={classes.wrapper}>
      <Grid className={classes.box}>
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
