import React from 'react';
import { Route, Routes } from 'react-router';

import { Header } from './components';
import Home from './pages/Home';
import Cart from './pages/Cart';

import './styles/nullstyle.scss';
import './styles/fonts.scss';
import './styles/App.scss';


const navItems = ['О нас', 'Помощь', 'third', 'fourth'];


function App() {

  return (
    <div className="App">
      <div className="container">
        <Header navItems={navItems}/>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
