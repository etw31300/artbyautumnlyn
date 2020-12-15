import {createMuiTheme} from "@material-ui/core/styles";

const Theme = createMuiTheme({
    palette: {
        primary: {
            main: "#7a89c4",
            light: "#abb9f7",
            dark: "#4b5c93"
        },
        secondary: {
            main: "#646665",
            light: "#929493",
            dark: "#3a3c3b"
        }
    },
    spacing: 15
});

export default Theme;