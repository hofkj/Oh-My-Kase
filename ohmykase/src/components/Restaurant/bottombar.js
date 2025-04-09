import React from "react";
import styles from '../../styles/restaurant/bottombar.module.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';

function Bottombar() {
    return (
        <div className={styles.bottombar_container}>
            <div>
                <img src="/images/icon/bookmark.png" alt="bookmark" className={styles.bookmark} />
                <div className={styles.bookmarkNum}>2,911</div>
            </div>
            {/* <i className={`bi bi-bookmark-fill ${styles.bookmark}`}></i> */}
            <button className={styles.reservation_button}>예약하기</button>
        </div>
    );
}

export default Bottombar;
