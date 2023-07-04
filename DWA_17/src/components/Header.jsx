import React from "react";

import logo from '../assets/troll-face.png';

export default function Header() {
  return (
    <header className="header">
    <div className="header--branding">
      <img src={logo} alt="troll face" className="header--branding-logo" />
      <h1 className="header--title-branding">MemeGenerator</h1>
    </div>
    <h3 className="header--subtitle">React Course - Project 3</h3>
    </header>
  )
}