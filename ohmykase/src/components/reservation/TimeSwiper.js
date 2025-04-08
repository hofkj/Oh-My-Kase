import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

import Time from '../reservation/Time';
import styles from "../../styles/reservation/timeSwiper.module.css"; // CSS 모듈 임포트

function TimeSwiper() {
    const [activeTime, setActiveTime] = useState(null);  // 클릭된 시간을 관리하는 상태

    const handleTimeClick = (time) => {
        setActiveTime(time);
    };

    return (
        <div className={styles.timeContainer}>
            <Swiper
                slidesPerView={5.3} // 디자인과 물어보기!
                freeMode={true}
                modules={[FreeMode, Pagination]}
                className={styles.swiper}
            >
                <SwiperSlide>
                    <Time time={"11:00"} isActive={activeTime === "11:00"} onClick={() => handleTimeClick("11:00")} />
                </SwiperSlide>
                <SwiperSlide>
                    <Time time={"12:00"} isActive={activeTime === "12:00"} onClick={() => handleTimeClick("12:00")} />
                </SwiperSlide>
                <SwiperSlide>
                    <Time time={"13:00"} isActive={activeTime === "13:00"} onClick={() => handleTimeClick("13:00")} />
                </SwiperSlide>
                <SwiperSlide>
                    <Time time={"14:00"} isActive={activeTime === "14:00"} onClick={() => handleTimeClick("14:00")} />
                </SwiperSlide>
                <SwiperSlide>
                    <Time time={"15:00"} isActive={activeTime === "15:00"} onClick={() => handleTimeClick("15:00")} />
                </SwiperSlide>
                <SwiperSlide>
                    <Time time={"16:00"} isActive={activeTime === "16:00"} onClick={() => handleTimeClick("16:00")} />
                </SwiperSlide>
                <SwiperSlide>
                    <Time time={"17:00"} isActive={activeTime === "17:00"} onClick={() => handleTimeClick("17:00")} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default TimeSwiper;
