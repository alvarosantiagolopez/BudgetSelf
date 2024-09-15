import { createTheme } from '@mui/material';
import { red, green } from '@mui/material/colors';


export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: '#5038ED'
        },

        secondary: {
            main: '#03DAC5'
        },

        income: {
            main: green[700],
        },

        expenses: {
            main: red[700],
        },


    }
})