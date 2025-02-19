import React from "react";
import Header from "../components/home/Header";
import Benner from "../components/home/Benner";
import LocationDropdown from "../components/home/LocationDropdown";
import MenuDropdown from "../components/home/MenuDropdown";
import Omakase from "../components/home/Omakase";
import RestaurantSwiper from "../components/home/RestaurantSwiper";
import Nav from '../components/home/Nav';

import styles from '../styles/pages/homePage.module.css';

function HomePage() {
    return (
        <div className={styles.pageContainer} >
            <Header />
            <Benner />

            <div className={styles.dropdownContainer}>
                <LocationDropdown />
                <MenuDropdown />
            </div>

            <Omakase />
            <RestaurantSwiper />

            <Omakase />
            <RestaurantSwiper />
        

            <Nav />
        </div>
    );
}

export default HomePage;
