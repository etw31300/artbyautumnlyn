import React from 'react';
import {Link} from 'react-router-dom'
import Directories from "../pages/Directories";
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import SocialMediaLinks from "./SocialMediaLinks";

const useStyles = makeStyles((theme) => ({
    navLinks: {
        position: "absolute",
        display: "inline",
        right: "0",
        top: "50%",
        transform: "translateY(-50%)",
        marginRight: "20%",
        [theme.breakpoints.down('md')]: {
            marginRight: theme.spacing(2)
        },
        [theme.breakpoints.down('sm')]: {
            position: "relative",
            display: "block"
        }
    },
    navLink: {
        marginLeft: theme.spacing(2),
        color: theme.palette.secondary.main,
        textDecoration: "none",
        '&:active': {
            color: theme.palette.secondary.dark
        },
    }
}));

const NavLinks = (props) => {
    const classes = useStyles();

    return (
      <div className={classes.navLinks}>
          <Link className={classes.navLink} to={Directories.HOME}>HOME</Link>
          <Link className={classes.navLink} to={Directories.PORTFOLIO}>PORTFOLIO</Link>
          <Link className={classes.navLink} to={Directories.ABOUT}>ABOUT</Link>
          <Link className={classes.navLink} to={Directories.CONTACT}>CONTACT</Link>
          <SocialMediaLinks/>
      </div>
    );
}


export default NavLinks;