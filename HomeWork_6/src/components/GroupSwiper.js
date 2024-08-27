import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

export default function GroupSwiper() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="myGroupSwiper"
      >
        <SwiperSlide className='groupSwiper'>
          <img src="https://i.pinimg.com/564x/ee/bd/45/eebd451e55c72bb674c9526ebc4a9c27.jpg" />
        </SwiperSlide>
        <SwiperSlide className='groupSwiper'>
          <img src="https://i.pinimg.com/564x/ee/5d/e7/ee5de77517e6ac6ef890b02a6b207e37.jpg" />
        </SwiperSlide>
        <SwiperSlide className='groupSwiper'>
          <img src="https://i.pinimg.com/564x/69/b3/04/69b3047ca08714ca5ab40219baa59989.jpg" />
        </SwiperSlide>
        <SwiperSlide className='groupSwiper'>
          <img src="https://i.pinimg.com/564x/ae/82/68/ae82683c05723504327703529a881c05.jpg" />
        </SwiperSlide>
        <SwiperSlide className='groupSwiper'>
          <img src="https://i.pinimg.com/564x/28/e0/72/28e072f38749716579bb762bc8fae923.jpg" />
        </SwiperSlide>
        <SwiperSlide className='groupSwiper'>
          <img src="https://i.pinimg.com/564x/7c/3f/7c/7c3f7c7895d1f13da02cd4033055388a.jpg" />
        </SwiperSlide>
        <SwiperSlide className='groupSwiper'>
          <img src="https://i.pinimg.com/564x/d6/2d/64/d62d649724bfda057f00cc7d088f4512.jpg" />
        </SwiperSlide>
        <SwiperSlide className='groupSwiper'>
          <img src="https://i.pinimg.com/564x/39/10/bc/3910bc536718b73b1aa7447dd0c0af45.jpg" />
        </SwiperSlide>
        <SwiperSlide className='groupSwiper'>
          <img src="https://i.pinimg.com/564x/1a/8e/7f/1a8e7f0648e45938f0e623b569dde969.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
