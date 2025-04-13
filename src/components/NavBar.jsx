import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import logophoto from '../assets/images/favgeo.png';

const NavBar = () => {
  return (
        <nav className = "navbar">
        <ul className="nav-links">
          <logo className = "logo">
            <Link to="/"><img src={logophoto} alt={'geodata logo'} className="logo_photo"/></Link>
          </logo>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="our-work">Our Work</Link>
          </li>
          <li className="dropdown">
            <Link to="#">Teams &#9662;</Link>
            <ul className="dropdown-content">
            <li><Link to="Data">Data</Link></li>
            <li><Link to="Air">Air</Link></li>
            <li><Link to="Rock">Rock</Link></li>
            <li><Link to="Water">Water</Link></li>
            <li><Link to="Tech">Tech</Link></li>
            <li><Link to="Snipe Challenge">SnipeChallenge</Link></li>
          </ul>
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
