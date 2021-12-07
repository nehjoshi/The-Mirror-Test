import { makeStyles } from '@material-ui/core';
import Bg from '../../Images/bg.jpg';

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
        height: "650px",
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
            width: '90%'
        }
    },
    boxHeader: {
        width: "100%",
        height: '60px',
        padding: "10px 10px `10px 10px",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: "1px solid #e0e0e0",
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
    section1: {
        width: '80%',
        display: "flex",
        flexDirection: "column",
        margin: "30px auto"
    }
}))