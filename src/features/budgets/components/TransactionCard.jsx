import { Grid, Paper, Typography, Box } from '@mui/material';
import { format } from 'date-fns';

export const TransactionCard = ({ type, transactions = [] }) => {

    const typeColors = {
        'Income': 'income.main',
        'Essential expenses': 'essential.main',
        'Non-essential expenses': 'nonessential.main',
        'Progress expenses': 'progress.main',
    };
    const typeColor = typeColors[type] || 'primary.main';

    const amountColor = type === 'Income'
        ? 'income.main'
        : type.includes('expenses')
            ? 'expenses.main'
            : 'defaultColor';

    return (
        <Grid item xs={12} sm={3}>
            <Box
                sx={{
                    height: '0.5rem',
                    backgroundColor: typeColor,
                }}
            ></Box>
            <Paper
                sx={{
                    padding: '1.5rem',
                    minHeight: '375px',
                    maxHeight: '375px',
                }}
                elevation={3}
            >
                <Typography
                    variant="h6"
                    sx={{
                        textAlign: 'center',
                        marginBottom: '1rem',
                        color: 'black',
                    }}
                >
                    {type}
                </Typography>

                {/* Show transactions or message*/}
                {transactions.length > 0 ? (
                    transactions.slice(0, 5).map((transaction, index) => {

                        const cleanedAmount = parseFloat(transaction.amount.replace(/[^0-9.-]+/g, ''));

                        const formattedDate = format(new Date(transaction.date), 'MMMM d');

                        return (
                            <Box
                                key={index}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginBottom: '1rem',
                                }}
                            >
                                {/* Transaction */}
                                <Box>
                                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                        {transaction.name}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'gray' }}>
                                        {formattedDate}
                                    </Typography>
                                </Box>

                                {/* Amount */}
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: amountColor,
                                        fontWeight: 'bold',
                                    }}
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
            </Paper>
        </Grid>
    );
};
