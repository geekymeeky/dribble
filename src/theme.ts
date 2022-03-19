import { createTheme } from "@mui/material/styles"; 
import { yellow } from "@mui/material/colors"; 

// Theme
const theme = createTheme({
    palette: {
        primary:{
            main: yellow[700],
        },
        secondary:{
            main: '#ff9800',
        }
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontWeight: 300,
            fontSize: '4rem',
            lineHeight: 1.2,
            color: '#212121',
        }
    },
});

export default theme;