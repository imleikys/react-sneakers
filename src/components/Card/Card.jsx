import {useContext} from "react";
import ContentLoader from "react-content-loader"
import AppContext from "../../context";
import "./Card.scss";


export const Card = ({
  id,
  name,
  img,
  price,
  loading,
  itemid,
}) => {
  
  const {isItemAdded, onAddFavorite, onAddToCart, isItemFavorited} = useContext(AppContext);

  const addHandler = () => {
    onAddToCart({itemid, id, name, img, price});
  };

  const favoriteHandler = () => {
    onAddFavorite({itemid, id, name, img, price});
  };

  return (
    <div className="card">
      {loading ? (
        <ContentLoader 
        speed={2}
        width={200}
        height={200}
        viewBox="0 0 200 200"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="1" y="1" rx="10" ry="10" width="150" height="91" /> 
        <rect x="1" y="107" rx="3" ry="3" width="150" height="15" /> 
        <rect x="1" y="127" rx="3" ry="3" width="93" height="15" /> 
        <rect x="1" y="164" rx="8" ry="8" width="80" height="24" /> 
        <rect x="120" y="158" rx="8" ry="8" width="32" height="32" />
      </ContentLoader>
      ) : (
        <>
          {" "}
          <div className="card-img">
            <img
              className="favorite"
              src={isItemFavorited(itemid) ? "img/like.svg" : "img/favorite-unlike.svg"}
              alt="like"
              onClick={favoriteHandler}
            />
            <img
              width={133}
              height={112}
              src={`img/${img}.jpg`}
              alt="Sneakers"
            />
          </div>
          <div className="card-text">
            <p className="card-text__title">{name}</p>
            <div className="card-text__descr">
              <div className="card-text__descr-price">
                <h5>Цена:</h5>
                <p>
                  <b>{price} руб.</b>
                </p>
              </div>
              <div className="card-text__descr-button">
                <img
                  src={isItemAdded(itemid) ? "img/add-active.svg" : "img/add.svg"}
                  alt="add"
                  onClick={addHandler}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
