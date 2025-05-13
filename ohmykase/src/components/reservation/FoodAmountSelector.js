import React, { useState } from "react";
import styles from "../../styles/reservation/FoodAmountSelector.module.css"; // CSS 임포트

function FoodAmountSelector({ label }) {

  return (
    <div className={styles.foodAmountContainer}>
      <label>{label}</label>
      <div className={styles.foodAmount}>
        <div className={styles.radioGroup}>매우 적게</div>
        <div className={styles.radio}></div>
        <div className={styles.radio}></div>
        <div className={styles.radio}></div>
        <div className={styles.radio}></div>
        <div className={styles.radio}></div>
        <div className={styles.foodAmount}>매우 많이</div>
      </div>
    </div>
  );
}

export default FoodAmountSelector;
