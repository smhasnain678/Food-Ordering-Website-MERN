import React from 'react';
import './Menu.css';
import { assets } from '../../assets/assets';

const Menu = () => {
  return (
    <div className="menu-page">
      <section className="menu-hero">
        <h1 className="menu-title">Explore Our Menu</h1>
      </section>

      <section className="menu-cards">
        <div className="menu-card">
          <img src={assets.food_5} alt="Burger" className="menu-image" />
          <h3 className="menu-item-title">Classic Burger</h3>
          <p className="menu-item-description">Juicy beef patty with lettuce, tomato, and cheese.</p>
          <p className="menu-item-price">$8.99</p>
        </div>
        <div className="menu-card">
          <img src={assets.food_7} alt="Pizza" className="menu-image" />
          <h3 className="menu-item-title">Margherita Pizza</h3>
          <p className="menu-item-description">Fresh mozzarella and basil on a thin crust.</p>
          <p className="menu-item-price">$12.50</p>
        </div>
        <div className="menu-card">
          <img src={assets.food_3} alt="Sushi" className="menu-image" />
          <h3 className="menu-item-title">Spicy Tuna Roll</h3>
          <p className="menu-item-description">Spicy tuna with avocado and soy sauce.</p>
          <p className="menu-item-price">$10.99</p>
        </div>
        <div className="menu-card">
          <img src={assets.food_26} alt="Sushi" className="menu-image" />
          <h3 className="menu-item-title">Saffron Rice</h3>
          <p className="menu-item-description">Spicy tuna with avocado and soy sauce.</p>
          <p className="menu-item-price">$10.99</p>
        </div>
        <div className="menu-card">
          <img src={assets.food_13} alt="Sushi" className="menu-image" />
          <h3 className="menu-item-title">Hawaiian Pizza</h3>
          <p className="menu-item-description">Spicy tuna with avocado and soy sauce.</p>
          <p className="menu-item-price">$10.99</p>
        </div>
        <div className="menu-card">
          <img src={assets.food_23} alt="Sushi" className="menu-image" />
          <h3 className="menu-item-title">Lucknowi Rise</h3>
          <p className="menu-item-description">Spicy tuna with avocado and soy sauce.</p>
          <p className="menu-item-price">$10.99</p>
        </div>
        <div className="menu-card">
          <img src={assets.food_10} alt="Sushi" className="menu-image" />
          <h3 className="menu-item-title">Mushroom Burger</h3>
          <p className="menu-item-description">Spicy tuna with avocado and soy sauce.</p>
          <p className="menu-item-price">$10.99</p>
        </div>
        <div className="menu-card">
          <img src={assets.food_9} alt="Sushi" className="menu-image" />
          <h3 className="menu-item-title">Kimbap Roll</h3>
          <p className="menu-item-description">Spicy tuna with avocado and soy sauce.</p>
          <p className="menu-item-price">$10.99</p>
        </div>
      </section>

      <section className="menu-banners">
        <div className="banner-card">
          <img src={assets.banner_one} alt="Special Offer" className="banner-image" />
          <div className="banner-content">
            <h4 className="banner-title">Special Offer!</h4>
            <p className="banner-text">Get 20% off on all orders over $20 this week!</p>
          </div>
        </div>
        <div className="banner-card">
          <img src={assets.banner_two} alt="Happy Hour" className="banner-image" />
          <div className="banner-content">
            <h4 className="banner-title">Happy Hour</h4>
            <p className="banner-text">Enjoy discounted drinks from 5 PM to 7 PM.</p>
          </div>
        </div>
      </section>


      <section className="menu-cards">
        <div className="menu-card">
          <img src={assets.food_15} alt="Burger" className="menu-image" />
          <h3 className="menu-item-title">Korean BBQ Burger</h3>
          <p className="menu-item-description">Juicy beef patty with lettuce, tomato, and cheese.</p>
          <p className="menu-item-price">$8.99</p>
        </div>
        <div className="menu-card">
          <img src={assets.food_17} alt="Pizza" className="menu-image" />
          <h3 className="menu-item-title">Sushi Roll</h3>
          <p className="menu-item-description">Fresh mozzarella and basil on a thin crust.</p>
          <p className="menu-item-price">$12.50</p>
        </div>
        <div className="menu-card">
          <img src={assets.food_24} alt="Sushi" className="menu-image" />
          <h3 className="menu-item-title">Cinnamon Roll</h3>
          <p className="menu-item-description">Spicy tuna with avocado and soy sauce.</p>
          <p className="menu-item-price">$10.99</p>
        </div>
        <div className="menu-card">
          <img src={assets.food_3} alt="Sushi" className="menu-image" />
          <h3 className="menu-item-title">Spicy Tuna Roll</h3>
          <p className="menu-item-description">Spicy tuna with avocado and soy sauce.</p>
          <p className="menu-item-price">$10.99</p>
        </div>
        <div className="menu-card">
          <img src={assets.food_21} alt="Sushi" className="menu-image" />
          <h3 className="menu-item-title">Walnut Deserts</h3>
          <p className="menu-item-description">Spicy tuna with avocado and soy sauce.</p>
          <p className="menu-item-price">$10.99</p>
        </div>
        <div className="menu-card">
          <img src={assets.food_11} alt="Sushi" className="menu-image" />
          <h3 className="menu-item-title">BBQ Chicken Pizza</h3>
          <p className="menu-item-description">Spicy tuna with avocado and soy sauce.</p>
          <p className="menu-item-price">$10.99</p>
        </div>
        <div className="menu-card">
          <img src={assets.food_12} alt="Sushi" className="menu-image" />
          <h3 className="menu-item-title">Club Sandwich</h3>
          <p className="menu-item-description">Spicy tuna with avocado and soy sauce.</p>
          <p className="menu-item-price">$10.99</p>
        </div>
        <div className="menu-card">
          <img src={assets.food_19} alt="Sushi" className="menu-image" />
          <h3 className="menu-item-title">Nasi Rice</h3>
          <p className="menu-item-description">Spicy tuna with avocado and soy sauce.</p>
          <p className="menu-item-price">$10.99</p>
        </div>
      </section>

      {/* <section className="menu-images">
        <img src={assets.banner_three} alt="Delicious Plate" className="decorative-image" />
        <img src={assets.banner_four} alt="Busy Kitchen" className="decorative-image" />
      </section> */}

       <section className="menu-banners">
        <div className="banner-card">
          <img src={assets.banner_1} alt="Special Offer" className="banner-image" />
          <div className="banner-content">
            <h4 className="banner-title">Hurry Up!</h4>
            <p className="banner-text">Get 20% off on all orders over $20 this week!</p>
          </div>
        </div>
        <div className="banner-card">
          <img src={assets.banner_3} alt="Happy Hour" className="banner-image" />
          <div className="banner-content">
            <h4 className="banner-title">Good Day</h4>
            <p className="banner-text">Enjoy discounted drinks from 5 PM to 7 PM.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;