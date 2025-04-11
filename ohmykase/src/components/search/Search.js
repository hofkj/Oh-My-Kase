import React, { useState, useEffect } from "react";
import Hashtag from "./Hashtags";
import Record from "./Record";
import styles from "../../styles/pages/searchPage.module.css";

function Search({ onHashtagClick }) {
  const [hashtags, setHashtags] = useState([]);

  // 랜덤으로 해시태그 5개 선택하는 함수
  const getRandomHashtags = (arr, num) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  useEffect(() => {
    // JSON 파일 불러오기
    fetch("/data/hashtag.json")
      .then((response) => response.json())
      .then((data) => {
        setHashtags(getRandomHashtags(data.hashtags, 5));
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <>
      {/* 해시태그 목록 동적으로 렌더링 */}
      <div className={styles.hashtagContainer}>
        {hashtags.map((hashtag, index) => (
          <div key={index} onClick={() => onHashtagClick(hashtag)}>
            <Hashtag info={hashtag} />
          </div>
        ))}
      </div>

      <div className={styles.recentContainer}>
        <div className={styles.recent}>최근 검색 기록</div>
        <Record />
        <Record />
        <Record />
        <Record />
      </div>
    </>
  );
}

export default Search;
