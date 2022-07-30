import React from 'react';
import { Route, Routes } from 'react-router';

import { Header } from './components';
import { Cart, Catalog, ComingSoon } from './pages';

import './styles/nullstyle.scss';
import './styles/fonts.scss';
import './styles/App.scss';


const navItems = [
  {name: 'Каталог', path: '/'},
  {name: 'Помощь', path: '/coming-soon'},
  {name: 'О нас', path: '/coming-soon'},
  {name: 'Контакты', path: '/coming-soon'}
];


function App() {

  return (
    <div className="App">
      <div className="container">
        <Header navItems={navItems}/>
        <Routes>
          <Route path='/' exact element={<Catalog />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/coming-soon' element={<ComingSoon />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
