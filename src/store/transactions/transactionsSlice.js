import { createSlice, nanoid } from '@reduxjs/toolkit';

export const transactionsSlice = createSlice({
    name: 'transactions',
    initialState: {
        transactions: [],
        status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
        error: null,
    },
    reducers: {
        addTransaction: {
            reducer(state, action) {
                state.transactions.push(action.payload);
            },
            prepare(transaction) {
                return {
                    payload: {
                        id: nanoid(),
                        ...transaction,
                    },
                };
            },
        },
        updateTransaction(state, action) {
            const { id, changes } = action.payload;
            const existingTransaction = state.transactions.find((transaction) => transaction.id === id);
            if (existingTransaction) {
                Object.assign(existingTransaction, changes);
            }
        },
        deleteTransaction(state, action) {
            const id = action.payload;
            state.transactions = state.transactions.filter((transaction) => transaction.id !== id);
        },

    },
});


// Action creators
export const {
    addTransaction,
    updateTransaction,
    deleteTransaction,
} = transactionsSlice.actions;