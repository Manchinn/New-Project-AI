import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, MenuItem, Menu, Box} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircle from '@mui/icons-material/AccountCircle';

import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () =>{
    localStorage.removeItem('token')
    navigate('/Home')
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
        <Toolbar>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => navigate('/')} // Navigate to "/" on click
            >
            <HomeIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            App
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <Button color="inherit" onClick={() => navigate('/trading-bot')}>
                Trading Bot
            </Button>
            </Typography>
            <IconButton size="large" edge="end" color="inherit" aria-label="commission">
            <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                        >
                        <AccountCircle />
                        </IconButton>
                        <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        >
                        <MenuItem onClick={logout}>Logout</MenuItem>
                        </Menu>
            </IconButton>
        </Toolbar>
        </AppBar>
    </Box>
  );
}

export default Navbar;
