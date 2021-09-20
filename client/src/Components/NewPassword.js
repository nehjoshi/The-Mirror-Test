import React, { useState, useEffect } from "react";
import Bg from "../Images/bg.jpg";
import { makeStyles, Grid } from "@material-ui/core";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import Loader from "./Loader";

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
        width: "320px",
        backgroundColor: "#f7f7f7",
        borderRadius: "20px",
        boxShadow: "0 0 7px  #7a7a7a",
        color: "#333333",
        padding: "10px 10px",
        position: "relative",
    },
    heading: {
        fontSize: "2rem",
        textAlign: "center",
        marginTop: "50px",
        marginBottom: "50px",
        position: "relative",
        top: "20px",
    },
    label: {
        margin: "0 auto",
        position: "relative",
        top: "10px",
        width: "fit-content",
        textAlign: 'center'
    },
    input: {
        height: "45px",
        display: "flex",
        alignItems: "center",
        outline: "none",
        borderColor: "transparent",
        width: "60%",
        borderWidth: "2px",
        padding: "0px 25px",
        fontSize: "1.2rem",
        backgroundColor: "transparent",
        borderBottom: "3px solid gray",
        color: "#333333",
        margin: "0 auto",
        "&:focus": {
            borderBottomColor: "#e6b635",
            transitionDuration: "0.2s",
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
        margin: "0 auto",
        textTransform: "uppercase",
        position: "relative",
        marginTop: '40px',
        transition: "all 0.2s ease",
        "&:hover": {
            cursor: "pointer",
            backgroundColor: "#e6b635",
            width: "83%",
        },
    },
    skip: {
        position: "absolute",
        bottom: "15px",
        right: "20px",
        fontSize: "1.2rem",
        "&:hover": {
            cursor: "pointer",
        },
    },
}));

const NewPassword = () => {
    const classes = useStyles();
    const history = useHistory();
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [mainLoading, setMainLoading] = useState(true);
    const { resetToken } = useParams();
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [blankField, setBlankField] = useState(false);
    const [loginMessage, setLoginMessage] = useState(false);
    const [hideSubmit, setHideSubmit] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:5000/verify_token/${resetToken}`)
            .then(res => {
                if (res.data.success === true) {
                    setMainLoading(false);
                    console.log('true');
                }
                else {
                    history.push('/');
                }
            })
    }, [history, resetToken]);

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleConfPassword = (e) => {
        setConfPassword(e.target.value);
    }
    const handleSubmit = () => {
        if (password === null || password === "" || confPassword === null || confPassword === "" || password !== confPassword) {
            setBlankField(true);
            setLoading(false);
            setHideSubmit(false);
        }
        else {
            axios.post(`http://localhost:5000/verify_token/${resetToken}`, {password: password})
            .then(res => {
                if (res.data.success===true){
                    setLoading(false);
                    setLoginMessage(true);
                }
                else {
                    setErrorMessage(res.data.message);
                    setLoading(false);
                    setHideSubmit(false);
                }
            })
        }
    }
    const errorPassword = {
        marginLeft: '30px',
        marginTop: '5px',
        color: 'red',
        fontSize: '0.8rem'
    }
    const otherErrorStyle = {
        display: 'block',
        color: 'red',
        fontSize: '0.8rem',
        textAlign: 'center'
    }
    const successStyle = {
        display: 'block',
        color: 'green',
        fontSize: '1rem',
        textAlign: 'center'
    }
    return (
        <Grid container className={classes.wrapper}>
            {mainLoading ? <Loader /> :
                <Grid item className={classes.box}>
                    <h2 className={classes.heading}>
                        Reset Password
                    </h2>
                    <p className={classes.label}>
                        Please enter a new password
                    </p>
                    <i
                        className="fas fa-key"
                        style={{ position: "absolute", top: "192px", left: "40px" }}
                    ></i>
                    <input
                        type="password"
                        id="password"
                        className={classes.input}
                        placeholder="Password"
                        autoComplete="off"
                        onChange={handlePassword}
                    />
                    <i
                        className="fas fa-lock"
                        style={{ position: "absolute", top: "240px", left: "40px" }}
                    ></i>
                    <input
                        type="password"
                        id="password-confirm"
                        className={classes.input}
                        placeholder="Confirm Password"
                        autoComplete="off"
                        onChange={handleConfPassword}
                    />
                    {password !== confPassword ? <span style={errorPassword}>Passwords do not match</span> :
                        <span style={{ opacity: 0 }}>Passwords do not match</span>
                    }
                    {!hideSubmit ?
                        <div
                            className={classes.button}
                            onClick={handleSubmit}
                        >
                            Submit
                        </div> : null}

                    {loading ? <Loader /> : null}
                    {errorMessage ? <span style={otherErrorStyle}>{errorMessage}</span> : null}
                    {blankField ? <span style={otherErrorStyle}>Please fill out all the fields</span> : null}
                    {loginMessage ? <span style={successStyle}>You can now login</span> : null}
                </Grid>
            }
        </Grid>
    );
};
export default NewPassword;
