import { makeStyles } from '@material-ui/core';
import Bg from "../../Images/bg.jpg";

export const useStyles = makeStyles((theme) => ({
    wrapper: {
        width: '100%',
        minHeight: '100vh',
        backgroundImage: `url(${Bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        position: 'relative',
    },
    box: {
        minHeight: '80vh',
        width: '85%',
        margin: '50px auto',
        background: "#fff",
        display: 'flex',
        flexDirection: 'column',
        padding: '50px 50px',
        [theme.breakpoints.down("sm")]: {
            width: '95%',
            margin: '50px auto'
        }
    },
    heading: {
        [theme.breakpoints.down("sm")]: {
            textAlign: 'center'
        }
    },
    subheading: {
        color: 'gray',
        [theme.breakpoints.down("sm")]: {
            textAlign: 'center'
        }
    },
    label: {
        color: 'black',
        fontSize: '1.4rem'
    },
    inputFields: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0 auto',
    },
    nats: {
        width: '200%',
        [theme.breakpoints.down("sm")]: {
            margin: '0 auto !important',
            display: 'block !important',
            width: '100%'
        },
    },
    dob: {
        width: 'fit-content !important',
        [theme.breakpoints.down("sm")]: {
            margin: '0 auto !important',
            display: 'block !important',
        }
    },
    weight: {
        [theme.breakpoints.down("sm")]: {
            margin: '0 auto',
            display: 'block'
        }
    },
    height: {
        [theme.breakpoints.down("sm")]: {
            margin: '0 auto',
            display: 'block'
        }
    },
    button: {
        border: '1px solid blue',
        borderRadius: '3px',
        width: '150px',
        padding: '10px 10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.2rem',
        margin: '0 auto',
        position: 'relative',
        transition: '0.2s all ease',
        "&:hover": {
            cursor: 'pointer',
            background: '#00C6CF',
            color: '#fff',
            border: '1px solid transparent'
        },
        "&:active": {
            background: '#009ca3',
            border: '1px solid transparent'
        }
    },
    sliderWrapper: {
        width: '80%'
    }
}))