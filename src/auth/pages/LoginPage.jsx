import { Link as RouterLink } from 'react-router-dom';

import { Box, TextField, Button, Checkbox, FormControlLabel, Link } from '@mui/material';
import { Google as GoogleIcon, Facebook as FacebookIcon } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
    return (

        <AuthLayout title={'Login'}>

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

            <FormControlLabel
                control={<Checkbox sx={{ color: '#FFFFFF' }} />}
                label="Remember me"
                sx={{
                    marginBottom: '1rem',
                    color: '#FFFFFF',
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
                    marginBottom: '2rem',
                }}
            >
                Login
            </Button>

            <Link href="#" variant="body2" display="block" textAlign="center" marginBottom="1.5rem" sx={{ color: 'primary.main' }}>
                Forgot password?
            </Link>


            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <Button variant="outlined" startIcon={<GoogleIcon />} sx={{ color: '#587DBD', borderColor: '#587DBD' }}>
                    Google
                </Button>

                <Button variant="outlined" startIcon={<FacebookIcon />} sx={{ color: '#3b5998', borderColor: '#3b5998' }}>
                    Facebook
                </Button>
            </Box>

            <RouterLink to="/auth/register">
                <Box textAlign="center" sx={{ color: 'primary.main', marginTop: '2rem' }}>
                    Don't have an account? Sign up
                </Box>
            </RouterLink>

        </AuthLayout>



    );
};
