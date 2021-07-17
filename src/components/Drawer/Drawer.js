import React from 'react';
import './Drawer.scss';


export const Drawer = (props) => {

  return (
    <div className="overlay">

      <div className="drawer">
        <h2 className="drawer-title">Корзина</h2>
        <div className="drawer-carts">

          <div className="cart">
            <div className="cart-img">
              <img width={70} height={70} src="/img/1.jpg" alt="Sneakers" />
            </div>
            <div className="cart-text">
              <p className="cart-text__title">Мужские Кроссовки Nike Air Max 270</p>
              <p className="cart-text__price"><b>12 999 руб.</b></p>
            </div>
            <div className="cart-button">
              <img src="/img/close.svg" alt="close" />
            </div>
          </div>

          <div className="cart">
            <div className="cart-img">
              <img width={70} height={70} src="/img/2.jpg" alt="Sneakers" />
            </div>
            <div className="cart-text">
              <p className="cart-text__title">Мужские Кроссовки Nike Air Max 270</p>
              <p className="cart-text__price"><b>13 499 руб.</b></p>
            </div>
            <div className="cart-button">
              <img src="/img/close.svg" alt="close" />
            </div>
          </div>

          <div className="cart">
            <div className="cart-img">
              <img width={70} height={70} src="/img/3.jpg" alt="Sneakers" />
            </div>
            <div className="cart-text">
              <p className="cart-text__title">Мужские Кроссовки Nike Blazer Mid Suede</p>
              <p className="cart-text__price"><b>8 499 руб.</b></p>
            </div>
            <div className="cart-button">
              <img src="/img/close.svg" alt="close" />
            </div>
          </div>

        </div>
        <div className="drawer-total">
          <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб. </b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб. </b>
              </li>
            </ul>
            <button className="greenButton">
              Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
            </button>
        </div>
      </div>
    </div>
  );
}
