import React from 'react';
import './Navbar.css';
import logo from '../../logo.png';

const Navbar = () => {
  return (
    <nav className="app-navbar">
      <div className="app-navbar-container">
        <a href="/" className="app-navbar-brand">
            <img src={logo} className="app-logo" alt="logo" />
        </a>
        <ul className="app-navbar-menu">
          <li className="app-navbar-item">
            <a href="/" >Home</a>
          </li>
          <li className="app-navbar-item">
            <a href="/write" >Write</a>
          </li>
          <li className="app-navbar-item">
            <a href="/about">About</a>
          </li>
          <li className="app-navbar-item">
            <a href="/login">Login</a>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;