import React, { useEffect, useState, useRef } from "react";
import { Grid, useTheme } from "@material-ui/core";
import axios from "axios";
import { gsap, Power2 } from "gsap";
import { useHistory } from "react-router-dom";
import { useStyles } from "./QuestionStyles.js";

const Quiz4_8 = () => {
    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const mainRef = useRef(null);

    useEffect(() => {
        const token = sessionStorage.getItem("token");
        axios
            .get("https://self-growth-questionaire.herokuapp.comverify", {
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
        const e = parseInt(localStorage.getItem('e'));
        const a = parseInt(localStorage.getItem('a'));
        const c = parseInt(localStorage.getItem('c'));
        const n = parseInt(localStorage.getItem('n'));
        const o = parseInt(localStorage.getItem('o'));
        const result = { e: e, a: a, c: c, n: n, o: o };
        const data = { type: 'c', value: ans, result, done: false, email: localStorage.getItem("email")  }
        axios.post("https://self-growth-questionaire.herokuapp.comquiz4", data)
            .then((response) => {
                if (response.data.success === true) {
                    const { e, a, c, n, o } = response.data.result;
                    localStorage.setItem("e", e);
                    localStorage.setItem("a", a);
                    localStorage.setItem("c", c);
                    localStorage.setItem("n", n);
                    localStorage.setItem("o", o);
                    gsap.to(mainRef.current, {
                        left: -1000,
                        duration: 0.5,
                        opacity: 0,
                        ease: Power2.easeOut,
                    });
                    setTimeout(() => {
                        history.push("/quiz4/question9");
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
                <h1 className={classes.heading}>Question 8</h1>
                <p className={classes.text} style={{ marginTop: '30px' }}>
                    I leave my belongings around.
                </p>
                <div className={classes.buttonWrapper}>
                    <div className={classes.button} onClick={() => handleRes(-1)}>Disagree</div>
                    <div className={classes.button} onClick={() => handleRes(-2)}>Slightly disagree</div>
                    <div className={classes.button} onClick={() => handleRes(-3)}>Neutral</div>
                    <div className={classes.button} onClick={() => handleRes(-4)}>Slightly agree</div>
                    <div className={classes.button} onClick={() => handleRes(-5)}>Agree</div>
                </div>

            </Grid>
        </Grid>
    );
};
export default Quiz4_8;
