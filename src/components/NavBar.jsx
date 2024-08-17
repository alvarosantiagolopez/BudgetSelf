import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { AppBar, Toolbar, IconButton, Typography, Button, Grid } from '@mui/material';
import { MenuOutlined } from '@mui/icons-material';

import { NavDrawer } from './NavDrawer';
import { NavButton } from './NavButton';

export const NavBar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
        document.body.style.overflow = open ? 'hidden' : 'auto'; // Desactiva el scroll en el body
    };

    return (
        <>
            <AppBar
                position='fixed'
                sx={{
                    padding: '0rem 1rem',
                    zIndex: 1201, // Asegura que la AppBar esté por encima del Drawer
                }}
            >
                <Toolbar
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        position: 'relative',
                    }}
                >
                    <IconButton
                        color='secondary'
                        edge="start"
                        onClick={toggleDrawer(true)}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            position: 'absolute',
                            left: '0.5rem',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 10,
                        }}
                    >
                        <MenuOutlined />
                    </IconButton>

                    <Typography
                        variant='h6'
                        component='div'
                        sx={{
                            flexGrow: 1,
                            textAlign: 'center', // Asegura que BudgetSelf esté centrado
                            fontSize: { xs: '1.2rem', sm: '1.5rem' },
                            position: 'relative',
                            zIndex: 9, // Asegura que esté por debajo del IconButton
                        }}
                    >
                        BudgetSelf
                    </Typography>

                    <Grid
                        container
                        direction='row'
                        justifyContent='center'
                        alignItems='center'
                        sx={{
                            gap: 6,
                            display: { xs: 'none', sm: 'flex' },
                        }}
                    >
                        <NavButton to="dashboard">Dashboard</NavButton>
                        <NavButton to="budgets">Budgets</NavButton>
                        <NavButton to="banks">Banks</NavButton>
                        <NavButton to="investments">Investments</NavButton>
                        <NavButton to="calculators">Calculators</NavButton>
                    </Grid>

                    <Button
                        variant='outlined'
                        color="secondary"
                        component={NavLink}
                        to="login"
                        sx={{
                            textTransform: 'capitalize',
                            color: 'secondary.main',
                            display: { xs: 'none', sm: 'flex' },
                            borderColor: 'secondary.main',

                            '&:hover': {
                                backgroundColor: 'secondary.main',
                                borderColor: 'secondary.main',
                                color: 'primary.main',
                            },
                        }}
                    >
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>

            <NavDrawer isOpen={drawerOpen} toggleDrawer={toggleDrawer} />
        </>
    );
};
