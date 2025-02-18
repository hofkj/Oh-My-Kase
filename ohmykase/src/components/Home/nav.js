import React from "react";
import styles from '../../styles/home/nav.module.css';

function Nav() {
    return (
        <div className={styles.nav_container}>
            <div className={styles.nav_item}>
                <div className={styles.home}><img src="/images/nav/home_red.png" alt="home"/>홈</div>
            </div>
            <div className={styles.nav_item}>
                <div className={styles.map}><img src="/images/nav/map.png" alt="map"/>지도</div>
            </div>
            <div className={styles.nav_item}>
                <div className={styles.review}><img src="/images/nav/review.png" alt="review"/>리뷰</div>
            </div>
            <div className={styles.nav_item}>
                <div className={styles.reservation}><img src="/images/nav/reservation.png" alt="reservation"/>예약</div>
            </div>
            <div className={styles.nav_Item}>
                <div className={styles.profile}><img src="/images/nav/profile.png" alt="profile"/>프로필</div>
            </div>
        </div>
    );
}

export default Nav;