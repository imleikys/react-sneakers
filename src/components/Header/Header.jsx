import './Header.scss'


export const Header = (props) => {

  return (
    <header className="header">
      <div className="header-logo">
       <div className="header-logo__img">
         <img width={40} height={40} src="/img/logo.png" alt="Logo" />
       </div>
        <div className="header-logo__text">
          <h3>REACT SNEAKERS</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <div className="header-buttons">
        <div className="header-buttons__cart" onClick={props.onClickCart}>
          <img src="/img/cart.svg" alt="Cart" />
          <p className="header-buttons__cart-text"><b>1205 руб.</b></p>
        </div>
        <div className="header-buttons__favorites">
          <img src="/img/favorite-unlike.svg" alt="favorites" />
        </div>
        <div className="header-buttons__profile">
          <img src="img/profile.svg" alt="profile" />
        </div>
      </div>
    </header>
  );
}