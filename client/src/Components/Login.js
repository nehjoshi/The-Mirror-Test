import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Grid } from "@material-ui/core";
import Loader from './Loader.js';
import { useHistory } from "react-router";
import { Link, Redirect } from "react-router-dom";
import "../App.css";
import MainImg from '../Images/main.png';
import { useStyles } from "./Styles/LoginStyles.js";

const Login = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [hideSubmit, setHideSubmit] = useState(false);
    const history = useHistory();

    useEffect(() => {
        document.querySelector(".loading").style.display="none";
    }, []);

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
        axios.post('https://self-growth-questionaire.herokuapp.com/login', sendData)
            .then(res => {
                if (res.data.success === true) {
                    sessionStorage.setItem('token', res.data.token);
                    localStorage.setItem('email', email);
                    localStorage.setItem("name", res.data.name);
                    setLoading(false);
                    setHideSubmit(true);
                    setTimeout(() => {
                        history.push('/dashboard');
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
    return sessionStorage.getItem("token") ? <Redirect to="/dashboard" /> :(
        <Grid container className={classes.wrapper}>
            {/* <div className={classes.container}> */}
            <Grid item className={classes.leftBox}>
                <img src={MainImg} style={{ height: '400px', zIndex: '100' }} alt="" className={classes.mainImg} />
            </Grid>
            <Grid item className={classes.box}>
                <p className={classes.heading} >
                    Login to Continue
                </p>

                <div style={{ width: "100%", position: "relative", top: "30px" }}>
                    <i
                        className="fas fa-envelope"
                        style={{ position: "absolute", top: "17px", left: "40px" }}
                    ></i>
                    <form>
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
                            <span style={{ position: 'relative', top: '10px', left: '35px', color: '#787122' }}>Forgot Password?</span>
                        </Link>
                        {!hideSubmit ?
                            <button
                                className={classes.button}
                                onClick={handleSubmit}
                                type="submit"
                            >
                                Submit
                            </button> : null}

                        {loading ? <Loader /> : null}
                        {errorMessage ? <span style={otherErrorStyle}>Invalid Email or Password</span> : null}
                    </form>
                </div>
                <Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <span style={registerLink}>Don't have an account? Register here</span>
                </Link>

            </Grid>
            {/* </div> */}
        </Grid>
    )
}
export default Login;