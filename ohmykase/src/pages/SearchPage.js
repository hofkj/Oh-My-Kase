import React, { useState } from "react";
import SearchBar from "../components/search/Search-Bar";
import Record from "../components/search/Record";
import styles from "../styles/pages/searchPage.module.css";
import Hashtag from "../components/search/Hashtags";
import ResultOmakase from "../components/search/ResultOmakase";

function SearchPage() {
  return (
    <div className={styles.page}>
      <SearchBar />


        {/* 첫번째 */}
      <div className={styles.hashtagContainer}>
        <Hashtag info="#초밥"/>
        <Hashtag info="#데이트"/>
        <Hashtag info="#가성비"/>
        <Hashtag info="#가족과"/>
        <Hashtag info="#장어"/>
      </div>

      <div className={styles.recentContainer}>
          <div className={styles.recent}>최근 검색 기록</div>
          <Record/>
          <Record/>
         <Record/>
         <Record/>
      </div>

      {/* 두번째 */}
      <div>
      <ResultOmakase/>
      <ResultOmakase/>
      <ResultOmakase/>

      </div>



      {/* 세번째 */}
      <div className={styles.noneContainer}>
        <div className={styles.none}>“두바이초콜릿” 검색 결과가 없습니다</div>
        <div className={styles.input}>정확한 키워드를 입력해주세요</div>
      </div>
      
    </div>
  );
}

export default SearchPage;
