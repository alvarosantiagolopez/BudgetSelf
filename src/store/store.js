import { configureStore } from '@reduxjs/toolkit';
import { uiSlice, transactionsSlice } from './';



export const store = configureStore({
    reducer: {
        transactions: transactionsSlice.reducer,
        ui: uiSlice.reducer
    },

})