'use client'
import Image from 'next/image'
import { IconButton, Stack, Button, List,ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { createContext, useContext, useState } from 'react';

import '../scripts/SupabaseClient';

import { showNavbar } from '@/app/providers';

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

export default function Home() {
  const { showNav, setShowNav } = useContext(showNavbar);
  setShowNav(true);

  return (
    <ThemeProvider theme={theme}>
      <main>
        
        

      </main>
    </ThemeProvider>

  )
}
