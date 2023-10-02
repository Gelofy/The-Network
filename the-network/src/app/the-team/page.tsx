'use client'
import Image from 'next/image'
import { IconButton, Stack, Button, List,ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { createContext, useContext, useState } from 'react';
// Uncomment to use supabase
//import '../scripts/SupabaseClient';

import { ShowBars } from '@/scripts/showBars';

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFF",
      contrastText: "#FFF",
    },
  },
});

export default function Home() {
  ShowBars(true, true);

  return (
    <ThemeProvider theme={theme}>
      <main>
        
        

      </main>
    </ThemeProvider>

  )
}
