import { makeStyles } from '@material-ui/core';
import Bg from "../../Images/bg.jpg";
import BgBlue from "../../Images/bgLake.jpg";

export const useStyles = makeStyles((theme) => ({
    landing: {
        position: 'relative',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${BgBlue})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
    },
    mainLogo: {
        position: 'absolute',
        top: 20,
        left: 20,
        display: 'none',
        width: '100px',
        [theme.breakpoints.down("sm")]: {
            width: '70px'
        }
        
    },
    heading: {
        fontSize: 'clamp(2.6rem, 6.1vw, 6rem)',
        margin: '0px 10px',
        color: '#FFEACE',
        position: 'relative',
        opacity: 0,
        top: -20,
        fontWeight: '900',
        fontFamily: 'Merriweather Sans, sans-serif',
    },
    subheading: {
        fontSize: 'clamp(0.9rem, 2.1vw, 2rem)',
        margin: '0px 10px',
        color: '#D8E9E3'
    },
    navButton: {
        backgroundColor: '#fff',
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
        position: 'relative',
        opacity: 0,
        top: 20,
        '&:hover': {
            backgroundColor: '#F59432',
            color: '#fff',
            cursor: 'pointer',
        },
        [theme.breakpoints.down("sm")]: {
            padding: '10px 15px',
        }
    },
    mainHr: {
        border: '0.2px solid #fff',
        width: '50%',
        margin: '10px 0px',
        [theme.breakpoints.down("sm")]: {
            width: '90%'
        }
    },
    testContainer: {
        justifyContent: 'center'
    },
    tests: {
        backgroundImage: `url(${Bg})`,
        minHeight: '100vh',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        width: '100%',
    },
    profile: {
        position: 'absolute',
        top: 20,
        right: 20,
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: '#2F4858',
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
            width: '30px',
            height: '30px'
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
    [theme.breakpoints.down("md")]: {
        
    },
    logOut: {
        '&:hover': {
            cursor: 'pointer',
            textDecoration: 'underline'
        }
    },

}))