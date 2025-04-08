import React from "react";
import styles from "../styles/bottomButton.module.css";

function BottomButton(props) {
    return (
        <div className={styles.buttonContainer}>
            <button>{props.text}</button>
        </div>
    )
}

export default BottomButton;