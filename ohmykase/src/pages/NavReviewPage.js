import React, { useState } from "react";
import styles from "../styles/pages/NavReviewPage.module.css";
import TabMenu from "../components/common/TabMenu";
import ReviewContainer from "../components/review/ReviewContainer";
import Nav from "../components/common/Nav";

function NavReviewPage() {
  const [activeTab, setActiveTab] = useState("store"); // 'store'가 기본 탭으로 설정

  const reviews = [
    {
      username: "여행다니는멋진나",
      userProfile: "/images/restaurant/profile_img.png",
      restaurantName: "규베이 긴자 본점",
      rating: "5",
      timeAgo: "3달 전",
      peopleCount: 3,
      min_price: "1,500",
      max_price: "3,000",
      text: "친구들 3명과 함께 갔는데 너무 맛있게 잘 먹었어요...",
      images: [
        "/images/restaurant/restaurant.png",
        "/images/restaurant/restaurant.png",
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <TabMenu
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        option1="전체리뷰"
        option2="마이리뷰"
      />

      {activeTab === "store" ? (
          <ReviewContainer reviews={reviews} edit={null} /> // '마이리뷰' 탭에서는 아무 것도 표시하지 않음
    ) : (
        <ReviewContainer reviews={reviews} edit="리뷰 수정하기" /> // '리뷰 수정하기' 버튼 전달
      )}

      <Nav
        home="/images/nav/home.png"
        map="/images/nav/map.png"
        review="/images/nav/review_red.png"
        reservation="/images/nav/reservation.png"
        profile="/images/nav/profile.png"
        homeColor="#747474"
        mapColor="#747474"
        reviewColor="#BB0038"
        reservationColor="#747474"
        profileColor="#747474"
      />
    </div>
  );
}

export default NavReviewPage;
