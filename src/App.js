import {Header} from "./components/Header/Header";
import {Card} from "./components/Card/Card";
import {Drawer} from "./components/Drawer/Drawer";


function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <div className="content">
        <div className="content-header">
          <h1 className="content-title">Все Кроссовки</h1>
          <div className="content-search">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="content-cards">
          <Card img="1" name="Мужские Кроссовки Nike Blazer Mid Suede" price="12 999" />
          <Card img="2" name="Мужские Кроссовки Nike Air Max 270" price="13 499" />
          <Card img="3" name="Мужские Кроссовки Nike Blazer Mid Suede" price="8 499" />
          <Card img="4" name="Кроссовки Puma X Aka Boku Future Rider" price="8 999" />
          <Card img="3" name="Мужские Кроссовки Nike Blazer Mid Suede" price="8 499" />
          <Card img="2" name="Мужские Кроссовки Nike Air Max 270" price="13 499" />
        </div>
      </div>
    </div>
  );
}

export default App;
