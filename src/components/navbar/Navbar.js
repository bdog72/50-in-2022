//
//

import React from 'react';
import './navbar.css';

import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';

const Navbar = () => {
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt='logo' className='' />
        </div>
        <div className='gpt3__navbar-links_container'>
          <p>
            <a href='#home'>Home</a>
          </p>
          <p>
            <a href='#home'>Home</a>
          </p>
          <p>
            <a href='#home'>Home</a>
          </p>
          <p>
            <a href='#home'>Home</a>
          </p>
          <p>
            <a href='#home'>Home</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
