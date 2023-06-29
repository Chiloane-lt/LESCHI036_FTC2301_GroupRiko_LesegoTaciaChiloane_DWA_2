import React from 'react';
import logo from '../assets/airbnb.svg'

function Header() {
  return (
    <header className='header'>
      <img src={logo} alt="AirBnB Logo" className='header--logo'/>
    </header>
  )
}

export default Header;