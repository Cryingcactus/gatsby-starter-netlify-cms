import React, { useState } from "react";
import Card from "./Card";
import styles from "./KeywordSection.module.css";

const KeywordSection = ({ section }) => {
    const [active, setActive] = useState(-1);
    return (
        <section className="nonPaddingSection">
            <div className={styles.container}>
                {section.map((card, i) => (
                    <div
                        className={
                            active === i
                                ? styles.active
                                : active !== -1
                                ? styles.hide
                                : ""
                        }
                    >
                        <Card
                            key={i}
                            cardInfo={card}
                            clicked={() => {
                                setActive(active !== i ? i : -1);
                            }}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default KeywordSection;
