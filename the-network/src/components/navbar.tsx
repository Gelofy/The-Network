import React, { Component } from 'react';
import { Typography, Divider, IconButton, Stack, Button, List,ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import DnsIcon from '@mui/icons-material/Dns';
import navbarStyle from '@/styles/navbar.module.css'

function Navbar(){
  return (
    <nav className={ navbarStyle.div }>
      <Stack direction="row" divider={<Divider orientation="vertical" flexItem style={{ backgroundColor: '#a3a3a3' }} />} className={ navbarStyle.navbarHeader }>
        <div className='flex middle-content center-content'>
          <DnsIcon sx={{ marginLeft: "8px", marginRight: "8px" }} style={{ color: '#FFFFFF' }}></DnsIcon>
        </div>
        <div className='flex middle-content center-content'>
          <Typography sx={{ marginLeft: "8px", marginRight: "8px" }} style={{ color: '#FFFFFF' }} component="p">
            The Network
          </Typography>
        </div>
      </Stack>
      <Divider variant="middle" style={{ backgroundColor: '#a3a3a3' }}/>
      <List className={ navbarStyle.list}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon style={{ color: '#FFFFFF' }}>
              <HomeRoundedIcon />
            </ListItemIcon>
            <ListItemText style={{ color: '#FFFFFF' }} primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon style={{ color: '#FFFFFF' }}>
              <GroupsRoundedIcon />
            </ListItemIcon>
            <ListItemText style={{ color: '#FFFFFF' }} primary="The Team" />
          </ListItemButton>
        </ListItem>
      </List>
    </nav>
  );
}
export default Navbar;