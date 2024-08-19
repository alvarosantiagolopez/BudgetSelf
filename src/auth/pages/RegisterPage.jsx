import { Link as RouterLink } from 'react-router-dom';

import { Box, TextField, Button } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
    return (

        <AuthLayout title={'Register'}>

            <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    style: { color: '#FFFFFF' },
                }}
                InputProps={{
                    style: { color: '#FFFFFF' },
                }}
            />

            <TextField
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    style: { color: '#FFFFFF' },
                }}
                InputProps={{
                    style: { color: '#FFFFFF' },
                }}
            />

            <Button
                variant="contained"
                fullWidth
                sx={{
                    background: 'linear-gradient(90deg, #5038ED, #03DAC5)',
                    color: 'white',
                    padding: '0.75rem',
                    fontSize: '1rem',
                    marginBottom: '1rem',
                    marginTop: '1.5rem'
                }}
            >
                Create account
            </Button>

            <RouterLink to="/auth/login">
                <Box textAlign="center" sx={{ color: 'primary.main', marginTop: '1rem' }}>
                    Already have an account? Sign in
                </Box>
            </RouterLink>

        </AuthLayout>



    );
};
