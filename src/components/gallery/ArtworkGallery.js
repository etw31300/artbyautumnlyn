import React, {useState, useLayoutEffect} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import GetCategorizedImages, {ArtworkType} from "../firebase/GetCategorizedImages";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import DownloadImage from "../firebase/DownloadImage";

const useStyles = makeStyles((theme) => ({
    gallery: {
        width: "75%"
    },
    artwork: {
        width: "100%",
        display: "block",
        marginBottom: theme.spacing(1),
        margin: "auto"
    }
}));

const ArtworkGallery = (props) => {
    const classes = useStyles();
    const [imageDocs, setImageDocs] = useState([]);
    const [fetchingImages, setFetchingImages] = useState(false);
    const [imagesFetched, setImagesFetched] = useState(false);
    const [fetchFailed, setFetchFailed] = useState(false);

    useLayoutEffect(() => {
        if (fetchingImages || imagesFetched || fetchFailed) return;
        setFetchingImages(true);

        GetCategorizedImages(ArtworkType.ALL, (err, response) => {
            if (err) {
                console.error(err);
                setFetchFailed(true);
            }
            else {
                response.forEach((imageDoc) => {
                    DownloadImage(imageDoc.uri, (err, downloadUrl) => {
                        if (err)
                            console.error(err);
                        else {
                            imageDoc.downloadUrl = downloadUrl;
                            setImageDocs(prevState => {
                                return prevState.concat(imageDoc);
                            })
                        }
                    })
                })
            }
        }).then(() => {
            setImagesFetched(true);
            setFetchingImages(false);
        })
    }, [fetchFailed, fetchingImages, imagesFetched])

    return (
        <Container component="div" maxWidth={false} className={classes.gallery}>
            {
                imageDocs.map(doc => (
                    <Paper>
                        <img className={classes.artwork} key={doc.uid} alt={doc.alt} src={doc.downloadUrl}/>
                    </Paper>
                ))
            }
        </Container>
    );
}

export default ArtworkGallery;