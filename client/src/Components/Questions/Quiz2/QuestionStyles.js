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
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: '20px',
      },
      button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffcb3b",
        color: "black",
        height: "45px",
        borderRadius: "30px",
        width: "40%",
        margin: "25px auto",
        textTransform: "uppercase",
        transition: "all 0.2s ease",
        "&:hover": {
          cursor: "pointer",
          backgroundColor: "#e6b635",
          
        },
    }
}));

