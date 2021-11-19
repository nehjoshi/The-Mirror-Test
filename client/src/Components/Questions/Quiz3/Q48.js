import React, { useEffect, useState, useRef } from "react";
import { Grid, useTheme } from "@material-ui/core";
import axios from "axios";
import { gsap, Power2 } from "gsap";
import { useHistory } from "react-router-dom";
import { useStyles } from "./QuestionStyles.js";

const Quiz3_48 = () => {
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

    const handleRes = (type, ans) => {
        const pmb = parseInt(localStorage.getItem('pmb'));
        const pvb = parseInt(localStorage.getItem('pvb'));
        const psb = parseInt(localStorage.getItem('psb'));
        const pmg = parseInt(localStorage.getItem('pmg'));
        const pvg = parseInt(localStorage.getItem('pvg'));
        const psg = parseInt(localStorage.getItem('psg'));
        const result = { pmb, pvb, psb, pmg, pvg, psg }
        const data = { type, value: ans, result, done: true, email: localStorage.getItem("email"), qno: 48 }
        axios.post("https://self-growth-questionaire.herokuapp.com/quiz3", data)
            .then((response) => {
                if (response.data.success === true) {
                    const { optScore, optDesc, hopeScore, hopeDesc, esteemScore, esteemDesc } = response.data;
                    localStorage.removeItem("pmb");
                    localStorage.removeItem("pvb");
                    localStorage.removeItem("psb");
                    localStorage.removeItem("pmg");
                    localStorage.removeItem("pvg");
                    localStorage.removeItem("psg");
                    localStorage.setItem("optScore", optScore);
                    localStorage.setItem("hopeScore", hopeScore);
                    localStorage.setItem("esteemScore", esteemScore);
                    localStorage.setItem("optDesc", optDesc);
                    localStorage.setItem("hopeDesc", hopeDesc);
                    localStorage.setItem("esteemDesc", esteemDesc);
                    gsap.to(mainRef.current, {
                        left: -1000,
                        duration: 0.5,
                        opacity: 0,
                        ease: Power2.easeOut,
                    });
                    setTimeout(() => {
                        history.push("/dashboard");
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
                <h1 className={classes.heading}>Question 48</h1>
                <p className={classes.text} style={{ marginTop: '30px' }}>
                    They won't honor your credit at a store.
                </p>
                <div className={classes.buttonWrapper}>
                    <div className={classes.button} onClick={() => handleRes('pvb', 1)}>A. I sometimes overestimate how much money I have.</div>
                    <div className={classes.button} onClick={() => handleRes('pvb', 0)}>B. I sometimes forget to pay my credit-card bill.</div>
                </div>

            </Grid>
        </Grid>
    );
};
export default Quiz3_48;
