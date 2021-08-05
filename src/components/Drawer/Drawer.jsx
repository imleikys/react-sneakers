import React from "react";
import { DrawerCard } from "../DrawerCard/DrawerCard.jsx";
import "./Drawer.scss";

export const Drawer = (props) => {
  return (
    <div className="overlay">
      <div className="drawer">
        <div className="drawer-header">
          <h2 className="drawer-title">Корзина</h2>
          <img
            width={32}
            height={32}
            src="/img/close.svg"
            alt="Close"
            onClick={props.onClose}
          />
        </div>

        {props.items.length > 0 ? (
          <div className="drawer-wrapper">
            <div className="drawer-carts">
              {props.items.map((cart, index) => {
                return (
                  <DrawerCard
                    name={cart.name}
                    img={cart.img}
                    price={cart.price}
                    key={index}
                    removeItem={props.removeItem}
                    id={cart.id}
                  />
                );
              })}
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
        ) : (
          <div className="drawer-clear">
            <img src="/img/empty.png" alt="Clear" className="drawer-clear__img" />
            <h2 className="drawer-clear__title">Корзина пустая</h2>
            <p className="drawer-clear__text">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            <button onClick={props.onClose} className="greenButton">Вернуться назад</button>
          </div>
        )}
      </div>
    </div>
  );
};
