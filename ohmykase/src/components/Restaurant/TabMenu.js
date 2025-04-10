import React, { useState } from "react";
import styles from "../../styles/restaurant/tabMenu.module.css";

export default function TabMenu({ activeTab, setActiveTab }) {
    return (
        <div className={styles.tabMenu}>
            <button 
                className={activeTab === "store" ? styles.active : ""}
                onClick={() => setActiveTab("store")}
            >
                가게
            </button>
            <button 
                className={activeTab === "review" ? styles.active : ""}
                onClick={() => setActiveTab("review")}
            >
                리뷰
            </button>
        </div>
    );
}
