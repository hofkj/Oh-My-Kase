import React from "react";
import styles from "../../styles/common/reservationInfo.module.css";

function ReservationInfo(props) {
  return (
    <div className={styles.container}>
      <div className={styles.info}>예약 정보</div>
      <div className={styles.date}>2025.03.17 (월) | 오전 11시 | 3명</div>
    </div>
  );
}

export default ReservationInfo;
