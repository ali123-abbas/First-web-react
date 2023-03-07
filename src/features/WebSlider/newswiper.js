import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import featured01 from '../../assets/img/featured01.jpg'
import featured02 from '../../assets/img/featured02.jpg'
import featured03 from '../../assets/img/featured03.jpg'
import featured04 from '../../assets/img/featured04.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./card.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function App() {
  return (
  
    <div className="container-fluid mt-5" >
      <div className="row">
        <div className="col-lg-12 col-md-8">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={2}
        loop={true}
        loopFillGroupWithBlank={false}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        style={{marginBottom:"-15%"}}
      >
            <SwiperSlide><img src={featured01} style={{borderRadius:"20px" }} /> </SwiperSlide>
            <SwiperSlide><img src={featured02} style={{borderRadius:"20px" }} /> </SwiperSlide>
            <SwiperSlide><img src={featured03} style={{borderRadius:"20px" }} /> </SwiperSlide>
            <SwiperSlide><img src={featured04} style={{borderRadius:"20px" }} /> </SwiperSlide>
      </Swiper>
      </div>
      </div>
      </div>
   
  );
}
