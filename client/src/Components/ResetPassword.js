import React, { useState } from "react";
import Bg from "../Images/bg.jpg";
import { makeStyles, Grid } from "@material-ui/core";
import axios from "axios";
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

const ResetPassword = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = () => {
    setLoader(true);

      axios.post(`http://localhost:5000/reset_password`, { email: email})
        .then((res) => {
          
          
        });
    
  };

  return (
    <Grid container className={classes.wrapper}>
      <Grid item className={classes.box}>
        <h2 className={classes.heading}>
          Reset Your Password
        </h2>
        <p className={classes.label}>
          Please enter your email address. If the email address exists, we will send a password reset link to that email.
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
            onChange={handleChange}
          />
        </div>
        {!loader ?
          <div
            className={classes.button}
            
            onClick={handleSubmit}
          >
            Next
          </div>
          : <Loader />
        }
      </Grid>
    </Grid>
  );
};
export default ResetPassword;
