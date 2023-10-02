'use client'
import Image from 'next/image'
import { IconButton, Stack, Button, List,ListItem, ListItemButton, ListItemIcon, ListItemText, TextField, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { createContext, useContext, useState } from 'react';
import { orange } from '@mui/material/colors';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { NavbarContext } from '@/app/providers';
import loginStyle from '@/styles/loginpage.module.css';
import Navbar from "@/components/navbar";
import Topbar from "@/components/topbar";
import { ShowBars } from '@/scripts/showBars';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}
const theme = createTheme({
  status: {
    danger: orange[500],
  },
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#FFFFFF'
    }
  }
});

export default function LoginPage() {
  ShowBars(false, false);
  return (
    <ThemeProvider theme={theme}>
      <main className={ loginStyle.main }>
        <form className={ loginStyle.form }>
          <Typography className={ loginStyle.loginTitle} variant="h4" component="h1"><b>Login</b></Typography>
          <Stack spacing={2} alignItems="center" justifyContent="space-around">
            <TextField
              required
              className={ loginStyle.outlinedEmailInput }
              label="Email"
              autoComplete="current-email"
              color='primary'
              focused
            />
            <TextField
              required
              className={ loginStyle.outlinedPasswordInput }
              label="Password"
              type="password"
              color='primary'
              autoComplete="current-password"
              focused
            />
          </Stack>
          <Stack alignItems="center" justifyContent="space-around">
            <Button className={ loginStyle.loginButton } variant="outlined">Login</Button>
          </Stack>

        </form>
      </main>
    </ThemeProvider>

  )
}
