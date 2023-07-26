'use client';
import './globals.css';
import { Inter } from 'next/font/google';
import React, { createContext, useContext, useState } from 'react';

export const showNavbar = createContext(null);

export default function Providers({
    children,
  }: {
    children: React.ReactNode
  }) {
    const [showNav, setShowNav] = React.useState(false);
    return (
        <showNavbar.Provider value={{ showNav: showNav, setShowNav: setShowNav }}>
            {children}
        </showNavbar.Provider>
    );
}