'use client';
import './globals.css';
import { Inter } from 'next/font/google';
import React, { createContext, useContext, useState } from 'react';

export const NavbarContext = createContext<{
  showNav: boolean | null;
  setShowNav: React.Dispatch<React.SetStateAction<boolean | null>>;
} | null>(null);
export const TopbarContext = createContext<{
  showTop: boolean | null;
  setShowTop: React.Dispatch<React.SetStateAction<boolean | null>>;
} | null>(null);

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showNav, setShowNav] = useState<boolean | null>(null);
  const [showTop, setShowTop] = useState<boolean | null>(null);
  return (
    <NavbarContext.Provider value={{ showNav, setShowNav }}>
      <TopbarContext.Provider value={{ showTop, setShowTop }}>
        {children}
      </TopbarContext.Provider>
    </NavbarContext.Provider>
  );
}