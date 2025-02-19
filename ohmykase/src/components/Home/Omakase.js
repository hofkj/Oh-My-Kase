import React from "react";
import styles from '../../styles/home/omakase.module.css';

function Omakase(props) {
    return (
        <div className={styles.omakaseContainer}>
            <div className={styles.omakaseHeader}>
                <div className={styles.omakaseTitle}>{props.title}</div>
                <div className={styles.omakaseSubtitle}>{props.subtitle}</div>
            </div>

            <div className={styles.omakaseMore}>
                <div>더보기 <img src="/images/icon/arrow.png" className={styles.arrow}/></div>
            </div>
        </div>
    );
}

export default Omakase;
