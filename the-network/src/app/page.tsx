'use client'
import Image from 'next/image'
import { IconButton, Stack, Button, List,ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { createContext, useContext, useState } from 'react';
// Uncomment to use supabase
//import '../scripts/SupabaseClient';

import { NavbarContext } from '@/app/providers';

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
  const context = useContext(NavbarContext);

  if (!context) {
    // Handle the case where context is not available (optional)
    return null;
  }

  const { showNav, setShowNav } = context;  
  setShowNav(true);

  return (
    <ThemeProvider theme={theme}>
      <main>
        
        

      </main>
    </ThemeProvider>

  )
}
