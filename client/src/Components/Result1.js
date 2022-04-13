import React, { useEffect, useState } from "react";
import { Grid, useTheme, Step, StepLabel, Stepper } from "@material-ui/core";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { PDFDownloadLink } from '@react-pdf/renderer';
import ResultPDF from "./ResultPDF.js";
import ResultPDFWithoutDetails from "./ResultPDFWithoutDetails";
import { Table, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress } from '@material-ui/core';
import { useStyles } from "./Styles/ResultStyles";

const Result1 = () => {
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
          <Grid className={classes.section1Header}>
            <h1 className={classes.heading}>Basic Information</h1>
          </Grid>
          <TableContainer component={Paper} className={classes.tableWrapper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell><strong className={classes.tableLeft}>Name</strong></TableCell>
                  <TableCell align="right"><strong className={classes.tableRight}>Neh Samir Joshi</strong></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><strong className={classes.tableLeft}>Email</strong></TableCell>
                  <TableCell align="right"><strong className={classes.tableRight}>nehjoshi5@gmail.com</strong></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><strong className={classes.tableLeft}>Nationality</strong></TableCell>
                  <TableCell align="right"><strong className={classes.tableRight}>British</strong></TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
        </Grid>
        <Stepper activeStep={0} alternativeLabel className={classes.stepper}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Grid className={classes.section}>
          <h1 className={classes.heading} style={{ margin: '0 auto' }}>Your Results</h1>
          <h2 className={classes.subHeading}>Part 1 - Adverse Childhood Experience (ACE)</h2>
          <Grid className={classes.resultBox}>
            <h3 className={classes.heading}>What is ACE?</h3>
            <p className={classes.paragraph}>ACEs stand for Adverse Childhood Experiences. They are negative experiences
              a child may go through before the age of 18. Examples include: physical or
              sexual abuse, violence with a child or to a family member, child neglect by
              caregivers or a death of a family member. These kind of traumatic experiences (ACEs)
              are linked to chronic health issues, mental illness and substance abuse in adulthood.
              They can also negatively impact education, job opportunities, earning potential and relationships. </p>
            <Grid className={classes.resultBoxHeader}>
              <h1 className={classes.subHeading} style={{ color: "black", textDecoration: 'none' }}>Your ACE score is: </h1>
              <h1 style={{ fontSize: '3rem' }}>{result.quiz1.result}</h1>
            </Grid>
            <p className={classes.paragraph}><strong>{result.quiz1.resultDesc}</strong></p>
          </Grid>

          <button className={classes.nextButton} onClick={() => history.push('/results/attachment-style')}>Next Result</button>
        </Grid>

        <Grid className={classes.tempWrapper}>
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
    </Grid>
  );
};
export default Result1;
