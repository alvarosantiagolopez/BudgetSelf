import { Box, IconButton, Typography } from '@mui/material';

export const LabelButton = ({ icon, label = '', onClick }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: '1.5rem',
            }}
        >
            <IconButton
                color="primary"
                disableRipple
                sx={{
                    backgroundColor: 'primary.main',
                    color: '#fff',
                    padding: '0.8rem',
                    borderRadius: '50%',
                    '&:hover': {
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                    },
                }}
                onClick={onClick}
            >
                {icon}
            </IconButton>
            <Typography variant="body2" sx={{ marginTop: '0.2rem' }}>
                {label}
            </Typography>
        </Box>
    );
};