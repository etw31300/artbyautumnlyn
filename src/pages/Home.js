import React, {useLayoutEffect, useState} from 'react';
import Carousel from "react-material-ui-carousel";
import makeStyles from "@material-ui/core/styles/makeStyles";
import GetCarouselImages from "../components/firebase/GetCarouselImages";
import DownloadImage from "../components/firebase/DownloadImage";

const useStyles = makeStyles((theme) => ({
    image: {
        width: "100%"
    },
    carousel: {
        position: "fixed",
        width: "100%",
        margin: "0",
        padding: "0",
        top: "0"
    }
}));

const Home = (props) => {
    const classes = useStyles();
    const [images, setImages] = useState([]);
    const [fetchingImages, setFetchingImages] = useState(false);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [loadFailed, setLoadFailed] = useState(false);

    useLayoutEffect(() => {
        if (fetchingImages || imagesLoaded || loadFailed) return;
        setFetchingImages(true);
        GetCarouselImages((err, response) => {
            if (err) {
                console.error(err);
                setLoadFailed(true);
            }
            else {
                response.forEach((image) => {
                    DownloadImage(image, (err, url) => {
                        if (err)
                            console.error(err);
                        else {
                            setImages((prevState) => {
                                return prevState.concat(url);
                            })
                        }
                    })
                })
                setImagesLoaded(true);
            }
            setFetchingImages(false);
        })
    }, [fetchingImages, imagesLoaded, loadFailed])

    return (
        <Carousel className={classes.carousel}
                  navButtonsAlwaysInvisible={true}
                  indicators={false}
                  timeout={1000} changeOnFirstRender={true}>
            {
                images.map((image) => (
                    <img className={classes.image} src={image} alt="Featured artwork"/>
                ))
            }
        </Carousel>
    );
}

export default Home;