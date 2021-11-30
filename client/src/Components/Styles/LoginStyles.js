import { makeStyles } from "@material-ui/core";
import Bg from "../../Images/bg.jpg";
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
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        
        width: '80%',
        padding: '20px 20px'
    },
    box: {
        height: "400px",
        width: "320px",
        backgroundColor: "#f7f7f7",
        borderRadius: "20px",
        boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
        color: "#333333",
        padding: "10px 10px",
        position: "relative",
    },
    leftBox: {
        display: 'flex',
        flexDirection: 'column',
        margin: '0px 0px',
        marginLeft: '-100px',
        marginRight: '50px',
        [theme.breakpoints.down("md")]: {
            margin: '0px 0px'
        }
        
    },
    heading: {
        fontSize: "2rem",
        textAlign: "center",
        position: "relative",
        top: "20px",

    },
    label: {
        margin: "0 auto",
        position: "relative",
        top: "20px",
        marginTop: '30px',
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
        margin: "0px auto",
        marginTop: '50px',
        marginBottom: '10px',
        textTransform: "uppercase",
        position: "relative",
        boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
        transition: "all 0.2s ease",
        "&:hover": {
            cursor: "pointer",
            backgroundColor: "#e6b635",
            width: "83%",
        },
    },
    mainImg: {
        [theme.breakpoints.down("md")]: {
            display: 'none'
        }
    }
}));