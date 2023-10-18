'use client'
import Link from 'next/link'

import React, { createContext, useContext, useState } from 'react';
import { Typography, Divider, IconButton, Stack, Button, List,ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import navbarStyle from '@/styles/navbar.module.css'

import ExpandMenu from '@/scripts/expandMenu';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import DnsIcon from '@mui/icons-material/Dns';
import StoreRoundedIcon from '@mui/icons-material/StoreRounded';
import AnnouncementRoundedIcon from '@mui/icons-material/AnnouncementRounded';

import NavbarListItem from '@/components/navbar/listItem';

import { NavbarContext } from '@/app/providers';

function Navbar(){
  const context = useContext(NavbarContext);

  if (!context) {
    // Handle the case where context is not available (optional)
    return null;
  }

  const { showNav, setShowNav } = context;

  if (showNav) {
    return (
      <>
      <nav id='navbar' className={navbarStyle.div}>
        {/* Navbar Header */}
        <Link className={navbarStyle.link} href="/">
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
        </Link>
        <Divider variant="middle" style={{ backgroundColor: '#636363' }} />
        {/* List of Subsites */}
        <ul>
          <NavbarListItem></NavbarListItem>

        </ul>
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