import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "../styles/pages/EditProfilePage.module.css";
import TitleHeaderBar from "../components/common/TitleHeaderBar";
import InputContainer from "../components/common/InputContainer";
import AllergyInput from "../components/common/AllergyInput";
import BottomButton from "../components/common/BottomButton";

function EditProfilePage() {
  const navigate = useNavigate();

  // 이전 버튼 클릭 시 RestaurantPage로 이동하는 함수
  const handleArrowClick = () => {
    navigate("/MyPage");
  };

  return (
    <div className={styles.container}>
      <TitleHeaderBar title="프로필 수정" onArrowClick={handleArrowClick} />

      <div className={styles.inputContainer}>
        <InputContainer title="닉네임" />
        <InputContainer title="이메일" />
        <AllergyInput title="알레르기 및 불호음식" />
      </div>

      <BottomButton text="확인" navigateTo="/Mypage" />
    </div>
  );
}

export default EditProfilePage;
