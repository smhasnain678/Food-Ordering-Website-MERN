import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './CardSlider.css';
import { Navigation } from 'swiper/modules';
import { slider_items } from '../../assets/assets';

const CardSlider = () => {
  return (
    <div className="slider-container">
      <div className="left-content">
        <h1>Explore Our Exclusive Collection</h1>
        <p>
          Discover premium-quality products crafted just for you. Browse through
          our exclusive range
        </p>
        <div className="custom-navigation">
          <button className="swiper-button-prev"></button>
          <button className="swiper-button-next"></button>
        </div>
      </div>
      <Swiper 
        modules={[Navigation]}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        spaceBetween={30}
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          0: { slidesPerView: 1 }, // For smaller screens, only 1 slide
        }}
      >
        {slider_items.map((item) => (
          <SwiperSlide key={item.id} className="slide">
            <div className="card">
              <img src={item.image} alt={item.name} className="card-image" />
              <div className="hover-icons">
                <i className="fas fa-heart"></i>
                <i className="fa fa-random"></i>
                <i className="fas fa-eye"></i>
              </div>
              <div className="card-details">
                <span className="card-name">{item.name}</span>
                <p className="card-price">{item.price}</p>
                <hr />
                <button className="slider-btn">
                  <p>Subscribe</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
  );
};

export default CardSlider;












// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import './CardSlider.css';
// import { Navigation} from 'swiper/modules';

// import { slider_items } from '../../assets/assets'


// const CardSlider = () => {
//   return (
//     <div className="slider-container">
//       <div className="left-content">
//         <h1>Explore Our Exclusive Collection</h1>
//         <p>Discover premium-quality products crafted just for you. Browse through our exclusive range</p>
//         <div className="custom-navigation">
//           <button className="swiper-button-prev"></button>
//           <button className="swiper-button-next"></button>
//         </div>
//       </div>
//       <Swiper
//         modules={[Navigation]}
//         navigation={{
//           prevEl: '.swiper-button-prev',
//           nextEl: '.swiper-button-next',
//         }}
//         // pagination={{ clickable: true }}
//         spaceBetween={30}
//         breakpoints={{
//           1024: { slidesPerView: 3 },
//           768: { slidesPerView: 2 },
//           0: { slidesPerView: 1 },
//         }}
//       >
//         {slider_items.map((item) => (
//           <SwiperSlide key={item.id} className="slide">
//             <div className="card">
//               <img src={item.image} alt={item.name} className="card-image" />
//               <div className="hover-icons">
//                 <i className="fas fa-heart"></i>
//                 {/* <i className="fas fa-sync-alt"></i> */}
//                 <i class="fa fa-random"></i>
//                 <i className="fas fa-eye"></i>
//               </div>
//               <div className="card-details">
//                 <span className="card-name">{item.name}</span>
//                 <p className="card-price">{item.price}</p>
//                 <hr />
//                 <button className="slider-btn">
//                   <p>Subscribe</p>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     class="h-6 w-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     stroke-width="4"
//                   >
//                     <path
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       d="M14 5l7 7m0 0l-7 7m7-7H3"
//                     ></path>
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default CardSlider;
