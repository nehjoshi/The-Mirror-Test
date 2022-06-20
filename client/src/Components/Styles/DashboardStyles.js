import { makeStyles } from '@material-ui/core';
import Bg from "../../Images/bg.jpg";
import BgBlue from "../../Images/bgLake.webp";

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
        width: '100px',
        [theme.breakpoints.down("sm")]: {
            width: '70px'
        }

    },
    heading: {
        fontSize: 'clamp(2.6rem, 6.1vw, 6rem)',
        margin: '0px 10px',
        color: '#FFEACE',
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
            height: '30px',
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
        borderRadius: '10px 5px 5px 10px',
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
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
    hr: {
        border: '0.1px solid #DFE0DF',
        width: '100%',
        margin: "10px auto"
    },
    result: {
        backgroundColor: "#FFF9EE",
        width: "80%",
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
        marginBottom: '20px',
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        borderRadius: '5px',
        [theme.breakpoints.down("sm")]: {
            width: '90%'
        }
    },
    resultHeading: {
        fontSize: '3.5rem',
        fontWeight: '900',
        margin: '10px auto',
        textAlign: 'center',
        color: "#006977"
    },
    resultP: {
        fontSize: '1.5rem',
        width: '80%',
        margin: '10px auto',
        color: "#212121",
        [theme.breakpoints.down("sm")]: {
            width: '90%',
            fontSize: '1.2rem'
        }
    },
    resultBtn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#006977',
        width: "fit-content",
        margin: '10px auto',
        marginBottom: "20px",
        fontSize: '1.5rem',
        padding: '8px 40px',
        boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
        color: '#fff',
        cursor: "pointer",
        borderRadius: '40px',
        transition: '0.2s all ease',
        "&:hover": {
            backgroundColor: '#003840',
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: '1.2rem',
        }
    },
    resultBtnDisabled: {
        backgroundColor: '#006977',
        cursor: 'not-allowed',
        opacity: '0.5',
        "&:hover": {
            backgroundColor: '#006977',
        },
    },
    footer: {
        backgroundColor: '#003840',
        color: '#fff',
        padding: '20px 0px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerBottom: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    feedback: {
        color: '#2697bd',
        cursor: 'pointer',
        textDecoration: 'underline',
        margin: "0px 5px"
    },
    responsiveLogout: {
        display: 'none',
        [theme.breakpoints.down("sm")]: {
            display: 'block',
        }
    },
    landingInfo: {
        height: "80vh",
        // backgroundColor: "#ededed"
        // backgroundColor: "#e5e5f7",
        backgroundImage: "linear-gradient(to right top, #f9f9f9, #f1f1f1, #e9e9e9, #e2e2e2, #dadada)",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        
    },
    landingInfoHeading: {
        fontSize: '3.5rem',
        opacity: 20,
        marginTop: "40px",
        [theme.breakpoints.down("sm")]: {
            fontSize: '2rem',
        }
    },
    landingInfoText: {
        fontSize: '1.5rem',
        [theme.breakpoints.down("sm")]: {
            fontSize: '1.2rem',
            textAlign: 'center',
        }
    },
    swiperText: {
        fontSize: '2rem',
        fontWeight: '900',
        color: "#fff",
        [theme.breakpoints.down("sm")]: {
            fontSize: '1.2rem',
        }
    },
    swiperSlide: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    swiperSmall: {
        fontSize: '1.5rem',
        color: "#0079a8",
        width: "90%",
        color: "#fff",
        [theme.breakpoints.down("sm")]: {
            fontSize: '1.1rem',
            width: "80%",
        }
    }
}))