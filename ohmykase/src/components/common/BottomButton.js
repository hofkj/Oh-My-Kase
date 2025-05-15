import React from "react";
import styles from "../../styles/common/bottomButton.module.css";
import { useNavigate } from "react-router-dom";

function BottomButton({ text, navigateTo, onClick }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick(); // onClick이 존재하면 호출
    } else if (navigateTo) {
      navigate(navigateTo); // navigateTo가 있을 경우 페이지 이동
    }
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
