import React from "react";
import styles from '../../styles/home/header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <div className={styles.homeText}>홈</div>
                
                <div className={styles.iconContainer}>
                    <div className={styles.search}><img src="/images/icon/search.png"/></div>
                    <div className={styles.alarm}><img src="/images/icon/alarm.png"/></div>
                </div>
            </div>
        </header>
    );
}

export default Header;