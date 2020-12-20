import React from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import NavLinks from "./NavLinks";
import bannerLogo from "../../res/images/banner_logo.png";

const useStyles = makeStyles((theme) => ({
    header: {
        position: "relative",
        background: "linear-gradient(to bottom, #fff 80%, #ffffff00)",
        zIndex: "1"
    },
    logo: {
        width: "33%"
    }
}));

const Header = (props) => {
    const classes = useStyles();

    return (
        <Container component="header"
                   maxWidth={false}
                   className={classes.header}>
            <Container component="div">
                <img className={classes.logo} src={bannerLogo} alt="Logo"/>
                <NavLinks/>
            </Container>
        </Container>
    )
}

export default Header;