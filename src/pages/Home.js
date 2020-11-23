import React from 'react';
import Container from '@material-ui/core/Container';
import marilynMonroe from '../res/images/Marilyn_Monroe.jpg';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    image: {
        width: "100%"
    }
}));

const Home = (props) => {
    const classes = useStyles();

    return (
        <Container component="div">
            <img className={classes.image} src={marilynMonroe} alt="Marilyn Monroe sketch"/>
        </Container>
    );
}

export default Home;