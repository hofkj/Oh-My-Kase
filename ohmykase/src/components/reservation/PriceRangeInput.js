import React, { useState } from "react";
import styles from "../../styles/reservation/PriceRangeInput.module.css"; 

function PriceRangeInput({ label }) {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  return (
    <div className={styles.priceRangeContainer}>
      <label>{label}</label>
      <div className={styles.priceRangeInputs}>
        <input
          type="number"
          value={minPrice}
          onChange={handleMinPriceChange}
          placeholder="최소 가격"
        />
        <span>~</span>
        <input
          type="number"
          value={maxPrice}
          onChange={handleMaxPriceChange}
          placeholder="최대 가격"
        />
      </div>
    </div>
  );
}

export default PriceRangeInput;
