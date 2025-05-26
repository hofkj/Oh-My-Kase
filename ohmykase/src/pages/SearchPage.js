import React, { useState } from "react";
import SearchBar from "../components/search/Search-Bar";
import Search from "../components/search/Search";
import SearchResult from "../components/search/SearchResult";
import NoSearchResults from "../components/search/NoSearchResults";

import styles from "../styles/pages/searchPage.module.css";

function SearchPage() {
  const [keyword, setKeyword] = useState(""); // 검색어
  const [searchResult, setSearchResult] = useState([]); // 검색 결과
  const [hasSearched, setHasSearched] = useState(false); // 검색 여부

  //  검색 실행 함수
  const handleSearch = (input) => {
    setKeyword(input);
    setHasSearched(true);

    // 예시: 샘플 데이터
    const sampleData = ["스시", "연어", "와규", "우니", "오마카세"];
    const filtered = sampleData.filter((item) => item.includes(input));

    setSearchResult(filtered);
  };

  return (
    <div className={styles.page}>
      <SearchBar onSearch={handleSearch} />
      {!hasSearched && <Search onHashtagClick={handleSearch} />}

      {/* 검색 결과가 있을 때 */}
      {hasSearched && searchResult.length > 0 && (
        <SearchResult data={searchResult} />
      )}

      {hasSearched && searchResult.length === 0 && (
        <NoSearchResults keyword={keyword} />
      )}
    </div>
  );
}

export default SearchPage;
