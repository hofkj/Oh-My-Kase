import React from "react";
import styles from "../../styles/search/ResultOmakase.module.css";
import { useNavigate } from "react-router-dom";

function ResultOmakase({ restaurant }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/RestaurantPage/${restaurant.id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.container} onClick={handleClick} style={{ cursor: "pointer" }}>
      <div className={styles.restaurantCard}>
        <img
          src={
            restaurant.galleryImages?.[0] || "/images/restaurant/restaurant.png"
          }
          alt="Restaurant"
          className={styles.img}
        />
        <div className={styles.shadowOverlay}></div>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.name}>{restaurant.shop_name}</div>
        <div className={styles.infoContainer}>
          <img src="/images/icon/star.png" className={styles.star} alt="별점" />
          <div className={styles.rating}>{restaurant.rating}</div>
          <div className={styles.location}>{restaurant.area_name}</div>
        </div>
      </div>
    </div>
  );
}

export default ResultOmakase;
