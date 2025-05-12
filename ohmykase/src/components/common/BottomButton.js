import React from "react";
import styles from "../../styles/common/bottomButton.module.css";
import { useNavigate } from "react-router-dom";

function BottomButton({ text, navigateTo }) {
  const navigate = useNavigate();

  // 버튼 클릭 시 지정된 경로로 이동
  const handleClick = () => {
    navigate(navigateTo); // navigateTo로 이동
    window.scrollTo({ top: 0, behavior: "smooth" }); // 페이지 맨 위로 스크롤
  };

  return (
    <div className={styles.buttonContainer}>
      <button className={styles.btn} onClick={handleClick}>
        {text}
      </button>
    </div>
  );
}

export default BottomButton;
