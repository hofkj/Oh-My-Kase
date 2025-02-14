import React from "react";
import styles from '../../styles/Home/restaurant.module.css';

function Restaurant() {
    return (
        <div className={styles.restaurant_container}>
            <div className={styles.restaurant_img}>
                <img src="/images/restaurant/restaurant.png" alt="restaurant" />
            </div>
            <div className={styles.restaurant_details}>
                <div className={styles.restaurant_name}>
                    <div className={styles.name}>규베이 긴자 본점</div>
                    <img src="/images/icon/bookmark.png" alt="bookmark" className={styles.bookmark} />
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
