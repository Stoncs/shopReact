import React from 'react';
import { Header, Categories, Content } from "./components";

import './styles/nullstyle.scss';
import './styles/fonts.scss';
import './styles/App.scss';
import { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { setCategory } from "./redux/actions/filters";

const navItems = ['О нас', 'Помощь', 'third', 'fourth'];
const catItems = ['Техника', 'Еда', 'Одежда', 'Другое'];

function App() {
  const dispatch = useDispatch()

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  return (
    <div className="App">
      <div className="container">
        <Header navItems={navItems}/>
        <Categories catItems={catItems} onClickCategory={onSelectCategory}/>
        <Content/>
      </div>
    </div>
  );
}

export default App;
