import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#9785BA",
            dark: "#AF9FCD",
            light: "#F9FAFA",
        },
        secondary: {
            main: "#D7C7F4",
            light: "#FFFFFF",
        },
    },
    typography: {
        fontFamily: "Ubuntu, Open sans",
    },
});

export default theme;
