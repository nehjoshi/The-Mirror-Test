import { makeStyles } from '@material-ui/core';
import lib from "../../Images/library.jpg";
export const useStyles = makeStyles((theme) => ({
    wrapper: {
        height: '100vh',
        width: '100%',
        backgroundImage: `url(${lib})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    heading: {
        fontSize: 'clamp(2.6rem, 5.1vw, 5rem)',
        color: '#fff',
        fontWeight: '900',
    },
    subHeading: {
        fontSize: 'clamp(0.9rem, 2.1vw, 2rem)',
        color: '#fff',
    },
    button: {
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '10px 25px',
        borderRadius: '5px',
        margin: '10px 10px',
        color: '#000',
        transition: '0.2s all ease',
        boxShadow: "1px 2px 5px 0px #272727",
        fontSize: 'clamp(1rem, 1.5vw, 1.4rem)',
        textTransform: 'uppercase',
        '&:hover': {
            backgroundColor: '#F59432',
            color: '#fff',
            cursor: 'pointer',
        },
    },
    section2: {
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '40px',
        backgroundColor: "#e0e0e0"
    },
    card: {
        height: "500px",
        width: "400px",
        padding: "5px 5px",
        backgroundColor: "#fff",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "0px 20px",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        '&:hover': {
            cursor: 'pointer',
        }
    },
    cardImage: {
        height: "200px"
    }
}))