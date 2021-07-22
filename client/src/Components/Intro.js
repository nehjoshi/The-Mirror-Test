import React, { useEffect, useRef, useState } from "react";
import Bg from "../Images/bg.jpg";
import { makeStyles, Grid } from "@material-ui/core";
import gsap, { Power2 } from "gsap";
import axios from "axios";

const useStyles = makeStyles(() => ({
  wrapper: {
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${Bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  box: {
    height: "550px",
    width: "400px",
    backgroundColor: "#f7f7f7",
    borderRadius: "20px",
    boxShadow: "0 0 7px  #7a7a7a",
    color: "#333333",
    padding: "10px 10px",
    position: "relative",
  },
}));

const Intro = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:5000/intro", {
        headers: {
          "x-access-token": token,
        },
      })
      .then((res) => {
        if (res.data.auth === true) {
          setLoading(false);
        } else {
          console.log(res.data.error);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  });

  return loading ? (
    <Grid container className={classes.wrapper}>
      loading
    </Grid>
  ) : (
    <Grid container className={classes.wrapper}>
      <Grid item className={classes.box}>
          <h1>Disclaimer</h1>
      </Grid>
    </Grid>
  );
};
export default Intro;
