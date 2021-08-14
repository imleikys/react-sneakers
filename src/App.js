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
    try {
      if (cartSneakers.find((item) => Number(item.id) === Number(obj.id))) {
        axios.delete(`https://610002adbca46600171cf698.mockapi.io/cards/${obj.id}`);
        setCartSneakers((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
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

  const onAddFavorite = (obj) => {
    try { 
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`https://610002adbca46600171cf698.mockapi.io/favorites/${obj.id}`);
        setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        axios.post('https://610002adbca46600171cf698.mockapi.io/favorites', obj);
        setFavorites((prev) => [...prev, obj]);
      }
    } catch (e) {
      alert(e);
    }
  }

  const isItemAdded = (id) => {
    return cartSneakers.some((item) => Number(item.id) === Number(id))
  }

  const isItemFavorited = (id) => {
    return favorites.some((item) => Number(item.id) === Number(id));
  }

  return (

    <AppContext.Provider value={{favorites, sneakers, cartSneakers, isItemAdded, onAddFavorite, isItemFavorited}}>
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
              cartSneakers={cartSneakers}
              sneakers={sneakers}
              onAddToCart={onAddToCart}
              onAddFavorite={onAddFavorite}
              isLoading={isLoading}
            />
          </Route>
          <Route path='/favorites'>
              <Favorites favorites={favorites}/>
          </Route>
        </Switch>
      </div>
    </AppContext.Provider>
  );
}

export default App;
