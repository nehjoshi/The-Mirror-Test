import React, { useEffect, useState } from 'react';
import { Grid, makeStyles, useTheme } from '@material-ui/core';
import Bg from "../Images/bg.jpg";
import axios from 'axios';
import { useHistory } from 'react-router';
import Loader from './Loader';
import Ace from '../Images/ace.png';
import Att_Style from '../Images/att_style.png';
import TestInfo from './TestInfo';
import Hope from '../Images/hope.png';
import Bft from '../Images/bft.png';
import Perma from '../Images/perma.png';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "100%",
    minHeight: '100vh',
    backgroundImage: `url(${Bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    display: "flex",
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    position: 'relative'
  },
  heading: {
    margin: '20px',
    fontSize: 'clamp(1.6rem, 2.6vw, 2.5rem)',
    color: 'gray',
    padding: '15px 15vw',
    boxShadow: "0 0 7px  #7a7a7a",
    background: '#f7f7f7',
    borderRadius: '25px'
  },
  testContainer: {
    justifyContent: 'center'
  },
  profile: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: '#003840',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.3rem',
    color: '#fff',
    fontWeight: '900',
    border: '3px solid transparent',
    transition: '0.2s all ease',
    zIndex: '100',
    '&:hover': {
      cursor: 'pointer',
      borderColor: 'gray',
    },
    [theme.breakpoints.down("md")]: {
      display: 'none'
    }
  },
  profileWrapper: {
    position: 'absolute',
    // height: 'px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#003840',
    right: '20px',
    fontSize: '1.3rem',
    padding: '20px 20px',
    zIndex: '100',
    borderRadius: '10px',
    top: 70,
    color: '#fff'
  },
  logOut: {
    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'underline'
    }
  },

}))

const Dashboard = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const [profileOpen, setProfileOpen] = useState(false);

  useEffect(() => {
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
              setData(res.data);
              localStorage.setItem("result", res.data.quiz1.result);
              localStorage.setItem("result1", res.data.quiz2.result1);
              localStorage.setItem("result2", res.data.quiz2.result2);
              localStorage.setItem("result3", res.data.quiz2.result3);
              localStorage.setItem("result4", res.data.quiz2.result4);
              localStorage.setItem("result1", res.data.quiz3.result1);
              localStorage.setItem("pmb", res.data.quiz3.pmb);
              localStorage.setItem("pvb", res.data.quiz3.pvb);
              localStorage.setItem("psb", res.data.quiz3.psb);
              localStorage.setItem("pmg", res.data.quiz3.pmg);
              localStorage.setItem("pvg", res.data.quiz3.pvg);
              localStorage.setItem("psg", res.data.quiz3.psg);
              localStorage.setItem("e", res.data.quiz4.E);
              localStorage.setItem("a", res.data.quiz4.A);
              localStorage.setItem("c", res.data.quiz4.C);
              localStorage.setItem("n", res.data.quiz4.N);
              localStorage.setItem("o", res.data.quiz4.O);
              localStorage.setItem("P", res.data.quiz5.P);
              localStorage.setItem("E", res.data.quiz5.E);
              localStorage.setItem("R", res.data.quiz5.R);
              localStorage.setItem("M", res.data.quiz5.M);
              localStorage.setItem("A", res.data.quiz5.A);
              localStorage.setItem("N", res.data.quiz5.N);
              localStorage.setItem("H", res.data.quiz5.H);
              localStorage.setItem("LON", res.data.quiz5.LON);
              localStorage.setItem("HAP", res.data.quiz5.HAP);

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
    if (type==='toggle') setProfileOpen(!profileOpen);
    else if (type==='hide') setProfileOpen(false);
  }
  const handleLogOut = () => {
    localStorage.clear();
    sessionStorage.clear();
    history.push('/');
  }

  return loading ? <Grid className={classes.wrapper}><Loader /></Grid> : (
    <>
      {profileOpen &&
        <div className={classes.profileWrapper}>
          <h6>{localStorage.getItem("name")}</h6>
          <h6>{localStorage.getItem("email")}</h6>
          <h6 className={classes.logOut} onClick={handleLogOut}>Log Out</h6>
        </div>
      }
      <div className={classes.profile} onClick={() => handleProfileSection('toggle')}>{localStorage.getItem("name").charAt(0)}</div>
      <Grid className={classes.wrapper} onClick={() => handleProfileSection('hide')}>
        <h1 className={classes.heading}>The Mirror Test</h1>
        <Grid container className={classes.testContainer}>
          <TestInfo heading="Adverse Childhood Experience (ACE) Test" imgSource={Ace} height='200px'
            desc="Adverse Childhood Experiences are what govern our 
          lives and shape our future. Take this test to find out more" progress={data.quiz1.percentage} testNo={1} lastQ={data.quiz1.lastQ} />
          <TestInfo heading="Attachment Style Test" imgSource={Att_Style} height="180px"
            desc="How do you attach with your loved ones or your partner?
           Out of the four attachment styles, secure, 
           anxious, avoidant and disoranized, which one are you?" progress={data.quiz2.percentage} testNo={2} lastQ={data.quiz2.lastQ} />
          <TestInfo heading="Hope and Optimism Test" imgSource={Hope} height="220px"
            desc="How optimistic or pessimistic are you? And how does your level of hope affect your life? Take this test to gain further insights." progress={data.quiz3.percentage} testNo={3} lastQ={data.quiz3.lastQ} />
        </Grid>
        <Grid container className={classes.testContainer}>
          <TestInfo heading="Big Five Personality Test" imgSource={Bft} height='200px'
            desc="Out of the five big personality traits, which one suits you the best? Answer these 50 questions to find out more." progress={data.quiz4.percentage} testNo={4} lastQ={data.quiz4.lastQ} />
          <TestInfo heading="Wellbeing (PERMA) Test" imgSource={Perma} height='200px'
            desc="How do you feel about your overall wellbeing, quality of life and your general health?
          Take the wellbeing test to know more about this." progress={data.quiz5.percentage} testNo={5} lastQ={data.quiz5.lastQ} />
        </Grid>
      </Grid>
    </>
  )
}
export default Dashboard;