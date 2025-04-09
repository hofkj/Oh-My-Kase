import React from "react";
import styles from "../../styles/restaurant/restaurantInfo.module.css";

export default function RestaurantInfo({ name, rating, description }) {
    return ( 
        <div className={styles.restaurantInfo}>
            <div className={styles.name}>{name}</div>
            <div className={styles.rating}>
                <img src="../../images/icon/star_4.5.png"/> {rating}
            </div>
            <div className={styles.description}><img src="../../images/icon/dot_L.png"/>{description}<img src="../../images/icon/dot_R.png"/></div>
        </div>
    );
}
