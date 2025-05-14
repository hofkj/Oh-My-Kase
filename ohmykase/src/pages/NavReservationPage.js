import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/pages/NavReservationPage.module.css";
import Nav from "../components/common/Nav";
import PageHeader from "../components/common/PageHeader";
import ReservationItem from "../components/reservation/ReservationItem";

function NavReservationPage() {
  const [activeTab, setActiveTab] = useState("upcoming"); 

  const handleTabClick = (tabName) => {
    setActiveTab(tabName); 
  };

  return (
    <div className={styles.container}>
      <PageHeader text="예약" />

      <div className={styles.tabContainer}>
        <div
          className={`${styles.tab} ${
            activeTab === "upcoming" ? styles.activeTab : ""
          }`}
          onClick={() => handleTabClick("upcoming")}
        >
          예정된 예약
        </div>
        <div
          className={`${styles.tab} ${
            activeTab === "completed" ? styles.activeTab : ""
          }`}
          onClick={() => handleTabClick("completed")}
        >
          완료된 예약
        </div>
        <div
          className={`${styles.tab} ${
            activeTab === "cancelled" ? styles.activeTab : ""
          }`}
          onClick={() => handleTabClick("cancelled")}
        >
          취소된 예약
        </div>
      </div>

      <div className={styles.reservationList}>
        {activeTab === "upcoming" && (
          <div className={styles.reservationItem}>
            <ReservationItem status="진행 중"/>
            <ReservationItem status="예약 확정"/>
          </div>
        )}
        {activeTab === "completed" && (
          <div className={styles.reservationItem}>
            <ReservationItem status="완료"/>
          </div>
        )}
        {activeTab === "cancelled" && (
          <div className={styles.reservationItem}></div>
        )}
      </div>

      <Nav
        home="/images/nav/home.png"
        map="/images/nav/map.png"
        review="/images/nav/review.png"
        reservation="/images/nav/reservation_red.png"
        profile="/images/nav/profile.png"
        homeColor="#747474"
        mapColor="#747474"
        reviewColor="#747474"
        reservationColor="#BB0038"
        profileColor="#747474"
      />
    </div>
  );
}

export default NavReservationPage;
