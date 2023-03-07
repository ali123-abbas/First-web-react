import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import sliderImg1 from '../../assets/img/owlCarasol.png'
import sliderImg2 from '../../assets/img/owlCarasol2.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import './style.css'

// import required modules
import { Navigation } from "swiper";

export default function Slider() {
  return (
 
     <Swiper navigation={true} slidesPerView={1} loopFillGroupWithBlank={false} loop={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
            <img src={sliderImg1} className='text-center'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src={sliderImg2}  className='text-center' />
        </SwiperSlide>
    
      </Swiper>
   
  );
}