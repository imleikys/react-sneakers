import {useState} from 'react';
import './Card.scss';


export const Card = ({id, name, img, price, onAdd, onFavorite, favorited = false, added = false}) => {
  
  const [isAdded, setIsAdded] = useState(added);
  const [isFavorite, setIsFavorite] = useState(favorited);

  const addHandler = () => {
    onAdd({id, name, img, price});
    setIsAdded(!isAdded);
  }

  const favoriteHandler = () => {
    onFavorite({id, name, img, price});
    setIsFavorite(!isFavorite);
  }

  return (
    <div className="card">
      <div className="card-img">
        <img className="favorite" src={isFavorite ? 'img/like.svg' : 'img/favorite-unlike.svg'} alt="like" onClick={favoriteHandler} />
        <img width={133} height={112} src={`img/${img}.jpg`} alt="Sneakers"/>
      </div>
      <div className="card-text">
        <p className="card-text__title">{name}</p>
        <div className="card-text__descr">
          <div className="card-text__descr-price">
            <h5>Цена:</h5>
            <p><b>{price} руб.</b></p>
          </div>
          <div className="card-text__descr-button">
            <img src={isAdded ? 'img/add-active.svg' : 'img/add.svg'} alt="add" onClick={addHandler} />
          </div>
        </div>
      </div>
    </div>
  );
}