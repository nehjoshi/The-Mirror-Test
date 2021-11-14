import React, { useState, useEffect } from "react";
import { Grid, useTheme, Slider } from "@material-ui/core";
import { useStyles } from "./Styles/FormStyles2.js";
import axios from "axios";
import { useHistory } from "react-router-dom";

const DetailsForm2 = () => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const [q1, setQ1] = useState(5);
    const [q2, setQ2] = useState(5);
    const [q3, setQ3] = useState(5);
    const [q4, setQ4] = useState(5);
    const [q5, setQ5] = useState(5);
    const [q6, setQ6] = useState(5);
    const [q7, setQ7] = useState(5);
    const [q8, setQ8] = useState(5);
    const [q9, setQ9] = useState(5);
    const [q10, setQ10] = useState(5);
    const [q11, setQ11] = useState(5);
    const [q12, setQ12] = useState(5);
    const history = useHistory();

    useEffect(() => {
        document.querySelector(".loading").style.display = "none";
    }, [])

    const submitForm = () => {
        const data = { q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, email: localStorage.getItem("email") };
        axios.post("https://self-growth-questionaire.herokuapp.com/register-details2", data)
            .then(res => {
                if (res.data.success) {
                    history.push("/dashboard");
                }
            })
    }
    const marks = [
        {
            value: 0,
            label: 'Disagree',
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
            label: 'Agree'
        }];
    const valuetext = (value) => {
        return `${value}`;
    }
    const handleChange = (num, value) => {
        switch (num) {
            case 1:
                setQ1(value);
                break;
            case 2:
                setQ2(value);
                break;
            case 3:
                setQ3(value);
                break;
            case 4:
                setQ4(value);
                break;
            case 5:
                setQ5(value);
                break;
            case 6:
                setQ6(value);
                break;
            case 7:
                setQ7(value);
                break;
            case 8:
                setQ8(value);
                break;
            case 9:
                setQ9(value);
                break;
            case 10:
                setQ10(value);
                break;
            case 11:
                setQ11(value);
                break;
            case 12:
                setQ12(value);
                break;
            default:
                break;
        }
    }
    const GenSlider = (num) => {
        return <Slider
            defaultValue={5}
            getAriaValueText={valuetext}
            step={1}
            marks={marks}
            min={0}
            max={10}
            className={classes.slider}
            onChange={(e, value) => handleChange(num, value)}
        />;
    }
    return (

        <Grid container className={classes.wrapper}>
            <Grid container className={classes.box}>
                <h1 className={classes.heading}>
                    A bit more about you
                </h1>
                <p className={classes.subheading}>Please answer the following questions.</p><br /><br />

                <div className={classes.inputFields}>

                    <p className={`${classes.subheading} ${classes.label}`}>I do what my heart tells me to do </p>
                    <div className={classes.sliderWrapper}>
                        {GenSlider(1)}
                    </div><br />

                    <p className={`${classes.subheading} ${classes.label}`}>I believe that love at first sight is the perfect way to get a partner.</p>
                    <div className={classes.sliderWrapper}>
                        {GenSlider(2)}
                    </div><br />

                    <p className={`${classes.subheading} ${classes.label}`}>I have weaknesses.</p>
                    <div className={classes.sliderWrapper}>
                        {GenSlider(3)}
                    </div><br />

                    <p className={`${classes.subheading} ${classes.label}`}>I never lie</p>
                    <div className={classes.sliderWrapper}>
                        {GenSlider(4)}
                    </div><br />

                    <p className={`${classes.subheading} ${classes.label}`}>I would rather go out than read a book.</p>
                    <div className={classes.sliderWrapper}>
                        {GenSlider(5)}
                    </div><br />

                    <p className={`${classes.subheading} ${classes.label}`}>I have issues in paying attention/concentrating on things. </p>
                    <div className={classes.sliderWrapper}>
                        {GenSlider(6)}
                    </div><br />

                    <p className={`${classes.subheading} ${classes.label}`}>I like to sit quietly.</p>
                    <div className={classes.sliderWrapper}>
                        {GenSlider(7)}
                    </div><br />

                    <p className={`${classes.subheading} ${classes.label}`}>Reading books (other than academics) has played a major role in my life. </p>
                    <div className={classes.sliderWrapper}>
                        {GenSlider(8)}
                    </div><br />

                    <p className={`${classes.subheading} ${classes.label}`}>I believe everything is fair in love and getting success.</p>
                    <div className={classes.sliderWrapper}>
                        {GenSlider(9)}
                    </div><br />

                    <p className={`${classes.subheading} ${classes.label}`}>I value relationships more than my self-esteem.</p>
                    <div className={classes.sliderWrapper}>
                        {GenSlider(10)}
                    </div><br />

                    <p className={`${classes.subheading} ${classes.label}`}>Destiny decides everything, we are merely its tools.</p>
                    <div className={classes.sliderWrapper}>
                        {GenSlider(11)}
                    </div><br />

                    <p className={`${classes.subheading} ${classes.label}`}>My life will be filled with happiness forever after finding my soulmate.</p>
                    <div className={classes.sliderWrapper}>
                        {GenSlider(12)}
                    </div>

                    <div className={classes.button} onClick={submitForm}>
                        Finish &nbsp;<i class="fas fa-chevron-right" className={classes.arrow}></i>
                    </div>

                </div>

            </Grid>
        </Grid>
    )
}
export default DetailsForm2;