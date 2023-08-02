import './globals.css'
import { Inter } from 'next/font/google'
import React, { useContext } from 'react';

import Navbar from "@/components/navbar";
import Topbar from "@/components/topbar";
import Providers from "@/app/providers"
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'The Network',
  description: ' - WIP - ',
}

/*
const onReady = (callback) =>{
  if (document.readyState!='loading') callback();
  else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
  else document.attachEvent('onreadystatechange', function() {
    if (document.readyState=='complete') callback();
  });
};

ready(() => { 
   // Do things after DOM has fully loaded 
});
*/

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
            <div>
              <Topbar />
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
