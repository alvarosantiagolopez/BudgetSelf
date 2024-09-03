import { Box, Typography } from "@mui/material";

export const AuthLayout = ({ children, title = '' }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                height: '100vh',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f4f6f8',
                position: 'relative',
            }}
        >
            {/* BudgetSelf desktop */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '45%',
                    left: '15%',
                    textAlign: 'left',
                    display: { xs: 'none', md: 'block' },
                    transform: 'translateY(-50%)',
                }}
            >
                <Typography variant="h1" component="h1" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                    BudgetSelf
                </Typography>

                <Typography variant="h6" component="h6" fontWeight="300" marginTop="1.5rem" marginLeft="1.3rem">
                    <Box component="span" sx={{ fontWeight: 'bold' }}>
                        Who said that finance was just for companies?
                    </Box>
                </Typography>
            </Box>

            {/* Login Form with BudgetSelf for mobile */}
            <Box
                sx={{
                    width: { xs: '100%', md: 'auto' },
                    padding: '5.6rem 2.2rem',
                    maxWidth: { xs: '100%', md: '440px' },
                    background: 'linear-gradient(540deg, rgba(80, 56, 237, 0.8) 15%, #FFFFFF 90%)',
                    borderRadius: { xs: 0, md: '20px' },
                    position: 'relative',
                    boxShadow: { xs: 'none', md: 3 },
                    marginLeft: { md: '25%' },
                    '@media (max-width: 600px)': {
                        top: 0,
                        padding: '4rem 2rem',
                        height: '100vh',
                        display: 'flex',
                        flexDirection: 'column',
                    },
                }}
            >
                {/* BudgetSelf mobile */}
                <Box
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        textAlign: 'center',
                        width: '100%',
                        marginBottom: '2rem',
                    }}
                >
                    <Typography variant="h4" component="h1" sx={{ color: '#FFFFFF', fontWeight: 'bold' }}>
                        BudgetSelf
                    </Typography>
                </Box>

                <Typography
                    variant="h4"
                    component="h2"
                    marginBottom="2rem"
                    textAlign="center"
                    color="#FFFFFF"
                    sx={{
                        '@media (max-width: 600px)': {
                            marginBottom: '0.1rem',
                            marginLeft: '0.5rem',
                            textAlign: 'left', // Alineación a la izquierda en móvil
                            fontSize: '1.5rem', // Reducir el tamaño de la fuente en móviles
                        },
                    }}
                >
                    {title}
                </Typography>

                {children}

            </Box>
        </Box>
    );
};
