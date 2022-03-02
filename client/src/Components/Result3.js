import React, { useEffect, useState } from "react";
import { Grid, useTheme, Step, StepLabel, Stepper, CircularProgress } from "@material-ui/core";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { PDFDownloadLink } from '@react-pdf/renderer';
import ResultPDF from "./ResultPDF.js";
import ResultPDFWithoutDetails from "./ResultPDFWithoutDetails";
import { useStyles } from "./Styles/ResultStyles";

const Result3 = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [loading, setLoading] = useState(true);
  const [skipped, setSkipped] = useState(false);
  const [result, setResult] = useState([]);
  const history = useHistory();
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
    <Grid container className={classes.wrapper} style={{height: '100vh', alignItems: 'center'}}>
      <CircularProgress />
    </Grid>
  ) : (
    <Grid container className={classes.wrapper}>
      <Grid item className={classes.box} style={{ opacity: 1, top: 0, left: 0 }}>
        <Grid className={classes.boxHeader}>
          <h1 className={classes.logo}>The Mirror Test</h1>
          <h1 className={classes.heading}>Results</h1>
        </Grid>
        <Grid className={classes.section}>
          <Stepper activeStep={2} alternativeLabel style={{ background: 'transparent' }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Grid>
        <Grid className={classes.section}>
          <h2 className={classes.subHeading}>Part 3 - Hope and Optimism</h2>
          <Grid className={classes.resultBox}>
            <h3 className={classes.subHeading}>What is Optimism?</h3>
            <p className={classes.paragraph}>Dr. Martin Seligman defines optimisn as reacting to problems with
              a sense of confidence and high personal ability. Optimistic people believe that negative events are temporary,
              limited in scope (instead of pervading every aspect of life) and manageable. </p>
            <Grid className={classes.resultBoxHeader}>
              <h1 style={{ fontSize: '3rem' }}>Your optimism score is: {result.quiz3.optScore} </h1>
              <p className={classes.paragraph}><strong>{result.quiz3.optDesc}</strong></p>
            </Grid>
            <h3 className={classes.subHeading}>What is Hope?</h3>
            <p className={classes.paragraph}>As per the Oxford Dictionary, hope is a belief that something you want will happen.
              This belief is tested in times of misfortune. If we have a tendency to find specific and temporary causes for
              our misfortune, we have learned the art of hope. Contrary to this, if we normally find universal and
              permanent causes for our failures or misfortunes, dispair will be a big part of our lives.</p>
            <Grid className={classes.resultBoxHeader}>
              <h1 style={{ fontSize: '3rem' }}>Your hope score is: {result.quiz3.hopeScore} </h1>
              <p className={classes.paragraph}><strong>{result.quiz3.hopeDesc}</strong></p>
            </Grid>
            <h3 className={classes.subHeading}>What is Self-Esteem?</h3>
            <p className={classes.paragraph}>Self esteem is your opinion about yourself. It describes a person's overall subjective
              sense of personal worth or value. Because this subjective sense can be positive or negative, self esteem can be high,
              moderate or low.</p>
            <Grid className={classes.resultBoxHeader}>
              <h1 style={{ fontSize: '3rem' }}>Your self-esteem score is: {result.quiz3.esteemScore} </h1>
              <p className={classes.paragraph}><strong>{result.quiz3.esteemDesc}</strong></p>
            </Grid>
          </Grid>

          <button className={classes.nextButton} onClick={() => history.push('/results/bfpt')}>Next Result</button>
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
export default Result3;
