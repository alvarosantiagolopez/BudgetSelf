import { useDispatch, useSelector } from 'react-redux';
import { addTransaction, updateTransaction, deleteTransaction } from '../store';

export const useTransactionsStore = () => {

    const dispatch = useDispatch();

    const { transactions, status, error } = useSelector((state) => state.transactions);

    const startAddingTransaction = (transactionData) => {
        // TODO: llegar al backend
        dispatch(addTransaction(transactionData));
    };

    const startUpdatingTransaction = (id, changes) => {
        dispatch(updateTransaction({ id, changes }));
    };

    const startDeletingTransaction = (id) => {
        dispatch(deleteTransaction(id));
    };

    return {
        //* Properties
        transactions,
        status,
        error,

        //* Methods
        startAddingTransaction,
        startUpdatingTransaction,
        startDeletingTransaction,
    };
};
