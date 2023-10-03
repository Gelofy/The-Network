'use client'
import Image from 'next/image'
import { IconButton, Divider, Stack, Button, List,ListItem, ListItemButton, ListItemIcon, ListItemText, Card, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import StorageIcon from '@mui/icons-material/Storage';
import React, { createContext, useContext, useState } from 'react';
// Uncomment to use supabase
//import '../scripts/SupabaseClient';

import "@/scripts/animateTitle";
import { ShowBars } from '@/scripts/showBars';
import "@/scripts/animateTitle";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFF",
      contrastText: "#FFF",
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default function Home() {
  ShowBars(true, true);

  return (
    <ThemeProvider theme={theme}>
      <main className='basepage'>
        <div className=''>
          <Stack className="center" divider={<Divider orientation="horizontal" variant="middle" flexItem />} spacing={2}>
            <StorageIcon className="text" sx={{ fontSize: "200px" }}></StorageIcon>
            <Typography id='title' className="text" variant="h2" component="h1">
              <b>The Network</b>
            </Typography>
          </Stack>
          
        </div>

      </main>
    </ThemeProvider>

  )
}
