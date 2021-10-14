import React, { useState } from "react";
import { Grid, useTheme, OutlinedInput, FormControlLabel, Radio, RadioGroup, Select, MenuItem } from "@material-ui/core";
import { useStyles } from "./Styles/FormStyles.js";
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

const DetailsForm = () => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const [selectedDate, setDateChange] = useState(null);
    const [weight, setWeight] = useState(null);
    const [height, setHeight] = useState(null);
    const [glasses, setGlasses] = useState(null);
    const [nat, setNat] = useState("Indian");
    const [rel, setRel] = useState("Hindu");
    // const [phyCon, setPhyCon] = useState(null);
    // const [smoke, setSmoke] = useState(null);
    // const [drink, setDrink] = useState(null);
    // const [hobbies, setHobbies] = useState(null);
    // const [diag, setDiag] = useState(null);

    const generateNationalities = () => {
        let listOfNats = [];
        const nats = ['Afghan', 'Albanian', 'Algerian', 'American', 'Andorran', 'Angolan', 'Antiguans', 'Argentinean', 'Armenian', 'Australian', 'Austrian', 'Azerbaijani', 'Bahamian', 'Bahraini', 'Bangladeshi', 'Barbadian', 'Barbudans', 'Batswana', 'Belarusian', 'Belgian', 'Belizean', 'Beninese', 'Bhutanese', 'Bolivian', 'Bosnian', 'Brazilian', 'British', 'Bruneian', 'Bulgarian', 'Burkinabe', 'Burmese', 'Burundian', 'Cambodian', 'Cameroonian', 'Canadian', 'Cape Verdean', 'Central African', 'Chadian', 'Chilean', 'Chinese', 'Colombian', 'Comoran', 'Congolese', 'Costa Rican', 'Croatian', 'Cuban', 'Cypriot', 'Czech', 'Danish', 'Djibouti', 'Dominican', 'Dutch', 'East Timorese', 'Ecuadorean', 'Egyptian', 'Emirian', 'Equatorial Guinean', 'Eritrean', 'Estonian', 'Ethiopian', 'Fijian', 'Filipino', 'Finnish', 'French', 'Gabonese', 'Gambian', 'Georgian', 'German', 'Ghanaian', 'Greek', 'Grenadian', 'Guatemalan', 'Guinea-Bissauan', 'Guinean', 'Guyanese', 'Haitian', 'Herzegovinian', 'Honduran', 'Hungarian', 'I-Kiribati', 'Icelander', 'Indian', 'Indonesian', 'Iranian', 'Iraqi', 'Irish', 'Israeli', 'Italian', 'Ivorian', 'Jamaican', 'Japanese', 'Jordanian', 'Kazakhstani', 'Kenyan', 'Kittian and Nevisian', 'Kuwaiti', 'Kyrgyz', 'Laotian', 'Latvian', 'Lebanese', 'Liberian', 'Libyan', 'Liechtensteiner', 'Lithuanian', 'Luxembourger', 'Macedonian', 'Malagasy', 'Malawian', 'Malaysian', 'Maldivan', 'Malian', 'Maltese', 'Marshallese', 'Mauritanian', 'Mauritian', 'Mexican', 'Micronesian', 'Moldovan', 'Monacan', 'Mongolian', 'Moroccan', 'Mosotho', 'Motswana', 'Mozambican', 'Namibian', 'Nauruan', 'Nepalese', 'New Zealander', 'Nicaraguan', 'Nigerian', 'Nigerien', 'North Korean', 'Northern Irish', 'Norwegian', 'Omani', 'Pakistani', 'Palauan', 'Panamanian', 'Papua New Guinean', 'Paraguayan', 'Peruvian', 'Polish', 'Portuguese', 'Qatari', 'Romanian', 'Russian', 'Rwandan', 'Saint Lucian', 'Salvadoran', 'Samoan', 'San Marinese', 'Sao Tomean', 'Saudi', 'Scottish', 'Senegalese', 'Serbian', 'Seychellois', 'Sierra Leonean', 'Singaporean', 'Slovakian', 'Slovenian', 'Solomon Islander', 'Somali', 'South African', 'South Korean', 'Spanish', 'Sri Lankan', 'Sudanese', 'Surinamer', 'Swazi', 'Swedish', 'Swiss', 'Syrian', 'Taiwanese', 'Tajik', 'Tanzanian', 'Thai', 'Togolese', 'Tongan', 'Trinidadian/Tobagonian', 'Tunisian', 'Turkish', 'Tuvaluan', 'Ugandan', 'Ukrainian', 'Uruguayan', 'Uzbekistani', 'Venezuelan', 'Vietnamese', 'Welsh', 'Yemenite', 'Zambian', 'Zimbabwean'];
        nats.forEach(nat => {
            listOfNats.push(<MenuItem onClick={() => setNat(rel)} value={nat}>{nat}</MenuItem>)
        })
        return listOfNats;
    }
    const generateReligions = () => {
        let listOfRels = [];
        const rels = ['Hindu', 'Muslim', 'Christian', 'Sikh', 'Buddhist', 'Jewish', 'Jain'];
        rels.forEach(rel => {
            listOfRels.push(<MenuItem value={rel} onClick={() => setRel(rel)}key={rel}>{rel}</MenuItem>)
        });
        return listOfRels;
    }
    const submitForm = () => {
        console.log(weight);
        console.log(selectedDate.toString());
        console.log(height);
        console.log(glasses);
        console.log(nat);
    }

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container className={classes.wrapper}>
                <Grid container className={classes.box}>
                    <h1 className={classes.heading}>
                        More Details
                    </h1>
                    <p className={classes.subheading}>This section is optional. You can skip it here.</p><br /><br />

                    <div className={classes.inputFields}>
                        <div className={classes.col}>     {/*Column 1*/}
                            <p className={classes.subheading}>Date of birth </p>
                            <div className={classes.dob}>
                                <KeyboardDatePicker
                                    clearable
                                    value={selectedDate}
                                    placeholder="10/10/2018"
                                    onChange={date => setDateChange(date)}
                                    minDate={new Date("1910-01-01")}
                                    format="dd/MM/yyyy"
                                /></div><br /><br />
                            <p className={classes.subheading}>Weight (in kg)</p>
                            <OutlinedInput
                                id="outlined-adornment-weight"
                                value={weight}
                                onChange={e => setWeight(e.target.value)}
                                className={classes.weight}
                            /><br /><br />

                            <p className={classes.subheading}>Height (in centimeters)</p>

                            <OutlinedInput
                                id="outlined-adornment-weight"
                                value={height}
                                className={classes.weight}
                                onChange={e => setHeight(e.target.value)}
                            /><br /><br />

                            <p className={classes.subheading}>Do you have glasses?</p>
                            <div className={classes.dob}>
                                <RadioGroup row aria-label="gender" name="row-radio-buttons-group" onChange={e => setGlasses(e.target.value)}>
                                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="No" control={<Radio />} label="No" />
                                </RadioGroup>
                            </div>

                        </div>


                        <div className={classes.col}>         {/*Column 2*/}
                            <p className={classes.subheading}>Nationality </p>
                            <div className={classes.dob}>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={nat}
                                    label="Nationality"
                                    onChange={e => setNat(e.target.value)}
                                    className={classes.nats} 
                                >
                                    {generateNationalities()}
                                </Select></div><br /><br />
                            <p className={classes.subheading}>Religion</p>
                            <div className={classes.dob}>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={rel}
                                    label="Religion"
                                    onChange={e => setRel(e.target.value)}
                                    className={classes.nats}
                                >
                                    {generateReligions()}
                                </Select></div><br /><br />

                            <p className={classes.subheading}>Any physical conditions? (Leave empty if none)</p>

                            <OutlinedInput
                                id="outlined-adornment-weight"
                                className={classes.weight}
                            // value={values.weight}
                            /><br /><br />

                            <p className={classes.subheading}>Do you smoke or drink?</p>
                            <div className={classes.dob}>
                                <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                                    <FormControlLabel value="female" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="male" control={<Radio />} label="No" />
                                </RadioGroup>
                            </div>

                        </div>

                        <div className={classes.col}>         {/*Column 3*/}
                            <p className={classes.subheading}>List out some of your hobbies </p>
                            <OutlinedInput
                                id="outlined-adornment-weight"
                                className={classes.weight}
                            // value={values.weight}
                            /><br /><br />
                            <p className={classes.subheading}>Were you diagnosed with any illnesses during your childhood?</p>
                            <div className={classes.dob}>
                                <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                                    <FormControlLabel value="female" control={<Radio />} label="Yes" />
                                    <FormControlLabel value="male" control={<Radio />} label="No" />
                                </RadioGroup>
                            </div><br/><br/>

                        <div className={classes.button} onClick={submitForm}>
                            Part 2 &nbsp;<i class="fas fa-chevron-right" className={classes.arrow}></i>
                        </div>

                        </div>
                    </div>

                </Grid>
            </Grid>
        </MuiPickersUtilsProvider>
    )
}
export default DetailsForm;