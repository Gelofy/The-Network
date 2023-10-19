import './globals.css'
import { Inter } from 'next/font/google'
import React, { useContext } from 'react';
import Script from 'next/script';

import "@/styles/mdb.min.css";

import Navbar from "@/components/navbar/navbar";
import Topbar from "@/components/topbar";
import Providers from "@/app/providers"
const inter = Inter({ subsets: ['latin'] });

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

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
      <Script src="mdb6/js/mdb.min.js" />
      <body className={inter.className}>
        <Providers>
        <Topbar />
          <div className='container'>
            <div className='section'>
            <Navbar />
            <div>
              
              {children}
            </div>
            </div>
            
          </div>
        </Providers>
      </body>
    </html>
  )
}
