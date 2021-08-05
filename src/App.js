import React, {useState, useEffect} from "react";
import axios from "axios";
import {Header} from "./components/Header/Header";
import {Drawer} from "./components/Drawer/Drawer";
import {Switch, Route} from "react-router";
import { Main } from "./pages/Main/Main";
import {Favorites} from "./pages/Favorites/Favorites";


function App() {

  const [cartOpened, setCartOpened] = useState(false);
  const [cartSneakers, setCartSneakers] = useState([]);
  const [sneakers, setSneakers] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
      axios.get('https://610002adbca46600171cf698.mockapi.io/items').then((response) => setSneakers(response.data));
      axios.get('https://610002adbca46600171cf698.mockapi.io/cards').then((response) => setCartSneakers(response.data));
      axios.get('https://610002adbca46600171cf698.mockapi.io/favorites').then((response) => setFavorites(response.data));
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

  const onAddFavorite = async (obj) => {
    try { 
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`https://610002adbca46600171cf698.mockapi.io/favorites/${obj.id}`);
        setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const {data} = await axios.post('https://610002adbca46600171cf698.mockapi.io/favorites', obj);
        setFavorites((prev) => [...prev, data]);
      }
    } catch (e) {
      alert(e);
    }
  }

  return (

    <div className="wrapper">
      { 
        cartOpened ? <Drawer items={cartSneakers} onClose={() => setCartOpened(false)} removeItem={removeItem} /> : null 
      }
      <Header onClickCart={() => setCartOpened(true)} />
      
      <Switch>
        <Route path='/' exact>
          <Main 
            searchValue={searchValue}
            searchHandler={searchHandler}
            sneakers={sneakers}
            onAddToCart={onAddToCart}
            onAddFavorite={onAddFavorite}
          />
        </Route>
        <Route path='/favorites'>
            <Favorites favorites={favorites} onFavorite={onAddFavorite}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
