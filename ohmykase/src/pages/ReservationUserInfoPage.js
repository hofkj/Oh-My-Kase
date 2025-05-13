import React from "react";
import TitleHeaderBar from "../components/common/TitleHeaderBar";
import Progress from "../components/common/Progress";
import ReservationInfo from "../components/common/ReservationInfo";
import AllergyInput from "../components/common/AllergyInput";
import { useNavigate } from "react-router-dom"; // useNavigate를 사용하여 라우팅 처리

import styles from "../styles/pages/reservationUserInfoPage.module.css";
import TwoBottomButton from "../components/common/TwoBottomButton";

function ReservationUserInfoPage() {
  const navigate = useNavigate();

  // 이전 버튼 클릭 시 RestaurantPage로 이동하는 함수
  const handleArrowClick = () => {
    navigate("/RestaurantPage");
  };

  return (
    <div className={styles.container}>
      <TitleHeaderBar title="예약하기" onArrowClick={handleArrowClick} />
      <div className={styles.info}>
        <Progress imgSrc="/images/icon/progress_red.png" />
        <ReservationInfo />
      </div>

      <div className={styles.inputContainer}>
        <AllergyInput title="본인의 알레르기 및 불호 음식을 적어주세요" />
        <AllergyInput title="본인의 알레르기 및 불호 음식을 적어주세요" />
        <AllergyInput title="본인의 알레르기 및 불호 음식을 적어주세요" />
        {/* <AllergyInput title="본인의 알레르기 및 불호 음식을 적어주세요" /> */}
        {/* <AllergyInput title="본인의 알레르기 및 불호 음식을 적어주세요" /> */}
      </div>

      <TwoBottomButton
        back="이전"
        next="다음"
        navigateToBack="/ReservationPage" 
        navigateToNext="/CompletionPage" // 다음 페이지 주소 넣기
      />
    </div>
  );
}

export default ReservationUserInfoPage;
