import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Container from "@material-ui/core/Container";
import Directories from "./Directories";
import makeStyles from '@material-ui/core/styles/makeStyles';
import Header from "../components/Header";

//pages
import Home from './Home';

const useStyles = makeStyles((theme) => ({
    main: {
        marginTop: theme.margins.main.top,
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
                </Switch>
            </main>
        </BrowserRouter>
    )
}