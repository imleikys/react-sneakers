import './Card.scss';


export const Card = (props) => {
  
  const pathForImg = `img/${props.img}.jpg`;

  return (
    <div className="card">
      <div className="card-img">
        <img className="favorite" src="/img/like.svg" alt="like" />
        <img width={133} height={112} src={pathForImg} alt="Sneakers" />
      </div>
      <div className="card-text">
        <p className="card-text__title">{props.name}</p>
        <div className="card-text__descr">
          <div className="card-text__descr-price">
            <h5>Цена:</h5>
            <p><b>{props.price} руб.</b></p>
          </div>
          <div className="card-text__descr-button">
            <img src="/img/add.svg" alt="add" />
          </div>
        </div>
      </div>
    </div>
  );
}