import React from "react";
import styles from "../../styles/search/ResultOmakase.module.css";

function ResultOmakase() {
    return (
      <div className={styles.container}>
        <div className={styles.restaurantCard}>
         <img src="/images/restaurant/interior1.png" className={styles.img}/>
          <img src="/images/restaurant/interior2.png" className={styles.img}/>
          <img src="/images/restaurant/interior3.png" className={styles.img}/>
        </div>

        <div className={styles.textContainer}>
          <div className={styles.name}>만텐 스시 마루노우치점</div>
          <div className={styles.infoContainer}>
            <img src="/images/icon/star.png" className={styles.star}/>
            <div className={styles.mark}>4.5</div>
            <div className={styles.location}>도쿄도 치요다구</div>
          </div>
        </div>
        </div>
      );
}

export default ResultOmakase;
