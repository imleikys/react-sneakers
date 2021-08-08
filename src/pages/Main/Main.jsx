import {Card} from "../../components/Card/Card";
import './Main.scss';

export const Main = (props) => {
  
  return (
    <div className="content">
      <div className="content-header">
        <h1 className="content-title">
          {props.searchValue
            ? `Поиск по запросу: ${props.searchValue}`
            : "Все Кроссовки"}
        </h1>
        <div className="content-search">
          <img src="/img/search.svg" alt="Search" />
          <input
            onChange={props.searchHandler}
            placeholder="Поиск..."
            value={props.searchValue}
          />
        </div>
      </div>

      <div className="content-cards">
        {props.sneakers
          .filter((sneaker) =>
            sneaker.name.toLowerCase().includes(props.searchValue.toLowerCase())
          )
          .map((sneaker, index) => {
            return (
              <Card
                key={index}
                cartSneakers={props.cartSneakers}
                onAdd={(sneaker) => props.onAddToCart(sneaker)}
                onFavorite={(sneaker) => props.onAddFavorite(sneaker)}
                added={(item) => props.cartSneakers.some(((item) => Number(item.id) === Number(sneaker.id)))}
                {...sneaker}
              />
            );
          })}
      </div>
    </div>
  );
};
