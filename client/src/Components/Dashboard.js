import React, { useEffect, useState } from 'react';
import { Grid, useTheme } from '@material-ui/core';
import axios from 'axios';
import { useHistory } from 'react-router';
import Loader from './Loader';
import Ace from '../Images/ace.png';
import Att_Style from '../Images/att_style.png';
import TestInfo from './TestInfo';
import Hope from '../Images/hope.png';
import Bft from '../Images/bft.png';
import Perma from '../Images/perma.png';
import { useStyles } from "./Styles/DashboardStyles.js";
import FeedbackModal from './FeedbackModal';
import { Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

const Dashboard = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const [profileOpen, setProfileOpen] = useState(false);
  const [feedback, setFeedback] = useState(false);
  const [snackOpen, setSnackOpen] = useState(false);

  const handleClose = () => {
    setFeedback(false);
  }
  const openSnack = () => {
    setSnackOpen(true);
  }

  useEffect(() => {
    document.querySelector(".loading").style.display = "none";
    axios
      .get(`https://self-growth-questionaire.herokuapp.com/verify`, {
        headers: {
          "x-access-token": sessionStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (res.data.auth === true) {
          axios.get(`https://self-growth-questionaire.herokuapp.com/fetch/${localStorage.getItem("email")}`)
            .then(res => {
              console.log(res.data);
              setData(res.data);
              setLoading(false);
            })
        } else {
          history.push("/");
        }
      })
      .catch((e) => {

      });
  }, [history])

  const handleProfileSection = (type) => {
    if (type === 'toggle') setProfileOpen(!profileOpen);
    else if (type === 'hide') setProfileOpen(false);
  }
  const handleLogOut = () => {
    localStorage.clear();
    sessionStorage.clear();
    sessionStorage.setItem("logout", true);
    window.location.href = "/";
  }

  return loading ? <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Loader /></div> : (
    <>
      {profileOpen &&
        <div className={classes.profileWrapper}>
          <h6>{localStorage.getItem("name")}</h6>
          <h6>{localStorage.getItem("email")}</h6>
          <h6 className={classes.logOut} onClick={handleLogOut}>Log Out</h6>
        </div>
      }
      <div className={classes.profile} onClick={() => handleProfileSection('toggle')}>{localStorage.getItem("name").charAt(0).toUpperCase()}</div>
      <Grid className={classes.wrapper} onClick={() => handleProfileSection('hide')}>
        <Grid container className={classes.tests} id="tests">
          <Grid container className={classes.testContainer}>
            <TestInfo heading="Adverse Childhood Experiences (ACE) Test" imgSource={Ace} height='200px'
              desc="Adverse Childhood Experiences are what govern our 
          lives and shape our future. Take this test to find out more." progress={data.quiz1.percentage} testNo={1} lastQ={data.quiz1.lastQ} numberOfQ={10} />
            <TestInfo heading="Attachment Style Test" imgSource={Att_Style} height="180px"
              desc="How do you attach with your loved ones or your partner?
           Out of the four attachment styles, secure, 
           anxious, avoidant and disorganized, which one are you?" progress={data.quiz2.percentage} testNo={2} lastQ={data.quiz2.lastQ} numberOfQ={40} />
            <TestInfo heading="Hope and Optimism Test" imgSource={Hope} height="220px"
              desc="How optimistic or pessimistic are you? And how does your level of hope affect your life? Take this test to gain further insights." progress={data.quiz3.percentage} testNo={3} lastQ={data.quiz3.lastQ} numberOfQ={48} />
          </Grid>
          <Grid container className={classes.testContainer}>
            <TestInfo heading="Big Five Personality Test" imgSource={Bft} height='200px'
              desc="Out of the five big personality traits, which one suits you the best? Answer these 50 questions to find out more." progress={data.quiz4.percentage} testNo={4} lastQ={data.quiz4.lastQ} numberOfQ={50} />
            <TestInfo heading="Wellbeing (PERMA) Test" imgSource={Perma} height='200px'
              desc="How do you feel about your overall wellbeing, quality of life and your general health?
          Take the wellbeing test to know more about this." progress={data.quiz5.percentage} testNo={5} lastQ={data.quiz5.lastQ} numberOfQ={23} />
          </Grid>
          <hr className={classes.hr}></hr>
          <Grid container className={classes.result}>
            <h1 className={classes.resultHeading}>Your Results</h1>
            <p className={classes.resultP}>You can view your results once you complete all the five tests given above. You will be able to download a pdf version
              of your results. The button below will be activated as soon as you complete all the tests!</p>
            {!data.finished === true ?
              <button className={classes.resultBtn} onClick={() => history.push('/results/ace')}>View Results</button> :
              <button className={`${classes.resultBtn} ${classes.resultBtnDisabled}`}>View Results</button>
            }
          </Grid>
        </Grid>
        <Grid className={classes.footer}>
          <p>Jivan Safalya | The Mirror Test</p>
          <Grid className={classes.footerBottom}>
            <p className={classes.feedback} onClick={() => setFeedback(true)}>Provide Feedback</p>
            <p className={classes.feedback} onClick={() => history.push('/credits')}> View Credits</p>
            <p className={`${classes.feedback} ${classes.responsiveLogout}`} onClick={handleLogOut}>Log Out</p>
          </Grid>
        </Grid>
        <FeedbackModal open={feedback} handleClose={handleClose} openSnack={openSnack} />
        <Snackbar open={snackOpen} autoHideDuration={6000} onClose={() => setSnackOpen(false)}>
          <Alert onClose={() => setSnackOpen(false)} severity="success">
            Thank you for your valuable feedback!
          </Alert>
        </Snackbar>
      </Grid>
    </>
  )
}
export default Dashboard;