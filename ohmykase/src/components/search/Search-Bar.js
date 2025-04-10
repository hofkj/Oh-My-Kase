import React from "react";
import styles from "../../styles/search/searchBar.module.css";

function SearchBar() {
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <img src="../../images/icon/search_icon.png" className={styles.searchIcon}></img>
        <input placeholder="검색" type="text" className={styles.input}></input>
      </div>

      <button type="submit" className={styles.btn}>취소</button>
    </div>
  );
}

export default SearchBar;
