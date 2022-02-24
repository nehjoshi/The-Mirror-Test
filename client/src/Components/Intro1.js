import React, { useEffect, useState } from "react";
import Bg from "../Images/bg.jpg";
import { makeStyles, Grid, useTheme } from "@material-ui/core";
import axios from "axios";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
    wrapper: {
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${Bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
    },
    box: {
        height: "550px",
        width: "400px",
        backgroundColor: "#f7f7f7",
        borderRadius: "20px",
        boxShadow: "0 0 7px  #7a7a7a",
        color: "#333333",
        padding: "10px 10px",
        position: "relative",
    },
    heading: {
        textAlign: "center",
        marginTop: "10px",
        borderBottom: "1px solid #b8b894",
    },
    text: {
        fontSize: "1.2rem",
        marginTop: "20px",
    },
    link: {
        textDecoration: "underline",
        color: "#333333",
        "&:hover": {
            color: "blue",
        },
    },
    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffcb3b",
        color: "black",
        height: "40px",
        borderRadius: "30px",
        width: "80%",
        boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
        margin: "25px auto",
        textTransform: "uppercase",
        transition: "all 0.2s ease",
        "&:hover": {
            cursor: "pointer",
            backgroundColor: "#e6b635",
            width: "83%",
        },
    },
}));

const Intro1 = () => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const [loading, setLoading] = useState(true);
    const history = useHistory();
    useEffect(() => {
        const token = sessionStorage.getItem("token");
        axios
            .get(`https://self-growth-questionaire.herokuapp.com/verify`, {
                headers: {
                    "x-access-token": token,
                },
            })
            .then((res) => {
                if (res.data.auth === true) {
                    setLoading(false);
                } else {
                    history.push("/");
                }
            })
            .catch((e) => {

            });
    });

    const Next = () => {
        history.push("/quiz1/question1");
    };

    return loading ? (
        <Grid container className={classes.wrapper}>
            Loading...
        </Grid>
    ) : (
        <Grid container className={classes.wrapper}>
            <Grid item className={classes.box}>
                <h1 className={classes.heading}>Part 1: ACE</h1>
                <p className={classes.text}>
                    Adverse Childhood Experiences (ACEs) are any traumatic experiences we may have, 
                    before the age of 18. These experiences may include physical or sexual abuse,  
                    violence, neglect or death of a family member. Research shows that the adversity 
                    we experience as children affect us in our adulthood. These can include social, 
                    emotional and cognitive impairment to disease,  disability, social problems and early death.

                </p>
                <p className={classes.text}>
                By identifying ACEs and working on them, we can prevent their negative impact on our lives.
                </p>
                <div className={classes.button} onClick={() => Next()}>
                    Start
                </div>
            </Grid>
        </Grid>
    );
};
export default Intro1;
