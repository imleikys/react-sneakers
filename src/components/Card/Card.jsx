import './Card.scss';


export const Card = () => {
  
  return (
    <div className="card">
      <div className="card-img">
        <img className="favorite" src="/img/like.svg" alt="like" />
        <img width={133} height={112} src="/img/1.jpg" alt="Sneakers" />
      </div>
      <div className="card-text">
        <p className="card-text__title">Мужские Кроссовки Nike Blazer Mid Suede</p>
        <div className="card-text__descr">
          <div className="card-text__descr-price">
            <h5>Цена:</h5>
            <p><b>12 999 руб.</b></p>
          </div>
          <div className="card-text__descr-button">
            <img src="/img/add.svg" alt="add" />
          </div>
        </div>
      </div>
    </div>
  );
}