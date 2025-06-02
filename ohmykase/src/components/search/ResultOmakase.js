import React from "react";
import styles from "../../styles/search/ResultOmakase.module.css";

function ResultOmakase({ restaurant }) {
  return (
    <div className={styles.container}>
      <div className={styles.restaurantCard}>
        {restaurant.galleryImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Restaurant Image ${index + 1}`}
            className={styles.img}
          />
        ))}

        <div className={styles.shadowOverlay}></div>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.name}>{restaurant.name}</div>
        <div className={styles.infoContainer}>
          <img src="/images/icon/star.png" className={styles.star} />
          <div className={styles.rating}>{restaurant.rating}</div>
          <div className={styles.location}>{restaurant.address}</div>
        </div>
      </div>
    </div>
  );
}

export default ResultOmakase;
