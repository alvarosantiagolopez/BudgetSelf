
import { Box, Grid, useMediaQuery } from '@mui/material';
import { Add, Category, Flag } from '@mui/icons-material';

import {
    TransactionModal,
    MonthNavigation,
    LabelButton,
    CategoryAccordion,
} from '../../../components';
import { SummaryCard } from '../components';

import {
    useMonths,
    useTransactionsStore,
    useUiStore,
    useMonthlyData,
} from '../../../hooks';

export const BudgetLayout = ({ type }) => {
    const { openTransactionModal } = useUiStore();
    const { transactions } = useTransactionsStore();

    const onAddClick = () => {
        openTransactionModal();
    };

    // Hooks
    const monthsData = useMonths();
    const { selectedMonthFullName, selectedMonthIndex } = monthsData;

    const { monthTransactions, totalIncome, totalExpenses, totalSavings } = useMonthlyData(
        transactions,
        selectedMonthIndex
    );

    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    return (
        <Box sx={{ padding: '2rem', minHeight: '100vh', paddingTop: '5rem' }}>
            <MonthNavigation monthsData={monthsData} type={type} />

            {/* Summary Cards */}
            {isMobile ? (
                // Mobile view
                <Grid container spacing={2} sx={{ marginBottom: '2rem' }}>
                    <Grid item xs={6}>
                        <SummaryCard title={`${selectedMonthFullName} ${type.toLowerCase()}`} amount={totalIncome} />
                    </Grid>
                    <Grid item xs={6}>
                        <SummaryCard title={`${selectedMonthFullName} target`} amount={totalExpenses} />
                    </Grid>
                    <Grid item xs={12}>
                        <SummaryCard title={`${selectedMonthFullName} difference`} amount={totalSavings} />
                    </Grid>
                </Grid>
            ) : (
                // Desktop view
                <Grid container spacing={2} sx={{ justifyContent: 'space-evenly', marginBottom: '3rem' }}>
                    <SummaryCard title={`${selectedMonthFullName} ${type.toLowerCase()}`} amount={totalIncome} />
                    <SummaryCard title={`${selectedMonthFullName} target`} amount={totalExpenses} />
                    <SummaryCard title={`${selectedMonthFullName} difference`} amount={totalSavings} />
                </Grid>
            )}

            {/* Buttons */}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 6, marginBottom: '1rem' }}>
                <LabelButton icon={<Add />} label={'New'} onClick={onAddClick} />
                <LabelButton icon={<Flag />} label={'Target'} />
                <LabelButton icon={<Category />} label={'Categories'} />
            </Box>


            <CategoryAccordion />

            <TransactionModal />
        </Box>
    );
};
