import { makeStyles } from '@material-ui/core';
import Bg from '../../Images/bg.jpg';

export const useStyles = makeStyles((theme) => ({
    wrapper: {
        width: "100%",
        backgroundImage: `url(${Bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        display: "flex",
        justifyContent: "center",
    },
    box: {
        marginTop: "30px",
        width: "95%",
        boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
        backgroundColor: "#f7f7f7",
        borderRadius: "2px",
        color: "#333333",
        padding: "10px 10px",
        position: "relative",
        left: '1000px',
        opacity: 0,
        [theme.breakpoints.down("sm")]: {
            width: '95%',
            padding: "0px 0px"
        }
    },
    boxHeader: {
        width: "100%",
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: "1px solid #e0e0e0",
    },
    tableWrapper: {
        width: "80%",
        margin: "20px auto",
        [theme.breakpoints.down("sm")]: {
            width: '100%'
        }
    },
    tableLeft: {
        fontSize: '1.5rem', 
        color: "#005751",
        [theme.breakpoints.down("sm")]: {
            fontSize: '1.2rem'
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: '1rem'
        }
    },
    tableRight: {
        fontSize: '1.5rem',
        [theme.breakpoints.down("sm")]: {
            fontSize: '1.2rem'
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: '1rem'
        }
    },
    stepper: {
        background: 'transparent',
        [theme.breakpoints.down("sm")]: {
            width: '100%',
            margin: '0 auto',
            marginLeft: '-20px',
        }
    },
    logo: {
        fontSize: "1.5rem",
        color: "#333333",
        position: 'absolute',
        top: 20,
        left: 20
    },
    heading: {
        fontSize: "2.2rem",
    },
    subHeading: {
        fontSize: "1.6rem",
        color: "#005751",
        textDecoration: "underline",
        marginTop: "10px",
        [theme.breakpoints.down("sm")]: {
            fontSize: "1rem"
        }
    },
    section: {
        width: '80%',
        display: "flex",
        flexDirection: "column",
        margin: "30px auto"
    },
    resultBox: {
        width: "80%",
        padding: "10px 10px",
        boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
        margin: "20px auto",
        [theme.breakpoints.down("sm")]: {
            width: '100%',
            padding: "10px 10px",
        }
    },
    resultBoxHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginBottom: "20px"
    },
    numCircle: {
        width: "100px",
        height: "100px",
        borderRadius: '50%', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    paragraph: {
        fontSize: "1.2rem",
        marginBottom: "20px",
        lineHeight: "28px",
    },
    conditionHeading: {
        fontSize: "2rem",
        marginTop: "10px",
        fontWeight: 900,
        textDecoration: "underline",
    },
    nextButton: {
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#005751",
        color: "#fff",
        borderRadius: "2px",
        fontSize: "1.4rem",
        cursor: "pointer",
        transition: "all 0.3s ease",
        "&:hover": {
            backgroundColor: "#002926",
        }
    },
    buttonBox: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "20px"
    },
    tempWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    button: {
        margin: '0 auto',
    }
}))