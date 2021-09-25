import React, { useEffect, useState } from 'react';
import { Grid, makeStyles, useTheme } from '@material-ui/core';
import Bg from "../Images/bg.jpg";
import axios from 'axios';
import { useHistory } from 'react-router';
import Loader from './Loader';

const useStyles = makeStyles(() => ({
    wrapper: {
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${Bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
    },
}))
const Dashboard = () => {
    const theme = useTheme();
    const classes = useStyles(theme);
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
    return loading ? <Grid className={classes.wrapper}><Loader/></Grid>: (
        <Grid className={classes.wrapper}>

        </Grid>
    )
}
export default Dashboard;