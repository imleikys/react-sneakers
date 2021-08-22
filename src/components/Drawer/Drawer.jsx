import React, { useContext, useState } from "react";
import AppContext from "../../context.js";
import {DrawerCard} from "../DrawerCard/DrawerCard.jsx";
import {Info} from "../Info/Info.jsx";
import {useCart} from "../../hooks/useCart.js";
import "./Drawer.scss";
import axios from "axios";


const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const Drawer = (props) => {

  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [orderID, setOrderID] = useState(null);
  const {setCartOpened, setCartSneakers, cartSneakers} = useContext(AppContext);
  const {totalPrice} = useCart();


  const orderHandler = async () => {
    try {
      setIsLoading(true)
      const { data } = await axios.post(
        "https://610002adbca46600171cf698.mockapi.io/orders",
        {
          items: cartSneakers,
        }
      );

      setOrderID(data.id);
      setIsOrderComplete(true);
      setCartSneakers([]);

      for (let i = 0; i < cartSneakers.length; i++) {
        axios.delete('https://610002adbca46600171cf698.mockapi.io/cards/' + cartSneakers[i].id);
        await delay(1000);
      }

    } catch (e) {
      console.log("Не получилось добавить заказ, номер ошибки: ", e);
    }
    setIsLoading(false);
  };

  return (
    <div className={`overlay ${props.opened ? 'visible' : ''}`}>
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

        {cartSneakers.length > 0 ? (
          <div className="drawer-wrapper">
            <div className="drawer-carts">
              {cartSneakers.map((cart, index) => {
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
                  <b>{totalPrice} руб. </b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{totalPrice * 0.05} руб. </b>
                </li>
              </ul>
              <button disabled={isLoading} onClick={orderHandler} className="greenButton">
                Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </div>
        ) : (
          <Info
            img={isOrderComplete ? "img/order-done.jpg" : "img/empty.png"}
            title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая"}
            descr={
              isOrderComplete
                ? `Ваш заказ #${orderID} скоро будет передан курьерской доставке`
                : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
            }
          />
        )}
      </div>
    </div>
  );
};
