import React from 'react';
import './Navbar.css';
import logo from '../../logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-brand">
            <img src={logo} className="app-logo" alt="logo" />
        </a>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="/">Home</a>
          </li>
          <li className="navbar-item">
            <a href="/about">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;