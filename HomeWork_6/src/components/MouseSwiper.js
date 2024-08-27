import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';

export default function MouseSwiper() {
  return (
    <>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="myMouseSwiper"
      >
        <SwiperSlide className='mouseSwiper'></SwiperSlide>
        <SwiperSlide className='mouseSwiper'></SwiperSlide>
        <SwiperSlide className='mouseSwiper'></SwiperSlide>
        <SwiperSlide className='mouseSwiper'></SwiperSlide>
        <SwiperSlide className='mouseSwiper'></SwiperSlide>
        <SwiperSlide className='mouseSwiper'></SwiperSlide>
        <SwiperSlide className='mouseSwiper'></SwiperSlide>
        <SwiperSlide className='mouseSwiper'></SwiperSlide>
        <SwiperSlide className='mouseSwiper'></SwiperSlide>
      </Swiper>
    </>
  );
}
