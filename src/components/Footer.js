import React from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Link} from "react-router-dom";
import Directories from "../pages/Directories";
import FooterIsAbsolute from "./controls/FooterIsAbsolute";

const useStyles = makeStyles((theme) => ({
    footer: {
        width: "100%",
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1)
    },
    absolute: {
        position: "absolute",
        background: "white",
        bottom: "0",
        left: "0",
        right: "0"
    }
}));

const Footer = (props) => {
    const classes = useStyles();
    let isAbsolute = FooterIsAbsolute();

    return (
        <Container component="footer"
                   maxWidth={false}
                   className={[classes.footer, isAbsolute ? classes.absolute : null]}>
            <Typography align="center" component="p" variant="subtitle1">
                Artwork and Page Design by <Link to={Directories.HOME}>Autumn Wallace</Link>
                &nbsp;Page Created by <a href="http://www.elijahwallace-portfolio.com/" target="_blank">Eli Wallace</a>
            </Typography>
        </Container>
    );
}

export default Footer;