import React, { useState } from "react";
import styles from "../../styles/home/restaurant.module.css";
import { useNavigate } from "react-router-dom";

function Restaurant({ name, rating, location }) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = (e) => {
    e.stopPropagation(); // 페이지 이동 막기
    setIsBookmarked((prevState) => !prevState);
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/RestaurantPage");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.restaurant_container} onClick={handleClick}>
      <div className={styles.restaurant_img}>
        <img src="/images/restaurant/restaurant.png" alt="restaurant" />
      </div>
      <div className={styles.restaurant_details}>
        <div className={styles.restaurant_name}>
          <div className={styles.name}>{name}</div>
          <img
            src={
              isBookmarked
                ? "/images/icon/bookmark_red.png"
                : "/images/icon/bookmark.png"
            }
            alt="bookmark"
            className={styles.bookmark}
            onClick={toggleBookmark}
            style={{ cursor: "pointer" }}
          />
        </div>

        <div className={styles.restaurant_info}>
          <div className={styles.rating}>
            <img src="/images/icon/star.png" alt="star" className={styles.star} />
            <div className={styles.rating_value}>{rating}</div>
          </div>
          <div className={styles.location}>{location}</div>
        </div>
      </div>
    </div>
  );
}

export default Restaurant;
