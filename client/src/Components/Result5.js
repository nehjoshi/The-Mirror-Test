import React, { useEffect, useState } from "react";
import { Grid, useTheme, Step, StepLabel, Stepper, CircularProgress } from "@material-ui/core";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { PDFDownloadLink } from '@react-pdf/renderer';
import ResultPDF from "./ResultPDF.js";
import ResultPDFWithoutDetails from "./ResultPDFWithoutDetails";
import { useStyles } from "./Styles/ResultStyles";

const Result5 = () => {
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
          <Stepper activeStep={4} alternativeLabel style={{ background: 'transparent' }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Grid>
        <Grid className={classes.section}>
          <h2 className={classes.subHeading}>Part 5 - PERMA Wellbeing Test</h2>
          <Grid className={classes.resultBox}>
            <h3 className={classes.subHeading}>What is a personality?</h3>
            <p className={classes.paragraph}>In the simplest of terms, the way you feel, think and behave is your personality.
              As per the BFPT model, personality can be measured using five personal characteristics. They are: </p>
            <p className={classes.paragraph}><strong>1. Extraversion: </strong>This is the personality trait of seeking
              fulfillment from sources outside the self or in the community. People with high scores tend to be very social
              while low scorers prefer to work on their own.</p>

            <Grid className={classes.resultBoxHeader}>
              <h1 style={{ fontSize: '3rem' }}>Your extraversion score is: {result.quiz4.E_score.toFixed(2)} </h1>
            </Grid>
            <p className={classes.paragraph} style={{ textAlign: 'center' }}><strong>{result.quiz4.E_desc}</strong></p>
            <p className={classes.paragraph}><strong>2. Agreeableness: </strong>This reflects how much individuals adjust their
              behaviour to suit others. High scorers are typically polite and like people. Low scorers tend to be more blunt.</p>

            <Grid className={classes.resultBoxHeader}>
              <h1 style={{ fontSize: '3rem' }}>Your agreeableness score is: {result.quiz4.A_score.toFixed(2)} </h1>
            </Grid>
            <p className={classes.paragraph} style={{ textAlign: 'center' }}><strong>{result.quiz4.A_desc}</strong></p>

            <p className={classes.paragraph}><strong>3. Conscientiousness: </strong>Conscientiousness is the personality trait
              of being honest and hard working. High scorers tend to follow rules and prefer clean homes. Low scorers may be messy
              and may cheat others.</p>

            <Grid className={classes.resultBoxHeader}>
              <h1 style={{ fontSize: '3rem' }}>Your conscientiousness score is: {result.quiz4.C_score.toFixed(2)} </h1>
            </Grid>
            <p className={classes.paragraph} style={{ textAlign: 'center' }}><strong>{result.quiz4.C_desc}</strong></p>

            <p className={classes.paragraph}><strong>4. Neuroticism: </strong>Neuroticism is the personality trait of being
            emotional. High scorers tend to have high emotional reactions to stress. They may perceive situations as
            threatening and be more likely to feel moody, depressed, angry and axious and may experience mood swings. Low scorers
            tend to be more emotionally stable and less reactive to stress.</p>

            <Grid className={classes.resultBoxHeader}>
              <h1 style={{ fontSize: '3rem' }}>Your neuroticism score is: {result.quiz4.N_score.toFixed(2)} </h1>
            </Grid>
            <p className={classes.paragraph} style={{ textAlign: 'center' }}><strong>{result.quiz4.N_desc}</strong></p>

            <p className={classes.paragraph}><strong>5. Openness: </strong>Openness to experience is the personality trait of
            seeking new experiences and intellectual pursuits. High scorers may day dream a lot (enjoy thinking about new and
            different things). Low scorers tend to be very down to earth (more of a "here and now" way of thinking). 
            Consequently, it is thought that people with higher scores might be more creative, flexible, curious and
            adventurous, whereas people with lower scores might tend to enjoy routines, predictability and structure.</p>

            <Grid className={classes.resultBoxHeader}>
              <h1 style={{ fontSize: '3rem' }}>Your openness score is: {result.quiz4.O_score.toFixed(2)} </h1>
            </Grid>
            <p className={classes.paragraph} style={{ textAlign: 'center' }}><strong>{result.quiz4.O_desc}</strong></p>
          
          </Grid>

          <button className={classes.nextButton} onClick={() => history.push('/dashboard')}>Back to Dashboard</button>
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
export default Result5;
