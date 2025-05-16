import React from "react";
import styles from "../styles/pages/MyPage.module.css";
import PageHeader from "../components/common/PageHeader";
import Nav from "../components/common/Nav";
import { Link, useNavigate } from "react-router-dom";
import RestaurantSwiper from "../components/home/RestaurantSwiper";

function MyPage() {
const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className={styles.container}>
      <PageHeader text="마이페이지" />

      <div className={styles.profileSection}>
        <div className={styles.profilePicture}>
          <img src="images/icon/profile.png" alt="Profile" />
          <div className={styles.profileInfo}>
            <div className={styles.userName}>유나현</div>
            <div className={styles.userEmail}>youmenow@gmail.com</div>
          </div>
        </div>
        <div className={styles.editInfoButton} onClick={() => handleClick("/EditProfilePage")}>내 정보 수정</div>
      </div>

      <div className={styles.reservationSection}>
        <div className={styles.reservationTitle}>
          방문하신 "규베이 긴자 본점"은 만족하셨나요?
        </div>
        <div className={styles.reservationItem}>
          <div className={styles.restaurantInfo}>
            <img
              src="/images/restaurant/interior3.png"
              className={styles.img}
            />
            <div className={styles.restaurantDetails}>
              <div className={styles.restaurantName}>규베이 긴자 본점</div>
              <div className={styles.reservationDetails}>
                2025.03.17 (월) / 오전 11시 / 3명
              </div>
              <div className={styles.stars}>
                <img src="/images/icon/star_gray.png" alt="Star" />
                <img src="/images/icon/star_gray.png" alt="Star" />
                <img src="/images/icon/star_gray.png" alt="Star" />
                <img src="/images/icon/star_gray.png" alt="Star" />
                <img src="/images/icon/star_gray.png" alt="Star" />
              </div>
            </div>
          </div>
          <Link to="/ReviewPage" className={styles.link}><div className={styles.reviewButton}>리뷰 쓰러가기</div></Link>
        </div>
      </div>

        <div className={styles.savedOmakaseHeader}>
          <div className={styles.savedOmakaseTitle}>저장한 오마카세</div>
          <div className={styles.viewMoreButton} onClick={() => handleClick("/StoragePage")}>
            더보기 <img src="/images/icon/arrow.png" alt="Arrow" />
          </div>
        </div>
      <RestaurantSwiper />

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

export default MyPage;
