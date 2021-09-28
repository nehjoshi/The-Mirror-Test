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

const useStyles = makeStyles(() => ({
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
  },
  testContainer: {
    margin: '20px auto',
    justifyContent: 'center'
  },

}))
const Dashboard = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const history = useHistory();

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
              console.log(res.data);
              setData(res.data);
              setLoading(false);
            })
        } else {
          history.push("/");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, [history])
  return loading ? <Grid className={classes.wrapper}><Loader /></Grid> : (
    <Grid className={classes.wrapper}>
      <h1>The Mirror Test</h1>
      <Grid container className={classes.testContainer}>
        <TestInfo heading="Adverse Childhood Experience (ACE) Test" imgSource={Ace} height='200px'
          desc="Lorum ipsum dolor sir amet conesctier. 
        Lorum ipsum dolor sir amet conesctier. 
        Lorum ipsum dolor sir amet conesctier" progress={data.quiz1.percentage} />
        <TestInfo heading="Attachment Style Test" imgSource={Att_Style} height="225px"
          desc="Lorum ipsum dolor sir amet conesctier. 
        Lorum ipsum dolor sir amet conesctier. 
        Lorum ipsum dolor sir amet conesctier" progress={data.quiz2.percentage} />
        <TestInfo heading="Hope and Optimism Test" imgSource={Hope} height="220px"
          desc="Lorum ipsum dolor sir amet conesctier. 
        Lorum ipsum dolor sir amet conesctier. 
        Lorum ipsum dolor sir amet conesctier" progress={data.quiz3.percentage} />
      </Grid>
      <Grid container className={classes.testContainer}>
        <TestInfo heading="Adverse Childhood Experience (ACE) Test" imgSource={Ace} height='200px'
          desc="Lorum ipsum dolor sir amet conesctier. 
        Lorum ipsum dolor sir amet conesctier. 
        Lorum ipsum dolor sir amet conesctier" progress={data.quiz4.percentage} />
        <TestInfo heading="Adverse Childhood Experience (ACE) Test" imgSource={Ace} height='200px'
          desc="Lorum ipsum dolor sir amet conesctier. 
        Lorum ipsum dolor sir amet conesctier. 
        Lorum ipsum dolor sir amet conesctier" progress={data.quiz5.percentage} />
      </Grid>
    </Grid>
  )
}
export default Dashboard;