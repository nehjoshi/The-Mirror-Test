import React, { useEffect, useState, useRef } from "react";
import { Grid, useTheme } from "@material-ui/core";
import axios from "axios";
import { gsap, Power2 } from "gsap";
import { useHistory } from "react-router-dom";
import { useStyles } from "./QuestionStyles.js";

const Quiz3_47 = () => {
    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const mainRef = useRef(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
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
                console.log(e);
            });
    });

    const handleRes = (type, ans) => {
        const pmb = parseInt(localStorage.getItem('pmb'));
        const pvb = parseInt(localStorage.getItem('pvb'));
        const psb = parseInt(localStorage.getItem('psb'));
        const pmg = parseInt(localStorage.getItem('pmg'));
        const pvg = parseInt(localStorage.getItem('pvg'));
        const psg = parseInt(localStorage.getItem('psg'));
        const result = { pmb, pvb, psb, pmg, pvg, psg }
        const data = { type, value: ans, result, done: false }
        axios.post("https://self-growth-questionaire.herokuapp.com/quiz3", data)
            .then((response) => {
                if (response.data.success === true) {
                    const { pmb, pvb, psb, pmg, pvg, psg } = response.data.result;
                    localStorage.setItem("pmb", pmb);
                    localStorage.setItem("pvb", pvb);
                    localStorage.setItem("psb", psb);
                    localStorage.setItem("pmg", pmg);
                    localStorage.setItem("pvg", pvg);
                    localStorage.setItem("psg", psg);
                    gsap.to(mainRef.current, {
                        left: -1000,
                        duration: 0.5,
                        opacity: 0,
                        ease: Power2.easeOut,
                    });
                    setTimeout(() => {
                        history.push("/quiz3/question48");
                    }, 250);
                }
            })
            .catch((e) => {
                console.log(e);
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
                <h1 className={classes.heading}>Question 47</h1>
                <p className={classes.text} style={{ marginTop: '30px' }}>
                    You are in the hospital and few people come to visit.
                </p>
                <div className={classes.buttonWrapper}>
                    <div className={classes.button} onClick={() => handleRes('psb', 1)}>A. I'm irritable when I'm sick.</div>
                    <div className={classes.button} onClick={() => handleRes('psb', 0)}>B. My friends are negligient about things like that.</div>
                </div>

            </Grid>
        </Grid>
    );
};
export default Quiz3_47;
