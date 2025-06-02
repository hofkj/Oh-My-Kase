import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

import axios from "axios";
import Restaurant from "./Restaurant";
import styles from "../../styles/home/restaurantSwiper.module.css";

export default function RestaurantSwiper() {
  const [shopList, setShopList] = useState([]);
  const apiKey = "7VCEB37-69B4CKZ-QV2674N-BTZTWXE"; // 환경변수 대신 직접 사용

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/shop/shop_list/${apiKey}`)
      .then((res) => {
        setShopList(res.data);
      })
      .catch((err) => {
        console.error("가게 목록 불러오기 실패:", err);
      });
  }, []);

  return (
    <div className={styles.restaurant_swiper}>
      <Swiper
        slidesPerView={2.3}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className={styles.swiper}
      >
        {shopList.map((shop) => (
          <SwiperSlide key={shop.id}>
            <Restaurant
              name={shop.shop_name}
              rating={shop.rating}
              location={shop.area_name}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
