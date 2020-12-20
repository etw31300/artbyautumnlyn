import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Container from "@material-ui/core/Container";
import Directories from "./Directories";
import makeStyles from '@material-ui/core/styles/makeStyles';
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

//pages
import Home from './Home';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';

const useStyles = makeStyles((theme) => ({
    main: {
    }
}));

export default function() {
    const classes = useStyles();

    return (
        <BrowserRouter>
            <Header/>
            <main className={classes.main}>
                <Switch>
                    <Route exact path={Directories.HOME} component={Home}/>
                    <Route exact path={Directories.PORTFOLIO} component={Portfolio}/>
                    <Route exact path={Directories.ABOUT} component={About}/>
                    <Route exact path={Directories.CONTACT} component={Contact}/>
                </Switch>
            </main>
            <Footer/>
        </BrowserRouter>
    )
}