import React from "react";
import styles from "../../styles/common/inputContainer.module.css";

function InputContainer(props) {
    return (
        <div className={styles.container}>
            <div className={styles.title}>{props.title}</div>
            <div className={styles.input}><input placeholder="input"/></div>
        </div>
    )
}

export default InputContainer;