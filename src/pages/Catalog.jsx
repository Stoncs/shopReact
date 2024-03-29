import React from "react";
import { useDispatch } from 'react-redux'

import { setCategory } from "../redux/actions";
import { Categories, Content } from "../components";

const catItems = ['Техника', 'Еда', 'Одежда', 'Другое'];

export default function Catalog() {
  const dispatch = useDispatch()

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  return (
    <div>
      <Categories catItems={catItems} onClickCategory={onSelectCategory}/>
      <Content/>
    </div>
  )
}
