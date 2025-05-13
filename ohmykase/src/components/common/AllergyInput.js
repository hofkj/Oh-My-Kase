import React, { useState } from "react";
import styles from "../../styles/common/allergyInput.module.css";

function AllergyInput(props) {
  const [inputValue, setInputValue] = useState(""); // 입력값 상태 관리
  const [allergyList, setAllergyList] = useState([]); // 입력된 알레르기 목록 상태 관리

  // 입력 값 업데이트
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // 알레르기 입력 추가
  const handleAddAllergy = () => {
    if (inputValue.trim() !== "") {
      setAllergyList([...allergyList, inputValue]);
      setInputValue(""); // 입력 필드 초기화
    }
  };

  // 알레르기 삭제
  const handleRemoveAllergy = (index) => {
    const updatedList = allergyList.filter((_, i) => i !== index);
    setAllergyList(updatedList);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.input}>
        <input
          value={inputValue}
          onChange={handleInputChange}
          placeholder="음식을 적어주세요"
        />
        <img
          src="/images/icon/enter_gray.png"
          className={styles.enter}
          onClick={handleAddAllergy}
          alt="Enter"
        />
      </div>

      <div className={styles.tagsContainer}>
        <div className={styles.allergyTags}>
          {allergyList.map((allergy, index) => (
            <div key={index} className={styles.tag}>
              {allergy}
              <img
                src="/images/icon/x.png"
                alt="Remove"
                className={styles.removeIcon}
                onClick={() => handleRemoveAllergy(index)} // "X" 클릭 시 해당 태그 삭제
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllergyInput;
