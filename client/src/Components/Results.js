import React, { useEffect, useState, useRef } from "react";
import { Grid, makeStyles, useTheme } from "@material-ui/core";
import axios from "axios";
import { gsap, Power2 } from "gsap";
import { useHistory } from "react-router-dom";
// import { useStyles } from "./Questions/Quiz5/QuestionStyles.js"; //We can just use the same question styles for the wrapper
import { PDFDownloadLink } from '@react-pdf/renderer';
import ResultPDF from "./ResultPDF.js";
import Bg from '../Images/bg.jpg';

const useStyles = makeStyles((theme) => ({
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
    height: "650px",
    width: "93%",
    backgroundColor: "#f7f7f7",
    borderRadius: "20px",
    boxShadow: "0 0 7px  #7a7a7a",
    color: "#333333",
    padding: "10px 10px",
    position: "relative",
    left: '1000px',
    opacity: 0,
    [theme.breakpoints.down("sm")]: {
      width: '90%'
    }
  },
}))

const Results = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const loadingRef1 = useRef(null);
  const loadingRef2 = useRef(null);
  const loadingRef3 = useRef(null);
  const [resultACE, setResultACE] = useState(null);
  const [resultOpt, setResultOpt] = useState(null);
  const [resultPERMA, setResultPERMA] = useState(null);



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
      <Grid item className={classes.box} style={{ opacity: 1, top: 0, left: 0 }}>
        <h1 className={classes.heading}>Results</h1>
        <p className={classes.text}>
          Your ACE score is {resultACE}.<br />
          Your Attachment Style is {resultOpt}.<br />
          Your Optimism Score is {localStorage.getItem("optScore")}<br />
          Your Hope Score is {localStorage.getItem("hopeScore")}<br />
          Your Self-esteem score is {localStorage.getItem("esteemScore")}<br />
          Your Extraversion score is {localStorage.getItem("e")}<br />
          Your Agreeableness score is {localStorage.getItem("a")}<br />
          Your Conscientiousness score is {localStorage.getItem("c")}<br />
          Your Neuroticism score is {localStorage.getItem("n")}<br />
          Your Openess score is {localStorage.getItem("o")}<br />
          Your PERMA Score is {resultPERMA}.<br />
        </p>
        <PDFDownloadLink document={<ResultPDF />} fileName="Results.pdf">
          {({ blob, url, loading, error }) => (loading ? 'Loading document...' : <div className={classes.button} >Download Results</div>)}
        </PDFDownloadLink>
      </Grid>
    </Grid>
  );
};
export default Results;
