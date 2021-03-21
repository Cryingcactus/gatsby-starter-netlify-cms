import React from "react";
import styles from "./Loading.module.css";

const Loading = () => (
    <div className={styles.loading}>
        <span className={styles.dotPulse} />
    </div>
);

export default Loading;
