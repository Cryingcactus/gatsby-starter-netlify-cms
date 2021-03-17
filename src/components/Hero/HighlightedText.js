import React from "react";
import styles from "./Hero.module.css";

const HighlightedText = ({ highlightTitle, highlightColor }) => {
    let highlightedWords = highlightTitle.split(" ");
    let highlightedTitle = highlightedWords.map((word, i) => {
        return (
            <span
                key={i}
                style={{
                    backgroundImage: `linear-gradient(${highlightColor}, ${highlightColor})`,
                }}
            >
                {word}{" "}
            </span>
        );
    });
    return <div className={styles.highlighted}>{highlightedTitle}</div>;
};

export default HighlightedText;
