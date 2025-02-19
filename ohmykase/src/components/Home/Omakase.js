import React from "react";
import styles from '../../styles/home/omakase.module.css';

function Omakase() {
    return (
        <div className={styles.omakaseContainer}>
            <div className={styles.omakaseHeader}>
                <div className={styles.omakaseTitle}>인기 오마카세</div>
                <div className={styles.omakaseSubtitle}>
                    이용객들이 만족한 오마카세를 확인해보세요
                </div>
            </div>

            <div className={styles.omakaseMore}>
                <div>더보기 <img src="/images/icon/arrow.png" className={styles.arrow}/></div>
            </div>
        </div>
    );
}

export default Omakase;
