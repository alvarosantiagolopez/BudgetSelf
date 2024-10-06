import { Grid, Paper, Typography, Box } from '@mui/material';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

export const TransactionCard = ({ type, transactions = [] }) => {

    const navigate = useNavigate();

    const typeColors = {
        'Income': 'income',
        'Essential expenses': 'essential',
        'Non-essential expenses': 'nonessential',
        'Progress expenses': 'progress',
    };

    const colorKey = typeColors[type] || 'primary';

    const amountColor = (theme) => {
        if (type === 'Income') {
            return theme.palette.income.main;
        } else if (type.toLowerCase().includes('expense')) {
            return theme.palette.expenses.main;
        } else {
            return theme.palette.text.primary;
        }
    };

    const typeToRouteMap = {
        'Income': '/budgets/income',
        'Essential expenses': '/budgets/essential-expenses',
        'Non-essential expenses': '/budgets/non-essential-expenses',
        'Progress expenses': '/budgets/progress-expenses',
    };

    const handleCardClick = () => {
        const route = typeToRouteMap[type] || '/budgets';
        navigate(route);
    };

    return (
        <Box
            sx={{
                cursor: 'pointer',
            }}
            onClick={handleCardClick}
        >
            <Paper
                sx={{
                    width: '350px',
                    height: '380px',
                    overflowY: 'auto',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                        transform: 'translateY(-6px)',
                        boxShadow: (theme) => `0 4px 20px ${theme.palette[colorKey].main}`,
                    },
                }}
                elevation={3}
            >
                {/* Superior line */}
                <Box
                    sx={{
                        height: '0.5rem',
                        backgroundColor: (theme) => theme.palette[colorKey].main,
                    }}
                ></Box>

                {/* Card content*/}
                <Box sx={{ padding: '1rem 1.5rem 0rem', flex: 1 }}>
                    <Typography
                        variant="h6"
                        sx={{
                            textAlign: 'center',
                            marginBottom: '1.5rem',
                            color: 'black',
                        }}
                    >
                        {type}
                    </Typography>

                    {/* Show transactions or message */}
                    {transactions.length > 0 ? (
                        transactions.slice(0, 5).map((transaction, index) => {

                            let cleanedAmount;
                            if (typeof transaction.amount === 'string') {
                                cleanedAmount = parseFloat(transaction.amount.replace(/[^0-9.-]+/g, ''));
                            } else if (typeof transaction.amount === 'number') {
                                cleanedAmount = transaction.amount;
                            } else {
                                cleanedAmount = 0;
                            }

                            const formattedDate = format(new Date(transaction.date), 'MMMM d');

                            return (
                                <Box
                                    key={index}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginBottom: '0.9rem',
                                    }}
                                >
                                    {/* Transaction */}
                                    <Box>
                                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                            {transaction.description}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'gray' }}>
                                            {formattedDate}
                                        </Typography>
                                    </Box>

                                    {/* Amount */}
                                    <Typography
                                        variant="body1"
                                        sx={(theme) => ({
                                            color: amountColor(theme),
                                            fontWeight: 'bold',
                                        })}
                                    >
                                        {`€${cleanedAmount.toFixed(2)}`}
                                    </Typography>
                                </Box>
                            );
                        })
                    ) : (
                        <Typography variant="body2" sx={{ color: 'gray', textAlign: 'center' }}>
                            No transactions
                        </Typography>
                    )}
                </Box>
            </Paper>
        </Box>
    );
};
