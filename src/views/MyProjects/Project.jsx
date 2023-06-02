import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Project.scss";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

import slider_1 from "/src/assets/slider_1.png";
import slider_2 from "/src/assets/slider_2.png";
import slider_3 from "/src/assets/slider_3.png";

const Project = () => {
  return (
    <div className="container_1">
      <div className="container">
        <h1 id="section-2" className="heading">
          My projects
        </h1>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slider_1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_3} alt="" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default Project;
