import React, { useState } from "react";
import ResultOmakase from "./ResultOmakase";
import styles from "../../styles/pages/searchPage.module.css";

function SearchResult() {
  return (
    <>
      {/* 두번째 */}
      <div className={styles.container}>
        <div className={styles.title}>“스시” 검색 결과입니다</div>

        <div className={styles.ResultOmakaseContainer}>
          <ResultOmakase />
          <ResultOmakase />
          <ResultOmakase />
        </div>
      </div>
    </>
  );
}

export default SearchResult;
