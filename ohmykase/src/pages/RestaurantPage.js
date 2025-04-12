import React, { useState } from "react";
import RestaurantImage from "../components/restaurant/RestaurantImage";
import RestaurantInfo from "../components/restaurant/RestaurantInfo";
import TagList from "../components/restaurant/TagList";
import TabMenu from "../components/restaurant/TabMenu";
import StoreInfo from "../components/restaurant/StoreInfo";
import ImageGallery from "../components/restaurant/ImageGallery";
import ReviewList from "../components/restaurant/ReviewList";
import Bottombar from "../components/restaurant/Bottombar";
import Calendar from "../components/reservation/Calendar";

import styles from "../styles/pages/restaurantPage.module.css";
import { useNavigate } from "react-router-dom";

export default function RestaurantPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("store");
  const [showCalendar, setShowCalendar] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const restaurantData = {
    imageUrl: "/images/restaurant/restaurant_img.png",
    name: "규베이 긴자 본점",
    rating: 4.5,
    description: "신선한 재료로 음식에 진심을 전합니다",
    tags: ["연어초밥", "초밥", "프라이빗", "데이트", "가성비"],
    address: "8 Chome-7-6 Ginza, Chuo City, Tokyo 104-0061",
    mapLink: "#",
    time: "월 11:00 - 23:00",
    phone: "+81335716523",
    galleryImages: [
      "/images/restaurant/interior1.png",
      "/images/restaurant/interior2.png",
      "/images/restaurant/interior2.png",
      "/images/restaurant/interior2.png",
      "/images/restaurant/interior3.png",
    ],
  };

  const reviews = [
    {
      username: "여행다니는멋진나",
      userProfile: "/images/restaurant/profile_img.png",
      rating: 4.5,
      timeAgo: "3분 전",
      text: "친구들 3명과 함께 갔는데 너무 맛있게 잘 먹었어요...",
      images: [
        "/images/restaurant/restaurant.png",
        "/images/restaurant/restaurant.png",
      ],
    },
    
  ];

  return (
    <div className={styles.restaurantDetail}>
      <RestaurantImage imageUrl={restaurantData.imageUrl} />
      <RestaurantInfo {...restaurantData} />
      <TagList tags={restaurantData.tags} />
      <TabMenu activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "store" ? (
        <>
          <StoreInfo {...restaurantData} />
          <ImageGallery images={restaurantData.galleryImages} />
        </>
      ) : (
        <ReviewList reviews={reviews} />
      )}

      {/* Bottombar 클릭 시 캘린더 슬라이드 업 */}
      <Bottombar onClickReserve={() => setShowCalendar(true)} />

      {(showCalendar || isAnimating) && (
        <div
          className={`${styles.calendarWrapper} ${
            showCalendar ? styles.show : styles.hide
          }`}
          onAnimationEnd={() => {
            if (!showCalendar) setIsAnimating(false);
          }}
        >
          <div
            className={styles.calendarOverlay}
            onClick={() => {
              setIsAnimating(true);
              setShowCalendar(false);
            }}
          />
          <div className={styles.calendarContent}>
            <Calendar />
          </div>
        </div>
      )}
    </div>
  );
}
