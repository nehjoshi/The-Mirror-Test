import React, { useState } from "react";
import { Grid, useTheme, OutlinedInput, FormControlLabel, Radio, RadioGroup, Select, MenuItem } from "@material-ui/core";
import { useStyles } from "./Styles/FormStyles.js";
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
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

    return (

        <Grid container className={classes.wrapper}>
            <Grid container className={classes.box}>
                <h1 className={classes.heading}>
                    A little bit more about you
                </h1>
                <p className={classes.subheading}>Please answer the following questions.</p><br /><br />

                <div className={classes.inputFields}>
                    <div className={classes.col}>     {/*Column 1*/}
                        <p className={classes.subheading}>I do what my heart tells me to do </p>
                        <div className={classes.dob}>
                            <RadioGroup row aria-label="gender" name="row-radio-buttons-group" onChange={e => setSmoke(e.target.value)}>
                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="Sometimes" control={<Radio />} label="Sometimes" />
                                <FormControlLabel value="No" control={<Radio />} label="No" />
                            </RadioGroup>
                        </div><br />

                        <p className={classes.subheading}>I believe that love at first sight is the perfect way to get a partner.</p>
                        <div className={classes.dob}>
                            <RadioGroup row aria-label="gender" name="row-radio-buttons-group" onChange={e => setSmoke(e.target.value)}>
                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="Sometimes" control={<Radio />} label="Sometimes" />
                                <FormControlLabel value="No" control={<Radio />} label="No" />
                            </RadioGroup>
                        </div><br />

                        <p className={classes.subheading}>I have weaknesses.</p>
                        <div className={classes.dob}>
                            <RadioGroup row aria-label="gender" name="row-radio-buttons-group" onChange={e => setSmoke(e.target.value)}>
                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="Sometimes" control={<Radio />} label="Sometimes" />
                                <FormControlLabel value="No" control={<Radio />} label="No" />
                            </RadioGroup>
                        </div><br />

                        <p className={classes.subheading}>I never lie</p>
                        <div className={classes.dob}>
                            <RadioGroup row aria-label="gender" name="row-radio-buttons-group" onChange={e => setSmoke(e.target.value)}>
                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="Sometimes" control={<Radio />} label="Sometimes" />
                                <FormControlLabel value="No" control={<Radio />} label="No" />
                            </RadioGroup>
                        </div>
                    </div>


                    <div className={classes.col}>         {/*Column 2*/}
                        <p className={classes.subheading}>I have issues in paying attention/concentrating on things. </p>
                        <div className={classes.dob}>
                            <RadioGroup row aria-label="gender" name="row-radio-buttons-group" onChange={e => setSmoke(e.target.value)}>
                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="Sometimes" control={<Radio />} label="Sometimes" />
                                <FormControlLabel value="No" control={<Radio />} label="No" />
                            </RadioGroup>
                        </div><br />

                        <p className={classes.subheading}>I would rather go out than read a book.</p>
                        <div className={classes.dob}>
                            <RadioGroup row aria-label="gender" name="row-radio-buttons-group" onChange={e => setSmoke(e.target.value)}>
                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="Sometimes" control={<Radio />} label="Sometimes" />
                                <FormControlLabel value="No" control={<Radio />} label="No" />
                            </RadioGroup>
                        </div><br />

                        <p className={classes.subheading}>I like to sit quietly.</p>
                        <div className={classes.dob}>
                            <RadioGroup row aria-label="gender" name="row-radio-buttons-group" onChange={e => setSmoke(e.target.value)}>
                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="Sometimes" control={<Radio />} label="Sometimes" />
                                <FormControlLabel value="No" control={<Radio />} label="No" />
                            </RadioGroup>
                        </div><br />

                        <p className={classes.subheading}>Reading books (other than academics) has played a major role in my life. </p>
                        <div className={classes.dob}>
                            <RadioGroup row aria-label="gender" name="row-radio-buttons-group" onChange={e => setSmoke(e.target.value)}>
                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="Sometimes" control={<Radio />} label="Sometimes" />
                                <FormControlLabel value="No" control={<Radio />} label="No" />
                            </RadioGroup>
                        </div><br />

                    </div>

                    <div className={classes.col}>         {/*Column 3*/}

                    <p className={classes.subheading}>I believe everything is fair in love and getting success.</p>
                        <div className={classes.dob}>
                            <RadioGroup row aria-label="gender" name="row-radio-buttons-group" onChange={e => setSmoke(e.target.value)}>
                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="Sometimes" control={<Radio />} label="Sometimes" />
                                <FormControlLabel value="No" control={<Radio />} label="No" />
                            </RadioGroup>
                        </div><br />

                        <p className={classes.subheading}>I value relationships more than my self-esteem.</p>
                        <div className={classes.dob}>
                            <RadioGroup row aria-label="gender" name="row-radio-buttons-group" onChange={e => setSmoke(e.target.value)}>
                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="Sometimes" control={<Radio />} label="Sometimes" />
                                <FormControlLabel value="No" control={<Radio />} label="No" />
                            </RadioGroup>
                        </div><br />

                        <p className={classes.subheading}>My life will be filled with happiness forever after finding my soulmate.</p>
                        <div className={classes.dob}>
                            <RadioGroup row aria-label="gender" name="row-radio-buttons-group" onChange={e => setIllness(e.target.value)}>
                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="Sometimes" control={<Radio />} label="Sometimes" />
                                <FormControlLabel value="No" control={<Radio />} label="No" />
                            </RadioGroup>
                        </div><br/>

                        <p className={classes.subheading}>I do all the right things instead of what I feel.</p>
                        <div className={classes.dob}>
                            <RadioGroup row aria-label="gender" name="row-radio-buttons-group" onChange={e => setIllness(e.target.value)}>
                                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                <FormControlLabel value="Sometimes" control={<Radio />} label="Sometimes" />
                                <FormControlLabel value="No" control={<Radio />} label="No" />
                            </RadioGroup>
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