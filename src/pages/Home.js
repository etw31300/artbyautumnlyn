import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from "@material-ui/core/Paper";
import Carousel from "react-material-ui-carousel";
import makeStyles from "@material-ui/core/styles/makeStyles";

import ivyAnimation from '../res/animations/ivy_animation.gif';
import marilynMonroe from '../res/images/Marilyn_Monroe.jpg';
import kindredKitties from '../res/images/Kindred_Kitties.png';
import greta from '../res/images/greta.jpg';
import woodElves from '../res/images/wood_elves.jpg';
import waterfall from '../res/images/waterfall.jpg';

const useStyles = makeStyles((theme) => ({
    image: {
        width: "100%"
    },
    slideShowContainer: {
        position: "fixed",
        width: "100%",
        margin: "0",
        padding: "0",
    }
}));

const Home = (props) => {
    const classes = useStyles();

    return (
        <Carousel className={classes.slideShowContainer}
                  navButtonsAlwaysInvisible={true}
                  indicators={false}
                  timeout={1000}>
            <Paper>
                <img className={classes.image} src={ivyAnimation} alt="Animation of Ivy"/>
            </Paper>
            <Paper>
                <img className={classes.image} src={marilynMonroe} alt="Marilyn Monroe sketch"/>
            </Paper>
            <Paper>
                <img className={classes.image} src={kindredKitties} alt="Kindred Kitties T-Shirt Drawing"/>
            </Paper>
            <Paper>
                <img className={classes.image} src={greta} alt="Greta"/>
            </Paper>
            <Paper>
                <img className={classes.image} src={woodElves} alt="Digital drawing of wood elves"/>
            </Paper>
            <Paper>
                <img className={classes.image} src={waterfall} alt="Digital drawing of a waterfall"/>
            </Paper>
        </Carousel>
    );
}

export default Home;