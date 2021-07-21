import React, {useEffect, useRef} from "react";
import Bg from "../Images/bg.jpg";
import { makeStyles, Grid } from "@material-ui/core";
import gsap, {Power2} from 'gsap';

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
        overflow: 'hidden'
      },

}))

const Intro = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.wrapper}>
        </Grid>
    );
}
export default Intro;