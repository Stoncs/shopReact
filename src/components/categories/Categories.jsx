import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';

import {SortPopup} from '../';
import { setSortBy } from '../../redux/actions';

import './categories.scss';

const sortPopupItems = [
  {name: 'алфавиту', type: 'name', order: 'asc'}, 
  {name: 'популярности', type: 'rating', order: 'desc'}, 
  {name: 'цене', type: 'price', order: 'asc'}
];

// при возвращении на странцу не выделяется категория, которая была активна до этого 
export default function Categories({ catItems, onClickCategory }) {
  const dispatch = useDispatch();
  const sortBy = useSelector(({filters}) => filters.sortBy);
  const category = useSelector(({filters}) => filters.category);

  const activeItem = category;

  function setActiveCategory(index) {
    dispatch(onClickCategory(index));
  }

  function onSelectSortType(type) {
    dispatch(setSortBy(type));
  }

  return (
    <div className='categories'>
      <ul>
        <li
          className={activeItem === null ? 'categories__active' : ''}
          onClick={() => setActiveCategory(null)}
          >
            Все
        </li>
        { catItems.map((item, index) => (
          <li
            className={ activeItem === index ? 'categories__active' : ''}
            onClick={() => setActiveCategory(index)} 
            key={`${item}_${index}`}>{ item }
          </li>
        ))}
      </ul>
      <SortPopup activeSortType={sortBy.type} onClickSortType={onSelectSortType} sortPopupItems={sortPopupItems}/>
    </div>
  )
}