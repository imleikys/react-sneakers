import { Card } from "../../components/Card/Card";
import "./Main.scss";


export const Main = (props) => {

  const renderItems = () => {
    const filteredItems = props.sneakers.filter((sneaker) =>
      sneaker.name.toLowerCase().includes(props.searchValue.toLowerCase())
    );

    return (props.isLoading ? [...Array(10)] : filteredItems).map(
      (sneaker, index) => {
        return (
          <Card
            id={props.id}
            key={index}
            cartSneakers={props.cartSneakers}
            onAddToCart={props.onAddToCart}
            onAddFavorite={props.onAddFavorite}
            loading={props.isLoading}
            {...sneaker}
          />
        );
      }
    );
  };

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

      <div className="content-cards">{renderItems()}</div>
    </div>
  );
};
