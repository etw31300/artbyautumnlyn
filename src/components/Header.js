import React from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    header: {}
}));

const Header = (props) => {
    const classes = useStyles();

    return (
        <Container component="header" className={classes.header}>
            <Typography component="h1" variant="h5">Autumn Wallace</Typography>
        </Container>
    )
}

export default Header;