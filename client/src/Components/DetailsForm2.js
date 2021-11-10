import React, { useState, useEffect } from "react";
import { Grid, useTheme, Slider } from "@material-ui/core";
import { useStyles } from "./Styles/FormStyles2.js";

const DetailsForm2 = () => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const [q1, setQ1] = useState(5);
    const [q2, setQ2] = useState(5);

    useEffect(() => {
        document.querySelector(".loading").style.display = "none";
    }, [])

    const submitForm = () => {
        console.log(q1);
        console.log(q2);
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
                        {GenSlider()}
                    </div><br />

                    <p className={`${classes.subheading} ${classes.label}`}>I never lie</p>
                    <div className={classes.sliderWrapper}>
                        {GenSlider()}
                    </div><br />

                    <p className={`${classes.subheading} ${classes.label}`}>I would rather go out than read a book.</p>
                    <div className={classes.sliderWrapper}>
                        {GenSlider()}
                    </div><br />

                    <p className={`${classes.subheading} ${classes.label}`}>I have issues in paying attention/concentrating on things. </p>
                    <div className={classes.sliderWrapper}>
                        {GenSlider()}
                    </div><br />

                    <p className={`${classes.subheading} ${classes.label}`}>I like to sit quietly.</p>
                    <div className={classes.sliderWrapper}>
                        {GenSlider()}
                    </div><br />

                    <p className={`${classes.subheading} ${classes.label}`}>Reading books (other than academics) has played a major role in my life. </p>
                    <div className={classes.sliderWrapper}>
                        {GenSlider()}
                    </div><br />

                    <p className={`${classes.subheading} ${classes.label}`}>I believe everything is fair in love and getting success.</p>
                    <div className={classes.sliderWrapper}>
                        {GenSlider()}
                    </div><br />

                    <p className={`${classes.subheading} ${classes.label}`}>I value relationships more than my self-esteem.</p>
                    <div className={classes.sliderWrapper}>
                        {GenSlider()}
                    </div><br />

                    <p className={`${classes.subheading} ${classes.label}`}>Destiny decides everything, we are merely its tools.</p>
                    <div className={classes.sliderWrapper}>
                        {GenSlider()}
                    </div><br />

                    <p className={`${classes.subheading} ${classes.label}`}>My life will be filled with happiness forever after finding my soulmate.</p>
                    <div className={classes.sliderWrapper}>
                        {GenSlider()}
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