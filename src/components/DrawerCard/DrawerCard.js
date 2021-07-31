import './DrawerCard.scss';


export const DrawerCard = (props) => {

  return (
    <div className="cart">
      <div className="cart-img">
        <img width={70} height={70} src={`img/${props.img}.jpg`} alt="Sneakers" />
      </div>
      <div className="cart-text">
        <p className="cart-text__title">{props.name}</p>
        <p className="cart-text__price">
          <b>{props.price} руб.</b>
        </p>
      </div>
      <div className="cart-button">
        <img onClick={() => props.removeItem(props.id)} src="/img/close.svg" alt="close" />
      </div>
    </div>
  );
};
