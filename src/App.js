import React, {useState, useEffect} from "react";
import axios from "axios";
import {Header} from "./components/Header/Header";
import {Drawer} from "./components/Drawer/Drawer";
import {Switch, Route} from "react-router";
import {Main} from "./pages/Main/Main";
import {Favorites} from "./pages/Favorites/Favorites";
import AppContext from '../src/context';


function App() {

  const [cartOpened, setCartOpened] = useState(false);
  const [cartSneakers, setCartSneakers] = useState([]);
  const [sneakers, setSneakers] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const cardResponse = await axios.get('https://610002adbca46600171cf698.mockapi.io/cards');
      const favoritesResponse = await axios.get('https://610002adbca46600171cf698.mockapi.io/favorites');
      const sneakersResponse = await axios.get('https://610002adbca46600171cf698.mockapi.io/items');

      setCartSneakers(cardResponse.data);
      setFavorites(favoritesResponse.data)
      setSneakers(sneakersResponse.data);

      setIsLoading(false);
    }

    fetchData();
  }, [])

  const onAddToCart = async (obj) => {
    const item = cartSneakers.find(item => Number(item.itemid) === Number(obj.id));
    try {
      if (item) {
        axios.delete(`https://610002adbca46600171cf698.mockapi.io/cards/${item.id}`);
        setCartSneakers((prev) => prev.filter((item) => Number(item.itemid) !== Number(obj.id)));
      } else {
        const {data} = await axios.post('https://610002adbca46600171cf698.mockapi.io/cards', obj);
        setCartSneakers((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в корзину: ', error);
    }
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
      const item = favorites.find(item => Number(item.itemid) === Number(obj.id))
      if (item) {
        axios.delete(`https://610002adbca46600171cf698.mockapi.io/favorites/${item.id}`);
        setFavorites((prev) => prev.filter((item) => Number(item.itemid) !== Number(obj.id)));
      } else {
        const {data} = await axios.post('https://610002adbca46600171cf698.mockapi.io/favorites', obj);
        setFavorites((prev) => [...prev, data]);
      }
    } catch (e) {
      alert(e);
    }
  }

  const isItemAdded = (id) => {
    return cartSneakers.some((item) => Number(item.itemid) === Number(id));
  }

  const isItemFavorited = (id) => {
    return favorites.some((item) => Number(item.itemid) === Number(id));
  }

  return (

    <AppContext.Provider value={{favorites, sneakers, cartSneakers, isItemAdded, onAddToCart, onAddFavorite, isItemFavorited, setCartOpened, setCartSneakers}}>
      <div className="wrapper">
        { 
          cartOpened ? <Drawer items={cartSneakers} removeItem={removeItem} /> : null 
        }
        <Header onClickCart={() => setCartOpened(true)} />
        
        <Switch>
          <Route path='/' exact>
            <Main 
              searchValue={searchValue}
              searchHandler={searchHandler}
              cartSneakers={cartSneakers}
              sneakers={sneakers}
              onAddToCart={onAddToCart}
              onAddFavorite={onAddFavorite}
              isLoading={isLoading}
            />
          </Route>
          <Route path='/favorites'>
              <Favorites />
          </Route>
        </Switch>
      </div>
    </AppContext.Provider>
  );
}

export default App;
