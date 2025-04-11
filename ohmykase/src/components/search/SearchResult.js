import React, { useEffect, useState } from "react";
import ResultOmakase from "./ResultOmakase";
import styles from "../../styles/pages/searchPage.module.css";

function SearchResult() {
  const [restaurants, setRestaurants] = useState([]);

  // JSON 파일 불러오기
  useEffect(() => {
    fetch("/data/omakase.json")
      .then((response) => response.json())
      .then((data) => setRestaurants(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>“스시” 검색 결과입니다</div>

        <div className={styles.ResultOmakaseContainer}>
          {/* restaurants 배열을 순회하여 ResultOmakase 컴포넌트에 데이터 전달 */}
          {restaurants.map((restaurant, index) => (
            <ResultOmakase key={index} restaurant={restaurant} />
          ))}
        </div>
      </div>
    </>
  );
}

export default SearchResult;
