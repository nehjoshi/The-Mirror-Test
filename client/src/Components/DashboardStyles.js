import { makeStyles } from '@material-ui/core';
import Bg from "../Images/bg.jpg";

export const useStyles = makeStyles((theme) => ({
    // wrapper: {
    //   width: "100%",
    //   minHeight: '100vh',

    //   backgroundSize: "cover",
    //   backgroundRepeat: "no-repeat",
    //   backgroundPosition: "center center",
    //   display: "flex",
    //   flexDirection: 'column',
    //   justifyContent: "center",
    //   alignItems: "center",
    //   overflow: "hidden",
    //   position: 'relative'
    // },
    landing: {
        position: 'relative',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${Bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
    },
    heading: {
        fontSize: 'clamp(2.6rem, 6.1vw, 6rem)',
        margin: '0px 10px',
        color: '#2F4858',
        fontWeight: '900',
        fontFamily: 'Merriweather Sans, sans-serif',
    },
    subheading: {
        fontSize: 'clamp(0.9rem, 2.1vw, 2rem)',
        margin: '0px 10px',
        color: '#2F4858'
    },
    navButton: {
        backgroundColor: '#DFE0DF',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '15px 20px',
        borderRadius: '5px',
        margin: '0px 10px',
        color: '#000',
        transition: '0.2s all ease',
        boxShadow: "1px 2px 5px 0px #272727",
        fontSize: 'clamp(1rem, 1.3vw, 1.2rem)', 
        textTransform: 'uppercase',
        '&:hover': {
            backgroundColor: '#2F4858',
            color: '#fff',
            cursor: 'pointer',
        },
        [theme.breakpoints.down("sm")]: {
            padding: '10px 15px',
        }
    },
    mainHr: {
        border: '0.2px solid #2F4858',
        width: '50%',
        margin: '10px 0px',
        [theme.breakpoints.down("sm")]: {
            width: '90%'
        }
    },
    testContainer: {
        justifyContent: 'center'
    },
    profile: {
        position: 'absolute',
        top: 20,
        right: 20,
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: '#003840',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.3rem',
        color: '#fff',
        fontWeight: '900',
        border: '3px solid transparent',
        transition: '0.2s all ease',
        zIndex: '100',
        '&:hover': {
            cursor: 'pointer',
            borderColor: 'gray',
        },
        [theme.breakpoints.down("md")]: {
            display: 'none'
        }
    },
    profileWrapper: {
        position: 'absolute',
        // height: 'px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#003840',
        right: '20px',
        fontSize: '1.3rem',
        padding: '20px 20px',
        zIndex: '100',
        borderRadius: '10px',
        top: 70,
        color: '#fff'
    },
    logOut: {
        '&:hover': {
            cursor: 'pointer',
            textDecoration: 'underline'
        }
    },

}))