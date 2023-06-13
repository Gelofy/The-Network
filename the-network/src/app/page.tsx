'use client'

import Image from 'next/image'
import { IconButton, Stack, Button, List,ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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
  return (
    <ThemeProvider theme={theme}>
      <main>
        <div className='flex'>
          <Navbar />
          <Topbar />
        </div>
        

      </main>
    </ThemeProvider>

  )
}
