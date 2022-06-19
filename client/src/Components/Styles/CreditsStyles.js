import { makeStyles } from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({
    container: {
        width: "100%",
        backgroundColor: "#f7f7f7",
        // backgroundColor: "red",
        margin: 0,
        overflowX: "hidden",
        padding: 0,
        position: 'relative',
    },
    backButton: {
        position: 'absolute',
        top: 10,
        left: 10,
        zIndex: 1,
        fontSize: '1.1rem'
    },
    wrapper: {
        height: '50vh',
        width: "100%",
        position: "relative",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    smallDivider: {
        width: "150px",
        border: "5px solid #dbdbdb",
        borderRadius: "5px",
        marginBottom: "10px"
    },
    heading: {
        fontSize: "2.5rem",
        marginBottom: "80px",
        [theme.breakpoints.down('sm')]: {
            fontSize: "2.1rem",
            textAlign: "center",
            padding: "10px 10px"
        }
    },
    divider: {
        width: "100%",
        border: "2px solid #dbdbdb",
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        width: "100%",
        alignItems: 'center',
        minHeight: "200px",
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        }
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        width: "50%",
        alignItems: 'center',
        justifyContent: 'center',
        padding: "100px 30px",
        [theme.breakpoints.down('sm')]: {
            width: "95%",
            padding: "5px 5px"
        }
    },
    subHeading: {
        color: "#9c9c9c",
        fontFamily: "Nunito",
        fontSize: "1.6rem",
        [theme.breakpoints.down('sm')]: {
            fontSize: "1.2rem",
        }
    },
    smallHeading: {
        color: "#383838",
        fontSize: "1.8rem",
        [theme.breakpoints.down('sm')]: {
            fontSize: "1.4rem",
            textAlign: "center",
        }
    },
    text: {
        color: "#383838",
        fontSize: "1.4rem",
        [theme.breakpoints.down('sm')]: {
            fontSize: "1.1rem",
        }
    },
}))