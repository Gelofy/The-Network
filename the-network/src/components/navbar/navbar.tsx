'use client'
import Link from 'next/link';
import Image from 'next/image';

import React, { createContext, useContext, useState } from 'react';
import { Typography, Divider, IconButton, Stack, Button, List,ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import navbarStyle from '@/styles/navbar.module.css'

import ExpandMenu from '@/scripts/expandMenu';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import DnsIcon from '@mui/icons-material/Dns';
import StoreRoundedIcon from '@mui/icons-material/StoreRounded';
import AnnouncementRoundedIcon from '@mui/icons-material/AnnouncementRounded';

import { NavbarContext } from '@/app/providers';

import NavbarListItem from "@/components/navbar/listItem"

export default function Navbar(){
  return (
    <>
    <nav
      id="sidenav-1"
      className="sidenav"
      data-mdb-hidden="false"
    >
      <ul className="sidenav-menu">
        <li className="sidenav-item">
          <a className="sidenav-link">
            <i className="far fa-smile fa-fw me-3"></i><span>Link 1</span></a
          >
        </li>
        <li className="sidenav-item">
          <a className="sidenav-link"
            ><i className="fas fa-grin fa-fw me-3"></i><span>Category 1</span></a
          >
          <ul className="sidenav-collapse show">
            <li className="sidenav-item">
              <a className="sidenav-link">Link 2</a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link">Link 3</a>
            </li>
          </ul>
        </li>
        <li className="sidenav-item">
          <a className="sidenav-link"
            ><i className="fas fa-grin-wink fa-fw me-3"></i><span>Category 2</span></a
          >
          <ul className="sidenav-collapse">
            <li className="sidenav-item">
              <a className="sidenav-link">Link 4</a>
            </li>
            <li className="sidenav-item">
              <a className="sidenav-link"
                >Link 5</a
              >
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    </>

  );
}