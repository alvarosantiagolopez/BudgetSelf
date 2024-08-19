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
                padding: '2rem',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '80%',
                    maxWidth: '1000px',
                    boxShadow: 3,
                    borderRadius: '20px',
                    overflow: 'hidden',
                }}
            >
                {/* Welcome */}
                <Box
                    sx={{
                        width: '50%',
                        padding: '2rem',
                        textAlign: 'center',
                        display: { xs: 'none', md: 'block' },
                        backgroundColor: '#f4f6f8',
                    }}
                >
                    <Typography variant="h3" component="h1" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                        BudgetSelf
                    </Typography>

                    <Typography variant="h6" component="h6" fontWeight="300" marginTop="2rem">
                        <Box component="span" sx={{ fontWeight: 'bold' }} >
                            - Who said that finance was just for companies?
                        </Box>
                    </Typography>
                </Box>

                {/* Login form */}
                <Box
                    sx={{
                        width: { xs: '100%', md: '50%' },
                        padding: '4rem 2rem',
                        background: 'linear-gradient(540deg, #5038ED, #FFFFFF)',
                        borderRadius: '20px',
                        position: 'relative',
                    }}
                >
                    {/* Circle */}
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: '-50px',
                            left: '-50px',
                            width: '100px',
                            height: '100px',
                            borderRadius: '50%',
                            background: 'linear-gradient(250deg, #5038ED, #03DAC5)',
                        }}
                    />

                    <Typography
                        variant="h4"
                        component="h2"
                        marginBottom="2rem"
                        textAlign="center"
                        color="#FFFFFF"
                    >
                        {title}
                    </Typography>

                    {children}

                </Box>
            </Box>
        </Box>
    );
};
