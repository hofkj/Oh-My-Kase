import React, { useState, useEffect } from "react";
import Hashtag from "./Hashtags";
import Record from "./Record";
import styles from "../../styles/pages/searchPage.module.css";
import axios from "axios";

function Search({ onHashtagClick }) {
  const [hashtags, setHashtags] = useState([]);
  const apiKey = "7VCEB37-69B4CKZ-QV2674N-BTZTWXE";

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/search/random_tag/${apiKey}`)
      .then((res) => {
        const tagNames = res.data.map((tag) => tag.tag_name); // tag_name만 추출
        setHashtags(tagNames);
      })
      .catch((error) => {
        console.error("해시태그 불러오기 실패:", error);
      });
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
