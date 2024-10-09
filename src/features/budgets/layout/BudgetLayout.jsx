import { Box, Grid, useMediaQuery } from '@mui/material';
import { Add, Category, Flag } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

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
    useGroupedTransactions,
} from '../../../hooks';

export const BudgetLayout = ({ type }) => {
    const { openTransactionModal } = useUiStore();
    const { transactions } = useTransactionsStore();
    const navigate = useNavigate();

    const onAddClick = () => {
        openTransactionModal();
    };

    const handleBackClick = () => {
        navigate('/budgets');
    };

    // Hooks
    const monthsData = useMonths();
    const { selectedMonthFullName, selectedMonthIndex } = monthsData;

    // Filtrar transacciones del mes seleccionado
    const monthTransactions = transactions.filter(
        (transaction) =>
            new Date(transaction.date).getMonth() === selectedMonthIndex &&
            new Date(transaction.date).getFullYear() === new Date().getFullYear()
    );

    // Utilizar 'useGroupedTransactions' para obtener las transacciones del tipo actual
    const transactionTypes = [type];
    const groupedTransactions = useGroupedTransactions(monthTransactions, transactionTypes);

    // Obtener las transacciones filtradas por tipo
    const filteredTransactions = groupedTransactions[type] || [];

    // Calcular totales
    const totalAmount = filteredTransactions.reduce((sum, transaction) => sum + transaction.amount, 0);


    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    return (
        <Box sx={{ padding: '2rem', minHeight: '100vh', paddingTop: '5rem' }}>
            <MonthNavigation monthsData={monthsData} type={type} />

            {/* Summary Cards */}
            {isMobile ? (
                <Grid container spacing={2} sx={{ marginBottom: '2rem' }}>
                    <Grid item xs={6}>
                        <SummaryCard title={`${selectedMonthFullName} ${type.toLowerCase()}`} amount={totalAmount} />
                    </Grid>
                    <Grid item xs={6}>
                        <SummaryCard title={`${selectedMonthFullName} target`} amount={0} />
                    </Grid>
                    <Grid item xs={12}>
                        <SummaryCard title={`${selectedMonthFullName} difference`} amount={0} />
                    </Grid>
                </Grid>
            ) : (
                // Desktop view
                <Grid container spacing={2} sx={{ justifyContent: 'space-evenly', marginBottom: '3rem' }}>
                    <SummaryCard title={`${selectedMonthFullName} ${type.toLowerCase()}`} amount={totalAmount} />
                    <SummaryCard title={`${selectedMonthFullName} target`} amount={0} />
                    <SummaryCard title={`${selectedMonthFullName} difference`} amount={0} />
                </Grid>
            )}

            {/* Buttons */}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 6, marginBottom: '1rem' }}>
                <LabelButton icon={<Add />} label={'New'} onClick={onAddClick} />
                <LabelButton icon={<Flag />} label={'Target'} />
                <LabelButton icon={<Category />} label={'Categories'} />
            </Box>


            <CategoryAccordion transactions={filteredTransactions} />

            <TransactionModal />
        </Box>
    );
};
