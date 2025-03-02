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
          <Link to="our-work">Our Work</Link>
        </li>
        <li>
          <Link to="teams">Teams</Link>
        </li>
        <li>
          <Link to="recruitment">Recruitment</Link>
        </li>
        <li>
          <Link to="members">Members</Link>
        </li>
        <li>
          <Link to="donate">Donate</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
