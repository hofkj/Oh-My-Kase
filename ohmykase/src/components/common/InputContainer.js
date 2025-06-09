import React from "react";
import styles from "../../styles/common/inputContainer.module.css";

function InputContainer({ title, value, setValue }) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.input}>
        <input
          placeholder={title}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
}

export default InputContainer;
