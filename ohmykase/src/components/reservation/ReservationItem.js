import React from "react";
import styles from "../../styles/reservation/ReservationItem.module.css";

function ReservationItem(props) {
  const statusClass =
    props.status === "진행 중"
      ? styles.pending
      : props.status === "예약 확정"
      ? styles.confirmed
      : props.status === "완료"
      ? styles.completed
      : "";

  return (
    <div className={styles.reservationItemContainer}>
      <img src="/images/restaurant/interior3.png" className={styles.restaurantImage} />
      <div className={styles.detailsContainer}>
        <div className={`${styles.status} ${statusClass}`}>{props.status}</div>
        <div className={styles.restaurantName}>규베이 긴자 본점</div>
        <div className={styles.reservationDetails}>
          <div className={styles.reservationDate}>2025.03.17 (월) / 오전 11시 / 3명</div>
          <div className={styles.reservationPrice}>¥ 13,000 ~ ¥ 60,000</div>
        </div>
      </div>
    </div>
  );
}

export default ReservationItem;
