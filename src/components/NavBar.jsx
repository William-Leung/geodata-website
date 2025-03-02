import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className = "navbar">
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="dashboard">Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
