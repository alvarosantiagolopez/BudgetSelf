import { useState } from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, IconButton, Grid, useMediaQuery } from '@mui/material';
import { Category as CategoryIcon, ExpandMore, Edit, Delete } from '@mui/icons-material';
import { format } from 'date-fns';

export const CategoryAccordion = ({ transactions }) => {

    const [expanded, setExpanded] = useState(false);

    const handleChange = (event, isExpanded) => {
        setExpanded(isExpanded);
    };

    const transactionsByCategory = transactions.reduce((groups, transaction) => {
        const category = transaction.category;
        if (!groups[category]) {
            groups[category] = [];
        }
        groups[category].push(transaction);
        return groups;
    }, {});

    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    //TODO: Category real
    const category = 'Paycheck';
    const items = transactionsByCategory[category] || [];

    // Summary amounts
    const totalAmount = items.reduce((sum, item) => sum + item.amount, 0);
    const targetAmount = 2080; //TODO: Real value
    const difference = totalAmount - targetAmount;

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
                    expandIcon={<ExpandMore sx={{ color: expanded ? 'white' : 'primary.main' }} />}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: '100%',
                        }}
                    >
                        {/* Category's name and icon */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <CategoryIcon sx={{ color: expanded ? 'white' : 'primary.main' }} />
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 'bold',
                                    fontSize: { xs: '1.1rem', sm: '1.25rem' },
                                    color: expanded ? 'white' : 'black',
                                }}
                            >
                                {category}
                            </Typography>
                        </Box>

                        {/* Total sum y target */}
                        <Typography
                            variant="h6"
                            sx={{
                                color: expanded ? 'white' : 'expenses.main',
                                fontWeight: 'bold',
                                fontSize: { xs: '1rem', sm: '1.25rem' },
                            }}
                        >
                            €{totalAmount.toFixed(2)}/€{targetAmount.toFixed(2)}
                        </Typography>
                    </Box>
                </AccordionSummary>

                <AccordionDetails
                    sx={{
                        backgroundColor: '#f9f9f9',
                        padding: '1rem',
                    }}
                >
                    {/* Target's difference */}
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            mb: 2,
                        }}
                    >
                        <Typography variant="body2" sx={{ fontWeight: 'bold', mr: 1 }}>
                            Target's difference
                        </Typography>
                        <Typography
                            sx={{
                                fontWeight: 'bold',
                                color: difference >= 0 ? 'income.main' : 'expenses.main',
                            }}
                        >
                            {difference >= 0
                                ? `€${difference.toFixed(2)}`
                                : `-€${Math.abs(difference).toFixed(2)}`}
                        </Typography>
                    </Box>

                    {/* Transactions list */}
                    {items.map((item, index) => {

                        const formattedDate = format(new Date(item.date), 'd MMMM');
                        console.log(items)
                        return (
                            <Grid
                                container
                                alignItems="center"
                                spacing={isMobile ? 1 : 2}
                                key={index}
                                sx={{ marginBottom: isMobile ? '1rem' : index !== items.length - 1 ? '1.5rem' : 0 }}
                            >
                                {/* Transacción y fecha */}
                                <Grid item xs={6} md={7}>
                                    <Box
                                        sx={{
                                            alignContent: 'center',
                                            textAlign: 'center',
                                            marginLeft: isMobile ? 0 : ''
                                        }}
                                    >
                                        <Typography sx={{ fontWeight: 'bold' }}>{item.description}</Typography>
                                        <Typography variant="body2" sx={{ color: 'gray' }}>
                                            {formattedDate}
                                        </Typography>
                                    </Box>
                                </Grid>

                                {/* Amount */}
                                <Grid item xs={4} md={2}>
                                    <Typography
                                        sx={{
                                            color: 'income.main',
                                            fontWeight: 'bold',
                                            textAlign: 'right',
                                            marginRight: isMobile ? 0 : '3.5rem',
                                        }}
                                    >
                                        €{item.amount.toFixed(2)}
                                    </Typography>
                                </Grid>

                                {/* Action buttons */}
                                <Grid item xs={2} md={2}>
                                    <Box sx={{ textAlign: 'right' }}>
                                        <IconButton color="primary">
                                            <Edit />
                                        </IconButton>
                                        <IconButton color="error">
                                            <Delete />
                                        </IconButton>
                                    </Box>
                                </Grid>

                            </Grid>
                        );
                    })}
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};
