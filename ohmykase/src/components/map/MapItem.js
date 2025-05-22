import React, { useState } from "react";
import styles from "../../styles/map/mapItem.module.css";

function MapItem() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.restaurantInfo}>
          <div className={styles.restaurantName}>
            <div>스시 도쿄 텐 도쿄점</div>
            <img src="/images/icon/star_red.png" alt="Star" className={styles.starIcon} />
            <div className={styles.rating}>4</div>
          </div>
          <div className={styles.bookmarkIcon}>
            <img src="/images/icon/bookmark_red.png" alt="Bookmark" />
          </div>
        </div>
        <div className={styles.address}>도쿄도 시부야구</div>
      </div>

      <div className={styles.imageContainer}>
        <img src="/images/restaurant/sushi1.png" alt="Sushi 1" className={styles.restaurantImage} />
        <img src="/images/restaurant/sushi2.png" alt="Sushi 2" className={styles.restaurantImage} />
        <img src="/images/restaurant/sushi3.png" alt="Sushi 3" className={styles.restaurantImage} />
        <img src="/images/restaurant/sushi4.png" alt="Sushi 4" className={styles.restaurantImage} />
      </div>
    </div>
  );
}

export default MapItem;
