import * as React from 'react';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton } from '@mui/material';
import { logout } from '../../shared/utils/auth';
import MoreVertRounded from '@mui/icons-material/MoreVertRounded';

export default function DropdownMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };


  return (
    <div>
      <IconButton 
        style={{color:'white'}}
        onClick={handleMenuOpen}
      >
       <MoreVertRounded />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
       
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}