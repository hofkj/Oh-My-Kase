"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import styles from "../styles/pages/LoginPage.module.css"

function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleLogin = () => {
    // 로그인 로직 구현
    // console.log("로그인 시도:", { email, password })
    navigate("/");

  }

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src="/images/icon/logo.png" alt="Oh! my Kase" className={styles.logo} />
      </div>

      <div className={styles.formContainer}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>이메일</label>
          <input
            type="email"
            className={styles.input}
            placeholder="이메일을 작성해주세요"
            value={email}
            onChange={handleEmailChange}
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>비밀번호</label>
          <div className={styles.passwordInputContainer}>
            <input
              type={showPassword ? "text" : "password"}
              className={styles.input}
              placeholder="비밀번호를 작성해주세요"
              value={password}
              onChange={handlePasswordChange}
            />
            <button type="button" className={styles.eyeButton} onClick={togglePasswordVisibility}>
              {showPassword ? (
                <img src="/images/icon/eye-open.png" alt="비밀번호 숨기기" />
              ) : (
                <img src="/images/icon/eye-closed.png" alt="비밀번호 보기" />
              )}
            </button>
          </div>
        </div>

        <div className={styles.forgotPasswordContainer}>
          <button className={styles.forgotPasswordButton}>아이디 찾기</button>
          <span className={styles.divider}>|</span>
          <button className={styles.forgotPasswordButton}>비밀번호 찾기</button>
        </div>

        <div className={styles.signupContainer}>
          <div className={styles.signupText}>
            <img src="/images/icon/logo.png" className={styles.brandLogo}/>
            <span> 가 처음이라면?</span>
          </div>
          <Link to="/SignupPage" className={styles.signupLink}>
            <span>회원가입 하러 가기</span>
            <img src="/images/icon/arrow_red.png"
              className={styles.arrowIcon}
            />
          </Link>
        </div>

        <button className={styles.loginButton} onClick={handleLogin}>
          로그인
        </button>
      </div>
    </div>
  )
}

export default LoginPage
