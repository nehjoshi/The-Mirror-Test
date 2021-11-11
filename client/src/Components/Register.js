import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Grid } from "@material-ui/core";
import Loader from './Loader.js';
import { useHistory } from "react-router";
import { useStyles } from "./Styles/RegisterStyles.js";
import emotions from "../Images/emotions.png";

const Register = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confPassword, setConfPassword] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [blankField, setBlankField] = useState(false);
    const [loginMessage, setLoginMessage] = useState(false);
    const [hideSubmit, setHideSubmit] = useState(false);
    const history = useHistory();

    useEffect(() => {
        document.querySelector(".loading").style.display="none";
    }, [])

    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleConfPassword = (e) => {
        setConfPassword(e.target.value);
    }
    const handleSubmit = () => {
        setLoading(true);
        setErrorMessage(false);
        setHideSubmit(true);
        if (name === null || name === "" || email === null || email === "" || password === null || password === "" ||
            confPassword === null || confPassword === "") {
            setBlankField(true);
            setLoading(false);
            setHideSubmit(false);
        }
        else {
            setBlankField(false);
            const sendData = { email, name, password };
            axios.post('https://self-growth-questionaire.herokuapp.com/register', sendData)
                .then(res => {
                    if (res.data.success === true) {
                        localStorage.setItem('token', res.data.token);
                        localStorage.setItem('email', email);
                        setLoading(false);
                        setLoginMessage(true);
                        setTimeout(() => {
                            history.push('/details');
                        }, 1000)
                    }
                    else {
                        setErrorMessage(res.data.message);
                        setLoading(false);
                        setHideSubmit(false);
                    }
                })

        }
    }
    const classes = useStyles();
    const errorPassword = {
        marginLeft: '20px',
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
            <Grid item className={classes.box} container>
                <Grid item className={classes.boxLeft} md={4} sm={12} xs={12}>
                    <p className={classes.heading} >
                        Create a new Account
                    </p>
                    <img src={emotions} className={classes.image} alt="" />
                    <div className={classes.footer}>
                        <p>Jivan Safalya | The Mirror Test</p>
                    </div>
                </Grid>
                <Grid item className={classes.boxRight} md={8} sm={12} xs={12}>

                    <div style={{ position: 'relative', width: '100%',  }}>
                        <i class="fas fa-envelope reg-icon" ></i>
                        <input
                            type="email"
                            id="email"
                            className={classes.input}
                            placeholder="Email"
                            autoComplete="on"
                            onChange={handleEmail}
                        />
                    </div>
                    <div style={{ position: 'relative', width: '100%', }}>
                        <i
                            class="fas fa-user reg-icon"
                        >
                        </i>
                        <input
                            type="text"
                            id="name"
                            className={classes.input}
                            placeholder="Name"
                            autoComplete="off"
                            onChange={handleName}
                        />
                    </div>
                    <div style={{ position: 'relative', width: '100%'}}>
                        <i
                            class="fas fa-key reg-icon" 
                        >
                        </i>
                        <input
                            type="password"
                            id="password"
                            className={classes.input}
                            placeholder="Password"
                            autoComplete="off"
                            onChange={handlePassword}
                        />
                    </div>
                    <div style={{ position: 'relative', width: '100%', }}>
                        <i
                            class="fas fa-lock reg-icon"
                        >
                        </i>
                        <input
                            type="password"
                            id="password-confirm"
                            className={classes.input}
                            placeholder="Confirm Password"
                            autoComplete="off"
                            onChange={handleConfPassword}
                        />
                    </div>
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
            </Grid>
        </Grid>
    )
}
export default Register;