import React from "react";
import {Card} from "../../components/Card/Card";
import AppContext from "../../context";
import './Favorites.scss';


export const Favorites = (props) => {

  const state = React.useContext(AppContext);

  return (
    <div className="content">
        <div className="content-header">
          <h1 className="content-title">Мои закладки</h1>
        </div>

        <div className="content-cards">
        {state.favorites
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