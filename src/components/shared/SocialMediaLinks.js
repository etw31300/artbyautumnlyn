import React from 'react';
import Directories from "../../pages/Directories";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    links: {
        display: "inline",
        position: "relative",
        right: "0",
        top: "50%",
        marginRight: "10px",
        marginLeft: theme.spacing(2),
    },
    link: {
        marginLeft: theme.spacing(1),
        padding: "0",
        color: theme.palette.secondary.main,
        textDecoration: "none",
        '&:active': {
            color: theme.palette.secondary.dark
        },
    }
}));

const SocialMediaLinks = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.links}>
            <a className={classes.link} href={Directories.INSTAGRAM} target="_blank">
                <InstagramIcon className={classes.icon} fontSize="inherit"/>
            </a>
            <a className={classes.link} href={Directories.LINKEDIN} target="_blank">
                <LinkedInIcon className={classes.icon} fontSize="inherit"/>
            </a>
        </div>
    );
}

export default SocialMediaLinks;