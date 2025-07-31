import React, { useState } from 'react';
import './FeaturedProducts.css';
import styled from 'styled-components';
import { featured_item } from '../../assets/assets';

const FeaturedProducts = () => {
    const [ratings, setRatings] = useState({}); // Track ratings for all cards

    const handleRatingChange = (cardId, value) => {
        setRatings((prevRatings) => ({
            ...prevRatings,
            [cardId]: value, // Update the rating for the specific card
        }));
    };

    return (
        <div className="featured-container">
            <h1 className="featured-title">Featured Products</h1>
            <div className="side-banner">
                <p>SALE UPTO 40% OFF</p>
                <h1>Our Featured Products for You</h1>
            </div>
            <div className="products">
                {featured_item.map((item, index) => {
                    const cardId = `card-${index}`; // Unique ID for each card
                    const rating = ratings[cardId] || 0; // Get the rating for this card
                    return (
                        <div key={cardId} className="products-item">
                            <img src={item.image} className="products-images" alt="" />
                            <div className="featured-desc">
                                <p className="feature-name">{item.name}</p>
                                <StyledWrapper>
                                    <div className="rating">
                                        {[5, 4, 3, 2, 1].map((rate) => (
                                            <React.Fragment key={`${cardId}-${rate}`}>
                                                <input
                                                    type="radio"
                                                    id={`${cardId}-star-${rate}`} // Unique ID for each star
                                                    name={`${cardId}-rate`} // Unique name for each card
                                                    value={rate}
                                                    checked={rating === rate}
                                                    onChange={() => handleRatingChange(cardId, rate)}
                                                />
                                                <label htmlFor={`${cardId}-star-${rate}`} title={`Rate ${rate}`}>
                                                    <svg
                                                        viewBox="0 0 576 512"
                                                        height="1em"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="star-solid"
                                                    >
                                                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                                                    </svg>
                                                </label>
                                            </React.Fragment>
                                        ))}
                                    </div>
                                </StyledWrapper>
                                <p className="feature-price">{item.price}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const StyledWrapper = styled.div`
  .rating:not(:checked) > input {
    position: absolute;
    appearance: none;
  }

  .rating:not(:checked) > label {
    float: right;
    cursor: pointer;
    font-size: 14px;
    fill: #666;
    // text-align: start;
    // justify-content: start;
    // align-item: center;
  }
    @media (max-width: 1024px){
        .rating:not(:checked) > label {
            font-size: 11px;
        }
}

  .rating:not(:checked) > label > svg {
    fill: #666;
    transition: fill 0.3s ease;
  }

  .rating > input:checked ~ label > svg {
    fill: #E5C000;
  }

  .rating:not(:checked) > label:hover,
  .rating:not(:checked) > label:hover ~ label {
    fill: #E5C000;
  }
`;

export default FeaturedProducts;
