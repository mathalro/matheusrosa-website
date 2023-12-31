import React, { useContext } from 'react';
import './Navbar.css';
import logo from '../../logo.png';
import { useNavigate } from 'react-router-dom';
import UseAuth from '../../context/UserContext';

const Navbar = () => {
  const { authenticated } = UseAuth();
  const navigate = useNavigate();

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
            <a href="/" >Home</a>
          </li>
          <li className="app-navbar-item">
            <a href="/write" >Write</a>
          </li>
          <li className="app-navbar-item">
            <a href="/about">About</a>
          </li>
          <li className="app-navbar-item">
            {authenticated ? <a href="#" onClick={logout}>Logout</a> : 
              <a href="/login">Login</a>}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;