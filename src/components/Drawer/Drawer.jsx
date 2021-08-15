import React, { useContext, useState } from "react";
import AppContext from "../../context.js";
import { DrawerCard } from "../DrawerCard/DrawerCard.jsx";
import { Info } from "../Info/Info.jsx";
import "./Drawer.scss";


export const Drawer = (props) => {

  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const {setCartOpened, setCartSneakers} = useContext(AppContext);

  const orderHandler = () => {
    setIsOrderComplete(true);
    setCartSneakers([]);
  };

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
            onClick={() => setCartOpened(false)}
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
              <button onClick={orderHandler} className="greenButton">
                Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </div>
        ) : (
          <Info
            img={isOrderComplete ? "img/order-done.jpg" : "img/empty.png"}
            title={isOrderComplete ? 'Заказ оформлен!' : 'Корзина пустая'}
            descr={isOrderComplete ? 'Ваш заказ скоро будет передан курьерской доставке' : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'}
          />
        )}
      </div>
    </div>
  );
};
