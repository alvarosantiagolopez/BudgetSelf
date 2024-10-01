import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'authenticated', // 'authenticated' | 'not-authenticated' | 'checking'
        user: null,
        errorMessage: null,
    },
    reducers: {
        login: (state, { payload }) => {
            state.status = 'authenticated';
            state.user = payload;
            state.errorMessage = null;
        },
        logout: (state, { payload }) => {
            state.status = 'not-authenticated';
            state.user = null;
            state.errorMessage = payload;
        },
        checkingCredentials: (state) => {
            state.status = 'checking';
        },
    },
});

// Action creators
export const { login, logout, checkingCredentials } = authSlice.actions;
