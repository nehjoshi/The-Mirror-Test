import React, { useEffect, useState, useRef } from "react";
import { Grid, useTheme, Step, StepLabel, Stepper } from "@material-ui/core";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { PDFDownloadLink } from '@react-pdf/renderer';
import ResultPDF from "./ResultPDF.js";
import ResultPDFWithoutDetails from "./ResultPDFWithoutDetails";
import { useStyles } from "./Styles/ResultStyles";

const Result2 = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [loading, setLoading] = useState(true);
  const [skipped, setSkipped] = useState(false);
  const [result, setResult] = useState([]);
  const history = useHistory();
  const loadingRef1 = useRef(null);
  const steps = ["ACE", "Attachment Style", "Optimism", "Big Five Personality", "Wellbeing"]

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
            setResult(res.data.completeData.result);
            console.log(res.data.completeData);
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
    </Grid>
  ) : (
    <Grid container className={classes.wrapper}>
      <Grid item className={classes.box} style={{ opacity: 1, top: 0, left: 0 }}>
        <Grid className={classes.boxHeader}>
          <h1 className={classes.logo}>The Mirror Test</h1>
          <h1 className={classes.heading}>Results</h1>
        </Grid>
        <Grid className={classes.section}>
          <Stepper activeStep={1} alternativeLabel style={{background: 'transparent'}}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Grid>
        <Grid className={classes.section}>
          <h2 className={classes.subHeading}>Part 2 - Attachment Style</h2>
          <Grid className={classes.resultBox}>
            <p className={classes.paragraph}>An attachment style is a specific way a person connects with others in 
            relationships. According to John Bowlby, a distinguished psychologist, an attachment style is a lasting
            psychological connectedness between human beings. Our early attachment styles are established in childhood 
            through the infant - caregiver relationships. However, adult romantic attachments may or may not be identical to our
            childhood attachment styles. This is due to the fact that our experiences also play an important role in shaping our 
            attachment styles. </p>
            <Grid className={classes.resultBoxHeader}>
              <h1 style={{ fontSize: '3rem' }}>Your attachment style is: {result.quiz2.result} </h1>
            </Grid>
            <p className={classes.paragraph}><strong>{result.quiz2.resultDesc}</strong></p>
          </Grid>
          
            <button className={classes.nextButton} onClick={() => history.push('/results/optimism')}>Next Result</button>
        </Grid>

        {skipped === false ?
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
export default Result2;
