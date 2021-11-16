import React, { useEffect, useRef } from 'react';
import { Grid, useTheme } from '@material-ui/core';
import { useStyles } from "./Styles/DashboardStyles.js";
import { Link } from 'react-router-dom';

const Landing = () => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const headingRef = useRef(null);
    const buttonRef = useRef(null);
    const lineRef = useRef(null);
    useEffect(() => {
        document.querySelector(".loading").style.display="none";
    }, [])
    return (
        <Grid className={classes.wrapper}>
            <Grid container className={classes.landing}>
                <h1 className={classes.heading} ref={headingRef}>The Mirror Test</h1>
                <p className={classes.subheading}>A test to provide a reflection of who you are.</p>
                <Link to="/login" style={{ margin: '10px 0px' }}><div className={classes.navButton} ref={buttonRef}>Start your journey</div></Link>
                <hr className={classes.mainHr} ref={lineRef}></hr>
            </Grid>
        </Grid>
    )
}
export default Landing;