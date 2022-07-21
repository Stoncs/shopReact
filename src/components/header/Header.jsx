import React from  'react';
import {Link} from 'react-router-dom';

import './header.scss';

import logo from "./../../assets/img/logo.svg"

function Header({ navItems }) {
  return (
    <header className='header'>
      <div className='header__wrapper'>
        <div className='header__img'>
          <img src={logo} alt="logo" />
        </div>
        <nav>
          <ul>
            { navItems.map((item, index) => (
              <li key={`${item}_${index}`}><a href='#'>{item}</a></li>
            ))}
          </ul>
        </nav>
        <button className='btn header__btn'><span>Покупка</span></button>
      </div>
    </header>
  )
  
}

export default Header;