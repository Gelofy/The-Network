'use client'
import React, { createContext, useContext, useState } from 'react';
import { Typography, Divider, IconButton, Stack, Button, List,ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import navbarStyle from '@/styles/navbar.module.css'

import ExpandMenu from '@/scripts/expandMenu';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import DnsIcon from '@mui/icons-material/Dns';
import StoreRoundedIcon from '@mui/icons-material/StoreRounded';
import AnnouncementRoundedIcon from '@mui/icons-material/AnnouncementRounded';

import { showNavbar } from '@/app/providers';

function Navbar(){
  const { showNav, setShowNav } = useContext(showNavbar);
  if (showNav) {
    return (
      <>
      <nav id='navbar' className={navbarStyle.div}>
        {/* Navbar Header */}
        <Stack sx={{ paddingTop: "30px" }} direction="row" divider={<Divider orientation="vertical" flexItem style={{ backgroundColor: '#636363' }} />} className={navbarStyle.navbarHeader}>
          <div className='flex middle-content center-content'>
            <DnsIcon sx={{ marginLeft: "8px", marginRight: "8px" }} style={{ color: '#FFFFFF' }}></DnsIcon>
          </div>
          <div className='flex middle-content center-content'>
            <Typography sx={{ marginLeft: "8px", marginRight: "8px" }} style={{ color: '#FFFFFF' }} component="p">
              The Network
            </Typography>
          </div>
        </Stack>
        <Divider variant="middle" style={{ backgroundColor: '#636363' }} />
        {/* List of Subsites */}
        <List className={navbarStyle.list}>
          <ListItem disablePadding>
            <ListItemButton onClick={() => ExpandMenu()}>
              <ListItemIcon style={{ color: '#FFFFFF' }}>
                <HomeRoundedIcon />
              </ListItemIcon>
              <ListItemText style={{ color: '#FFFFFF' }} primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => ExpandMenu()}>
              <ListItemIcon style={{ color: '#FFFFFF' }}>
                <GroupsRoundedIcon />
              </ListItemIcon>
              <ListItemText style={{ color: '#FFFFFF' }} primary="The Team" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => ExpandMenu()}>
              <ListItemIcon style={{ color: '#FFFFFF' }}>
                <AnnouncementRoundedIcon />
              </ListItemIcon>
              <ListItemText style={{ color: '#FFFFFF' }} primary="News" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => ExpandMenu()}>
              <ListItemIcon style={{ color: '#FFFFFF' }}>
                <StoreRoundedIcon />
              </ListItemIcon>
              <ListItemText  style={{ color: '#FFFFFF' }} primary="Services" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <div onClick={() => ExpandMenu()} id='blur' className={ navbarStyle.blur }></div>
      </>
    );
  }
  else {
    return;
  }
  
}
export default Navbar;