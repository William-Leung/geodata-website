import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Layout = () => {
  return (
    <>
      <div className='navigation'>
        <NavBar />
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
