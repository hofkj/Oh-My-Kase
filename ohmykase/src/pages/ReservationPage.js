import React from "react";
import TitleHeaderBar from "../components/common/TitleHeaderBar";
import ReservationInfo from "../components/common/ReservationInfo";
import InputContainer from "../components/common/InputContainer";
import BottomButton from "../components/common/BottomButton";  // 수정된 BottomButton 임포트
import Progress from "../components/common/Progress";
import PriceRangeInput from "../components/reservation/PriceRangeInput";
import FoodAmountSelector from "../components/reservation/FoodAmountSelector";
import { useNavigate } from "react-router-dom";

import styles from "../styles/pages/ReservationPage.module.css";

function ReservationPage() {
  const navigate = useNavigate();

  // 화살표 클릭 시 RestaurantPage로 이동하는 함수
  const handleArrowClick = () => {
    navigate("/RestaurantPage");
  };

  return (
    <div className={styles.container}>
      <TitleHeaderBar title="예약하기" onArrowClick={handleArrowClick} />
      <div className={styles.info}>
        <Progress imgSrc="/images/icon/progress.png" />
        <ReservationInfo />
      </div>

      <div className={styles.inputContainer}>
        <InputContainer title="예약자 본인의 이름을 적어주세요" />
        <InputContainer title="이메일을 적어주세요" />
        <PriceRangeInput label="원하는 가격대의 범위를 설정해주세요" />
        <FoodAmountSelector label="원하는 음식의 양을 설정해주세요" />
      </div>

      <BottomButton text="다음" navigateTo="/ReservationUserInfoPage" />
    </div>
  );
}

export default ReservationPage;
