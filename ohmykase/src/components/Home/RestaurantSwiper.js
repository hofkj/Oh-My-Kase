import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

import Restaurant from "./Restaurant";
import styles from "../../styles/home/restaurantSwiper.module.css";

export default function RestaurantSwiper() {
    return (
        <div className={styles.restaurant_swiper}>
            <Swiper
                slidesPerView={2.3}  // 한 화면에 몇 개 보일건지
                // spaceBetween={}  // 카드 사이의 간격
                freeMode={true} 
                modules={[FreeMode, Pagination]}
                className={styles.swiper}
            >
                <SwiperSlide><Restaurant /></SwiperSlide>
                <SwiperSlide><Restaurant /></SwiperSlide>
                <SwiperSlide><Restaurant /></SwiperSlide>
                <SwiperSlide><Restaurant /></SwiperSlide>
                <SwiperSlide><Restaurant /></SwiperSlide>
            </Swiper>
        </div>
    );
}
