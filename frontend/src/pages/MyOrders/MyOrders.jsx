import React, { useContext, useState, useEffect } from 'react';
import './MyOrders.css';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { assets } from '../../assets/assets.js';


const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(url + "/api/order/userorders", {}, { headers: { token } });
    setData(response.data.data);
    console.log(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="myOrders">
      <h2 className="myOrders-title">My Orders</h2>
      <div className="container">
        {data.map((order, index) => {
          return (
            <div key={index} className="my-orders-order">
              <img src={assets.myOrder} alt="Delivery Truck" className="order-icon" />
              <p className="order-items">
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + ", ";
                  }
                })}
              </p>
              <p className="order-amount">${order.amount}.00</p>
              <p className="order-item-count">Items: {order.items.length}</p>
              <p className="order-status">
                <span className="status-dot">&#x25cf;</span> <b>{order.status}</b>
              </p>
              <button className="track-button" onClick={fetchOrders}>
                <span>Track Order</span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyOrders;