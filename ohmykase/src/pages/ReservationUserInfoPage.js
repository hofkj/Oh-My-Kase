import React, { useEffect, useState } from "react";
import TitleHeaderBar from "../components/common/TitleHeaderBar";
import Progress from "../components/common/Progress";
import ReservationInfo from "../components/common/ReservationInfo";
import AllergyInput from "../components/common/AllergyInput";
import TwoBottomButton from "../components/common/TwoBottomButton";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import styles from "../styles/pages/reservationUserInfoPage.module.css";

const apiKey = "7VCEB37-69B4CKZ-QV2674N-BTZTWXE";

function ReservationUserInfoPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const reservationId = location.state?.reservationId;

  const [peopleNum, setPeopleNum] = useState(0);
  const [allergyLists, setAllergyLists] = useState([]);

  useEffect(() => {
    if (!reservationId) return;

    axios
      .get(`http://localhost:3000/api/reservation/info/${apiKey}/${reservationId}`)
      .then((res) => {
        const { people_num } = res.data;
        const number = parseInt(people_num.replace("명", ""));
        setPeopleNum(number);
        setAllergyLists(Array(number).fill([]));
      })
      .catch((err) => {
        console.error("인원 수 불러오기 실패:", err);
      });
  }, [reservationId]);

  const handleArrowClick = () => {
    navigate("/ReservationPage");
  };

  const handleNextClick = async () => {
    const formatted = allergyLists.map(
      (list) => `[${list.join(", ")}]`
    ).join("");

    try {
      await axios.post(
        `http://localhost:3000/api/reservation/step3/${apiKey}/${reservationId}`,
        { input_allergy: formatted },
        { withCredentials: true }
      );
      navigate("/CompletionPage");
    } catch (err) {
      console.error("알레르기 정보 저장 실패:", err);
      alert("알레르기 정보를 저장하는 데 실패했습니다.");
    }
  };

  return (
    <div className={styles.container}>
      <TitleHeaderBar title="예약하기" onArrowClick={handleArrowClick} />
      <div className={styles.info}>
        <Progress imgSrc="/images/icon/progress_red.png" />
        <ReservationInfo reservationId={reservationId} />
      </div>

      <div className={styles.inputContainer}>
        {Array.from({ length: peopleNum }).map((_, index) => (
          <AllergyInput
            key={index}
            title={`예약자 ${index + 1}의 알레르기 및 불호 음식`}
            allergyList={allergyLists[index] || []}
            setAllergyList={(newList) => {
              const updatedLists = [...allergyLists];
              updatedLists[index] = newList;
              setAllergyLists(updatedLists);
            }}
          />
        ))}
      </div>

      <TwoBottomButton
        back="이전"
        next="다음"
        navigateToBack="/ReservationPage"
        onNextClick={handleNextClick}
      />
    </div>
  );
}

export default ReservationUserInfoPage;
