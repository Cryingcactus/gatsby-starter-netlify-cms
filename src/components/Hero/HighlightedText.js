import React, { useRef, useEffect } from "react";
import styles from "./Hero.module.css";

const HighlightedText = ({ highlightTitle, highlightColor }) => {
    const ref = useRef(false);
    useEffect(() => {
        if (ref.current) {
            ref.current.style = `--highlightColor: ${highlightColor};`;
        }
    }, [ref]);

    return (
        <span ref={ref} className={styles.highlighted}>
            {highlightTitle}
        </span>
    );
};

export default HighlightedText;
