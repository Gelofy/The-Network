'use client'
import React, { Component, useState } from 'react';
import $ from "jquery";
import anime from 'animejs';

import ExpandMenu from '@/scripts/expandMenu';

import { Typography, Divider, IconButton, Stack, Button, List,ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import topbarStyle from "@/styles/topbar.module.css";

import MenuIcon from '@mui/icons-material/Menu';

function Topbar(){
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={ topbarStyle.div }>
      <div className='flex middle-content fill-h fill-w'>
        <IconButton onClick={() => {
          ExpandMenu();
        }} className={ topbarStyle.menuButton } aria-label='menu'>
          <MenuIcon style={{ color: '#FFFFFF' }}/>
        </IconButton>
      </div>
    </div>
  );
}
export default Topbar;