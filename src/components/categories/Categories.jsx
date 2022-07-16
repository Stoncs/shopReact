import React from 'react';

import './categories.scss';

export default function Categories({ catItems }) {
  return (
    <div className='categories'>
      <ul>
        { catItems.map((item, index) => (
          <li key={`${item}_${index}`}>{ item }</li>
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