import React, { useEffect, useState } from "react";
import SearchBar from "../components/search/Search-Bar";
import Search from "../components/search/Search";
import SearchResult from "../components/search/SearchResult";
import NoSearchResults from "../components/search/NoSearchResults";
import styles from "../styles/pages/searchPage.module.css";

function SearchPage() {
  const [keyword, setKeyword] = useState(""); // 검색어
  const [hasSearched, setHasSearched] = useState(false); // 검색 여부
  const [restaurantData, setRestaurantData] = useState([]); // 전체 데이터
  const [filteredData, setFilteredData] = useState([]); // 필터링된 검색 결과

  // JSON 불러오기
  useEffect(() => {
    fetch("/data/omakase.json")
      .then((res) => res.json())
      .then((data) => setRestaurantData(data))
      .catch((err) => console.error("데이터 불러오기 실패:", err));
  }, []);

  const handleSearch = (input) => {
    setKeyword(input);
    setHasSearched(true);

    const lowerInput = input.toLowerCase();

    const filtered = restaurantData.filter((item) => {
      const valuesToCheck = [
        item.name,
        item.ownerMessage,
        item.address,
        (item.tags || []).join(" "),
        (item.menuCategories || []).join(" "),
        (item.locationCategories || []).join(" "),
      ];

      return valuesToCheck.some((value) =>
        value.toLowerCase().includes(lowerInput)
      );
    });

    setFilteredData(filtered);
  };

  return (
    <div className={styles.page}>
      <SearchBar onSearch={handleSearch} />
      {!hasSearched && <Search onHashtagClick={handleSearch} />}

      {hasSearched && filteredData.length > 0 && (
        <SearchResult data={filteredData} keyword={keyword} />
      )}

      {hasSearched && filteredData.length === 0 && (
        <NoSearchResults keyword={keyword} />
      )}
    </div>
  );
}

export default SearchPage;
