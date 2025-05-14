import React from "react";
import { useNavigate } from "react-router-dom";
import TitleHeaderBar from "../components/common/TitleHeaderBar";

import styles from "../styles/pages/StoragePage.module.css";
import ResultOmakase from "../components/search/ResultOmakase";
import Nav from "../components/common/Nav";

function StoragePage() {
  const navigate = useNavigate();

  const handleArrowClick = () => {
    navigate("/MyPage");
  };

  return (
    <div className={styles.container}>
      <TitleHeaderBar title="저장한 오마카세" onArrowClick={handleArrowClick} />

      <div>{/* <ResultOmakase/> */}</div>

      <Nav
        home="/images/nav/home.png"
        map="/images/nav/map.png"
        review="/images/nav/review.png"
        reservation="/images/nav/reservation.png"
        profile="/images/nav/profile_red.png"
        homeColor="#747474"
        mapColor="#747474"
        reviewColor="#747474"
        reservationColor="#747474"
        profileColor="#BB0038"
      />
    </div>
  );
}

export default StoragePage;
