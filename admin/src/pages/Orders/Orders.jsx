import React, { useEffect, useState } from 'react';
import './Orders.css';
import { toast } from 'react-toastify';
import axios from 'axios';
import { assets } from '../../assets/assets.js';

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAllOrders = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError("Please log in as admin to view orders.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get(url + "/api/order/list", {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (response.data.success) {
        setOrders(response.data.data || []);
      } else {
        setError(response.data.message || "Failed to load orders");
        toast.error(response.data.message || "Error loading orders");
      }
    } catch (err) {
      console.error("Fetch orders error:", err.response ? err.response.data : err.message);
      setError(`Error loading orders: ${err.response?.data?.message || err.message}`);
      toast.error(`Error loading orders: ${err.response?.data?.message || "Network error"}`);
    } finally {
      setLoading(false);
    }
  };

  const statusHandler = async (event, orderId) => {
    const token = localStorage.getItem('token');
    if (!token) {
      toast.error("Please log in to update status.");
      return;
    }

    try {
      const response = await axios.post(url + "/api/order/status", {
        orderId,
        status: event.target.value
      }, { headers: { Authorization: `Bearer ${token}` } });
      if (response.data.success) {
        await fetchAllOrders();
        toast.success("Status updated");
      } else {
        toast.error("Failed to update status");
      }
    } catch (err) {
      console.error("Status update error:", err);
      toast.error("Error updating status");
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  if (loading) return <div className="order-loading">Loading...</div>;
  if (error) return <div className="order-error">{error}</div>;

  return (
    <div className="order">
      <h3 className="order-title">Order Page</h3>
      <div className="order-list">
        {orders.length === 0 ? (
          <p className="order-empty">No orders found.</p>
        ) : (
          orders.map((order, index) => (
            <div key={index} className="order-item">
              <img src={assets.parcel} alt="Order Parcel" className="order-image" />
              <div className="order-details">
                <p className="order-item-food">
                  {order.items.map((item, idx) => (
                    <span key={idx}>
                      {item.name} x {item.quantity}
                      {idx !== order.items.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>
                <p className="order-item-name">
                  {order.address.firstName + " " + order.address.lastName}
                </p>
                <div className="order-item-address">
                  <p>{order.address.street},</p>
                  <p>
                    {order.address.city + ", " + order.address.state + ", " + order.address.country + ", " + order.address.zipcode}
                  </p>
                </div>
                <p className="order-item-phone">{order.address.phone}</p>
              </div>
              <p className="order-item-count">Items: {order.items.length}</p>
              <p className="order-item-amount">${order.amount}</p>
              <select onChange={(event) => statusHandler(event, order._id)} value={order.status} className="order-status">
                <option value="Food Processing">Food Processing</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Orders;