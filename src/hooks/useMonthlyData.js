import { useMemo } from 'react';

export const useMonthlyData = (transactions, selectedMonthIndex) => {

    const { monthTransactions, totalIncome, totalExpenses, totalSavings } = useMemo(() => {
        const monthTransactions = transactions.filter((transaction) => {
            const transactionMonth = new Date(transaction.date).getMonth();
            return transactionMonth === selectedMonthIndex;
        });

        const totalIncome = monthTransactions
            .filter((transaction) => transaction.type === 'Income')
            .reduce((sum, transaction) => sum + transaction.amount, 0);

        const totalExpenses = monthTransactions
            .filter((transaction) => transaction.type.toLowerCase().includes('expense'))
            .reduce((sum, transaction) => sum + transaction.amount, 0);

        const totalSavings = totalIncome - totalExpenses;

        return { monthTransactions, totalIncome, totalExpenses, totalSavings };
    }, [transactions, selectedMonthIndex]);

    return { monthTransactions, totalIncome, totalExpenses, totalSavings };
};
