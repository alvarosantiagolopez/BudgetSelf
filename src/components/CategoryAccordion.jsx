import { useState } from 'react';
import {
    Box,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    IconButton,
    Grid,
    useMediaQuery,
} from '@mui/material';
import { Category, ExpandMore, Edit, Delete } from '@mui/icons-material';

export const CategoryAccordion = () => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (event, isExpanded) => {
        setExpanded(isExpanded);
    };

    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    const items = [
        {
            name: 'Nómina',
            date: 'October 1',
            amount: '€1,800.00',
        },
        {
            name: 'Extra',
            date: 'October 2',
            amount: '€200.00',
        },
    ];

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Accordion
                expanded={expanded}
                onChange={handleChange}
                sx={{
                    width: { xs: '100%', md: '65vw' },
                    '&.Mui-expanded': {
                        backgroundColor: 'primary.main',
                    },
                }}
            >
                <AccordionSummary
                    expandIcon={
                        <ExpandMore sx={{ color: expanded ? 'white' : 'primary.main' }} />
                    }
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: '100%',
                        }}
                    >
                        {/* Category icon and name*/}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Category sx={{ color: expanded ? 'white' : 'primary.main' }} />
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 'bold',
                                    fontSize: { xs: '1.1rem', sm: '1.25rem' },
                                    color: expanded ? 'white' : 'black',
                                }}
                            >
                                Paycheck
                            </Typography>
                        </Box>

                        {/* Summary amount */}
                        <Typography
                            variant="h6"
                            sx={{
                                color: expanded ? 'white' : 'expenses.main',
                                fontWeight: 'bold',
                                fontSize: { xs: '1rem', sm: '1.25rem' },
                            }}
                        >
                            €2,000.00/€2,080.00
                        </Typography>
                    </Box>
                </AccordionSummary>

                <AccordionDetails
                    sx={{
                        backgroundColor: '#f9f9f9',
                        padding: '1rem',
                    }}
                >
                    {isMobile ? (
                        // Mobile view
                        <>
                            {items.map((item, index) => (
                                <Grid
                                    container
                                    alignItems="center"
                                    spacing={1}
                                    key={index}
                                    sx={{ marginBottom: '1rem' }}
                                >
                                    <Grid item xs={6}>
                                        <Typography sx={{ fontWeight: 'bold' }}>
                                            {item.name}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'gray' }}>
                                            {item.date}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography
                                            sx={{
                                                color: 'income.main',
                                                fontWeight: 'bold',
                                                textAlign: 'right',
                                            }}
                                        >
                                            {item.amount}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={2} sx={{ textAlign: 'right' }}>
                                        <IconButton color="primary">
                                            <Edit />
                                        </IconButton>
                                        <IconButton color="error">
                                            <Delete />
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            ))}
                        </>
                    ) : (
                        // Desktop view
                        <>
                            {items.map((item, index) => (
                                <Grid
                                    container
                                    alignItems="center"
                                    justifyContent="center"
                                    spacing={2}
                                    key={index}
                                    sx={{ marginBottom: index !== items.length - 1 ? '1.5rem' : 0 }}
                                >
                                    {/* Transaction and date */}
                                    <Grid item md={4}>
                                        <Box sx={{ textAlign: 'left', marginLeft: '15rem', }}>
                                            <Typography sx={{ fontWeight: 'bold' }}>
                                                {item.name}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'gray' }}>
                                                {item.date}
                                            </Typography>
                                        </Box>
                                    </Grid>

                                    {/* Amount*/}
                                    <Grid item md={3}>
                                        <Typography
                                            sx={{
                                                color: 'income.main',
                                                fontWeight: 'bold',
                                                textAlign: 'right',
                                                marginRight: '5rem',
                                            }}
                                        >
                                            {item.amount}
                                        </Typography>
                                    </Grid>

                                    {/* Icons */}
                                    <Grid item md={2}>
                                        <Box sx={{ textAlign: 'end' }}>
                                            <IconButton color="primary">
                                                <Edit />
                                            </IconButton>
                                            <IconButton color="error">
                                                <Delete />
                                            </IconButton>
                                        </Box>
                                    </Grid>
                                </Grid>
                            ))}
                        </>
                    )}
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};
