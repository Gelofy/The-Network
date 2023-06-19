import React, { Component, useState } from 'react';
import $ from "jquery";
import anime from 'animejs';

import ExpandMenu from '@/scripts/expandMenu';

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
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={ topbarStyle.div }>
      <div className='flex middle-content fill-h fill-w'>
        <IconButton onClick={() => {
          console.log("Anime");
          if (expanded) {
              anime({
                  targets: "#navbar",
                  left: "-201px",
                  easing: 'easeOutExpo',
                  duration: 200
              });
              console.log(expanded);
              setExpanded(false);
          }
          else {
              anime({
                  targets: "#navbar",
                  left: "0px",
                  easing: 'easeOutExpo',
                  duration: 200
              });
              console.log(expanded);
              setExpanded(true);
          }
        }} className={ topbarStyle.menuButton } aria-label='menu'>
          <MenuIcon style={{ color: '#FFFFFF' }}/>
        </IconButton>
      </div>
    </div>
  );
}
export default Topbar;