'use client'
import React, { Component, useState, useContext } from 'react';
import $ from "jquery";
import anime from 'animejs';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

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

      return (
        <header>
  <nav className="navbar navbar-expand-lg navbar-light bg-white">
    <div className="container-fluid">
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarExample01"
        aria-controls="navbarExample01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <FontAwesomeIcon icon="fa-solid fa-house" />
      </button>
      <div className="collapse navbar-collapse" id="navbarExample01">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item active">
            <a className="nav-link" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Pricing</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>
      );
    }
export default Topbar;