import { Header, Categories, Content } from "./components";

import './styles/nullstyle.scss';
import './styles/fonts.scss';
import './styles/App.scss';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from "./redux/actions/products";

const navItems = ['О нас', 'Помощь', 'third', 'fourth'];
const catItems = ['Техника', 'Еда', 'Одежда', 'Другое'];

function App() {
  const dispatch = useDispatch()
  const sortBy = useSelector(({filters}) => filters.sortBy);
  const items = useSelector(({products}) => products.items);

  useEffect(() => {
    fetch('http://localhost:3000/db.json')
    .then((resp) => resp.json())
    .then((json) => {
      dispatch(setProducts(json.products));
    })
    // console.log(products);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <Header navItems={navItems}/>
        <Categories catItems={catItems} onClick={(item) => console.log(item)}/>
        <Content products={items}/>
      </div>
    </div>
  );
}

export default App;
