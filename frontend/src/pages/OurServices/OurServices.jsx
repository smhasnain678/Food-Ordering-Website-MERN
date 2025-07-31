import React from 'react';
import './OurServices.css';
import { assets } from '../../assets/assets';

const OurServices = () => {
  return (
    <div className="our-services">
      <section className="hero-section">
        <h1 className="hero-title">Our Services</h1>
      </section>

      <section className="service-section">
        {/* <div className="service-card">
          <h2 className="service-title">Pakistan Spices</h2>
          <h3 className="sub-title">Taste the Richness of Indian Culture With Our Dishes</h3>
          <p className="service-description">Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
        </div> */}
        <div className="service-card">
          <h2 className="service-title">Tasty Food</h2>
          <h3 className="sub-title">Enjoy Exquisite Dishes from a Variety of Cuisines</h3>
          <div className="sub-service-list">
            <div className="sub-service">
              <img src={assets.foodTruck} alt="Modern Food Trucks" />
              <p>Modern Food Trucks<br />Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            </div>
            <div className="sub-service">
              <img src={assets.dinnerTable} alt="Coffee and Drinks" />
              <p>Coffee and Drinks<br />Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            </div>
            <div className="sub-service">
              <img src={assets.fridge} alt="Snacks & Street Food" />
              <p>Snacks & Street Food<br />Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="stat-card">
          <p className="stat-number">98</p>
          <p className="stat-label">Dishes</p>
        </div>
        <div className="stat-card">
          <p className="stat-number">65</p>
          <p className="stat-label">Visitors</p>
        </div>
        <div className="stat-card">
          <p className="stat-number">100</p>
          <p className="stat-label">Restaurants</p>
        </div>
        <div className="stat-card">
          <p className="stat-number">15</p>
          <p className="stat-label">Chefs</p>
        </div>
      </section>

      <section className="what-we-do-section">
        <h2 className="section-title">What We Do</h2>
        <p className="section-description">Indian, Italian, American and Thai dishes, made with love, care, attention to detail and creativity.</p>
        <div className="chef-quote">
          <p className="quote-text">&quot;Our passion for food drives us to create unforgettable experiences.&quot;</p>
          <p className="quote-author">Piter Bowman<br />Executive Chef</p>
        </div>
        <div className="food-categories">
          <div className="category-card">
            <img src={assets.appetizer} alt="Appetizers" />
            <h4>Appetizers</h4>
            <ul>
              <li>Commodo elit</li>
              <li>Consectetur</li>
              <li>Tristique Nulla</li>
            </ul>
          </div>
          <div className="category-card">
            <img src={assets.aperitif} alt="Aperitif" />
            <h4>Aperitif</h4>
            <ul>
              <li>Commodo elit</li>
              <li>Consectetur</li>
              <li>Tristique Nulla</li>
            </ul>
          </div>
          <div className="category-card">
            <img src={assets.steak} alt="Steaks" />
            <h4>Steaks</h4>
            <ul>
              <li>Commodo elit</li>
              <li>Consectetur</li>
              <li>Tristique Nulla</li>
            </ul>
          </div>
          <div className="category-card">
            <img src={assets.sandwich} alt="Sandwiches" />
            <h4>Sandwiches</h4>
            <ul>
              <li>Commodo elit</li>
              <li>Consectetur</li>
              <li>Tristique Nulla</li>
            </ul>
          </div>
        </div>
      </section>

      {/* <section className="contact-section">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-details">
          <p><strong>Working Hours</strong><br />Mon-Fri: 9 AM – 6 PM<br />Saturday: 9 AM – 4 PM<br />Sunday: Closed</p>
          <p><strong>Address</strong><br />Germany — 785 Street, Office 478<br />Berlin, DE 81566</p>
          <p><strong>Get In Touch</strong><br />[Insert Contact Info]</p>
        </div>
      </section> */}
    </div>
  );
};

export default OurServices;