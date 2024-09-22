import { Box, Grid, IconButton, Typography, useMediaQuery } from '@mui/material';
import { Add } from '@mui/icons-material';

import { TransactionModal, MonthNavigation } from '../../../components';
import { SummaryCard, TransactionCard } from '../components';

import { useGroupedTransactions, useMonths, useUiStore } from '../../../hooks';

export const BudgetsPage = () => {

    const { openTransactionModal } = useUiStore();

    const onAddClick = () => {
        openTransactionModal();
    };

    const monthsData = useMonths();

    const {
        monthData,
        monthTransactions = [],
        selectedMonthFullName,
    } = monthsData;


    const transactionTypes = ['Income', 'Essential expenses', 'Non-essential expenses', 'Progress expenses'];

    const groupedTransactions = useGroupedTransactions(monthTransactions, transactionTypes);


    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    return (
        <Box sx={{ padding: '2rem', minHeight: '100vh', paddingTop: { xs: '5rem', md: '6rem' } }}>
            <MonthNavigation monthsData={monthsData} />

            {/* Summary cards */}
            {isMobile ? (
                // Mobile view
                <Grid container spacing={2} sx={{ marginBottom: '2rem' }}>
                    <Grid item xs={6}>
                        <SummaryCard title={`${selectedMonthFullName} income`} amount={monthData.income} />
                    </Grid>
                    <Grid item xs={6}>
                        <SummaryCard title={`${selectedMonthFullName} expenses`} amount={monthData.expenses} />
                    </Grid>
                    <Grid item xs={12}>
                        <SummaryCard title={`${selectedMonthFullName} savings`} amount={monthData.savings} />
                    </Grid>
                </Grid>
            ) : (
                // Desktop view
                <Grid container spacing={2} sx={{ justifyContent: 'space-evenly', marginBottom: '2rem' }}>
                    <SummaryCard title={`${selectedMonthFullName} income`} amount={monthData.income} />
                    <SummaryCard title={`${selectedMonthFullName} expenses`} amount={monthData.expenses} />
                    <SummaryCard title={`${selectedMonthFullName} savings`} amount={monthData.savings} />
                </Grid>
            )}

            {/* Add button */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginBottom: '2rem',
                }}
            >
                <IconButton
                    color="primary"
                    disableRipple
                    sx={{
                        backgroundColor: 'primary.main',
                        color: '#fff',
                        padding: '1rem',
                        borderRadius: '50%',
                        '&:hover': {
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                        },
                    }}
                    onClick={onAddClick}
                >
                    <Add />
                </IconButton>
                <Typography sx={{ marginTop: '0.2rem' }}>New</Typography>
            </Box>

            {/* Transactions cards */}
            <Grid container spacing={3}>
                {transactionTypes.map((type, index) => (
                    <TransactionCard
                        key={index}
                        type={type}
                        transactions={groupedTransactions[type]}
                    />
                ))}
            </Grid>

            <TransactionModal />
        </Box>
    );
};
