// Header.js

import React from 'react';
import './Header.css';

const Header = () => {


  return (
    <header className="header-container">
      <nav className="nav-container">
        <h1 className="nav-brand">VisionVow</h1>
        <ul className="nav-links">
          <li><a href="/" >Home</a></li>
          <li><a href="/about" >About</a></li>
          <li><a href="/dashboard" >Dashboard</a></li>
          <li><a href="/contact" >Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
