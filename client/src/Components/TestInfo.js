import React from 'react';
import { Grid, makeStyles, useTheme } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    testWrapper: {
        height: '350px',
        position: 'relative',
        backgroundColor: "#f7f7f7",
        margin: '0px 20px',
        boxShadow: "0 0 7px  #7a7a7a",
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '10px 10px',
        border: '2px solid transparent',
        transition: '0.2s all ease',
        '&:hover': {
            borderColor: 'blue'
        }
    },
    testHeading: {
        textAlign: 'center',
    },
    divider: {
        borderWidth: '0.2px',
        borderColor: '#b3b1b1',
        width: '95%'
    },
    testImage: {
        height: '200px'
    },
    testDesc: {
        color: '#7a7a7a',
    },
    progress: {
        position: 'absolute',
        right: '2px',
        top: '2px',
        fontSize: '0.7rem'
    }
}));
const TestInfo = (props) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    return (
        <Grid item sm={12} md={3} className={classes.testWrapper}>
            <p className={classes.progress}>Progress: {props.progress}%</p>
            <h2 className={classes.testHeading}>{props.heading}</h2>
            <hr className={classes.divider}></hr>
            <img style={{height: props.height}} src={props.imgSource} alt="" />
            <p className={classes.testDesc}>{props.desc}</p>
        </Grid>
    )
}
export default TestInfo;