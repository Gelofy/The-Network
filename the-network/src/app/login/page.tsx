'use client'
import Image from 'next/image'
import { IconButton, Stack, Button, List,ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { createContext, useContext, useState } from 'react';

import { showNavbar } from '@/app/layout';

import Navbar from "@/components/navbar";
import Topbar from "@/components/topbar";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFF",
      contrastText: "#FFF",
    },
  },
});

export default function LoginPage() {
  const { showNav, setShowNav } = useContext(showNavbar);
  setShowNav(false);

  return (
    <ThemeProvider theme={theme}>
      <main>
        
        

      </main>
    </ThemeProvider>

  )
}
