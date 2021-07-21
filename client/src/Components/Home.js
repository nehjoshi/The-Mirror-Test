import React, {useEffect, useRef} from "react";
import Bg from "../Images/bg.jpg";
import { makeStyles, Grid } from "@material-ui/core";
import gsap, {Power2} from 'gsap';

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
    overflow: 'hidden'
  },
  box: {
    height: "550px",
    width: "320px",
    backgroundColor: "#f7f7f7",
    borderRadius: "20px",
    boxShadow: "0 0 7px  #7a7a7a",
    color: "#333333",
    padding: "10px 10px",
    position: 'relative'
  },
  heading: {
    fontSize: "2rem",
    textAlign: "center",
    marginTop: "50px",
    marginBottom: "50px",
    position: 'relative',
    top: '20px',
    opacity: 0,
  },
  label: {
    margin: "0 auto",
    position: 'relative',
    top: '20px',
    opacity: 0,
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
    position: "relative",
    margin: "0 auto",
    textTransform: "uppercase",
    opacity: 0,
    position: 'relative',
    top: '30px',
    top: '-20px',
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#e6b635",
      width: '83%',
      transitionDuration: '0.2s'
    },
  },
  skip: {
    position: "absolute",
    bottom: "15px",
    right: "20px",
    fontSize: '1.2rem'
  },
}));

const Home = () => {
  const classes = useStyles();
  const headingRef = useRef(null);
  const labelRef = useRef(null);
  const buttonRef = useRef(null);
  const inputRef = useRef(null);

    useEffect(() => {
        gsap.to(headingRef.current, {
            opacity: 1,
            top: 0,
            ease: Power2.easeIn,
            duration: 0.2
        })
        gsap.to(labelRef.current, {
            opacity: 1,
            top: 0,
            ease: Power2.easeIn,
            duration: 0.2,
            delay: 0.2
        })
        gsap.to(inputRef.current, {
            opacity: 1,
            top: 0,
            ease: Power2.easeIn,
            duration: 0.2,
            delay: 0.6
        })
        gsap.to(buttonRef.current, {
            opacity: 1,
            top: 50,
            ease: Power2.easeIn,
            duration: 0.2,
            delay: 0.8
        })
    }, [])

  return (
    <Grid container className={classes.wrapper}>
      <Grid item className={classes.box}>
        <h2 className={classes.heading} ref={headingRef}>Welcome to the questionaire</h2>
        <p className={classes.label} ref={labelRef}>Please enter your name to continue</p>
        <div style={{ width: "100%", position: "relative", top: "30px", opacity: 0 }} ref={inputRef}>
          <i
            className="fas fa-user"
            style={{ position: "absolute", top: "17px", left: "40px" }}
          ></i>
          <input
            type="text"
            id="name"
            className={classes.input}
            placeholder="Name"
            autoComplete="off"
          />
        </div>
        <div className={classes.button} ref={buttonRef}>Next</div>
        <p className={classes.skip}>Skip</p>
      </Grid>
    </Grid>
  );
};
export default Home;
