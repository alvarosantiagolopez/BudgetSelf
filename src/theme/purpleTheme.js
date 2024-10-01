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

        income: {
            main: '#08b447'
        },

        expenses: {
            main: red[600]
        },

        essential: {
            main: '#f8bd4e'
        },

        nonessential: {
            main: '#f8625c'
        },

        progress: {
            //main: '#2690D7'
            main: '#60B1F2'
        },
    }
})