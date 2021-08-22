import React, { useEffect, useState } from "react";
import {Card} from "../../components/Card/Card";
import axios from "axios";
import './Orders.scss';


export const Orders = () => {

  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
     try {
      const response = await axios.get('https://610002adbca46600171cf698.mockapi.io/orders');
      setOrders(response.data.map(obj => obj.items).flat());

      setIsLoading(false);
     } catch (e) {
       alert(e);
     }
    }

    fetchData();
  }, [])

  return (
    <div className="content">
        <div className="content-header">
          <h1 className="content-title">Мои заказы</h1>
        </div>

        <div className="content-cards">
        {(isLoading ? [...Array(10)] : orders)
          .map((sneaker, index) => {
            return (
              <Card
                key={index}
                loading={isLoading}
                {...sneaker}
              />
            );
          })}
        </div>
      </div>
  );
}