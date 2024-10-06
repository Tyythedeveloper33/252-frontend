import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Menu, MenuItem, TextField } from '@mui/material';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenu}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img src="/path/to/logo.png" alt="Logo" style={{ height: '40px' }} />
        </Typography>
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search..."
          InputProps={{
            endAdornment: (
              <IconButton type="submit" aria-label="search">
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
        <Button color="inherit">Login</Button>
        <Button color="inherit">Cart</Button>
      </Toolbar>

      {/* Dropdown Menu */}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Men</MenuItem>
        <MenuItem onClick={handleClose}>Women</MenuItem>
        <MenuItem onClick={handleClose}>Kids</MenuItem>
        <MenuItem onClick={handleClose}>Sale</MenuItem>
        <MenuItem onClick={handleClose}>New Arrivals</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
