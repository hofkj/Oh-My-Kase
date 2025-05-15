import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/pages/SignupPage.module.css";
import TitleHeaderBar from "../components/common/TitleHeaderBar";
import Progress from "../components/common/Progress";
import BottomButton from "../components/common/BottomButton";

function SignupPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isCodeSent, setIsCodeSent] = useState(false);

  const handleArrowClick = () => {
    navigate("/LoginPage");
  };

  const handleNextClick = () => {
    navigate("/PasswordPage");
  };

  const handleEmailChange = (e) => {
    const emailInput = e.target.value;
    setEmail(emailInput);

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    setIsEmailValid(emailRegex.test(emailInput));
  };

  const handleSendVerification = () => {
    setIsCodeSent(true);
    console.log("인증번호 발송:", email);
  };

  return (
    <div className={styles.container}>
      <TitleHeaderBar title="회원가입" onArrowClick={handleArrowClick} />
      <Progress imgSrc="/images/icon/progress.png" />

      <form className={styles.form}>
        <div className={styles.InputContainer}>
          <div className={styles.title}>이름을 입력해주세요</div>
          <div className={styles.input}>
            <input placeholder="유나현" />
          </div>
        </div>

        <div className={styles.email}>
          <div className={styles.InputContainer}>
            <div className={styles.title}>이메일을 입력해주세요</div>
            <div className={styles.input}>
              <input
                type="email"
                placeholder="youmenow@gmail.com"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
          </div>

          <button
            className={`${styles.emailBtn} ${isEmailValid ? styles.activeBtn : ""}`}
            onClick={handleSendVerification}
            disabled={!isEmailValid || isCodeSent}
          >
            {isCodeSent ? "인증번호 발송됨" : "인증번호 받기"}
          </button>
        </div>

        <div className={styles.InputContainer}>
          <div className={styles.title}>인증번호를 입력해주세요</div>
          <div className={styles.input}>
            <input placeholder="인증번호를 입력해주세요" />
          </div>
        </div>
      </form>

      <BottomButton text="다음" navigateTo="/PasswordPage" />
    </div>
  );
}

export default SignupPage;
