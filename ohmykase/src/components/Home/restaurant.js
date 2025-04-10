import React, { useState } from "react";
import styles from '../../styles/home/restaurant.module.css';


import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import { useEffect, useState } from "react";


function Restaurant() {
    //  북마크 상태 관리
    const [isBookmarked, setIsBookmarked] = useState(false);

    // 클릭 시 북마크 상태 토글
    const toggleBookmark = () => {
        setIsBookmarked(prevState => !prevState);
    };

    const navigate = useNavigate();
    const handleClick = () => {
      navigate("/RestaurantPage");
      window.scrollTo({ top: 0, behavior: "smooth" })
    };
   

    return (
        <div className={styles.restaurant_container} onClick={handleClick}>
            <div className={styles.restaurant_img}>
                <img src="/images/restaurant/restaurant.png" alt="restaurant" />
            </div>
            <div className={styles.restaurant_details}>
                <div className={styles.restaurant_name}>
                    <div className={styles.name}>규베이 긴자 본점</div>
                    
                    <img 
                        src={isBookmarked ? "/images/icon/bookmark_red.png" : "/images/icon/bookmark.png"} 
                        alt="bookmark" 
                        className={styles.bookmark} 
                        onClick={toggleBookmark} 
                        style={{ cursor: "pointer" }} 
                    />
                </div>

                <div className={styles.restaurant_info}>
                    <div className={styles.rating}>
                        <img src="/images/icon/star.png" alt="star" className={styles.star} />
                        <div className={styles.rating_value}>4.5</div>
                    </div>
                    <div className={styles.location}>도쿄</div>
                </div>
            </div>
        </div>
    );
}

export default Restaurant;
