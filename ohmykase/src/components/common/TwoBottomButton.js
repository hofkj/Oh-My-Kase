import React from "react";
import styles from "../../styles/common/TwoBottomButton.module.css";
import { useNavigate } from "react-router-dom";

function TwoBottomButton({ back, next, navigateToBack, navigateToNext }) {
  const navigate = useNavigate();

  // 이전 버튼 클릭 시 처리
  const handleBackClick = () => {
    if (navigateToBack) {
      navigate(navigateToBack); // navigateToBack으로 이동
    }
  };

  // 다음 버튼 클릭 시 처리
  const handleNextClick = () => {
    if (navigateToNext) {
      navigate(navigateToNext); // navigateToNext로 이동
    }
  };

  return (
    <div className={styles.buttonContainer}>
      <button className={styles.backBtn} onClick={handleBackClick}>
        {back}
      </button>
      <button className={styles.nextBtn} onClick={handleNextClick}>
        {next}
      </button>
    </div>
  );
}

export default TwoBottomButton;
