import React from 'react';
import './Testimonial.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { testimonial_section } from '../../assets/assets'


const Testimonial = () => {
    return (
        <div className="testimonial-container">
            <div className="memeber-review">
                <Swiper
                    modules={[Autoplay]} // Removed Navigation and Pagination modules
                    autoplay={{
                        delay: 4000, // 4 seconds delay
                        disableOnInteraction: false,
                    }}
                    spaceBetween={20}
                    slidesPerView={1} 
                    breakpoints={{
                        768: { slidesPerView: 2 }, // 2 slides on tablets
                        1024: { slidesPerView: 1 }, // 3 slides on larger screens
                    }}
                >
                    {testimonial_section.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className="testimonial-card">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="testimonial-image"
                                />
                                <div className="testimonial-content">
                                    <p className="testimonial-description">{testimonial.description}</p>
                                    <h3 className="testimonial-name">{testimonial.name}</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;