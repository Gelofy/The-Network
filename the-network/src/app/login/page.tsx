'use client'
import Image from 'next/image'
import { IconButton, Stack, Button, List,ListItem, ListItemButton, ListItemIcon, ListItemText, TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { createContext, useContext, useState } from 'react';

import { NavbarContext } from '@/app/providers';
import loginStyle from '@/styles/loginpage.module.css';
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
  const context = useContext(NavbarContext);

  if (!context) {
    // Handle the case where context is not available (optional)
    return null;
  }

  const { showNav, setShowNav } = context;  
  setShowNav(false);

  return (
    <ThemeProvider theme={theme}>
      <main className={ loginStyle.main }>
        <form className={ loginStyle.form }>
          <Stack spacing={2} >
            <TextField
              required
              id="outlined-email-input"
              label="Email"
              autoComplete="current-email"
            />
            <TextField
              required
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
          </Stack>
          <Button variant="outlined">Login</Button>

        </form>
      </main>
    </ThemeProvider>

  )
}
