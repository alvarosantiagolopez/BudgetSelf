import { Box, Grid, Typography, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import { SummaryCard, TransactionCard } from '../components';

import { useMonths } from '../../../hooks/useMonths';


export const BudgetsPage = () => {

    const {
        selectedMonth,
        setSelectedMonth,
        months,
        monthData,
        monthTransactions,
        selectedMonthFullName,
    } = useMonths();

    return (
        <Box sx={{ padding: '2rem', minHeight: '100vh', paddingTop: { xs: '5rem', md: '6rem' } }}>

            {/* Year and months */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '2rem',
                }}
            >
                <Typography variant="h6" sx={{ color: 'secondary.main', marginRight: '2rem' }}>2024</Typography>

                <Box sx={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    {months.map((month) => (
                        <Typography
                            key={month}
                            variant="body1"
                            sx={{
                                cursor: 'pointer',
                                padding: '0.5rem',
                                color: selectedMonth === month ? 'secondary.main' : 'black',
                                '&:hover': {
                                    color: 'secondary.light',
                                },
                            }}
                            onClick={() => setSelectedMonth(month)}
                        >
                            {month}
                        </Typography>
                    ))}
                </Box>
            </Box>

            {/* Summary cards*/}
            <Grid container spacing={2} sx={{ justifyContent: 'space-evenly', marginBottom: '2rem' }}>
                <SummaryCard title={`${selectedMonthFullName} income`} amount={monthData.income} />
                <SummaryCard title={`${selectedMonthFullName} expenses`} amount={monthData.expenses} />
                <SummaryCard title={`${selectedMonthFullName} savings`} amount={monthData.savings} />
            </Grid>

            {/* Add button */}
            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
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
                >
                    <AddIcon />
                </IconButton>
            </Box>

            {/* Transactions cards */}
            <Grid container spacing={3}>
                {monthTransactions.map((item, index) => (
                    <TransactionCard key={index} type={item.type} transaction={item.transaction} />
                ))}
            </Grid>
        </Box >
    );
};
