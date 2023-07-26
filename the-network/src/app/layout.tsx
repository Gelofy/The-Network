"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import React, { createContext, useContext, useState } from 'react';

import Navbar from "@/components/navbar";
import Topbar from "@/components/topbar";

const inter = Inter({ subsets: ['latin'] });

export const showNavbar = createContext(null);
//const showNavbar = false;

export const metadata = {
  title: 'The Network',
  description: ' - WIP - ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [showNav, setShowNav] = useState(false);
  return (
    <html lang="en">
      <body className={inter.className}>
        <showNavbar.Provider value={{ showNav: showNav, setShowNav: setShowNav }}>
          <div className='flex'>
            {showNav && 
              <Navbar />
            }
            
            <Topbar />
            {children}
          </div>
        </showNavbar.Provider>
      </body>
    </html>
  )
}
