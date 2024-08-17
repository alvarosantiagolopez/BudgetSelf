import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';


export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: '#5038ED'
        },

        secondary: {
            main: '#03DAC5'
        },

        error: {
            main: red.A400
        }

    }
})