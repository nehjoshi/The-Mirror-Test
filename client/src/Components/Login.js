import React, { useState } from "react";
import Bg from "../Images/bg.jpg";
import axios from 'axios';
import { makeStyles, Grid } from "@material-ui/core";
import Loader from './Loader.js';
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

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
        marginBottom: "20px",
        position: "relative",
        top: "20px",

    },
    label: {
        margin: "0 auto",
        position: "relative",
        top: "20px",
        marginTop: '30px',
        width: "fit-content",
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
        // boxShadow: '0 0 5px  #7a7a7a',
        // backgroundColor: '#ebbe42',
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
        margin: "0px auto",
        marginTop: '50px',
        marginBottom: '10px',
        textTransform: "uppercase",
        position: "relative",

        transition: "all 0.2s ease",
        "&:hover": {
            cursor: "pointer",
            backgroundColor: "#e6b635",
            width: "83%",
        },
    },
}));

const Login = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [hideSubmit, setHideSubmit] = useState(false);
    const history = useHistory();
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleSubmit = () => {
        const sendData = { email, password };
        setHideSubmit(true);
        setLoading(true);
        setErrorMessage(null);
        axios.post('http://localhost:5000/login', sendData)
            .then(res => {
                if (res.data.success === true) {
                    sessionStorage.setItem('token', res.data.token);
                    localStorage.setItem('email', email);
                    setLoading(false);
                    setHideSubmit(true);
                    setTimeout(() => {
                        history.push('/instructions');
                    }, 200)
                }
                else {
                    setErrorMessage(true);
                    setLoading(false);
                    setHideSubmit(false);
                }
            })
    }
    const classes = useStyles();
    const registerLink = {
        position: 'absolute',
        bottom: '20px',
        margin: '0 auto',
        left: 0,
        right: 0,
        textAlign: 'center',
        color: '#000',
        fontSize: '0.9rem',
    }
    const otherErrorStyle = {
        display: 'block',
        color: 'red',
        fontSize: '0.8rem',
        textAlign: 'center'
    }
    return (
        <Grid container className={classes.wrapper}>
            <Grid item className={classes.box}>
                <h2 className={classes.heading} >
                    Welcome to The Mirror Test
                </h2>
                <p className={classes.label} >
                    Please login to continue
                </p>

                <div
                    style={{
                        width: "100%",
                        position: "relative",
                        top: "30px",

                    }}

                >
                    <i
                        className="fas fa-envelope"
                        style={{ position: "absolute", top: "17px", left: "40px" }}
                    ></i>
                    <input
                        type="email"
                        id="email"
                        className={classes.input}
                        placeholder="Email"
                        autoComplete="on"
                        onChange={handleEmail}
                    />
                    <i
                        className="fas fa-key"
                        style={{ position: "absolute", top: "65px", left: "40px" }}
                    ></i>
                    <input
                        type="password"
                        id="password"
                        className={classes.input}
                        placeholder="Password"
                        autoComplete="off"
                        onChange={handlePassword}
                    />
                    <Link to='/reset_password'>
                    <span style={{position: 'relative', top: '10px', left: '35px', color: '#787122'}}>Forgot Password?</span>
                    </Link>
                    {!hideSubmit ?
                        <div
                            className={classes.button}
                            onClick={handleSubmit}
                        >
                            Submit
                        </div> : null}

                    {loading ? <Loader /> : null}
                    {errorMessage ? <span style={otherErrorStyle}>Invalid Email or Password</span> : null}
                </div>
                <Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <span style={registerLink}>Don't have an account? Register here</span>
                    </Link>

            </Grid>
        </Grid>
    )
}
export default Login;