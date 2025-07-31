import React, { useState } from 'react';
import './FoodItem.css';
import { BsFillBasket3Fill } from "react-icons/bs";
import styled from 'styled-components';
import { IoRemoveCircleOutline } from "react-icons/io5";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';



const FoodItem = ({ id, name, price, description, image }) => {
  
//   const [itemCount, setItemCount] = useState(0);
  const {cartItems, addToCart, removeFromCart, url} = useContext(StoreContext)

  const [rating, setRating] = useState(0); // Track rating per card

  const handleRatingChange = (value) => {
    setRating(value); // Update rating when a star is clicked
  };

  return (
    <div className="food-item">
      <div className="item-img-section">
        <img className="item-img" src={url+"/images/"+image} alt="" />
      </div>
      <div className="food-item-info">
        <div className="item-name-ranking">
          <p>{name}</p>
          <StyledWrapper>
            <div className="rating">
              {[5, 4, 3, 2, 1].map((rate) => (
                <React.Fragment key={`${id}-${rate}`}>
                  <input
                    type="radio"
                    id={`star-${id}-${rate}`}
                    name={`rate-${id}`} // Unique name for each card
                    value={rate}
                    checked={rating === rate}
                    onChange={() => handleRatingChange(rate)}
                  />
                  <label htmlFor={`star-${id}-${rate}`} title={`Rate ${rate}`}>
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
        </div>
        <p className="food-item-desc">{description}</p>
        <div className="price-cart">
          <p className="food-item-price">${price}</p>
          <div className="item-counter">
            {cartItems[id] > 0 ? (
              <div className="counter-controls">
                <button
                  className="counter-btn remove-btn"
                  onClick={() => removeFromCart(id)}
                >
                  <IoRemoveCircleOutline className="icon" /> Remove
                </button>
                <span className="item-count">{cartItems[id]}</span>
                <button
                  className="counter-btn plus-btn"
                  onClick={() => addToCart(id)}
                >
                  Add <IoMdAddCircleOutline className="icon" />
                </button>
              </div>
            ) : (
              <button
                className="basket-btn"
                onClick={() => addToCart(id)}
              >
                 <BsFillBasket3Fill className="icon" />
              </button>
            )}
          </div>
        </div>
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
    font-size: 10px;
    fill: #666;
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

export default FoodItem;













// import React, { useState } from "react";
// import styled from "styled-components";
// import { BsFillBasket3Fill } from "react-icons/bs";
// import { IoMdAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io";

// const FoodItem = ({ id, name, price, description, image }) => {
//     const [itemCount, setItemCount] = useState(0); // Track item count
//     const [showCounter, setShowCounter] = useState(false); // Toggle Add/Remove UI
//     const [rating, setRating] = useState(0); // Track rating for each card

//     const handleRatingChange = (value) => {
//         setRating(value); // Update the selected rating
//     };

//     return (
//         <div className="food-item">
//             {/* Image Section */}
//             <div className="item-img-section">
//                 <img className="item-img" src={image} alt={name} />
//             </div>

//             {/* Item Info Section */}
//             <div className="food-item-info">
//                 {/* Name and Rating */}
//                 <div className="item-name-ranking">
//                     <p className="food-item-name">{name}</p>
//                     <StyledWrapper>
//                         <div className="rating">
//                             {[5, 4, 3, 2, 1].map((rate) => (
//                                 <React.Fragment key={`${id}-${rate}`}>
//                                     <input
//                                         type="radio"
//                                         id={`star-${id}-${rate}`}
//                                         name={`rate-${id}`}
//                                         value={rate}
//                                         checked={rating === rate}
//                                         onChange={() => handleRatingChange(rate)}
//                                     />
//                                     <label htmlFor={`star-${id}-${rate}`} title={`Rate ${rate}`}>
//                                         <svg
//                                             viewBox="0 0 576 512"
//                                             height="1em"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             className="star-solid"
//                                         >
//                                             <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
//                                         </svg>
//                                     </label>
//                                 </React.Fragment>
//                             ))}
//                         </div>
//                     </StyledWrapper>
//                 </div>

//                 {/* Description */}
//                 <p className="food-item-desc">{description}</p>

//                 {/* Price and Add/Remove Section */}
//                 <div className="price-cart">
//                     <p className="food-item-price">${price}</p>
//                     {!showCounter ? (
//                         <button
//                             className="basket-btn"
//                             onClick={() => setShowCounter(true)}
//                         >
//                             <BsFillBasket3Fill className="basket-icon" />
//                         </button>
//                     ) : (
//                         <div className="item-counter">
//                             {itemCount > 0 ? (
//                                 <>
//                                     <button
//                                         className="counter-btn remove-btn"
//                                         onClick={() => {
//                                             setItemCount((prev) => prev - 1);
//                                             if (itemCount === 1) setShowCounter(false); // Hide when count reaches 0
//                                         }}
//                                     >
//                                         <IoRemoveCircleOutline className="icon" /> Remove
//                                     </button>
//                                     <span className="item-count">{itemCount}</span>
//                                 </>
//                             ) : null}
//                             <button
//                                 className="counter-btn add-btn"
//                                 onClick={() => setItemCount((prev) => prev + 1)}
//                             >
//                                 Add <IoMdAddCircleOutline className="icon" />
//                             </button>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// const StyledWrapper = styled.div`
//   .rating:not(:checked) > input {
//     position: absolute;
//     appearance: none;
//   }

//   .rating:not(:checked) > label {
//     float: right;
//     cursor: pointer;
//     font-size: 10px;
//     fill: #666;
//   }

//   .rating:not(:checked) > label > svg {
//     fill: #666;
//     transition: fill 0.3s ease;
//   }

//   .rating > input:checked ~ label > svg {
//     fill: #E5C000;
//   }

//   .rating:not(:checked) > label:hover,
//   .rating:not(:checked) > label:hover ~ label {
//     fill: #E5C000;
//   }
// `;

// export default FoodItem;
