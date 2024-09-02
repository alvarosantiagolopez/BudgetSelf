import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { AppBar, Toolbar, IconButton, Typography, Button, Grid } from '@mui/material';
import { MenuOutlined } from '@mui/icons-material';

import { NavDrawer } from './NavDrawer';
import { NavButton } from './NavButton';
import { menuItems } from '../config/menuItems';

export const NavBar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    return (
        <>
            <AppBar
                position='fixed'
                sx={{
                    padding: '0rem 3rem',
                    zIndex: 1201, // Asegura que la AppBar esté por encima del Drawer
                }}
            >
                <Toolbar
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative',
                    }}
                >
                    <IconButton
                        color='secondary'
                        edge="start"
                        onClick={toggleDrawer(!drawerOpen)}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            position: 'absolute',
                            left: '1rem',
                            top: '8px',
                        }}
                    >
                        <MenuOutlined />
                    </IconButton>

                    <Typography
                        variant='h6'
                        component='div'
                        sx={{
                            flexGrow: 1,
                            textAlign: 'center',
                            fontSize: { xs: '1.2rem', sm: '1.5rem' },
                            position: 'relative',
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
                        {menuItems.slice(0, -1).map(({ text, to }) => (
                            <NavButton key={text} to={to}>{text}</NavButton>
                        ))}
                    </Grid>

                    <Button
                        variant='outlined'
                        color="secondary"
                        component={NavLink}
                        to={menuItems[menuItems.length - 1].to}
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
                        {menuItems[menuItems.length - 1].text}
                    </Button>
                </Toolbar>
            </AppBar>

            <NavDrawer isOpen={drawerOpen} toggleDrawer={toggleDrawer} />
        </>
    );
};
