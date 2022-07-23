import { Header, Categories, Content } from "./components";

import './styles/nullstyle.scss';
import './styles/fonts.scss';
import './styles/App.scss';
import { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { fetchProducts, setProducts } from "./redux/actions/products";

const navItems = ['О нас', 'Помощь', 'third', 'fourth'];
const catItems = ['Техника', 'Еда', 'Одежда', 'Другое'];

function App() {
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchProducts());
    // console.log(products);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <Header navItems={navItems}/>
        <Categories catItems={catItems} onClick={(item) => console.log(item)}/>
        <Content/>
      </div>
    </div>
  );
}

export default App;
