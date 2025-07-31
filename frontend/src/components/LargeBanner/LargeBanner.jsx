import React from 'react';
import './LargeBanner.css';
import { assets } from '../../assets/assets';

const LargeBanner = () => {
    return (
        <div className="largerbanner-container">
            <div className="bigbanner-overlay"></div> {/* Overlay for better text contrast */}
            <div className="bigbanner-text">
                <span className="disc-text animate-pulse">SAVE 50%</span>
                <h1 className="animate-slide-in">BEST OFFER</h1>
                <span className="first-text">Enjoy Delicious Food</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quam! Expedita, nesciunt?</p>
                <button className="animate-button">Order Now</button>
            </div>
        </div>
    );
};

export default LargeBanner;