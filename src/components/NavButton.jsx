import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';


export const NavButton = ({ to, children }) => {
    return (
        <Button
            color="inherit"
            component={NavLink}
            to={to}
            disableRipple
            sx={{
                textTransform: 'capitalize',
                '&.active': {
                    fontWeight: 'bold',
                    color: 'secondary.main',
                },
                '&:focusVisible': {
                    backgroundColor: 'transparent',
                },
                '&:hover': {
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: '100%',
                        height: '2px',
                        bottom: '-2px',
                        left: 0,
                        backgroundColor: 'secondary.main',
                        borderRadius: '2px',
                        transform: 'scaleX(1)',
                        transformOrigin: 'center',
                        transition: 'transform 0.3s ease-in-out',
                    }
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: '100%',
                    height: '2px',
                    bottom: '-2px',
                    left: 0,
                    backgroundColor: 'secondary.main',
                    borderRadius: '2px',
                    transform: 'scaleX(0)',
                    transformOrigin: 'center',
                    transition: 'transform 0.3s ease-in-out',
                }
            }}
        >
            {children}
        </Button>
    );
};