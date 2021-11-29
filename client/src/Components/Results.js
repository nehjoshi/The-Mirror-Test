import React, { useEffect, useState, useRef } from "react";
import { Grid, makeStyles, useTheme } from "@material-ui/core";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { PDFDownloadLink } from '@react-pdf/renderer';
import ResultPDF from "./ResultPDF.js";
import ResultPDFWithoutDetails from "./ResultPDFWithoutDetails";
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
  const [skipped, setSkipped] = useState(false);
  const history = useHistory();
  const loadingRef1 = useRef(null);
  const loadingRef2 = useRef(null);
  const loadingRef3 = useRef(null);

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    axios.get(`https://self-growth-questionaire.herokuapp.com/fetch-result?email=${localStorage.getItem("email")}`, {
      headers: {
        "x-access-token": token,
      },
    })
      .then((res) => {
        if (res.data.auth === true) {
          setTimeout(() => {
            setSkipped(res.data.completeData.skippedDetails);
            setLoading(false);
          }, 100)
        } else {
          history.push("/");
        }
      })
      .catch((e) => {

      });

  }, [history])

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
          Your ACE score is .<br />
          Your Attachment Style is.<br />
          Your Optimism Score is {localStorage.getItem("optScore")}<br />
          Your Hope Score is {localStorage.getItem("hopeScore")}<br />
          Your Self-esteem score is {localStorage.getItem("esteemScore")}<br />
          Your Extraversion score is {localStorage.getItem("e")}<br />
          Your Agreeableness score is {localStorage.getItem("a")}<br />
          Your Conscientiousness score is {localStorage.getItem("c")}<br />
          Your Neuroticism score is {localStorage.getItem("n")}<br />
          Your Openess score is {localStorage.getItem("o")}<br />
          Your PERMA Score is.<br />
        </p>
        {skipped===false ?
          <PDFDownloadLink document={<ResultPDF />} fileName="Results.pdf">
            {({ blob, url, loading, error }) => (loading ? "Loading..." : <div className={classes.button} >Download Results</div>)}
          </PDFDownloadLink>
          :
          <PDFDownloadLink document={<ResultPDFWithoutDetails />} fileName="Results.pdf">
          {({ blob, url, loading, error }) => (loading ? "Loading..." : <div className={classes.button} >Download Results</div>)}
        </PDFDownloadLink>
        }
      </Grid>
    </Grid>
  );
};
export default Results;
