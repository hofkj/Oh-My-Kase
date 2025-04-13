import React, { useState } from "react";
import TitleHeaderBar from "../components/common/TitleHeaderBar";
import ReservationInfo from "../components/common/ReservationInfo";
import InputContainer from "../components/common/InputContainer";
import BottomButton from "../components/common/BottomButton";

import styles from "../styles/pages/ReservationPage.module.css";


function ReservationPage() {
  return (
    <div>
      {/* <TitleHeaderBar title="예약하기"/>

      <ReservationInfo/> */}



      <div className={styles.inputContainer}>
        <InputContainer title="예약자 본인의 이름을 적어주세요"/>
        <InputContainer title="이메일을 적어주세요"/>
      </div>


        <BottomButton text="다음"/>
    </div>
  );
}

export default ReservationPage;
