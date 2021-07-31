import {useState} from 'react';
import './Card.scss';


export const Card = ({name, img, price, onClick, onAdd}) => {
  
  const [isAdded, setIsAdded] = useState(false);
  const pathForImg = `img/${img}.jpg`;

  const addHandler = () => {
    onAdd({name, img, price});
    setIsAdded(!isAdded);
  }

  return (
    <div className="card">
      <div className="card-img">
        <img className="favorite" src="/img/like.svg" alt="like" onClick={onClick} />
        <img width={133} height={112} src={pathForImg} alt="Sneakers"/>
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