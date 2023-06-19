import React, { Component } from 'react';
import { Typography, Divider, IconButton, Stack, Button, List,ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import topbarStyle from "@/styles/topbar.module.css";

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import DnsIcon from '@mui/icons-material/Dns';
import InfoIcon from '@mui/icons-material/Info';
import StoreRoundedIcon from '@mui/icons-material/StoreRounded';
import AnnouncementRoundedIcon from '@mui/icons-material/AnnouncementRounded';
import MenuIcon from '@mui/icons-material/Menu';

function Topbar(){
  return (
    <div className={ topbarStyle.div }>
      <div className='flex middel-content fill-h fill-w'>
        <IconButton onClick={() => {
          alert('clicked');
        }} className={ topbarStyle.menuButton } aria-label='menu'>
          <MenuIcon style={{ color: '#FFFFFF' }}/>
        </IconButton>
      </div>
    </div>
  );
}
export default Topbar;