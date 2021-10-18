import React, { useState } from "react";
import { Grid, useTheme, OutlinedInput, FormControlLabel, Radio, RadioGroup, Select, MenuItem, Slider } from "@material-ui/core";
import { useStyles } from "./Styles/FormStyles.js";
import Loader from "./Loader.js";

const DetailsForm2 = () => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const [selectedDate, setDateChange] = useState(null);
    const [weight, setWeight] = useState(null);
    const [height, setHeight] = useState(null);
    const [glasses, setGlasses] = useState(null);
    const [nat, setNat] = useState("Indian");
    const [rel, setRel] = useState("Hindu");
    const [phyCon, setPhyCon] = useState(null);
    const [smoke, setSmoke] = useState(null);
    const [drink, setDrink] = useState(null);
    const [hobbies, setHobbies] = useState(null);
    const [illness, setIllness] = useState(null);
    const [listOfIllnesses, setListOfIllnesses] = useState(null);
    const [loader, setLoader] = useState(false);

    const submitForm = () => {
        console.log(weight);
        console.log(selectedDate.toString());
        console.log(height);
        console.log(glasses);
        console.log(nat);
        console.log(phyCon);
        console.log(hobbies);
        console.log(smoke);
        console.log(drink);
        console.log(listOfIllnesses);
        setLoader(true);
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
    const GenSlider = () => {
        const arr = [<Slider
            defaultValue={5}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider-custom"
            step={1}
            valueLabelDisplay="auto"
            marks={marks}
            min={0}
            max={10}
            className={classes.slider}
        // onChange={handleChange}
        />];
        return arr;

    }
    return (

        <Grid container className={classes.wrapper}>
            <Grid container className={classes.box}>
                <h1 className={classes.heading}>
                    A bit more about you
                </h1>
                <p className={classes.subheading}>Please answer the following questions.</p><br /><br />

                <div className={classes.inputFields}>
                    <div className={classes.col}>     {/*Column 1*/}
                        <p className={[classes.subheading, classes.label]}>I do what my heart tells me to do </p>
                        <div className={classes.sliderWrapper}>
                            {GenSlider()}
                        </div><br />

                        <p className={[classes.subheading, classes.label]}>I believe that love at first sight is the perfect way to get a partner.</p>
                        <div className={classes.sliderWrapper}>
                            {GenSlider()}
                        </div><br />

                        <p className={[classes.subheading, classes.label]}>I have weaknesses.</p>
                        <div className={classes.sliderWrapper}>
                            {GenSlider()}
                        </div><br />

                        <p className={[classes.subheading, classes.label]}>I never lie</p>
                        <div className={classes.sliderWrapper}>
                            {GenSlider()}
                        </div>
                    </div>


                    <div className={classes.col}>         {/*Column 2*/}

                        <p className={[classes.subheading, classes.label]}>I would rather go out than read a book.</p>
                        <div className={classes.sliderWrapper}>
                            {GenSlider()}
                        </div><br />

                        <p className={[classes.subheading, classes.label]}>I have issues in paying attention/concentrating on things. </p>
                        <div className={classes.sliderWrapper}>
                            {GenSlider()}
                        </div><br />

                        <p className={[classes.subheading, classes.label]}>I like to sit quietly.</p>
                        <div className={classes.sliderWrapper}>
                            {GenSlider()}
                        </div><br />

                        <p className={[classes.subheading, classes.label]}>Reading books (other than academics) has played a major role in my life. </p>
                        <div className={classes.sliderWrapper}>
                            {GenSlider()}
                        </div><br />

                    </div>

                    <div className={classes.col}>         {/*Column 3*/}

                        <p className={[classes.subheading, classes.label]}>I believe everything is fair in love and getting success.</p>
                        <div className={classes.sliderWrapper}>
                            {GenSlider()}
                        </div><br />

                        <p className={[classes.subheading, classes.label]}>I value relationships more than my self-esteem.</p>
                        <div className={classes.sliderWrapper}>
                            {GenSlider()}
                        </div><br />

                        <p className={[classes.subheading, classes.label]}>Destiny decides everything, we are merely its tools.</p>
                        <div className={classes.sliderWrapper}>
                            {GenSlider()}
                        </div><br/>

                        <p className={[classes.subheading, classes.label]}>My life will be filled with happiness forever after finding my soulmate.</p>
                        <div className={classes.sliderWrapper}>
                            {GenSlider()}
                        </div>

                        {illness === "Yes" &&
                            <OutlinedInput
                                id="outlined-adornment-weight"
                                className={classes.weight}
                                placeholder="E.g. Autism, insomnia"
                                onChange={e => setListOfIllnesses(e.target.value)}
                                autoComplete="off"
                            />}<br /><br />

                        {!loader &&
                            <div className={classes.button} onClick={submitForm}>
                                Finish &nbsp;<i class="fas fa-chevron-right" className={classes.arrow}></i>
                            </div>
                        }
                        {loader && <Loader />}

                    </div>
                </div>

            </Grid>
        </Grid>
    )
}
export default DetailsForm2;