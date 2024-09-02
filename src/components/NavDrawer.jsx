import { Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { menuItems } from '../config/menuItems';

export const NavDrawer = ({ isOpen, toggleDrawer }) => {
    return (
        <Drawer
            anchor='left'
            open={isOpen}
            onClose={toggleDrawer(false)}
            sx={{
                '& .MuiDrawer-paper': {
                    width: '100%',
                    background: 'linear-gradient(to bottom, #FFFFFF, #D3CDFB)',
                    paddingTop: '4rem',
                    boxShadow: 'none',
                    transition: 'transform 0.3s ease-in-out',
                },

                '& .MuiBackdrop-root': {
                    backgroundColor: 'transparent', // Evita el fondo gris en pantallas grandes
                },
                display: { xs: 'block', sm: 'none' },
            }}
        >
            <Box sx={{ width: '100%' }}>
                <List>
                    {menuItems.map(({ text, to, variant }) => (
                        <ListItem
                            disableRipple
                            button
                            key={text}
                            component={NavLink}
                            to={to}
                            onClick={toggleDrawer(false)}
                            sx={{
                                textTransform: 'capitalize',
                                textAlign: 'center',
                                '&:focus': {
                                    backgroundColor: 'transparent',
                                },
                                '&.MuiButtonBase-root.active': {
                                    fontWeight: 'bold',
                                    color: 'secondary.main',
                                    backgroundColor: 'transparent',
                                },
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                },

                            }}
                        >
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
};
