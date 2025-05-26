import React, { useState, useEffect } from "react";
import styles from "../../styles/restaurant/storeInfo.module.css";
import { Link } from "react-router-dom";

export default function StoreInfo({ address, mapLink, time, phone }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showContent, setShowContent] = useState(false); // 내용 표시 상태 추가

  useEffect(() => {
    if (isExpanded) {
      setShowContent(true); // 펼칠 때 즉시 표시
    } else {
      setTimeout(() => setShowContent(false), 300); // 닫힐 때 애니메이션 후 숨김
    }
  }, [isExpanded]);

  return (
    <div className={styles.storeInfo}>
      <div className={styles.storeRow}>
        <span className={styles.map}>
          <img src="/images/icon/map.png" />
        </span>
        <span className={styles.address}>{address}</span>
        <Link to="/TestPage" style={{ textDecoration: "none" }}>
          <div className={styles.mapLink}>지도 보기</div>
        </Link>
      </div>

      <div
        className={styles.storeRow}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className={styles.time_img}>
          <img src="/images/icon/time.png" />
        </span>
        <span className={styles.time}>
          {time} <span className={styles.toggle}>{isExpanded ? "▲" : "▼"}</span>
        </span>
      </div>

      <div
        className={`${styles.expandedTime} ${isExpanded ? styles.open : ""}`}
        style={{
          maxHeight: isExpanded ? "160px" : "0",
          opacity: isExpanded ? 1 : 0,
        }}
      >
        {showContent && (
          <>
            <div>월 11:00 - 23:00</div>
            <div>화 11:00 - 23:00</div>
            <div>수 휴무</div>
            <div>목 11:00 - 23:00</div>
            <div>금 11:00 - 23:00</div>
            <div>토 11:00 - 23:00</div>
            <div>일 12:00 - 24:00</div>
          </>
        )}
      </div>

      <div className={styles.storeRow}>
        <span className={styles.tel}>
          <img src="/images/icon/tel.png" />
        </span>
        <span className={styles.phone}>{phone}</span>
      </div>
    </div>
  );
}
