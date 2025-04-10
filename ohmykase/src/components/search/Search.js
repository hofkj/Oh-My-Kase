import React, { useState } from "react";
import Hashtag from "./Hashtags";
import Record from "./Record";
import styles from "../../styles/pages/searchPage.module.css";

function Search() {
    return(
        <>
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
        
        </>
    )
}

export default Search;