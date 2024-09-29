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
        : type.includes('expense')
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
                    minHeight: '300px',
                    maxHeight: '300px',
                    overflowY: 'auto',
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
                                    marginBottom: '1rem',
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
