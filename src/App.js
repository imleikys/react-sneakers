import React, {useState, useEffect} from "react";
import {Header} from "./components/Header/Header";
import {Card} from "./components/Card/Card";
import {Drawer} from "./components/Drawer/Drawer";


function App() {

  const [cartOpened, setCartOpened] = useState(false);
  const [cartSneakers, setCartSneakers] = useState([]);
  const [sneakers, setSneakers] = useState([]);

  useEffect(() => {
    fetch('https://610002adbca46600171cf698.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setSneakers(json);
      });
  }, [])

  const onAddToCart = (sneaker) => {
    setCartSneakers((prev) => [...prev, sneaker]);
  }

  return (
    <div className="wrapper">
      { 
        cartOpened ? <Drawer items={cartSneakers} onClose={() => setCartOpened(false)} /> : null 
      }
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <div className="content-header">
          <h1 className="content-title">Все Кроссовки</h1>
          <div className="content-search">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="content-cards">
          {
            sneakers.map((sneaker, index) => {
              return (
                <Card name={sneaker.name} img={sneaker.img} price={sneaker.price} key={index} onAdd={(sneaker) => onAddToCart(sneaker)}/> 
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
