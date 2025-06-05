import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <div className='navigation'>
        <NavBar />
      </div>
      <main>
        <Outlet />
      </main>
      <div className='footer'>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
