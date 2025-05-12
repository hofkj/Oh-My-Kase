import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate를 import
import styles from "../../styles/common/titleHeaderBar.module.css";

function TitleHeaderBar({ title, onArrowClick }) {
  const navigate = useNavigate(); // useNavigate 훅을 사용하여 페이지 이동

  // 이미지 클릭 시 페이지 이동 처리
  const handleClick = () => {
    if (onArrowClick) {
      onArrowClick(); // props로 전달된 이동 함수 호출
    } else {
      navigate("/"); // 기본적으로 "/"로 이동
    }
  };

  return (
    <div className={styles.container}>
      <img 
        src="/images/icon/header_arrow.png" 
        className={styles.arrow} 
        onClick={handleClick} // 클릭 시 handleClick 호출
        alt="Back Arrow"
      />
      <div className={styles.title}>{title}</div>
    </div>
  );
}

export default TitleHeaderBar;
