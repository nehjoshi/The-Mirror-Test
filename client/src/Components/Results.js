import React, { useEffect, useState, useRef } from "react";
import { Grid, useTheme } from "@material-ui/core";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { PDFDownloadLink } from '@react-pdf/renderer';
import ResultPDF from "./ResultPDF.js";
import ResultPDFWithoutDetails from "./ResultPDFWithoutDetails";
import {Table, TableCell, TableContainer, TableHead, TableRow, Paper} from '@material-ui/core';
import { useStyles } from "./Styles/ResultStyles";

const Results = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [loading, setLoading] = useState(true);
  const [skipped, setSkipped] = useState(false);
  const history = useHistory();
  const loadingRef1 = useRef(null);

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
    </Grid>
  ) : (
    <Grid container className={classes.wrapper}>
      <Grid item className={classes.box} style={{ opacity: 1, top: 0, left: 0 }}>
        <Grid className={classes.boxHeader}>
          <h1 className={classes.logo}>The Mirror Test</h1>
          <h1 className={classes.heading}>Results</h1>
        </Grid>
        <Grid className={classes.section1}>
          <Grid className={classes.section1Header}>
            <h1 className={classes.section1Heading}>Basic Information</h1>
          </Grid>
          <TableContainer component={Paper} style={{width: '80%', margin: '20px auto'}}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell><strong style={{fontSize: '1.5rem', color: "#005751"}}>Name</strong></TableCell>
                  <TableCell align="right"><strong style={{fontSize: '1.5rem'}}>Neh Samir Joshi</strong></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><strong style={{fontSize: '1.5rem', color: "#005751"}}>Email</strong></TableCell>
                  <TableCell align="right"><strong style={{fontSize: '1.5rem'}}>nehjoshi5@gmail.com</strong></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><strong style={{fontSize: '1.5rem', color: "#005751"}}>Nationality</strong></TableCell>
                  <TableCell align="right"><strong style={{fontSize: '1.5rem'}}>British</strong></TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
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
export default Results;
