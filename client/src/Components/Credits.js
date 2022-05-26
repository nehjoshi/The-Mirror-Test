import React from 'react';
import { useTheme } from '@material-ui/core';
import { useStyles } from "./Styles/CreditsStyles.js";
import kaiser from "../Images/kaiser.png";

export const Credits = () => {
    const theme = useTheme();
    const classes = useStyles(theme);
    return (
        <>
            <div className={classes.wrapper}>
                <h1 className={classes.heading}>Credits</h1>
                <p className={classes.subHeading}>The minds behind The Mirror Test</p>
                <div className={classes.button}>View</div>
            </div>
            <div className={classes.section2}>
                <div className={classes.card}>
                    <img src={kaiser} className={classes.cardImage} alt="Kaiser "/>
                    <h1 style={{ textAlign: 'center', color: "#363636" }}>Adverse Childhood Experiences</h1>
                    <p style={{color: "#a6a6a6"}}>Physicians at a large American Health Care consortium, Kaiser Permanente, developed the ACE-Q from several previously researched assessment tools. The 10-item questionnaire checks for the subject’s recall of pre-age 19 exposure to psychological, physical, and sexual abuse as well as household dysfunction including domestic violence, substance use, and incarceration</p>
                </div>
                <div className={classes.card}>

                </div>
                <div className={classes.card}>

                </div>
            </div>
        </>
    )
}