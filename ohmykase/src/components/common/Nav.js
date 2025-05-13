import React from "react";
import styles from '../../styles/home/nav.module.css';

function Nav(props) {
    return (
        <div className={styles.nav_container}>
            <div className={styles.nav_item}>
                <div className={styles.home}><img src={props.home} alt="home"/>홈</div>
            </div>
            <div className={styles.nav_item}>
                <div className={styles.map}><img src={props.map} alt="map"/>지도</div>
            </div>
            <div className={styles.nav_item}>
                <div className={styles.review}><img src={props.review} alt="review"/>리뷰</div>
            </div>
            <div className={styles.nav_item}>
                <div className={styles.reservation}><img src={props.reservation} alt="reservation"/>예약</div>
            </div>
            <div className={styles.nav_Item}>
                <div className={styles.profile}><img src={props.profile} alt="profile"/>프로필</div>
            </div>
        </div>
    );
}

export default Nav;