import React from "react";
import styles from "../../styles/search/record.module.css";

function Record() {
  return (
    <div className={styles.container}>
        <img src="../../images/icon/search_icon.png" className={styles.searchIcon}></img>
        <div>스시 오마카세</div>
    </div>
  );
}

export default Record;
