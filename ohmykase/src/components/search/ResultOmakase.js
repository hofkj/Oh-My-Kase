import React from "react";
import styles from "../../styles/search/ResultOmakase.module.css";

function ResultOmakase() {
    return (
        <div className="restaurant-card">
          <div className="restaurant-image">
            <img
              src="https://your-image-url.jpg" // 실제 이미지 URL로 변경
              alt="Restaurant"
            />
          </div>
          <div className="restaurant-info">
            <h2 className="restaurant-name">스시 도쿄 텐 도쿄점</h2>
            <p className="restaurant-rating">⭐ 5 도쿄도 시부야구</p>
            <div className="restaurant-images">
              <img src="https://your-image-url.jpg" alt="Sushi" />
              <img src="https://your-image-url.jpg" alt="Food" />
              <img src="https://your-image-url.jpg" alt="Sushi Roll" />
            </div>
          </div>
        </div>
      );
}

export default ResultOmakase;
