import React from 'react';
import { useTheme } from '@material-ui/core';
import { useStyles } from "./Styles/CreditsStyles.js";
import kaiser from "../Images/kaiser.png";
import { Link } from "react-router-dom";
export const Credits = () => {
    const theme = useTheme();
    const classes = useStyles(theme);
    return (
        <div className={classes.container}>
            <p className={classes.backButton}><Link to='/dashboard'>Go Back</Link></p>
            <div className={classes.wrapper}>
                <hr className={classes.smallDivider} />
                <h2 className={classes.heading}>Take a look at the minds behind this project.</h2>
                <hr className={classes.divider} style={{position: "absolute", bottom: "0px"}}/>
            </div>
            <div className={classes.row}>
                <div className={classes.column}>
                    <p className={classes.subHeading}>Adverse Childhood Experiences (ACE) Test</p>
                    <h3 className={classes.smallHeading}>Centers for Disease Control and Prevention and Kaiser Permanente</h3>
                </div>
                <div className={classes.column}>
                    <p className={classes.text}>
                        Collecting data of over 17,000 participants in Southern California, the ACE test can be used to predict health outcomes based on the frequency of the answers to the questions.
                        The original ACE study was carried out at Kaiser Permanente from 1995 to 1997 with two waves of data collection.
                    </p>
                </div>
            </div>
            <hr className={classes.divider} />
            <div className={classes.row}>
                <div className={classes.column}>
                    <p className={classes.subHeading}>Attachment Style Test</p>
                    <h3 className={classes.smallHeading}>John Bowlby, Mary Ainsworth</h3>
                </div>
                <div className={classes.column}>
                    <p className={classes.text}>
                        The original Attachment Theory was founded in the 1950's by the British psychoanalyst John Bowlby, and was later expanded in the 1970's by Mary Ainsworth.
                        The Attachment Theory states that "a child's experiences with attachment figures come to influence in particular ways the pattern of attachment he develops.”
                    </p>
                </div>
            </div>
            <hr className={classes.divider} />
            <div className={classes.row}>
                <div className={classes.column}>
                    <p className={classes.subHeading}>Optimism Test</p>
                    <h3 className={classes.smallHeading}>Martin Seligman</h3>
                </div>
                <div className={classes.column}>
                    <p className={classes.text}>Martin Seligman, a psychologist at the University of Pennsylvania believed that optimism, like many other skills, could be learned. 
                    He taught techniques that could boost hope and optimism to some of his students, and then compared their mental health to those who hadn't received such skills.
                    The group who scored better were far less likely to develop depression, anxiety and had better health overall.
                    </p>
                </div>
            </div>
            <hr className={classes.divider} />
            <div className={classes.row}>
                <div className={classes.column}>
                    <p className={classes.subHeading}>Big Five Personality Test</p>
                    <h3 className={classes.smallHeading}>D.W. Fiske et al.</h3>
                </div>
                <div className={classes.column}>
                    <p className={classes.text}>The Big 5 Personality Traits is a theory that was originally developed by D.W. Fiske and later expanded upon by researchers such as Norman (1967), Smith (1967) and Goldberg (1981).
                    </p>
                </div>
            </div>
            <hr className={classes.divider} />
            <div className={classes.row}>
                <div className={classes.column}>
                    <p className={classes.subHeading}>The PERMA Profiler</p>
                    <h3 className={classes.smallHeading}>Martin Seligman</h3>
                </div>
                <div className={classes.column}>
                    <p className={classes.text}>The PERMA Model was created by Martin Seligman, an American psychologist and educator. As a psychologist, Seligman recognises how natural it is for people to seek out what makes them happy, regardless of their age, sexual orientation, or social status.
                    The five basic parts of the model are: Positive Emotion, Engagement, Relationships, Meaning, and Accomplishments.</p>
                </div>
            </div>
        </div>
    )
}