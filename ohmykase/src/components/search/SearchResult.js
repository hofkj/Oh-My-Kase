import React, { useEffect, useState } from "react";
import ResultOmakase from "./ResultOmakase";
import styles from "../../styles/pages/searchPage.module.css";
import { Link } from "react-router-dom";

function SearchResult({ data, keyword }) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>“{keyword}” 검색 결과입니다</div>

      <div className={styles.ResultOmakaseContainer}>
        {data.map((restaurant, index) => (
          <Link to="/RestaurantPage" state={{ restaurant }}>
            <ResultOmakase restaurant={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SearchResult;
