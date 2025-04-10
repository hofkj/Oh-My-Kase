import React, { useState } from "react";
import RestaurantImage from "../components/restaurant/RestaurantImage";
import RestaurantInfo from "../components/restaurant/RestaurantInfo";
import TagList from "../components/restaurant/TagList";
import TabMenu from "../components/restaurant/TabMenu";
import StoreInfo from "../components/restaurant/StoreInfo";
import ImageGallery from "../components/restaurant/ImageGallery";
import ReviewList from "../components/restaurant/ReviewList";
import Bottombar from "../components/restaurant/Bottombar";

import styles from "../styles/pages/restaurantPage.module.css";

export default function RestaurantPage() {
    const [activeTab, setActiveTab] = useState("store");

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
            "/images/restaurant/interior3.png"
        ]
    };

    const reviews = [
        {
            username: "여행다니는멋진나",
            userProfile: "/images/restaurant/profile_img.png",
            rating: 4.5,
            timeAgo: "3분 전",
            text: "친구들 3명과 함께 갔는데 너무 맛있게 잘 먹었어요. 친구 한 명은 새우 알레르기가 있고 다른 한 명은 복숭아 알레르기가 있었는데 잘 배려해주셔서 덕분에 좋은 시간 보낼 수 있었어요! 다음에 다시 올게요!",
            images: [
                "/images/restaurant/restaurant.png",
                "/images/restaurant/restaurant.png",
                "/images/restaurant/restaurant.png"
            ]
        },
        {
            username: "먹는게제일조와유",
            userProfile: "/images/restaurant/profile_img.png",
            rating: 4,
            timeAgo: "13일 전",
            text: "초밥이 정말 신선하고 맛있었어요! 가격대비 가성비 최고! 다만 웨이팅이 길어서 예약하고 가는 걸 추천합니다.",
            images: []
        },
        {
            username: "먹는게제일조와유",
            userProfile: "/images/restaurant/profile_img.png",
            rating: 4,
            timeAgo: "13일 전",
            text: "초밥이 정말 신선하고 맛있었어요! 가격대비 가성비 최고! 다만 웨이팅이 길어서 예약하고 가는 걸 추천합니다.",
            images: []
        },
        {
            username: "먹는게제일조와유",
            userProfile: "/images/restaurant/profile_img.png",
            rating: 4,
            timeAgo: "13일 전",
            text: "초밥이 정말 신선하고 맛있었어요! 가격대비 가성비 최고! 다만 웨이팅이 길어서 예약하고 가는 걸 추천합니다.",
            images: []
        }
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

            <Bottombar />
        </div>
    );
}
