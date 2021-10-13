import React, { useEffect, useRef } from 'react';
import { Grid, useTheme } from '@material-ui/core';
import { useStyles } from "./Styles/DashboardStyles.js";
import { Link } from 'react-router-dom';
import { gsap, Power2 } from "gsap";
import Logo from "../Images/logo4.png";

const Landing = () => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const headingRef = useRef(null);
    const buttonRef = useRef(null);
    const lineRef = useRef(null);
    useEffect(() => {
        gsap.to(headingRef.current, {
            opacity: 1,
            top: 0,
            ease: Power2.easeIn,
            duration: 0.4
        })
        gsap.to(buttonRef.current, {
            opacity: 1,
            top: 0,
            ease: Power2.easeIn,
            duration: 0.4,
            delay: 0.4
        })
        gsap.from(lineRef.current, {
            width: '10%',
            duration: 0.4,
            ease: Power2.easeIn 
        })
    }, [])
    return (
        <Grid className={classes.wrapper}>
            <Grid container className={classes.landing}>
                <img src={Logo} className={classes.mainLogo} alt=""/>
                <h1 className={classes.heading} ref={headingRef}>The Mirror Test</h1>
                <p className={classes.subheading}>A test to provide a reflection of who you are.</p>
                <Link to="/login" style={{ margin: '10px 0px' }}><div className={classes.navButton} ref={buttonRef}>Start your journey</div></Link>
                <hr className={classes.mainHr} ref={lineRef}></hr>
            </Grid>
        </Grid>
    )
}
export default Landing;