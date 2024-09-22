import { useMemo } from 'react';

export const useGroupedTransactions = (monthTransactions, transactionTypes) => {
    const groupedTransactions = useMemo(() => {

        const initialGroups = transactionTypes.reduce((acc, type) => {
            acc[type] = [];
            return acc;
        }, {});


        const groups = monthTransactions.reduce((acc, transaction) => {
            const type = transaction.type;
            if (acc[type]) {
                return {
                    ...acc,
                    [type]: [...acc[type], transaction],
                };
            } else {
                // Unknown types
                return {
                    ...acc,
                    [type]: [transaction],
                };
            }
        }, initialGroups);

        //* Transactions by date
        Object.keys(groups).forEach((type) => {
            groups[type].sort((a, b) => {
                // Convert dates to a objet Date
                const dateA = new Date(a.date);
                const dateB = new Date(b.date);
                // More recent first
                return dateB - dateA;
            });
        });

        return groups;
    }, [monthTransactions, transactionTypes]);

    return groupedTransactions;
};
