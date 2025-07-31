import React from 'react'
import './BestSelling.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';

import { slider_items } from '../../assets/assets'

const BestSelling = () => {
    return (
        <div className="bestsell-container">
            <h1 className="best-title">Our Best selling</h1>
            <p className="sell-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, alias!</p>
            <div className="best-custom-navigation">
                <button className="swiper-button-prev"></button>
                <button className="swiper-button-next"></button>
            </div>
            <Swiper
                modules={[Navigation]}
                navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                }}
                // pagination={{ clickable: true }}
                spaceBetween={10}
                breakpoints={{
                    1024: { slidesPerView: 3 },
                    768: { slidesPerView: 2 },
                    0: { slidesPerView:  1}, // For smaller screens, only 1 slide
                }}
            >
                {slider_items.map((item) => (
                    <SwiperSlide key={item.id} className="best-slide">
                        <div className="best-card">
                            <img src={item.image} alt={item.name} className="best-card-image" />
                            <div className="best-hover-icons">
                                <i className="fas fa-heart"></i>
                                {/* <i className="fas fa-sync-alt"></i> */}
                                <i class="fa fa-random"></i>
                                <i className="fas fa-eye"></i>
                            </div>
                            <div className="best-card-details">
                                <span className="best-card-name">{item.name}</span>
                                <p className="best-card-price">{item.price}</p>
                                <hr />
                                <button className="best-slider-btn">
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
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default BestSelling