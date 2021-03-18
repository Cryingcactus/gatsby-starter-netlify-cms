import React, { useState } from "react";
import Card from "./Card";
import styles from "./KeywordSection.module.css";

const KeywordSection = ({ section }) => {
    const { keywords, primaryColor, secondaryColor } = section;
    const [active, setActive] = useState(-1);
    return (
        <section className="nonPaddingSection">
            <div className={styles.container}>
                {keywords.map((card, i) => {
                    const className =
                        active === i
                            ? styles.active
                            : active !== -1
                            ? styles.hide
                            : "";
                    return (
                        <div className={className}>
                            <Card
                                key={i}
                                cardInfo={card}
                                clicked={() => {
                                    setActive(active !== i ? i : -1);
                                }}
                                primaryColor={primaryColor}
                                secondaryColor={secondaryColor}
                            />
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default KeywordSection;
