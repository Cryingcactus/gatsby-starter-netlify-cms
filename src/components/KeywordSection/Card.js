import React from "react";
import styles from "./KeywordSection.module.css";

const Card = ({ cardInfo, clicked }) => {
    const { phrase, keyword, active: moreInfo } = cardInfo;
    const { copy, values } = moreInfo;
    return (
        <div className={styles.cardContainer}>
            <div className={styles.col}>
                <div className={styles.titleContainer}>
                    <h4>{phrase}</h4>
                    <h2>{keyword}</h2>
                </div>
                <div className={styles.copyContainer}>
                    <p className="p3">{copy}</p>
                </div>
                <div className={styles.controlsContainer} onClick={clicked}>
                    <span className={styles.expand} />
                    <p className="p3">expand</p>
                </div>
            </div>
            <div className={styles.keywordsCol}>
                {values.map((value, i) => (
                    <p key={i} className="p3">
                        {value.value}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Card;
