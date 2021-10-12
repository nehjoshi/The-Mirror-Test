import React from 'react';
import { Grid, makeStyles, useTheme } from '@material-ui/core';
import { useHistory } from 'react-router';

const useStyles = makeStyles(() => ({
    testWrapper: {
        height: '450px',
        position: 'relative',
        backgroundColor: "#f7f7f7",
        margin: '20px 20px',
        boxShadow: "1px 2px 13px 0px #272727",
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px 20px',
        borderBottom: '5px outset transparent',
        transition: '0.2s all ease',
        '&:hover': {
            // borderColor: 'blue'
            borderColor: '#008A7D'
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
        right: '5px',
        top: '5px',
        fontSize: '0.7rem'
    },
    button: {
        display: 'flex',
        margin: '10px',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '20px',
        padding: '5px 50px',
        textTransform: 'uppercase',
        backgroundColor: '#ffcb3b',
        color: 'black',
        fontSize: '1.4rem',
        "&:hover": {
            cursor: "pointer",
            backgroundColor: "#e6b635",
          },
    }
}));
const TestInfo = (props) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const history = useHistory();

    const handleStart = () => {
        history.push(`/instructions${props.testNo}`);
    }
    const handleResume = () => {
        history.push(`/quiz${props.testNo}/question${props.lastQ+1}`);
    }

    return (
        <Grid item sm={12} md={3} className={classes.testWrapper}>
            <p className={classes.progress}>Progress: {props.progress}%</p>
            <h2 className={classes.testHeading}>{props.heading}</h2>
            <hr className={classes.divider}></hr>
            <img style={{height: props.height}} src={props.imgSource} alt="" />
            <p className={classes.testDesc}>{props.desc}</p>
            {props.progress === 0 ? <div className={classes.button} onClick={handleStart}>Start</div>: null}
            {props.progress === 100 ? <div className={classes.button} style={{backgroundColor: '#9DC04A'}}>Completed</div>: null}
            {(props.progress > 0 && props.progress < 100) ? <div className={classes.button} onClick={handleResume}>Continue</div>: null}
        </Grid>
    )
}
export default TestInfo;