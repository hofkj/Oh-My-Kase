import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import styles from "../styles/pages/EditProfilePage.module.css";
import TitleHeaderBar from "../components/common/TitleHeaderBar";
import InputContainer from "../components/common/InputContainer";
import AllergyInput from "../components/common/AllergyInput";
import BottomButton from "../components/common/BottomButton";

function EditProfilePage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [allergyList, setAllergyList] = useState([]);

  const apiKey = "7VCEB37-69B4CKZ-QV2674N-BTZTWXE";

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/user/info/${apiKey}`, {
        withCredentials: true,
      })
      .then((res) => {
        setName(res.data.user_name);
        setNickname(res.data.user_nickname);
        const allergies = res.data.user_allergy ? res.data.user_allergy.split(",") : [];
        setAllergyList(allergies);
      })
      .catch((err) => {
        console.error("회원 정보 조회 실패:", err);
      });
  }, []);

  const handleSubmit = async () => {
    try {
      await axios.patch(
        `http://localhost:3000/api/user/update/${apiKey}`,
        {
          name,
          nickname,
          allergy: allergyList.join(","),
        },
        {
          withCredentials: true,
        }
      );
      alert("회원정보가 수정되었습니다!");
      navigate("/MyPage");
    } catch (err) {
      console.error("회원 정보 수정 실패:", err);
      alert("회원 정보 수정에 실패했습니다.");
    }
  };

  const handleArrowClick = () => {
    navigate("/MyPage");
  };

  return (
    <div className={styles.container}>
      <TitleHeaderBar title="프로필 수정" onArrowClick={handleArrowClick} />

      <div className={styles.inputContainer}>
        <InputContainer
          title="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputContainer
          title="아이디"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <AllergyInput
          title="알레르기 및 불호음식"
          allergyList={allergyList}
          setAllergyList={setAllergyList}
        />
      </div>

      <BottomButton text="확인" onClick={handleSubmit} />
    </div>
  );
}

export default EditProfilePage;