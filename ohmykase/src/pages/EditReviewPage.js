import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/pages/ReviewPage.module.css";
import TitleHeaderBar from "../components/common/TitleHeaderBar";
import BottomButton from "../components/common/BottomButton";

function EditReviewPage() {
  const navigate = useNavigate();
  const handleArrowClick = () => {
    navigate("/NavReviewPage");
  };

 const [rating, setRating] = useState(0); // 평점
  const [reviewText, setReviewText] = useState(""); // 리뷰 텍스트
  const [imageCount, setImageCount] = useState(0); // 이미지 개수
  const [serviceRating, setServiceRating] = useState(""); // 서비스 평점
  const [images, setImages] = useState([]); // base64 저장
  const fileInputRef = useRef(null);

  const handleImageAdd = () => {
    if (images.length < 4) fileInputRef.current.click();
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = [...images];

    files.forEach((file) => {
      if (newImages.length < 4) {
        const reader = new FileReader();
        reader.onloadend = () => {
          newImages.push(reader.result);
          setImages([...newImages]);
        };
        reader.readAsDataURL(file);
      }
    });

    e.target.value = "";
  };
  const handleRatingClick = (value) => {
    setRating(value);
  };

  const handleServiceRating = (value) => {
    setServiceRating(value);
  };

  const handleReviewTextChange = (e) => {
    setReviewText(e.target.value);
  };

  return (
    <div className={styles.container}>
      <TitleHeaderBar title="리뷰 작성" onArrowClick={handleArrowClick} />

      <div className={styles.scrollContainer}>
        <div className={styles.restaurantInfo}>
          <img
            src="/images/restaurant/interior3.png"
            alt="Restaurant"
            className={styles.restaurantImage}
          />
          <div className={styles.infoContainer}>
            <div className={styles.reservationDetails}>
              2025.03.17 (월) 오전 11시 / 3명
            </div>
            <div className={styles.restaurantName}>규베이 긴자 본점</div>
            <div className={styles.priceRange}>¥13,000 ~ ¥60,000</div>
          </div>
        </div>

        {/* 평점 */}
        <div className={styles.ratingContainer}>
          <div>전체적인 평점을 남겨주세요</div>
          <div className={styles.stars}>
            {[1, 2, 3, 4, 5].map((value) => (
              <img
                key={value}
                src={
                  value <= rating
                    ? "/images/icon/star.png"
                    : "/images/icon/star_gray.png"
                }
                alt="Star"
                className={styles.starIcon}
                onClick={() => handleRatingClick(value)}
              />
            ))}
            <span className={styles.ratingValue}>{rating}</span>
          </div>
        </div>

        {/* 서비스 만족도 */}
        <div className={styles.serviceRating}>
          <div>제공된 서비스는 만족스러우셨나요?</div>
          <div className={styles.serviceOptions}>
            <button
              className={`${styles.button} ${
                serviceRating === "불만족" ? styles.selected : ""
              }`}
              onClick={() => handleServiceRating("불만족")}
            >
              불만족
            </button>
            <button
              className={`${styles.button} ${
                serviceRating === "보통" ? styles.selected : ""
              }`}
              onClick={() => handleServiceRating("보통")}
            >
              보통
            </button>
            <button
              className={`${styles.button} ${
                serviceRating === "만족" ? styles.selected : ""
              }`}
              onClick={() => handleServiceRating("만족")}
            >
              만족
            </button>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
          <div className={styles.imageGrid}>
            {[0, 1, 2, 3].map((index) => (
              <div key={index} className={styles.imageBox}>
                {images[index] ? (
                  <img
                    src={images[index]}
                    alt={`uploaded-${index}`}
                    className={styles.imageThumbnail}
                  />
                ) : index === images.length ? (
                  <button
                    className={styles.addImageButton}
                    onClick={handleImageAdd}
                  >
                    <span className={styles.plus}>+</span>사진 추가하기
                  </button>
                ) : null}
              </div>
            ))}
          </div>
          <p className={styles.caption}>*사진 4장 업로드 가능</p>
        </div>

        {/* 리뷰 작성 */}
        <div className={styles.reviewTextContainer}>
          <textarea
            value={reviewText}
            onChange={handleReviewTextChange}
            placeholder="리뷰를 작성해주세요. (최대 300자 작성 가능)"
            maxLength="300"
            className={styles.reviewTextArea}
          />
        </div>
      </div>

      {/* 업로드 버튼 */}
      <BottomButton text="업로드" navigateTo="/NavReviewPage" />
    </div>
  );
}

export default EditReviewPage;
