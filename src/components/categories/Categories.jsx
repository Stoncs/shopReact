import React from 'react';
import { useState } from 'react';
// import { classNames } from 'classnames';

import './categories.scss';

export default function Categories({ catItems, onClick }) {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div className='categories'>
      <ul>
        <li
          className={activeItem === null ? 'categories__active' : ''}
          onClick={() => setActiveItem(null)}
          >
            Все
        </li>
        { catItems.map((item, index) => (
          <li
            className={ activeItem === index ? 'categories__active' : ''}
            onClick={() => setActiveItem(index)} 
            key={`${item}_${index}`}>{ item }
          </li>
        ))}
      </ul>
      <select>
        <option value="Price">По цене</option>
        <option value="Alphabet">По алфавиту</option>
        <option value="Popularity" selected>По популярности</option>
      </select>
    </div>
  )
}