import React from  'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './header.scss';

import logo from "./../../assets/img/logo.svg";


function Header({ navItems }) {
  const totalPrice = useSelector(({cart}) => cart.totalPrice);

  return (
    <header className='header'>

      <div className='header__wrapper'>
        <div className='header__img'>
          <Link to='/'><img src={logo} alt="logo" /></Link>
        </div>
        <nav>
          <ul>
            { navItems && navItems.map((item, index) => (
              <li key={`${item.name}_${index}`}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link to='/cart'><button className='btn header__btn'><span>{totalPrice} ₽</span><span>Покупка</span></button></Link>
      </div>
    </header>
  )
  
}

export default Header;