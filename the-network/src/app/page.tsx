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
      {/*
        <main className='flex justify-center basepage'>
          <div className='mt-24'>
            <Stack className="center" divider={<Divider orientation="horizontal" variant="middle" flexItem />} spacing={2}>
              <StorageIcon className="text-slate-50" sx={{ fontSize: "200px" }}></StorageIcon>
              <h1 id='title' className="text-slate-50 underline text-3xl">
                <b>The Network</b>
              </h1>
            </Stack>
            
          </div>

        </main>
      */} 
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
          <button 
          type="button" className="btn btn-primary"
          data-mdb-toggle="sidenav"
          data-mdb-target="#sidenav-1"
          aria-controls="#sidenav-1"
          aria-haspopup="true"
          >Menu</button>
        </div>
      </div>
    </ThemeProvider>

  )
}
