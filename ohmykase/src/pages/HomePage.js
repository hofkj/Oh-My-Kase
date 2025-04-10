import React, { useState } from "react";
import Header from "../components/home/Header";
import Benner from "../components/home/Benner";
import LocationDropdown from "../components/home/LocationDropdown";
import MenuDropdown from "../components/home/MenuDropdown";
import Omakase from "../components/home/Omakase";
import RestaurantSwiper from "../components/home/RestaurantSwiper";
import Nav from '../components/home/Nav';

import styles from '../styles/pages/homePage.module.css';

import { useNavigate } from "react-router-dom";

function HomePage() {

    const navigate = useNavigate();
    

    //  선택한 위치와 메뉴 상태 관리
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [selectedMenu, setSelectedMenu] = useState(null);

    //  선택한 값이 있으면 새로운 `Omakase` 섹션 추가
    const hasSelection = selectedLocation || selectedMenu;
    const selectedOmakaseTitle = hasSelection 
        ? `${selectedLocation || "전체"} • ${selectedMenu || "전체"} 오마카세` 
        : null;

    return (
        <div className={styles.pageContainer}>
            <Header />
            <Benner />

            <div className={styles.dropdownContainer}>
                <LocationDropdown selected={selectedLocation} setSelected={setSelectedLocation} />
                <MenuDropdown selected={selectedMenu} setSelected={setSelectedMenu} />
            </div>

            {/*  드롭다운에서 선택된 값이 있으면 새로운 오마카세 섹션을 추가 */}
            {hasSelection && (
                <>
                    <Omakase 
                        title={selectedOmakaseTitle} 
                        subtitle="이용객들이 만족한 오마카세를 확인해보세요"
                    />
                    <RestaurantSwiper />
                </>
            )}

            <Omakase
                title="인기 오마카세"
                subtitle="이용객들이 만족한 오마카세를 확인해보세요"
            />
            <RestaurantSwiper />

            <Omakase
                title="혼자만의 시간을 보내고 싶은 때"
                subtitle="이용객들이 만족한 오마카세를 확인해보세요"
            />
            <RestaurantSwiper />

            <Nav />
        </div>
    );
}

export default HomePage;
