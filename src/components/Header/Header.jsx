import {Link} from 'react-router-dom';
import './Header.scss'


export const Header = (props) => {

  return (
    <header className="header">
      <div className="header-logo">
       <div className="header-logo__img">
         <img width={40} height={40} src="/img/logo.png" alt="Logo" />
       </div>
        <Link to="/" className="header-logo__text">
          <h3>REACT SNEAKERS</h3>
          <p>Магазин лучших кроссовок</p>
        </Link>
      </div>
      <div className="header-buttons">
        <div className="header-buttons__cart" onClick={props.onClickCart}>
          <img src="/img/cart.svg" alt="Cart" />
          <p className="header-buttons__cart-text"><b>1205 руб.</b></p>
        </div>
        <Link to="/favorites" className="header-buttons__favorites">
          <img src="/img/unlike.svg" alt="favorites" />
        </Link>
        <div className="header-buttons__profile">
          <img src="img/profile.svg" alt="profile" />
        </div>
      </div>
    </header>
  );
}