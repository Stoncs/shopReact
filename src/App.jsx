import Header from "./components/header/Header";
import Categories from "./components/categories/Categories";

import './styles/nullstyle.scss';
import './styles/fonts.scss';
import './styles/App.scss';

const navItems = ['О нас', 'Помощь', 'third', 'fourth'];
const catItems = ['Всё', 'Техника', 'Еда', 'Одежда'];

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header navItems={navItems}/>
        <Categories catItems = {catItems}/>
        Hello world
      </div>
    </div>
  );
}

export default App;
