import React, { useEffect, useState, useRef } from "react";
import { Grid, useTheme } from "@material-ui/core";
import axios from "axios";
import { gsap, Power2 } from "gsap";
import { useHistory } from "react-router-dom";
import { useStyles } from "./QuestionStyles.js";

const Quiz4_42 = () => {
    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const mainRef = useRef(null);

    useEffect(() => {
        const token = sessionStorage.getItem("token");
        axios
            .get("https://self-growth-questionaire.herokuapp.com/verify", {
                headers: {
                    "x-access-token": token,
                },
            })
            .then((res) => {
                if (res.data.auth === true) {
                    setTimeout(() => {
                        setLoading(false);
                        gsap.to(mainRef.current, {
                            duration: 0.5,
                            left: 0,
                            top: 0,
                            opacity: 1,

                        });
                    }, 750);
                } else {
                    history.push("/");
                }
            })
            .catch((e) => {
                
            });
    });

    const handleRes = (ans) => {
        
        const data = { type: 'a', value: ans, done: false , email: localStorage.getItem("email") }
        axios.post("https://self-growth-questionaire.herokuapp.com/quiz4", data)
            .then((response) => {
                if (response.data.success === true) {
                    
                    gsap.to(mainRef.current, {
                        left: -1000,
                        duration: 0.5,
                        opacity: 0,
                        ease: Power2.easeOut,
                    });
                    setTimeout(() => {
                        history.push("/quiz4/question43");
                    }, 250);
                }
            })
            .catch((e) => {
                
            });
    };

    const theme = useTheme();
    const classes = useStyles(theme);
    return loading ? (
        <Grid container className={classes.wrapper}>
            Loading...
        </Grid>
    ) : (
        <Grid container className={classes.wrapper}>
            <Grid className={classes.box} ref={mainRef}>
                <h1 className={classes.heading}>Question 42</h1>
                <p className={classes.text} style={{ marginTop: '30px' }}>
                I feel others' emotions.
                </p>
                <div className={classes.buttonWrapper}>
                    <div className={classes.button} onClick={() => handleRes(1)}>Disagree</div>
                    <div className={classes.button} onClick={() => handleRes(2)}>Slightly disagree</div>
                    <div className={classes.button} onClick={() => handleRes(3)}>Neutral</div>
                    <div className={classes.button} onClick={() => handleRes(4)}>Slightly agree</div>
                    <div className={classes.button} onClick={() => handleRes(5)}>Agree</div>
                </div>

            </Grid>
        </Grid>
    );
};
export default Quiz4_42;
