import { Grid, Paper, Typography } from '@mui/material';

export const SummaryCard = ({ title, amount }) => {
    const amountColor = title.toLowerCase().includes('expenses') ? 'expenses.main' : 'income.main';

    const formattedAmount = amount.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    return (
        <Grid item xs={12} sm={2}>
            <Paper
                sx={{ padding: '1.5rem', textAlign: 'center' }}
                elevation={3}
            >
                <Typography
                    variant="h6"
                    sx={{
                        textAlign: 'left',
                        marginLeft: '0.5rem',
                        marginBottom: '0.5rem',
                    }}
                >
                    {title}
                </Typography>
                <Typography variant="h5" sx={{ color: amountColor, fontWeight: 'bold' }}>
                    €{formattedAmount}
                </Typography>
            </Paper>
        </Grid>
    );
};
