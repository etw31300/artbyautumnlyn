import {createMuiTheme} from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

const Theme = createMuiTheme({
    palette: {
        primary: {
            main: "#afafaf",
            light: "#ffffff",
            dark: "#000000"
        },
    },
    margins: {
        main: {
            top: "50px"
        }
    }
});

export default Theme;