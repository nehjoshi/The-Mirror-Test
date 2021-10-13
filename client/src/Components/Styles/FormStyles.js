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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    box: {
        minHeight: '80vh',
        width: '85%',
        background: "#fff",
        borderRadius: '4px',
        padding: '50px 50px',
        [theme.breakpoints.down("sm")]: {
            width: '95%'
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
    }
}))