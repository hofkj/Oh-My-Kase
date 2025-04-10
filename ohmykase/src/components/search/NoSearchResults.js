import React, { useState } from "react";
import styles from "../../styles/pages/searchPage.module.css";

function NoSearchResults() {
    return (
        <div>
<div className={styles.noneContainer}>
        <div className={styles.none}>“두바이초콜릿” 검색 결과가 없습니다</div>
        <div className={styles.input}>정확한 키워드를 입력해주세요</div>
      </div>
        </div>
    )
}

export default NoSearchResults;