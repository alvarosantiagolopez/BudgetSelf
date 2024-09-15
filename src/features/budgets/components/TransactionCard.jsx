import { Grid, Paper, Typography } from '@mui/material'

export const TransactionCard = ({ type, transaction }) => {

    return (
        <Grid item xs={12} sm={3}>
            <Paper sx={{ padding: '1.5rem', minHeight: '200px' }}>
                <Typography variant="h6"
                    sx={{
                        textAlign: 'center',
                        borderBottom: '2px solid',
                        marginBottom: '1rem',
                        color: 'black',
                    }}
                >
                    {type}
                </Typography>
                <Typography>{transaction}</Typography>
            </Paper>
        </Grid>
    )
}
