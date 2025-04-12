import React, { useState } from "react";
import styles from "../../styles/restaurant/bottombar.module.css";

function Bottombar({ onClickReserve }) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked((prevState) => !prevState);
  };

  return (
    <div className={styles.bottombar_container}>
      <div>
        <img
          src={
            isBookmarked
              ? "/images/icon/bookmark_red.png"
              : "/images/icon/bookmark.png"
          }
          alt="bookmark"
          className={styles.bookmark}
          onClick={toggleBookmark}
          style={{ cursor: "pointer" }}
        />
        <div className={styles.bookmarkNum}>2,911</div>
      </div>

      <button className={styles.reservation_button} onClick={onClickReserve}>
        예약하기
      </button>
    </div>
  );
}

export default Bottombar;
