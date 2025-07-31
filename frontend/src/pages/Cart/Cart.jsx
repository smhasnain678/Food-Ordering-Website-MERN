import React from 'react';
import './Cart.css';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);
    const navigate = useNavigate();

    return (
        <div className="cart">
            <div className="cart-items">
                <div className="cart-items-title animate-slide-in">
                    <p>Items</p>
                    <p>Delicious Dishes</p>
                    <p>Price</p>
                    <p>Qty</p>
                    <p>Subtotal</p>
                    <p>Action</p>
                </div>
                <br />
                <hr />
                {food_list.map((item, index) => {
                    if (cartItems[item._id] > 0) {
                        return (
                            <div key={item._id}>
                                <div className="cart-items-item animate-fade-in">
                                    <img src={url + "/images/" + item.image} alt={item.name} />
                                    <p>{item.name}</p>
                                    <p>${item.price}</p>
                                    <p>{cartItems[item._id]}</p>
                                    <p>${item.price * cartItems[item._id]}</p>
                                    <p onClick={() => removeFromCart(item._id)} className="cross">✕</p>
                                </div>
                                <hr />
                            </div>
                        );
                    }
                })}
            </div>
            <div className="cart-bottom">
                <div className="cart-promocode">
                    <div>
                        <p>Unlock a Special Discount!</p>
                        <div className="cart-promocode-input">
                            <input type="text" placeholder="Enter Promo Code" />
                            <button>
                                <span>Apply Now</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="cart-total">
                    <h2>Order Summary</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Charge</p>
                            <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <h3>Grand Total</h3>
                            <h3>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</h3>
                        </div>
                    </div>
                    <button onClick={() => navigate('/order')}>
                        <span>Checkout Now</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;