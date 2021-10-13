import React, { useState } from "react";
import Bg from "../Images/bg.jpg";
import { makeStyles, Grid, useTheme } from "@material-ui/core";
import { useStyles } from "./Styles/FormStyles.js";
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

const DetailsForm = () => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const [selectedDate, handleDateChange] = useState(new Date());
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container className={classes.wrapper}>
                <Grid container className={classes.box}>
                    <Grid item xs={12} md={6} lg={6}>
                        <h1 className={classes.heading}>
                            More Details
                        </h1>
                        <p className={classes.subheading}>This section is optional. You can skip it here.</p><br /><br />
                        <p className={classes.subheading}>Date of birth </p>

                        <KeyboardDatePicker
                            clearable
                            value={selectedDate}
                            placeholder="10/10/2018"
                            onChange={date => handleDateChange(date)}
                            minDate={new Date()}
                            format="MM/dd/yyyy"
                        />

                    </Grid>
                    <Grid item xs={12} md={6} lg={6}></Grid>
                </Grid>
            </Grid>
        </MuiPickersUtilsProvider>
    )
}
export default DetailsForm;