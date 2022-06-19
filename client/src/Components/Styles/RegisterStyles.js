import { makeStyles} from "@material-ui/core";
import Bg from "../../Images/bgBlurred.jpg";

export const useStyles = makeStyles((theme) => ({
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
        minHeight: "550px",
        width: '55%',
        [theme.breakpoints.down("sm")]: {
            width: '95%',
            height: '500px'
        },
        display: 'flex',
        justifyContent: 'space-evenly',
        backgroundColor: "#f7f7f7",
        borderRadius: "2px",
        color: "#333333",
        boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
        position: "relative",
    },
    boxLeft: {
        width: '40%',
        background: '#4E4637',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.down("sm")]: {
            height: '15%'
        },
    },
    boxRight: {
        display: 'flex',
        flexDirection: 'column',
        padding: '10px 20px',
        justifyContent: 'center',
        width: '60%'
    },
    heading: {
        fontSize: "1.8rem",
        textAlign: 'center',
        marginTop: '20px',
        color: '#fff'
    },
    image: {
        height: '15vw',
        marginTop: "60px",
        [theme.breakpoints.down("sm")]: {
            display: 'none'
        },
    },
    footer: {
        position: 'absolute',
        bottom: '20px',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        color: '#fff',
        fontSize: '0.7rem',
        [theme.breakpoints.down("sm")]: {
            display: 'none'
        },
    },
    label: {
        margin: "0 auto",
        position: "relative",
        top: "20px",
        width: "fit-content",
    },
    input: {
        height: "45px",
        outline: "none",
        borderColor: 'transparent',
        width: "80%",
        borderWidth: "2px",
        padding: "0px 25px",
        fontSize: "1.2rem",
        margin: '15px 0px',
        [theme.breakpoints.down("sm")]: {
            margin: '0px',
            width: '87%'
        },
        backgroundColor: "transparent",
        borderBottom: "1px solid gray",
        color: "#333333",
        
        "&:focus": {
            borderBottomColor: "#00B9A2",
            transitionDuration: "0.2s",
        },
    },
    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#4E4637",
        color: "#fff",
        height: "40px",
        borderRadius: "2px",
        width: "40%",
        margin: "20px auto",
        textTransform: "uppercase",
        position: "relative",
        transition: "all 0.2s ease",
        "&:hover": {
            cursor: "pointer",
            backgroundColor: "#006B61",
            width: "45%",
        },
        "&:active": {
            backgroundColor: "#005249"
        },
        "&:disabled": {
            backgroundColor: "#4E4637",
            color: "#fff",
            cursor: "not-allowed",
            width: "40%",
            opacity: 0.2
        }
    },
    noticeWrapper: {
        display: "flex",
        alignItems: "center",
        marginTop: "20px"
    },
    checkbox: {
        transform: "scale(1.5)",
    },
    noticeText: {
        marginLeft: "10px"
    }
}));