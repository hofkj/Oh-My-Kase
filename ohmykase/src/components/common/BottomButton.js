import React from "react";
import styles from "../../styles/common/bottomButton.module.css";

function BottomButton(props) {
    return (
        <div className={styles.buttonContainer}>
            <button className={styles.btn}>{props.text}</button>
        </div>
    )
}

export default BottomButton;