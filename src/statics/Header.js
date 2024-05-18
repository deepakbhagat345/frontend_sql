// Header.js

import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {


  return (
    <header className="header-container">
      <nav className="nav-container">
        <h1 className="nav-brand">VisionVow</h1>
        <ul className="nav-links">
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/about" >About</Link></li>
          <li><Link to="/dashboard" >Dashboard</Link></li>
          <li><Link to="/contact" >Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
