import {Card} from "../../components/Card/Card";
import './Favorites.scss';


export const Favorites = (props) => {

  return (
    <div className="content">
        <div className="content-header">
          <h1 className="content-title">Мои закладки</h1>
        </div>

        <div className="content-cards">
        {props.favorites
          .map((sneaker, index) => {
            return (
              <Card
                key={index}
                onFavorite={(sneaker) => props.onFavorite(sneaker)}
                favorited={true}
                {...sneaker}
              />
            );
          })}
        </div>
      </div>
  );
}