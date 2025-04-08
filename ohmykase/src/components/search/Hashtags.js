import React from "react";
import styles from '../../styles/search/hashtag.module.css';


function Hashtags(props) {
    return (
        <div className={styles.container}>{props.info}</div>
    )
}

export default Hashtags;