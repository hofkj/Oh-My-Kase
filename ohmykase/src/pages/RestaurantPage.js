import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import RestaurantImage from "../components/restaurant/RestaurantImage";
import RestaurantInfo from "../components/restaurant/RestaurantInfo";
import TagList from "../components/restaurant/TagList";
import TabMenu from "../components/common/TabMenu";
import StoreInfo from "../components/restaurant/StoreInfo";
import ImageGallery from "../components/restaurant/ImageGallery";
import ReviewList from "../components/restaurant/ReviewList";
import Bottombar from "../components/restaurant/bottombar";
import Calendar from "../components/reservation/Calendar";

import styles from "../styles/pages/restaurantPage.module.css";

export default function RestaurantPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [restaurantData, setRestaurantData] = useState(null);
  const [activeTab, setActiveTab] = useState("store");
  const [showCalendar, setShowCalendar] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const apiKey = "7VCEB37-69B4CKZ-QV2674N-BTZTWXE";

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/shop/${apiKey}/${id}`)
      .then((res) => {
        const shop = res.data[0];
        if (!shop) throw new Error("Shop not found");
        const tags = shop.tag_names ? shop.tag_names.split(",") : [];
        setRestaurantData({ ...shop, tags });
      })
      .catch((err) => {
        console.error("레스토랑 정보 불러오기 실패:", err);
        navigate("/");
      });
  }, [id, navigate]);

  if (!restaurantData) {
    return (
      <div className={styles.notFound}>식당 정보를 불러오는 중입니다...</div>
    );
  }

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
      <RestaurantImage imageUrl={restaurantData.galleryImages?.[0]} />

      <RestaurantInfo
        name={restaurantData.shop_name}
        rating={restaurantData.rating}
        description={restaurantData.shop_word || ""}
      />

      <TagList tags={restaurantData.tags || []} />

      <TabMenu
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        option1="가게"
        option2="리뷰"
      />

      {activeTab === "store" ? (
        <>
          <StoreInfo
            address={restaurantData.shop_location}
            mapLink={restaurantData.shop_location_path}
            time="운영 시간 보기"
            phone={restaurantData.shop_telnum}
            shopTime={restaurantData.shop_time}
            shopId={restaurantData.id} 
          />

          <ImageGallery
            images={
              restaurantData.galleryImages || [
                "/images/restaurant/restaurant.png",
              ]
            }
          />
        </>
      ) : (
        <>
        <ReviewList reviews={reviews} />
        </>
      )}

      <Bottombar
        onClickReserve={() => setShowCalendar(true)}
        shopId={restaurantData.id}
      />
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
            <Calendar shopId={restaurantData.id} />
          </div>
        </div>
      )}
    </div>
  );
}
