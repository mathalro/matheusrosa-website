import React from 'react';
import './Navbar.css';
import logo from '../../logo.png';
import UseAuth from '../../context/UserContext';

const Navbar = () => {
  const { authenticated } = UseAuth();

  const logout = () => {
    document.cookie = "user_token" +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    window.location.reload();
  }

  return (
    <nav className="app-navbar">
      <div className="app-navbar-container">
        <a href="/" className="app-navbar-brand">
          <img src={logo} className="app-logo" alt="logo" />
        </a>
        <ul className="app-navbar-menu">
          <li className="app-navbar-item">
            <a href="/" >home</a>
          </li>
          <li className="app-navbar-item">
            <a href="/about">about</a>
          </li>
          <li className="app-navbar-item">
            <a href="/write" >write</a>
          </li>
          <li className="app-navbar-item">
            {authenticated ? <a href="#" onClick={logout}>logout</a> : 
              <a href="/login">login</a>}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;