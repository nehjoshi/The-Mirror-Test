import React, { useEffect, useState, useRef } from "react";
import { Grid } from "@material-ui/core";
import axios from "axios";
import { gsap, Power2 } from "gsap";
import { useHistory } from "react-router-dom";
import { useStyles } from "./QuestionStyles.js";

const Quiz2Four = () => {
    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const mainRef = useRef(null);
    useEffect(() => {
        const token = localStorage.getItem("token");
        axios
            .get("/verify", {
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
                console.log(e);
            });
    });

    const handleRes = (ans) => {
        const result1 = parseInt(localStorage.getItem("result1"));
        const result2 = parseInt(localStorage.getItem("result2"));
        const result3 = parseInt(localStorage.getItem("result3"));
        const result4 = parseInt(localStorage.getItem("result4"));
        const result = { result1, result2, result3, result4 }
        const data = { ans, result, type: 4 }
        axios.post("/quiz2", data)
            .then((response) => {
                if (response.data.success === true) {
                    const { result1, result2, result3, result4 } = response.data.result;
                    localStorage.setItem("result1", result1);
                    localStorage.setItem("result2", result2);
                    localStorage.setItem("result3", result3);
                    localStorage.setItem("result4", result4);
                    gsap.to(mainRef.current, {
                        left: -1000,
                        duration: 0.5,
                        opacity: 0,
                        ease: Power2.easeOut,
                    });
                    setTimeout(() => {
                        history.push("/quiz2/question5");
                    }, 250);
                }
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const classes = useStyles();
    return loading ? (
        <Grid container className={classes.wrapper}>
            loading
        </Grid>
    ) : (
        <Grid container className={classes.wrapper}>
            <Grid className={classes.box} ref={mainRef}>
                <h1 className={classes.heading}>Question 4</h1>
                <p className={classes.text} style={{ marginTop: '30px' }}>
                I have an exaggerated startle response when others approach me
unexpectedly.
                </p>
                <div className={classes.buttonWrapper}>
                    <div className={classes.button} onClick={() => handleRes(3)}>Strongly Agree</div>
                    <div className={classes.button} onClick={() => handleRes(2)}>Mostly Agree</div>
                </div>
                <div className={classes.buttonWrapper}>
                    <div className={classes.button} onClick={() => handleRes(1)}>Sometimes Agree</div>
                    <div className={classes.button} onClick={() => handleRes(0)}>Disagree</div>
                </div>
            </Grid>
        </Grid>
    );
};
export default Quiz2Four;
