import React from "react";
import styles from "../../styles/search/searchBar.module.css";

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

function SearchBar() {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" })
  };
 


  return (
    <div className={styles.container}>
      <img src="/images/icon/header_arrow.png" className={styles.backBtn} onClick={handleClick} />
      
      <div className={styles.inputContainer}>
        <img src="../../images/icon/search_icon.png" className={styles.searchIcon}></img>
        <input placeholder="검색" type="text" className={styles.input}></input>
      </div>

      <button type="submit" className={styles.btn}>취소</button>
    </div>
  );
}

export default SearchBar;
