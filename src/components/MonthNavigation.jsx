import { Box, Typography, IconButton, useMediaQuery } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

export const MonthNavigation = ({ monthsData }) => {
    const {
        selectedMonth,
        setSelectedMonth,
        months,
    } = monthsData;

    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    const handlePrevMonth = () => {
        const currentIndex = months.indexOf(selectedMonth);
        const prevIndex = (currentIndex - 1 + months.length) % months.length;
        setSelectedMonth(months[prevIndex]);
    };

    const handleNextMonth = () => {
        const currentIndex = months.indexOf(selectedMonth);
        const nextIndex = (currentIndex + 1) % months.length;
        setSelectedMonth(months[nextIndex]);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: { xs: '1rem', sm: '2rem' }
            }}
        >
            <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 'bold', marginRight: '2rem' }}>
                2024
            </Typography>

            {isMobile ? (
                // Mobile
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton onClick={handlePrevMonth}>
                        <ArrowBackIos />
                    </IconButton>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        {selectedMonth}
                    </Typography>
                    <IconButton onClick={handleNextMonth}>
                        <ArrowForwardIos />
                    </IconButton>
                </Box>
            ) : (
                // Desktop
                <Box sx={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    {months.map((month) => (
                        <Typography
                            key={month}
                            variant="body1"
                            sx={{
                                cursor: 'pointer',
                                padding: '0.5rem',
                                color: selectedMonth === month ? 'secondary.main' : 'black',
                                fontWeight: selectedMonth === month ? 'bold' : '',
                                '&:hover': {
                                    color: 'secondary.light',
                                },
                            }}
                            onClick={() => setSelectedMonth(month)}
                        >
                            {month}
                        </Typography>
                    ))}
                </Box>
            )}
        </Box>
    );
};
