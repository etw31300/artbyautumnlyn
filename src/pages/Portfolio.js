import React, {useState, useLayoutEffect} from 'react';
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import GetCategorizedImages, {ArtworkType} from "../components/firebase/GetCategorizedImages";
import ArtworkGallery from "../components/gallery/ArtworkGallery";

const useStyles = makeStyles((theme) => ({
    content: {
    }
}));

const Portfolio = (props) => {
    const classes = useStyles();

    return (
        <Container component="div" maxWidth={false} className={classes.content}>
            <ArtworkGallery/>
        </Container>
    );
}

export default Portfolio;