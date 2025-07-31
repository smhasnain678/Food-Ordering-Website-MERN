import React from 'react';
import './InfoComponent.css';
import { assets } from '../../assets/assets';

const InfoComponent = () => {
  return (
    <div className="infolast-container">
      <div className="row">
        <div className="col">
          <div className="icon">
            <img src={assets.experience} alt="Icon 1" />
          </div>
          <div className="title">
            <h3>199+ Professional</h3>
          </div>
          <div className="description">
            <p>Our team consists of highly skilled professionals with a range of expertise.</p>
          </div>
        </div>
        <div className="col">
          <div className="icon">
            <img src={assets.products} alt="Icon 2" />
          </div>
          <div className="title">
            <h3>20+ Years Experience</h3>
          </div>
          <div className="description">
            <p>With over 20 years of industry experience, we provide reliable and expert services.</p>
          </div>
        </div>
        <div className="col">
          <div className="icon">
            <img src={assets.professional} alt="Icon 3" />
          </div>
          <div className="title">
            <h3>2500+ Products</h3>
          </div>
          <div className="description">
            <p>We offer a wide range of 2500+ products that cater to various needs.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoComponent;
