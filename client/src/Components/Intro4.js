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
        fontSize: "1.4rem",
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

const Intro4 = () => {
    const theme = useTheme();
  const classes = useStyles(theme);;
    const [loading, setLoading] = useState(true);
    const history = useHistory();
    useEffect(() => {
        const token = sessionStorage.getItem("token");
        axios
            .get("http://localhost:5000/verify", {
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
                console.log(e);
            });
    });

    const Next = () => {
        history.push("/quiz4/question1");
    };

    return loading ? (
        <Grid container className={classes.wrapper}>
            Loading...
        </Grid>
    ) : (
        <Grid container className={classes.wrapper}>
            <Grid item className={classes.box}>
                <h1 className={classes.heading}>Part 4</h1>
                <p className={classes.text}>
                This is a 50-item tool.
Person answers questions on a scale of 1- 5.
1 = Disagree
2 = Slightly disagree
3 = Neutral
4 = Slightly agree
5 = Agree
Complete the scoring string for each personality type at
the bottom of the form. Each personality type will have a
score between 0-40. Higher scores equal stronger
personality type.
                </p>
                <div className={classes.button} onClick={() => Next()}>
                    Start
                </div>
            </Grid>
        </Grid>
    );
};
export default Intro4;
