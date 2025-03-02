import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Layout = () => {
  return (
    <>
      {/* The NavBar is rendered on every page that uses this layout */}
      <NavBar />
      <main>
        {/* The Outlet renders the matching child route component */}
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
