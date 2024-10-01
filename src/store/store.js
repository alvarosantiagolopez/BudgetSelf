import { configureStore } from '@reduxjs/toolkit';
import { uiSlice, transactionsSlice, authSlice } from './';


// Save in LocalStorage
const saveTransactions = (transactions) => {
    try {
        const serializedState = JSON.stringify(transactions);
        localStorage.setItem('transactions', serializedState);
    } catch (e) {
        console.warn('No se pudo guardar las transacciones en el LocalStorage:', e);
    }
};

// Middleware personalizado
const localStorageMiddleware = ({ getState }) => (next) => (action) => {
    const result = next(action);

    // Si la acción es del slice de transacciones, guardamos el estado
    if (action.type.startsWith('transactions/')) {
        const { transactions } = getState().transactions;
        saveTransactions(transactions);
    }

    return result;
};


export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        transactions: transactionsSlice.reducer,
        ui: uiSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(localStorageMiddleware),

});