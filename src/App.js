import {Header} from "./components/Header/Header";
import {Card} from "./components/Card/Card";


function App() {
  return (
    <div className="wrapper">
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
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          
        </div>
      </div>
    </div>
  );
}

export default App;
