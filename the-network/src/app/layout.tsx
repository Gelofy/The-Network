import './globals.css'
import { Inter } from 'next/font/google'
import React, { useContext } from 'react';

import Navbar from "@/components/navbar";
import Topbar from "@/components/topbar";
import { showNavbar } from '@/app/providers';
import Providers from "@/app/providers"
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'The Network',
  description: ' - WIP - ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className='flex'>
            <Navbar />
            <Topbar />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}
