import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./KeywordSection.module.css";

const Card = ({ cardInfo, clicked, primaryColor, secondaryColor, active }) => {
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
                <div className={styles.rowContainer}>
                    <div className={styles.innerContainer}>
                        <div className={styles.left}>
                            <div className={styles.titleContainer}>
                                <p className="p3">{phrase}</p>
                                <h2>{keyword}</h2>
                            </div>
                            <div className={styles.copyContainer}>
                                <p className="p3">{copy}</p>
                            </div>
                        </div>

                        <div className={styles.keywordsCol}>
                            {values.map((value) => (
                                <p key={value.value} className="p3">
                                    {value.value}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div
                        className={styles.controlsContainer}
                        onClick={clicked}
                        role="button"
                        onKeyPress={() => {}}
                        tabIndex={0}
                        aria-label="Expand section"
                    >
                        <span className={styles.expand} />
                        <p className="p3">{active ? "collapse" : "expand"}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    cardInfo: PropTypes.objectOf({
        phrase: PropTypes.string,
        keyword: PropTypes.string,
        active: PropTypes.objectOf({
            copy: PropTypes.string,
            values: PropTypes.arrayOf([
                PropTypes.objectOf({ value: PropTypes.string }),
            ]),
        }),
    }).isRequired,
    clicked: PropTypes.func.isRequired,
    primaryColor: PropTypes.string.isRequired,
    secondaryColor: PropTypes.string.isRequired,
};

export default Card;
