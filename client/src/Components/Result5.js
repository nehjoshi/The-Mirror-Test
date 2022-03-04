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
    <Grid container className={classes.wrapper} style={{ height: '100vh', alignItems: 'center' }}>
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
            <h3 className={classes.subHeading}>What is wellbeing?</h3>
            <p className={classes.paragraph}>In simple terms, wellbeing is about feeling good and functioning well.
              Wellbeing comprises a person's experience of life and a comparison of life circumstances with social norms
              and values.</p>
            <p className={classes.paragraph}>As per research in positive psychology, wellbeing has five main pillars. They are: </p>
            <p className={classes.paragraph}><strong>1. Positive/Negative Emotions: These are the emotions we feel. Joy and
              satisfaction are examples of positive emotions whereas anger and sadness are examples of negative emotions.</strong></p>

             <p className={classes.paragraph}><strong>2. Engagement: Engagement refers to being absorbed, interested and involved
               in an activity or the world itself.</strong></p> 
            <p className={classes.paragraph}><strong>3. Relationships: Relationships refer to feeling loved, supported and being
              valued by others.</strong></p>
            <p className={classes.paragraph}><strong>4. Meaning: Meaning refers to having a sense of purpose in life, a direction
              where life is going, connecting to something greater than ourselves, such as religious faith, charity, or a personal
              meaninful goal.</strong></p>
            <p className={classes.paragraph}><strong>5. Accomplishment: Accomplishment refers to something that has been 
              successfully achieved.</strong></p>

            <Grid className={classes.resultBoxHeader}>
              <h1 style={{ fontSize: '3rem' }}>Your PERMA score is: {result.quiz5.result} </h1>
            </Grid>
            

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
