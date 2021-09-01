import React, { useEffect, useState, useRef } from "react";
import { Grid, useTheme } from "@material-ui/core";
import axios from "axios";
import { gsap, Power2 } from "gsap";
import { useHistory } from "react-router-dom";
import { useStyles } from "./Questions/Quiz5/QuestionStyles.js"; //We can just use the same question styles for the wrapper
import { jsPDF } from 'jspdf';

const Results = () => {
  const theme = useTheme();
  const classes = useStyles(theme);;
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const loadingRef1 = useRef(null);
  const loadingRef2 = useRef(null);
  const loadingRef3 = useRef(null);
  const [resultACE, setResultACE] = useState(null);
  const [resultOpt, setResultOpt] = useState(null);
  const [resultPERMA, setResultPERMA] = useState(null);



  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("https://self-growth-questionaire.herokuapp.com/verify", {
        headers: {
          "x-access-token": token,
        },
      })
      .then((res) => {
        if (res.data.auth === true) {
          setResultACE(localStorage.getItem("result"));
          setResultOpt(localStorage.getItem("result2"));
          setResultPERMA(localStorage.getItem("PERMA"));
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
          setTimeout(() => {
            setLoading(false);
          }, 6000)
        } else {
          history.push("/");
        }
      })
      .catch((e) => {
        console.log(e);
      });

  }, );

  const handleClick = () => {
      const doc = new jsPDF('portrait', 'px', 'a4', 'false');
      doc.text(20, 20, 'Your ACE Score Results');
      doc.line(20, 30, 600, 30);
      doc.setFontSize(12);
      doc.text(20, 40, `Your Adverse Childhood Experience (ACE) score is ${localStorage.getItem("result")}`);
      doc.text(20, 50, `Your Attachment Style score is ${localStorage.getItem("result2")}`);
      doc.setFontSize(16);
      doc.text(20, 65, `Optimism Score`);
      doc.setFontSize(12);
      doc.text(20, 75, `Extraversion: ${localStorage.getItem("e")}`);
      doc.text(20, 85, `Agreeableness: ${localStorage.getItem("a")}`);
      doc.text(20, 95, `Conscientiousness: ${localStorage.getItem("c")}`);
      doc.text(20, 105, `Neuroticism: ${localStorage.getItem("n")}`);
      doc.text(20, 115, `Openess: ${localStorage.getItem("o")}`);
      doc.text(20, 125, `Your PERMA score is ${localStorage.getItem("PERMA")}`);
      doc.save("Results.pdf");
  }

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
      <Grid item className={classes.box} style={{ opacity: 1, top: 0, left: 0 }}>
        <h1 className={classes.heading}>Results</h1>
        <p className={classes.text}>
          Your ACE score is {resultACE}.<br />
          Your Attachment Style score is {resultOpt}.<br />
          Your PERMA Score is {resultPERMA}.<br />
        </p>
        <div className={classes.button} onClick={handleClick}>Download Results</div>
      </Grid>
    </Grid>
  );
};
export default Results;
