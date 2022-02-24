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

  const green = {
    backgroundColor: '#00cc30',
  }
  const red = {
    backgroundColor: '#FFBF00',
  }

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
            <p className={classes.paragraph}>ACEs stand for Adverse Childhood Experiences. They are negative experiences
              a child may go through before the age of 18. Examples include: physical or
              sexual abuse, violence with a child or to a family member, child neglect by
              caregivers or a death of a family member. These kind of traumatic experiences (ACEs)
              are linked to chronic health issues, mental illness and substance abuse in adulthood.
              They can also negatively impact education, job opportunities, earning potential and relationships. </p>
            <Grid className={classes.resultBoxHeader}>
              <h1 style={{ fontSize: '3rem' }}>Your ACE score is: </h1>
              <div className={classes.numCircle} style={result.quiz1.result >= 4 ? red : green}>
                <h1 style={{ fontSize: '3rem', color: "#fff" }}>{result.quiz1.result}</h1>
              </div>
            </Grid>
            <h2 className={classes.conditionHeading}>Case 1: If your ACE score is 0</h2>
            <p className={classes.paragraph}>This is a very good score. </p>
            <p className={classes.paragraph}>However, not everyone is as lucky as you are! Around 64%
              of people have ACE score of at least 1 and and 12.5% (6 in 1 people) have ACE score 4 or more.
              Because a higher is score is linked to chronic diseases, mental illness, risky behaviours and early death,
              you can help your family, friends and people you know, by spreading awareness about ACEs.</p>
            <h2 className={classes.conditionHeading}>Case 2: If your ACE score is more than 0 but less than 4</h2>
            <p className={classes.paragraph}>If you don't have any associated health conditions, you fall into low risk category.</p>
            <p className={classes.paragraph}>If you have any associated health conditions as well, you should seek medical help.</p>
            <h2 className={classes.conditionHeading}>Case 3: If your ACE score is 4 or more</h2>
            <p className={classes.paragraph}>Unfortunately, you fall into high risk category for toxic stress
              and its consequences. Because an ACE score like this is linked to chronic diseases, mental illness,
              risky behaviours and early death, you should seek medical help as soon as possible.</p>
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
