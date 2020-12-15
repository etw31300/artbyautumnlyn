import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import Directories from "../../pages/Directories";

function FooterIsAbsolute() {
    let location = useLocation();
    const [isAbsolute, setIsAbsolute] = useState(false);


    useEffect(() => {
        if (location.pathname === Directories.HOME)
            setIsAbsolute(true);
        else
            setIsAbsolute(false);
    }, [location, setIsAbsolute])

    return isAbsolute;
}

export default FooterIsAbsolute;