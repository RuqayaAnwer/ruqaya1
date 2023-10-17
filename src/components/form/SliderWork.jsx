import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

export default function SliderWork({ FilteredData }) {
  if (!FilteredData || FilteredData.length === 0) {
    return <div>لا توجد بيانات</div>;
  }

  return (
    <Swiper
      spaceBetween={130}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {FilteredData.map((item, index) => (
        <SwiperSlide key={index}>
          <img src={item.image} alt={`slide ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
