import React, { useRef, useEffect } from "react";
import styles from "./KeywordSection.module.css";

const Card = ({ cardInfo, clicked, primaryColor, secondaryColor }) => {
    const { phrase, keyword, active: moreInfo } = cardInfo;
    const { copy, values } = moreInfo;

    const ref = useRef(false);
    useEffect(() => {
        if (ref.current) {
            ref.current.style = `--primary: ${primaryColor}; --secondary: ${secondaryColor}`;
        }
    }, [ref]);

    return (
        <div className={styles.cardContainer} ref={ref}>
            <div className={styles.col}>
                <div className={styles.titleContainer}>
                    <p className="p3">{phrase}</p>
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
