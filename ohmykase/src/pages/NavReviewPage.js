import React, { useState, useEffect } from "react";
import axios from "axios";

import styles from "../styles/pages/NavReviewPage.module.css";
import TabMenu from "../components/common/TabMenu";
import ReviewContainer from "../components/review/ReviewContainer";
import Nav from "../components/common/Nav";

const apiKey = "7VCEB37-69B4CKZ-QV2674N-BTZTWXE";

export default function NavReviewPage() {
  const [activeTab, setActiveTab] = useState("store"); // 'store' = 전체리뷰, 'my' = 마이리뷰
  const [allReviews, setAllReviews] = useState([]);
  const [myReviews, setMyReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        let res;
        if (activeTab === "store") {
          res = await axios.get(
            `http://localhost:3000/api/review/all/${apiKey}`,
            { withCredentials: true }
          );
          const mapped = res.data.map((r) => ({
            username: r.user,
            userProfile: "/images/icon/profile.png",
            restaurantName: r.shop_name,
            rating: r.rating,
            timeAgo: r.date,
            peopleCount: Number(r.people_num.replace('명', '')),
            min_price: r.price.match(/¥([\d,]+)/)?.[1] || "",
            max_price: r.price.match(/~ ¥([\d,]+)/)?.[1] || "",
            text: r.writing,
            images: Array.isArray(r.images)
              ? r.images
              : typeof r.images === "string" && r.images.trim()
              ? r.images.split(',')
              : [],
          }));
          setAllReviews(mapped);
        } else {
          res = await axios.get(
            `http://localhost:3000/api/review/my/${apiKey}`,
            { withCredentials: true }
          );
          const mapped = res.data.map((r) => ({
            username: r.user,
            userProfile: "/images/icon/profile.png",
            restaurantName: r.shop_name,
            rating: r.rating,
            timeAgo: r.date,
            peopleCount: Number(r.people_num.replace('명', '')),
            min_price: r.price.match(/¥([\d,]+)/)?.[1] || "",
            max_price: r.price.match(/~ ¥([\d,]+)/)?.[1] || "",
            text: r.writing,
            images: Array.isArray(r.images)
              ? r.images
              : typeof r.images === "string" && r.images.trim()
              ? r.images.split(',')
              : [],
          }));
          setMyReviews(mapped);
        }
      } catch (err) {
        console.error("리뷰 불러오기 실패:", err);
      }
    };

    fetchReviews();
  }, [activeTab]);

  const reviews = activeTab === "store" ? allReviews : myReviews;
  const editButtonText = activeTab === "store" ? null : "리뷰 수정하기";

  return (
    <div className={styles.container}>
      <div className={styles.tabWrapper}>


      <TabMenu
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        option1="전체리뷰"
        option2="마이리뷰"
        />
        </div>

      <ReviewContainer reviews={reviews} edit={editButtonText} />

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
