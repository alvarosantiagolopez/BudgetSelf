import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isTransactionModalOpen: false,
    },
    reducers: {
        onOpenTransactionModal: (state) => {
            state.isTransactionModalOpen = true;
        },
        onCloseTransactionModal: (state) => {
            state.isTransactionModalOpen = false;
        },
    }
});


// Action creators
export const { onOpenTransactionModal, onCloseTransactionModal } = uiSlice.actions;