import React, { createContext, useContext, useState } from 'react';
// Uncomment to use supabase
//import '../scripts/SupabaseClient';

import { NavbarContext } from '@/app/providers';
import { TopbarContext } from '@/app/providers';

export function ShowBars(nav: boolean, top: boolean) {
  const navContext = useContext(NavbarContext);
  const topContext = useContext(TopbarContext);

  if (!navContext) {
    // Handle the case where context is not available (optional)
    return null;
  }
  if (!topContext) {
    // Handle the case where context is not available (optional)
    return null;
  }

  const { showNav, setShowNav } = navContext;  
  const { showTop, setShowTop } = topContext;  
  setShowNav(nav);
  setShowTop(top);
}
