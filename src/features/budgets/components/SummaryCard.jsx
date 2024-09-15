import { Grid, Paper, Typography } from '@mui/material'

export const SummaryCard = ({ title, amount }) => {

    const amountColor = title.toLowerCase().includes('expenses') ? 'expenses.main' : 'income.main';

    return (
        <Grid item xs={12} sm={2}>
            <Paper sx={{ padding: '1.5rem', textAlign: 'center' }}>
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
                    {amount}
                </Typography>
            </Paper>
        </Grid>
    )
}
