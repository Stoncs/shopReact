import { Header, Categories, Content } from "./components";

import './styles/nullstyle.scss';
import './styles/fonts.scss';
import './styles/App.scss';
import { useEffect, useState } from "react";

const navItems = ['О нас', 'Помощь', 'third', 'fourth'];
const catItems = ['Техника', 'Еда', 'Одежда', 'Другое'];

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/db.json')
    .then((resp) => resp.json())
    .then((json) => {
      setProducts(json.products)
    })
    // console.log(products);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <Header navItems={navItems}/>
        <Categories catItems={catItems} onClick={(item) => console.log(item)}/>
        <Content products={products}/>
      </div>
    </div>
  );
}

export default App;
