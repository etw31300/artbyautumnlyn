import React from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Link} from "react-router-dom";
import Directories from "../pages/Directories";

const useStyles = makeStyles((theme) => ({
    footer: {}
}));

const Footer = (props) => {
    const classes = useStyles();

    return (
        <Container component="footer" className={classes.footer}>
            <Typography component="p" variant="subtitle1">
                Artwork and Page Design by <Link to={Directories.HOME}>Autumn Wallace</Link>
                &nbsp;Page Created by <a href="http://www.elijahwallace-portfolio.com/" target="_blank">Eli Wallace</a>
            </Typography>
        </Container>
    );
}

export default Footer;