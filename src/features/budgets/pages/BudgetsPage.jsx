import { Box, Grid, useMediaQuery } from '@mui/material';
import { Add } from '@mui/icons-material';

import { TransactionModal, MonthNavigation, LabelButton } from '../../../components';
import { SummaryCard, TransactionCard } from '../components';

import {
    useGroupedTransactions,
    useMonths,
    useTransactionsStore,
    useUiStore,
    useMonthlyData
} from '../../../hooks';

export const BudgetsPage = () => {

    const { openTransactionModal } = useUiStore();
    const { transactions } = useTransactionsStore();

    const onAddClick = () => {
        openTransactionModal();
    };

    // Hooks
    const monthsData = useMonths();
    const { selectedMonthFullName, selectedMonthIndex } = monthsData;

    const { monthTransactions, totalIncome, totalExpenses, totalSavings }
        = useMonthlyData(transactions, selectedMonthIndex);

    const transactionTypes = [
        'Income',
        'Essential expenses',
        'Non-essential expenses',
        'Progress expenses',
    ];

    const groupedTransactions = useGroupedTransactions(monthTransactions, transactionTypes);


    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    return (
        <Box sx={{ padding: '2rem', minHeight: '100vh', paddingTop: '5rem' }}>
            <MonthNavigation monthsData={monthsData} />

            {/* Summary cards */}
            {isMobile ? (
                // Mobile view
                <Grid container spacing={2} sx={{ marginBottom: '2rem' }}>
                    <Grid item xs={6}>
                        <SummaryCard title={`${selectedMonthFullName} income`} amount={totalIncome} />
                    </Grid>
                    <Grid item xs={6}>
                        <SummaryCard title={`${selectedMonthFullName} expenses`} amount={totalExpenses} />
                    </Grid>
                    <Grid item xs={12}>
                        <SummaryCard title={`${selectedMonthFullName} savings`} amount={totalSavings} />
                    </Grid>
                </Grid>
            ) : (
                // Desktop view
                <Grid container spacing={2} sx={{ justifyContent: 'space-evenly', marginBottom: '1.5rem' }}>
                    <SummaryCard title={`${selectedMonthFullName} income`} amount={totalIncome} />
                    <SummaryCard title={`${selectedMonthFullName} expenses`} amount={totalExpenses} />
                    <SummaryCard title={`${selectedMonthFullName} savings`} amount={totalSavings} />
                </Grid>
            )}

            {/* Add button */}
            <LabelButton icon={<Add />} label={'New'} onClick={onAddClick} />

            {/* Transactions cards */}
            <Grid
                container
                spacing={4}
                justifyContent="center"
            >
                {transactionTypes.map((type, index) => (
                    <Grid item key={index} zeroMinWidth>
                        <TransactionCard
                            type={type}
                            transactions={groupedTransactions[type]}
                        />
                    </Grid>
                ))}
            </Grid>

            <TransactionModal />
        </Box>
    );
};
