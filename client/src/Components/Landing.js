import React, { useEffect, useRef, useState } from 'react';
import { Grid, useTheme } from '@material-ui/core';
import { useStyles } from "./Styles/DashboardStyles.js";
import { Link } from 'react-router-dom';
import { Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss'; // Pagination module
import 'swiper/modules/scrollbar/scrollbar.scss';
import "./Styles/swiperStyles.css";

const swiperOptions = {
    slidesPerView: 2,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
}

// import Swiper and modules styles

// init Swiper:

const Landing = () => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const headingRef = useRef(null);
    const buttonRef = useRef(null);
    const lineRef = useRef(null);
    const [snack, setSnack] = useState(false);
    useEffect(() => {
        document.querySelector(".loading").style.display = "none";
        if (sessionStorage.getItem("logout")) {
            setSnack(true);
            sessionStorage.removeItem("logout");
        }
    }, [])
    return (
        <Grid className={classes.wrapper}>
            <Grid container className={classes.landing}>
                <h1 className={classes.heading} ref={headingRef}>The Mirror Test</h1>
                <p className={classes.subheading}>A test that offers a reflection of who you really are.</p>
                <Link to="/login" style={{ margin: '10px 0px' }}><div className={classes.navButton} ref={buttonRef}>Start your journey</div></Link>
                <hr className={classes.mainHr} ref={lineRef}></hr>
            </Grid>
            <Snackbar open={snack} autoHideDuration={6000} onClose={() => setSnack(false)}>
                <Alert onClose={() => setSnack(false)} severity="success">
                    Logged out successfully!
                </Alert>
            </Snackbar>
            <Grid className={classes.landingInfo}>

                <h3 className={classes.landingInfoHeading}>What is The Mirror Test?</h3>
                <p className={classes.landingInfoText}>The Mirror Test is a way to measure five important pillars of our life. These are:</p>

                <Swiper navigation={true}  modules={[Navigation]} className="mySwiper" autoplay >
                    <SwiperSlide style={{backgroundColor: "#2D7DD2"}} className={classes.swiperSlide}><p className={classes.swiperText}>Adverse Childhood Experiences</p>
                    <p className={classes.swiperSmall}>Adverse Childhood Experiences (ACEs) are any traumatic experiences we may have, 
                    before the age of 18.</p>
                    </SwiperSlide>
                    <SwiperSlide style={{backgroundColor: "#97CC04"}} className={classes.swiperSlide}>
                        <p className={classes.swiperText}>Attachment Style</p>
                        <p className={classes.swiperSmall}>An attachment style is a specific way a person connects with others in 
            relationships.</p>
                    </SwiperSlide>
                    <SwiperSlide style={{backgroundColor: "#EEB902"}} className={classes.swiperSlide}>
                        <p className={classes.swiperText}>Hope and Optimism</p>
                        <p className={classes.swiperSmall}>Optimism is the ability to react to problems with a sense of confidence and
                    high personal ability.</p>
                    </SwiperSlide>
                    <SwiperSlide style={{backgroundColor: "#F45D01"}} className={classes.swiperSlide}>
                        <p className={classes.swiperText}>Personality</p>
                        <p className={classes.swiperSmall}>Personality is the way we think and act. It is the way we express ourselves.</p>
                    </SwiperSlide>
                    <SwiperSlide style={{backgroundColor: "#474647"}} className={classes.swiperSlide}>
                        <p className={classes.swiperText}>Wellbeing</p>
                        <p className={classes.swiperSmall}>The state of being comfortable, healthy, or happy emotionally and physically.</p>
                    </SwiperSlide>
                </Swiper>

            </Grid>
        </Grid>
    )
}
export default Landing;