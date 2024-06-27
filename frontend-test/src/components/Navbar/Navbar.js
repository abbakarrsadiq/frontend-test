import React from 'react';
import './Navbar.css';
import vector11 from '../Navbar/vector11.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo-container">
          <img src={vector11} alt="S" className="navbar-logo" />
        </div>
      </div>
      <div className="navbar-middle">
        <a href="#about">About</a>
        <a href="#sip">SIP</a>
        <a href="#studio">Studio</a>
        <a href="#seeq">SEEQ</a>
        <a href="#platforms">Platforms</a>
        <a href="#initiatives">Initiatives</a>
        <a href="#more">More</a>
      </div>
      <div className="navbar-right">
        <button className="navbar-button sinc-button">SINC With Us</button>
        <button className="navbar-button apply-button">Apply to SIP 1.0</button>
      </div>
    </nav>
  );
};

export default Navbar;
