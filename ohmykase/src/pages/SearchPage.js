import React, { useState } from "react";
import SearchBar from "../components/search/Search-Bar";
import Search from "../components/search/Search";
import SearchResult from "../components/search/SearchResult";
import NoSearchResults from "../components/search/NoSearchResults";

import styles from "../styles/pages/searchPage.module.css";

function SearchPage() {
  return (
    <div className={styles.page}>
      <SearchBar />


{/* 기본 화면 */}
    <Search/>
       

      {/* 검색 결과 값이 있을 때 */}
      <SearchResult/>



      {/* 검색 결과 값이 없을 때 */}
      <NoSearchResults/>
      
    </div>
  );
}

export default SearchPage;
