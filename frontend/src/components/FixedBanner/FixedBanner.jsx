import React from 'react'
import './FixedBanner.css'
import { assets } from '../../assets/assets'


const FixedBanner = () => {
    return(
        <div className="fixedbanner-container">
            <img src={assets.fixedwhite} className="fixed-icon" alt="" />
            <h1>Where <span className="fresh">Fresh</span> Meets Delicious</h1>
            <h3>Your Ultimate Culinary Experience Awaits!</h3>
            <p>Experience the art of outdoor grilling with the freshest ingredients straight from nature. From vibrant cherry tomatoes to sizzling skewers of flavor, we bring you a feast that combines taste, health, and quality. Join us in celebrating food that’s as fresh as it is delicious.</p>
        </div>
    )
}

export default FixedBanner