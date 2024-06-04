// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { userInfo } from '../../redux/Selectors/selectors';
import { IconButton, Menu, MenuItem } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../store/auth/action';

export default function FallbackAvatars() {
    const user = useSelector(state => userInfo(state));
    console.log(user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const onLogout = () => {
        dispatch(logout({ navigate }));
    };
  return (
    
    <div>
    <IconButton
      edge="end"
      aria-label="account of current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      onClick={handleMenu}
      color="inherit"
      sx={{mx: 5,}}
    >
      <AccountCircleIcon fontSize='large' sx={{color: "white", mx: 1}} />
      {/* <span style={{color: "white"}}>Welcome {user?.email}</span> */}
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
      sx={{mt:5}}
    >
      {/* <MenuItem onClick={handleClose}> */}
      <div style={{display: "flex", alignItems: "center", padding: "10px"}}>
        <Avatar alt="User Name" src="/static/images/avatar/1.jpg" />
        <div style={{ marginLeft: '10px' }}>
            {user?.username}
            <div>
                {user?.email}
            </div>
       </div>
        
      </div>
      
      {/* </MenuItem> */}
      <MenuItem onClick={() => { handleClose(); onLogout(); }} sx={{display: "flex", justifyContent: "center"}}>
        Logout
      </MenuItem>
    </Menu>
  </div>
  );
}