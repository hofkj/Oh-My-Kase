import React from "react";
import styles from "../../styles/restaurant/bottombar.module.css";
// import 'bootstrap-icons/font/bootstrap-icons.css';

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

function Bottombar() {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const toggleBookmark = () => {
    setIsBookmarked((prevState) => !prevState);
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/ReservationPage");
    window.scrollTo({ top: 0, behavior: "smooth" });
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
        />{" "}
        <div className={styles.bookmarkNum}>2,911</div>
      </div>
      {/* <i className={`bi bi-bookmark-fill ${styles.bookmark}`}></i> */}
      <button className={styles.reservation_button} onClick={handleClick}>
        예약하기
      </button>
    </div>
  );
}

export default Bottombar;
