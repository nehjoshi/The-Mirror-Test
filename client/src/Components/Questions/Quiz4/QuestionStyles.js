import {makeStyles} from '@material-ui/core';
import Bg from "../../../Images/bg.jpg";

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
        height: "550px",
        width: "400px",
        backgroundColor: "#f7f7f7",
        borderRadius: "20px",
        boxShadow: "0 0 7px  #7a7a7a",
        color: "#333333",
        padding: "10px 10px",
        position: "relative",
        left: '1000px',
        opacity: 0,
        [theme.breakpoints.down("sm")]: {
          width: '90%'
        }
      },
      heading: {
        borderBottom: "1px solid #b8b894",
        textAlign: 'center'
      },
      text: {
          fontSize: '1.5rem',
          marginTop: '40px',
          
      },
      buttonWrapper: {
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          margin: '10px auto',
      },
      button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffcb3b",
        color: "black",
        height: "40px",
        borderRadius: "30px",
        width: "90%",
        margin: "5px auto",
        textTransform: "uppercase",
        transition: "all 0.2s ease",
        boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 3px 3px",
        "&:hover": {
          cursor: "pointer",
          backgroundColor: "#e6b635",
          
        },
    }
}));

