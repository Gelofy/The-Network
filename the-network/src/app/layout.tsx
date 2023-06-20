import './globals.css'
import { Inter } from 'next/font/google'

import Navbar from "@/components/navbar";
import Topbar from "@/components/topbar";

const inter = Inter({ subsets: ['latin'] })

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
        <div className='flex'>
          <Navbar />
          <Topbar />
          {children}
        </div>
        
      </body>
    </html>
  )
}
