'use client'
import React, { Component, useState, useContext } from 'react';
import $ from "jquery";
import anime from 'animejs';

import ExpandMenu from '@/scripts/expandMenu';

import { Typography, Divider, IconButton, Stack, Button, List,ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import topbarStyle from "@/styles/topbar.module.css";

import MenuIcon from '@mui/icons-material/Menu';

import { NavbarContext } from '@/app/providers';
import { TopbarContext } from '@/app/providers';


function Topbar(){
  const [expanded, setExpanded] = useState(false);
  const navContext = useContext(NavbarContext);
  const topContext = useContext(TopbarContext);

  if (!navContext) {
    // Handle the case where context is not available (optional)
    return null;
  }
  if (!topContext) {
    // Handle the case where context is not available (optional)
    return null;
  }

  const { showNav, setShowNav } = navContext;
  const { showTop, setShowTop } = topContext;

  if (showTop) {
    if (showNav) {
      return (
        <div className={ topbarStyle.div }>
          <div className='flex middle-content fill-h fill-w'>
            <IconButton onClick={() => {
              ExpandMenu();
            }} className={ topbarStyle.menuButton } aria-label='menu'>
              <MenuIcon style={{ color: '#FFFFFF' }}/>
            </IconButton>
          </div>
          <div></div>
        </div>
      );
    }
    else{
      return (
        <div className={ topbarStyle.divNoNav }>
          <div className='flex middle-content fill-h fill-w'>
          </div>
          <div></div>
        </div>
      );
    }
    
  }
}
export default Topbar;