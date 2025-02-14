import React from "react";
import styles from '../../styles/Home/nav.module.css';

function Nav() {
    return (
        <div className={styles.nav_container}>
            <div className={styles.nav_item}>
                <img src="/images/nav/home_red.png" alt="home" className={styles.home}/>
            </div>
            <div className={styles.nav_item}>
                <img src="/images/nav/map.png" alt="map" className={styles.map}/>
            </div>
            <div className={styles.nav_item}>
                <img src="/images/nav/review.png" alt="review" className={styles.review}/>
            </div>
            <div className={styles.nav_item}>
                <img src="/images/nav/reservation.png" alt="reservation" className={styles.reservation}/>
            </div>
            <div className={styles.nav_Item}>
                <img src="/images/nav/profile.png" alt="profile" className={styles.profile}/>
            </div>
        </div>
    );
}

export default Nav;
