import React, {useState, useEffect} from "react";
import axios from "axios";
import {Header} from "./components/Header/Header";
import {Card} from "./components/Card/Card";
import {Drawer} from "./components/Drawer/Drawer";
import {Switch, Route} from "react-router";


function App() {

  const [cartOpened, setCartOpened] = useState(false);
  const [cartSneakers, setCartSneakers] = useState([]);
  const [sneakers, setSneakers] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
      axios.get('https://610002adbca46600171cf698.mockapi.io/items').then((response) => setSneakers(response.data))
      axios.get('https://610002adbca46600171cf698.mockapi.io/cards').then((response) => setCartSneakers(response.data));
  }, [])

  const onAddToCart = (sneaker) => {
    axios.post('https://610002adbca46600171cf698.mockapi.io/cards', sneaker);
    setCartSneakers((prev) => [...prev, sneaker]);
  }

  const searchHandler = (event) => {
    setSearchValue(event.target.value);
  }

  const removeItem = (id) => {
    axios.delete(`https://610002adbca46600171cf698.mockapi.io/cards/${id}`);
    setCartSneakers((prev) => prev.filter((item) => item.id !== id));
  }

  return (

    <div className="wrapper">

      <Switch>
        <Route path="/" exact/>
        <Route path="/favorites" exact />
      </Switch>
  

      { 
        cartOpened ? <Drawer items={cartSneakers} onClose={() => setCartOpened(false)} removeItem={removeItem} /> : null 
      }
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <div className="content-header">
          <h1 className="content-title">{searchValue ? `Поиск по запросу: ${searchValue}` : 'Все Кроссовки'}</h1>
          <div className="content-search">
            <img src="/img/search.svg" alt="Search" />
            <input onChange={searchHandler} placeholder="Поиск..." value={searchValue}/>
          </div>
        </div>

        <div className="content-cards">
          {
            sneakers
              .filter((sneaker) => sneaker.name.toLowerCase().includes(searchValue.toLowerCase()))
              .map((sneaker, index) => {
              return (
                <Card name={sneaker.name} img={sneaker.img} price={sneaker.price} key={index} cartSneakers={cartSneakers} onAdd={(sneaker) => onAddToCart(sneaker)}/> 
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
