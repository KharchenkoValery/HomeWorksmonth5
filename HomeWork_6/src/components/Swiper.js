import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import '../store/creativeSwiper.module.css';

// import required modules
import { EffectCards } from 'swiper/modules';

export default function SwiperComponent() {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="myCardSwiper"
      >
            <div className='cardSwiper'>
                <SwiperSlide className='cardSwiper'></SwiperSlide>
                <SwiperSlide className='cardSwiper'></SwiperSlide>
                <SwiperSlide className='cardSwiper'></SwiperSlide>
                <SwiperSlide className='cardSwiper'></SwiperSlide>
                <SwiperSlide className='cardSwiper'></SwiperSlide>
                <SwiperSlide className='cardSwiper'></SwiperSlide>
                <SwiperSlide className='cardSwiper'></SwiperSlide>
                <SwiperSlide className='cardSwiper'></SwiperSlide>
                <SwiperSlide className='cardSwiper'></SwiperSlide>
                <SwiperSlide className='cardSwiper'></SwiperSlide>
            </div>
        
      </Swiper>
    </>
  );
}