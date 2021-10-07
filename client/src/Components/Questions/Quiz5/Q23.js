import React, { useEffect, useState, useRef } from "react";
import { Grid, useTheme, Slider } from "@material-ui/core";
import axios from "axios";
import { gsap, Power2 } from "gsap";
import { useHistory } from "react-router-dom";
import { useStyles } from "./QuestionStyles.js";

const Quiz5_23 = () => {
    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const [sliderValue, setSliderValue] = useState(5);
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

    const handleRes = () => {

        const P = parseInt(localStorage.getItem("P"));
        const E = parseInt(localStorage.getItem("E"));
        const R = parseInt(localStorage.getItem("R"));
        const M = parseInt(localStorage.getItem("M"));
        const A = parseInt(localStorage.getItem("A"));
        const N = parseInt(localStorage.getItem("N"));
        const H = parseInt(localStorage.getItem("H"));
        const LON = parseInt(localStorage.getItem("LON"));
        const HAP = parseInt(localStorage.getItem("HAP"));
        const result = { P, E, R, M, A, N, H, LON, HAP };
        const data = { type: 'HAP', value: sliderValue, result, done: true, email: localStorage.getItem("email") }
        axios.post("https://self-growth-questionaire.herokuapp.com/quiz5", data)
            .then((response) => {
                if (response.data.success === true) {
                    const { PERMA } = response.data;
                    localStorage.setItem("PERMA", PERMA);
                    localStorage.removeItem("P")
                    localStorage.removeItem("E")
                    localStorage.removeItem("R")
                    localStorage.removeItem("M")
                    localStorage.removeItem("A")
                    localStorage.removeItem("H")
                    localStorage.removeItem("HAP")
                    localStorage.removeItem("N")
                    localStorage.removeItem("LON")
                    gsap.to(mainRef.current, {
                        left: -1000,
                        duration: 0.5,
                        opacity: 0,
                        ease: Power2.easeOut,
                    });
                    setTimeout(() => {
                        history.push('/results');
                    }, 250);
                }
            })
            .catch((e) => {
                
            });
    };

    const theme = useTheme();
    const classes = useStyles(theme);
    const marks = [
        {
            value: 0,
            label: 'Not at all',
        },
        {
            value: 1,
            label: '',
        },
        {
            value: 2,
            label: '2',
        }, {
            value: 3,
            label: '',
        }, {
            value: 4,
            label: '4',
        }, {
            value: 5,
            label: '',
        }, {
            value: 6,
            label: '6',
        }, {
            value: 7,
            label: '',
        }, {
            value: 8,
            label: '8',
        }, {
            value: 9,
            label: '',
        }, {
            value: 10,
            label: 'Completely'
        }];

    const valuetext = (value) => {
        return `${value}`;
    }

    const handleChange = (e, value) => {
        setSliderValue(value)
    }

    return loading ? (
        <Grid container className={classes.wrapper}>
            Loading...
        </Grid>
    ) : (
        <Grid container className={classes.wrapper}>
            <Grid className={classes.box} ref={mainRef}>
                <h1 className={classes.heading}>Question 23</h1>
                <p className={classes.text} style={{ marginTop: '30px' }}>
                Taking all things together, how happy would you say you are?
                </p>
                <Slider
                    defaultValue={5}
                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider-custom"
                    step={1}
                    valueLabelDisplay="auto"
                    marks={marks}
                    min={0}
                    max={10}
                    className={classes.slider}
                    onChange={handleChange}
                />
                <div className={classes.button} onClick={handleRes}>FINISH</div>

            </Grid>
        </Grid>
    );
};
export default Quiz5_23;
