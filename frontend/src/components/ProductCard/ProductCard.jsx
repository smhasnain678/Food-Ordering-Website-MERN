import React from 'react'
import './ProductCard.css'
import { assets } from '../../assets/assets'

const ProductCard = () => {
    return (
        <div className="banner-container">
            <div className="banner">
                <div className="upper-banner">
                    <div className="upper-image-one" id="upper-img">
                        <h1>Fresh Food</h1>
                        <span>Nature’s Palette <br />on Your Plate</span>
                        <button>
                            <p>Subscribe</p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="4"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                ></path>
                            </svg>
                        </button>

                        {/* <img src={assets.banner_1} alt="" /> */}
                    </div>
                    <div className="upper-image-two" id="up-img">
                        <h1>Your Healthy Kitchen</h1>
                        <img src={assets.banner_2} alt="" className="two-img" />
                    </div>
                </div>
                <div className="down-banner">
                    <div className="down-image-one">
                        <div className="banner-text">
                            <h1>Save 50%</h1>
                            <h3>Bite into Bold</h3>
                        </div>
                        <img src={assets.banner_5} alt="" className="one-img" />
                    </div>
                    <div className="down-image-two" id="below-img-two">
                        <div className="do-img-txt">
                            <p>Let's Stacked with</p>
                            <h1>GOODNESS</h1>
                            <button>
                                <p>Subscribe</p>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="4"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                        {/* <img src={assets.banner_4} alt="" /> */}
                    </div>
                    <div className="down-image-three" id="below-img-three">
                        <h1>Every burger tells a delicious story</h1>
                        <button>
                            <p>Subscribe</p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="4"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard








// import React, { useState } from "react";
// import "./ProductCard.css";
// // import {assets} from '../../assets/assets'
// import banner1 from "../../assets/banner_1.jpg";
// import banner2 from "../../assets/banner_2.jpg";
// import banner3 from "../../assets/banner_3.jpg";
// import banner4 from "../../assets/banner_4.png";
// import banner5 from "../../assets/banner_5.png";

// const ProductCard = () => {
//   const [hovered, setHovered] = useState(null);

//   const images = [
//     { id: 1, src: banner1, alt: "Meat", label: "Healthy Kitchen with Freshio" },
//     { id: 2, src: banner2, alt: "Keto Diet", label: "Keto Diet at Lowest Price" },
//     { id: 3, src: banner3, alt: "Juice", label: "For Juice Lovers Everywhere" },
//     { id: 4, src: banner4, alt: "Fruits", label: "Just Eat Better" },
//     { id: 5, src: banner5, alt: "Veggies", label: "Farm Fresh Veggies" },
//   ];

//   return (
//     <div className="interactive-container">
//       {images.map((image, index) => (
//         <div
//           key={image.id}
//           className={`interactive-item ${hovered === index ? "hovered" : ""}`}
//           onMouseEnter={() => setHovered(index)}
//           onMouseLeave={() => setHovered(null)}
//         >
//           <img src={image.src} alt={image.alt} />
//           <div className="label">{image.label}</div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductCard;

